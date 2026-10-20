// Original soundtrack + sound design for the film, synthesised from scratch
// (no samples, no third-party audio). Every cue is read from src/timeline.json,
// the same file the visuals use, so picture and sound stay in sync.
//
//   node scripts/generate-audio.mjs  ->  public/audio/soundtrack.wav
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const timeline = JSON.parse(readFileSync(join(root, "src/timeline.json"), "utf8"));

const SR = 48000;
const DURATION = timeline.duration;
const N = Math.ceil(SR * DURATION);
const BEAT = 60 / timeline.bpm;

// Buses (stereo). "send" feeds the reverb.
const bus = () => ({ L: new Float32Array(N), R: new Float32Array(N) });
const music = bus();
const sfx = bus();
const send = bus();

// ---------- utilities ----------
let seed = 0x9e3779b9;
const rnd = () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const noise = () => rnd() * 2 - 1;
const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smooth = (a, b, x) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

const add = (b, i, l, r, sendAmt = 0) => {
  if (i < 0 || i >= N) return;
  b.L[i] += l;
  b.R[i] += r;
  if (sendAmt) {
    send.L[i] += l * sendAmt;
    send.R[i] += r * sendAmt;
  }
};
const panGains = (p) => [Math.cos(((p + 1) * Math.PI) / 4), Math.sin(((p + 1) * Math.PI) / 4)];

/** RBJ biquad, coefficients recomputed on demand. */
class Biquad {
  constructor() {
    this.x1 = this.x2 = this.y1 = this.y2 = 0;
  }
  set(type, freq, q) {
    const w = (2 * Math.PI * Math.min(freq, SR * 0.45)) / SR;
    const cos = Math.cos(w);
    const alpha = Math.sin(w) / (2 * q);
    let b0, b1, b2;
    if (type === "lp") [b0, b1, b2] = [(1 - cos) / 2, 1 - cos, (1 - cos) / 2];
    else if (type === "hp") [b0, b1, b2] = [(1 + cos) / 2, -(1 + cos), (1 + cos) / 2];
    else [b0, b1, b2] = [alpha, 0, -alpha]; // band-pass
    const a0 = 1 + alpha;
    this.b0 = b0 / a0;
    this.b1 = b1 / a0;
    this.b2 = b2 / a0;
    this.a1 = (-2 * cos) / a0;
    this.a2 = (1 - alpha) / a0;
    return this;
  }
  run(x) {
    const y = this.b0 * x + this.b1 * this.x1 + this.b2 * this.x2 - this.a1 * this.y1 - this.a2 * this.y2;
    this.x2 = this.x1;
    this.x1 = x;
    this.y2 = this.y1;
    this.y1 = y;
    return y;
  }
}

// ---------- music ----------
// Energy curve of the film (0..1): sparse boot, steady build, peak at 50–56s, quiet ending.
const energy = (t) => {
  if (t < 3) return 0.12;
  if (t < 15) return 0.35 + 0.1 * smooth(7, 15, t);
  if (t < 34) return 0.5 + 0.15 * smooth(15, 34, t);
  if (t < 47) return 0.7;
  if (t < 50) return 0.7 + 0.3 * smooth(47, 50, t);
  if (t < 55.6) return 1;
  if (t < 56.2) return 0.15;
  return 0.32 * (1 - smooth(64.5, 67, t));
};

// A-minor colour progression, two bars per chord.
const CHORDS = [
  [45, 52, 55, 59, 60], // Am9
  [41, 48, 52, 57, 60], // Fmaj7
  [48, 55, 59, 62, 64], // Cmaj9
  [43, 50, 52, 59, 62], // G6
];
const chordAt = (t) => CHORDS[Math.floor(Math.max(0, t - 3) / (BEAT * 8)) % CHORDS.length];

// Pad: detuned saws through a time-varying low-pass. Rendered per chord block.
{
  const raw = bus();
  const blockLen = BEAT * 8;
  for (let start = 3; start < DURATION; start += blockLen) {
    const isEnd = start >= 56;
    const chord = isEnd ? CHORDS[0] : chordAt(start + 0.01);
    const len = isEnd ? DURATION - start : blockLen;
    const s0 = Math.floor(start * SR);
    const total = Math.floor((len + 1.2) * SR);
    chord.forEach((m, vi) => {
      [-0.11, 0, 0.09].forEach((det, di) => {
        const f = midi(m + det);
        let ph = rnd();
        const pan = (vi / (chord.length - 1)) * 1.2 - 0.6 + (di - 1) * 0.2;
        const [gl, gr] = panGains(pan);
        for (let k = 0; k < total; k++) {
          const tl = k / SR;
          const env = Math.min(1, tl / 1.1) * (tl > len ? Math.max(0, 1 - (tl - len) / 1.2) : 1);
          ph += f / SR;
          ph -= Math.floor(ph);
          const v = (2 * ph - 1) * env * 0.03;
          add(raw, s0 + k, v * gl, v * gr);
        }
      });
    });
  }
  const fl = [new Biquad(), new Biquad()];
  const fr = [new Biquad(), new Biquad()];
  for (let i = 0; i < N; i++) {
    const t = i / SR;
    if (i % 64 === 0) {
      const cutoff = 380 + 2600 * energy(t) * energy(t) + 120 * Math.sin(t * 0.7);
      fl.forEach((f) => f.set("lp", cutoff, 0.8));
      fr.forEach((f) => f.set("lp", cutoff, 0.8));
    }
    const g = 0.35 + 0.65 * energy(t);
    const l = fl[1].run(fl[0].run(raw.L[i])) * g;
    const r = fr[1].run(fr[0].run(raw.R[i])) * g;
    add(music, i, l, r, 0.5);
  }
}

// Sub drone on the chord root.
{
  let ph = 0;
  for (let i = 0; i < N; i++) {
    const t = i / SR;
    const root = t < 3 ? 45 : chordAt(t)[0];
    ph += midi(root - 12) / SR;
    const g = 0.09 * smooth(0, 2.5, t) * (0.6 + 0.4 * energy(t)) * (1 - smooth(65.5, 67, t));
    const v = Math.sin(2 * Math.PI * ph) * g;
    add(music, i, v, v);
  }
}

// Plucked arpeggio, 8th notes, ping-pong.
const pluck = (t, m, gain, pan) => {
  const s0 = Math.floor(t * SR);
  const f = midi(m);
  const len = Math.floor(0.6 * SR);
  const [gl, gr] = panGains(pan);
  for (let k = 0; k < len; k++) {
    const tl = k / SR;
    const env = Math.min(1, tl / 0.004) * Math.exp(-tl / 0.16);
    const v = (Math.sin(2 * Math.PI * f * tl) + 0.3 * Math.sin(4 * Math.PI * f * tl) * Math.exp(-tl / 0.05)) * env * gain;
    add(music, s0 + k, v * gl, v * gr, 0.35);
  }
};
{
  const pattern = [0, 2, 1, 3, 2, 4, 3, 1];
  let step = 0;
  for (let t = 15; t < 55.6; t += BEAT / 2, step++) {
    if (t >= 47 && t < 50 && step % 2) continue; // halftime during the build
    const chord = chordAt(t);
    const note = chord[pattern[step % pattern.length]] + 12;
    const g = 0.05 + 0.07 * energy(t);
    pluck(t, note, g, step % 2 ? 0.45 : -0.45);
  }
}

// Kick + hats (from the Builder scene onward).
const kick = (t, gain) => {
  const s0 = Math.floor(t * SR);
  let ph = 0;
  for (let k = 0; k < 0.45 * SR; k++) {
    const tl = k / SR;
    ph += (45 + 75 * Math.exp(-tl / 0.03)) / SR;
    const v = Math.sin(2 * Math.PI * ph) * Math.exp(-tl / 0.16) * gain;
    add(music, s0 + k, v, v);
  }
};
const hat = (t, gain) => {
  const s0 = Math.floor(t * SR);
  const hp = new Biquad().set("hp", 7000, 0.7);
  for (let k = 0; k < 0.05 * SR; k++) {
    const v = hp.run(noise()) * Math.exp(-(k / SR) / 0.012) * gain;
    add(music, s0 + k, v * 0.8, v);
  }
};
for (let t = 34; t < 55.6; t += BEAT) {
  if (t >= 47 && t < 50) continue;
  kick(t, t >= 50 ? 0.42 : 0.26);
}
for (let t = 25 + BEAT / 2; t < 55.6; t += BEAT) {
  if (t >= 47 && t < 50) continue;
  hat(t, t >= 50 ? 0.07 : 0.045);
}

// Riser into the peak (47 -> 50s).
{
  const bp = new Biquad();
  let ph = 0;
  const a = 47;
  const b = 50;
  for (let i = Math.floor(a * SR); i < b * SR; i++) {
    const t = i / SR;
    const p = (t - a) / (b - a);
    if (i % 32 === 0) bp.set("bp", 300 + 7000 * p * p, 1.2);
    ph += (110 + 330 * p * p) / SR;
    const v = bp.run(noise()) * 0.22 * p * p + Math.sin(2 * Math.PI * ph) * 0.05 * p;
    add(music, i, v * (1 - 0.3 * Math.sin(t * 9)), v * (1 - 0.3 * Math.cos(t * 9)), 0.4);
  }
}

// Closing bells on the signature beats.
const bell = (t, m, gain) => {
  const s0 = Math.floor(t * SR);
  const f = midi(m);
  for (let k = 0; k < 3.5 * SR; k++) {
    const tl = k / SR;
    const env = Math.min(1, tl / 0.003) * Math.exp(-tl / 1.1);
    const v = (Math.sin(2 * Math.PI * f * tl) + 0.25 * Math.sin(2 * Math.PI * f * 2.76 * tl) * Math.exp(-tl / 0.3)) * env * gain;
    add(music, s0 + k, v, v, 0.7);
  }
};
bell(60.6, 69, 0.09);
bell(62.6, 76, 0.06);
bell(64.4, 71, 0.06);

// ---------- sound design ----------
const keyClick = (t, gain = 1) => {
  const s0 = Math.floor(t * SR);
  const bp = new Biquad().set("bp", 2500 + rnd() * 1800, 1.5);
  const pan = (rnd() - 0.5) * 0.4;
  const [gl, gr] = panGains(pan);
  const g = (0.5 + rnd() * 0.25) * gain;
  for (let k = 0; k < 0.06 * SR; k++) {
    const tl = k / SR;
    const click = bp.run(noise()) * Math.exp(-tl / 0.007);
    const thock = Math.sin(2 * Math.PI * 190 * tl) * Math.exp(-tl / 0.012) * 0.5;
    const v = (click + thock) * g * 0.35;
    add(sfx, s0 + k, v * gl, v * gr, 0.15);
  }
};

const impact = (t, gain) => {
  const s0 = Math.floor(t * SR);
  let ph = 0;
  const lp = new Biquad().set("lp", 260, 0.7);
  for (let k = 0; k < 2.4 * SR; k++) {
    const tl = k / SR;
    ph += (36 + 60 * Math.exp(-tl / 0.08)) / SR;
    const body = Math.tanh(1.6 * Math.sin(2 * Math.PI * ph)) * Math.exp(-tl / 0.7);
    const thump = lp.run(noise()) * Math.exp(-tl / 0.09) * 1.4;
    const v = (body * 0.55 + thump) * gain * 0.6;
    add(sfx, s0 + k, v, v, 0.25);
  }
};

const whoosh = (t, gain) => {
  const a = t - 0.45;
  const len = 0.75;
  const s0 = Math.floor(a * SR);
  const bl = new Biquad();
  const br = new Biquad();
  for (let k = 0; k < len * SR; k++) {
    const p = k / (len * SR);
    if (k % 32 === 0) {
      const fc = 350 + 3200 * Math.sin(Math.PI * Math.min(1, p * 1.1));
      bl.set("bp", fc, 0.9);
      br.set("bp", fc * 1.07, 0.9);
    }
    // Swells into the cue time (60% of the way through), then tails off.
    const env = p < 0.6 ? Math.sin((Math.PI / 2) * (p / 0.6)) ** 2 : Math.cos((Math.PI / 2) * ((p - 0.6) / 0.4)) ** 2;
    const pan = -0.7 + 1.4 * p;
    const [gl, gr] = panGains(pan);
    add(sfx, s0 + k, bl.run(noise()) * env * gain * 0.32 * gl, br.run(noise()) * env * gain * 0.32 * gr, 0.3);
  }
};

const tone = (t, f0, f1, len, gain) => {
  const s0 = Math.floor(t * SR);
  let ph = 0;
  for (let k = 0; k < len * SR; k++) {
    const p = k / (len * SR);
    ph += (f0 + (f1 - f0) * p) / SR;
    const v = Math.sin(2 * Math.PI * ph) * Math.min(1, k / 80) * Math.exp(-p * 5) * gain;
    add(sfx, s0 + k, v, v, 0.4);
  }
};

const glitch = (t) => {
  for (let j = 0; j < 7; j++) {
    const at = t + j * 0.035 + rnd() * 0.01;
    const s0 = Math.floor(at * SR);
    const f = 200 + rnd() * 1800;
    for (let k = 0; k < 0.02 * SR; k++) {
      const sq = Math.sign(Math.sin((2 * Math.PI * f * k) / SR));
      const v = (sq * 0.5 + noise() * 0.5) * 0.06;
      add(sfx, s0 + k, j % 2 ? v : v * 0.4, j % 2 ? v * 0.4 : v);
    }
  }
};

const reverse = (t) => {
  const len = 0.9;
  const s0 = Math.floor((t - len) * SR);
  const lp = new Biquad();
  let ph = 0;
  for (let k = 0; k < len * SR; k++) {
    const p = k / (len * SR);
    if (k % 32 === 0) lp.set("lp", 200 + 5000 * p * p, 0.8);
    ph += (600 - 450 * p) / SR;
    const v = (lp.run(noise()) * 0.5 + Math.sin(2 * Math.PI * ph) * 0.2) * Math.pow(p, 3) * 0.5;
    add(sfx, s0 + k, v, v, 0.3);
  }
};

// Typing: one click per character, exactly where the visuals reveal it.
for (const seg of Object.values(timeline.typing)) {
  for (let i = 0; i < seg.text.length; i++) keyClick(seg.at + i / seg.cps + 0.004, seg.at > 30 && seg.at < 47 ? 0.55 : 1);
}

for (const cue of timeline.cues) {
  const g = cue.gain ?? 1;
  if (cue.type === "impact") impact(cue.t, g);
  else if (cue.type === "whoosh") whoosh(cue.t, g);
  else if (cue.type === "enter") {
    keyClick(cue.t, 1.6);
    tone(cue.t, 160, 120, 0.08, 0.15);
  } else if (cue.type === "tick") tone(cue.t, 2400, 2300, 0.05, 0.05);
  else if (cue.type === "blip") tone(cue.t, 1100, 1650, 0.09, 0.07);
  else if (cue.type === "glitch") glitch(cue.t);
  else if (cue.type === "reverse") reverse(cue.t);
}

// ---------- reverb (Schroeder) ----------
const reverb = (input, offset) => {
  const combs = [1557, 1617, 1491, 1422].map((d) => ({ buf: new Float32Array(d + offset), i: 0, fb: 0.82, lp: 0 }));
  const aps = [225, 556].map((d) => ({ buf: new Float32Array(d + offset), i: 0 }));
  const out = new Float32Array(N);
  for (let n = 0; n < N; n++) {
    let acc = 0;
    for (const c of combs) {
      const y = c.buf[c.i];
      c.lp = y * 0.6 + c.lp * 0.4;
      c.buf[c.i] = input[n] + c.lp * c.fb;
      c.i = (c.i + 1) % c.buf.length;
      acc += y;
    }
    let x = acc * 0.25;
    for (const a of aps) {
      const y = a.buf[a.i];
      a.buf[a.i] = x + y * 0.5;
      a.i = (a.i + 1) % a.buf.length;
      x = y - x * 0.5;
    }
    out[n] = x;
  }
  return out;
};
const revL = reverb(send.L, 0);
const revR = reverb(send.R, 23);

// ---------- master ----------
const outL = new Float32Array(N);
const outR = new Float32Array(N);
let peak = 0;
for (let i = 0; i < N; i++) {
  const t = i / SR;
  const fade = Math.min(1, t / 0.05) * (1 - smooth(DURATION - 0.6, DURATION, t));
  const l = Math.tanh((music.L[i] + sfx.L[i] + revL[i] * 0.55) * 1.6) * fade;
  const r = Math.tanh((music.R[i] + sfx.R[i] + revR[i] * 0.55) * 1.6) * fade;
  outL[i] = l;
  outR[i] = r;
  peak = Math.max(peak, Math.abs(l), Math.abs(r));
}
const norm = 0.89 / peak;

const data = Buffer.alloc(44 + N * 4);
data.write("RIFF", 0);
data.writeUInt32LE(36 + N * 4, 4);
data.write("WAVEfmt ", 8);
data.writeUInt32LE(16, 16);
data.writeUInt16LE(1, 20);
data.writeUInt16LE(2, 22);
data.writeUInt32LE(SR, 24);
data.writeUInt32LE(SR * 4, 28);
data.writeUInt16LE(4, 32);
data.writeUInt16LE(16, 34);
data.write("data", 36);
data.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) {
  data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outL[i] * norm)) * 32767), 44 + i * 4);
  data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outR[i] * norm)) * 32767), 46 + i * 4);
}
const out = join(root, "public/audio/soundtrack.wav");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, data);
console.log(`Wrote ${out} (${DURATION}s, peak normalised from ${peak.toFixed(3)})`);
