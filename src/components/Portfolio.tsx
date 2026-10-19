import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaDev, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import GradientASCII from "@/components/GradientASCII";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import Projects from "@/components/Projects";
import WorkExp from "@/components/WorkExp";
import Blogs from "@/components/Blogs";
import Contact from "@/components/SocialLinks";
import GradientText from "@/components/GradientText";
import CertBadge3D from "@/components/CertBadge3D";
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS, STATS, GRADIENT_TEXT_COLORS } from "@/constants";
import awsIcon from "@/assets/aws.svg";
import azureIcon from "@/assets/azure.svg";
import gcpIcon from "@/assets/gcp.svg";
import ec2Icon from "@/assets/ec2.svg";
import lambdaIcon from "@/assets/lambda.svg";
import cloudwatchIcon from "@/assets/cloudwatch.svg";
import redshiftIcon from "@/assets/redshift.svg";
import shellIcon from "@/assets/shell.png";

const SOCIAL_ICONS: Record<string, ReactNode> = {
    LinkedIn: <FaLinkedinIn size={16} />,
    Github: <FaGithub size={16} />,
    Twitter: <FaXTwitter size={16} />,
    "Dev.to": <FaDev size={16} />,
};

// ============ Navbar Component ============
function useActiveSection(ids: string[]) {
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            // A section counts as active while it crosses the middle band of the viewport
            { rootMargin: "-45% 0px -50% 0px" }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [ids]);

    return active;
}

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const active = useActiveSection(SECTION_IDS);

    return (
        <header
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-2rem)] sm:w-auto
                        border border-white/10 bg-black/50 backdrop-blur-md
                        ${isOpen ? "rounded-2xl" : "rounded-full"} transition-[border-radius] duration-300`}
        >
            <div className="flex items-center justify-between gap-x-6 sm:gap-x-8 pl-5 pr-2 py-2">
                <a href="#hero" aria-label="Back to top" className="text-white font-jersey text-3xl leading-none">
                    AM
                </a>
                <nav className="hidden sm:flex items-center gap-1 font-mono text-sm">
                    {NAV_LINKS.map((link) => {
                        const isActive = active === link.href.slice(1);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative rounded-full px-3 py-1.5 transition-colors ${isActive ? "text-white" : "text-white/55 hover:text-white"}`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute inset-0 -z-10 rounded-full bg-white/10"
                                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                    />
                                )}
                                {link.label}
                            </a>
                        );
                    })}
                </nav>
                <Button asChild size="sm" className="hidden sm:inline-flex rounded-full">
                    <a href="#contact">Let's Talk</a>
                </Button>
                <button
                    className="sm:hidden flex items-center justify-center w-10 h-10 text-white/80"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>
            <div
                className={`sm:hidden grid transition-all duration-300 ease-in-out
                            ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}
            >
                <nav className="overflow-hidden flex flex-col px-4 font-mono">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`py-3 border-b border-white/5 ${active === link.href.slice(1) ? "text-accent" : "text-white/70"}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button asChild className="my-4 w-full">
                        <a href="#contact" onClick={() => setIsOpen(false)}>Let's Talk</a>
                    </Button>
                </nav>
            </div>
        </header>
    );
}

// ============ Hero Section ============
function HeroSection() {
    return (
        <section id="hero" className="min-h-svh flex flex-col justify-center items-center text-center px-4 pt-28 pb-24 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm font-mono text-xs text-white/70"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                    </span>
                    Data Engineer · Ab Initio · AWS · GCP
                </motion.div>

                <h1 className="mt-8 flex flex-col items-center">
                    <span className="font-mono text-lg md:text-2xl text-accent-soft/80">Hi, I'm</span>
                    <GradientText colors={GRADIENT_TEXT_COLORS} animationSpeed={6} showBorder={false}>
                        <span className="font-jersey text-7xl sm:text-8xl md:text-9xl leading-[0.9]">{PERSONAL_INFO.name}</span>
                    </GradientText>
                </h1>

                <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl leading-relaxed [text-shadow:0_1px_12px_rgb(0_0_0/0.8)]">
                    {PERSONAL_INFO.bio}
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-10"
                >
                    <Button asChild size="lg" className="group">
                        <a href="#projects">
                            View Projects
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href={PERSONAL_INFO.resumeUrl} download={PERSONAL_INFO.resumeDownloadName}>
                            <Download size={16} />
                            Resume
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="lg">
                        <a href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20Ayaz!`}>
                            <Mail size={16} />
                            Get in Touch
                        </a>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex gap-2 justify-center pt-8"
                >
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.platform}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                            className="w-10 h-10 rounded-full border border-white/10 bg-black/40 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/50 transition-colors"
                        >
                            {SOCIAL_ICONS[social.platform]}
                        </a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                aria-label="Scroll to About"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                    className="w-6 h-10 rounded-full border-2 border-white/25 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-accent rounded-full" />
                </motion.div>
            </motion.a>
        </section>
    );
}

// ============ About Section ============
function CountUp({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const target = parseInt(value, 10);
    const suffix = value.replace(/^\d+/, "");

    useEffect(() => {
        if (!inView || !ref.current || Number.isNaN(target)) return;
        const node = ref.current;
        const controls = animate(0, target, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: (v) => { node.textContent = `${Math.round(v)}${suffix}`; },
        });
        return () => controls.stop();
    }, [inView, target, suffix]);

    return <span ref={ref}>{value}</span>;
}

function AboutSection() {
    return (
        <section id="about" className="px-4 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="01" label="About" title="About Me" />
                <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-white/75 leading-relaxed"
                    >
                        {PERSONAL_INFO.aboutDescription}
                    </motion.p>
                    <div className="grid grid-cols-2 gap-4">
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 hover:border-accent/40"
                            >
                                <div className="font-mono text-4xl font-semibold bg-gradient-to-br from-white to-accent bg-clip-text text-transparent">
                                    <CountUp value={stat.value} />
                                </div>
                                <div className="mt-2 text-sm text-white/55">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============ Tech Stack Marquee Strip ============
type Tech = { name: string; icon: string; svgIcon?: string };

function MarqueeRow({
    techs,
    direction = "left",
}: {
    techs: Tech[];
    direction?: "left" | "right" | "left-slow";
}) {
    // Repeat the list so the -50% translate loop always has enough content, even for short rows
    const items = [...techs, ...techs, ...techs, ...techs];
    const trackClass =
        direction === "right"
            ? "marquee-track marquee-track--right"
            : direction === "left-slow"
                ? "marquee-track marquee-track--left-slow"
                : "marquee-track marquee-track--left";

    return (
        <div className="marquee-viewport py-1">
            <div className={trackClass}>
                {items.map((tech, i) => (
                    <div
                        key={`${tech.name}-${i}`}
                        aria-hidden={i >= techs.length}
                        className="flex-shrink-0 mx-1.5 flex items-center gap-2.5 px-4 py-2.5
                                   rounded-xl border border-white/10 bg-[#05070d]/80
                                   hover:border-accent/50 transition-colors duration-300 cursor-default group"
                    >
                        {tech.svgIcon ? (
                            <img
                                src={tech.svgIcon}
                                alt=""
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain flex-shrink-0"
                            />
                        ) : (
                            <span className="text-lg leading-none flex-shrink-0">{tech.icon}</span>
                        )}
                        <span className="font-mono text-white/70 text-sm whitespace-nowrap group-hover:text-white transition-colors duration-300">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const TECH_CATEGORIES: { label: string; techs: Tech[] }[] = [
    {
        label: "Languages",
        techs: [
            { name: "JavaScript", icon: "⚡" },
            { name: "HTML5", icon: "🌐" },
            { name: "CSS3", icon: "🎨" },
            { name: "Markdown", icon: "📝" },
            { name: "Shell Script", icon: "", svgIcon: shellIcon },
            { name: "C++", icon: "⚙️" },
            { name: "C", icon: "🔧" },
        ],
    },
    {
        label: "Frameworks & Libraries",
        techs: [
            { name: "React", icon: "⚛️" },
            { name: "React Router", icon: "🛣️" },
            { name: "Express.js", icon: "🚂" },
            { name: "Node.js", icon: "📦" },
            { name: "TailwindCSS", icon: "💨" },
            { name: "Bootstrap", icon: "🅱️" },
        ],
    },
    {
        label: "Databases",
        techs: [
            { name: "MySQL", icon: "🗄️" },
            { name: "PostgreSQL", icon: "🐘" },
        ],
    },
    {
        label: "Tools & Platforms",
        techs: [
            { name: "Canva", icon: "🎨" },
            { name: "Figma", icon: "🎯" },
            { name: "Ansible", icon: "🔄" },
            { name: "Notion", icon: "📓" },
            { name: "Git", icon: "🔀" },
            { name: "Ab Initio ETL", icon: "🏭" },
            { name: "Power BI", icon: "📊" },
            { name: "Grafana", icon: "📈" },
            { name: "Gemini AI", icon: "🤖" },
            { name: "Claude AI", icon: "🧠" },
            { name: "ChatGPT", icon: "💬" },
        ],
    },
    {
        label: "Cloud Technologies",
        techs: [
            { name: "AWS", icon: "", svgIcon: awsIcon },
            { name: "Azure", icon: "", svgIcon: azureIcon },
            { name: "GCP", icon: "", svgIcon: gcpIcon },
            { name: "AWS EC2", icon: "", svgIcon: ec2Icon },
            { name: "AWS Lambda", icon: "", svgIcon: lambdaIcon },
            { name: "CloudWatch", icon: "", svgIcon: cloudwatchIcon },
            { name: "Redshift", icon: "", svgIcon: redshiftIcon },
            { name: "Docker", icon: "🐳" },
        ],
    },
];

const MARQUEE_DIRECTIONS: ("left" | "right" | "left-slow")[] = ["left", "right", "left-slow", "right", "left"];

const CERTIFICATIONS = [
    {
        imageSrc: "/cert-gcp-ace.webp",
        title: "Associate Cloud Engineer",
        subtitle: "Google Cloud Certified",
    },
];

function TechStackSection() {
    return (
        <section id="tech-stack" className="py-24 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <SectionHeading
                    index="03"
                    label="Toolbox"
                    title="Tech Stack"
                    description="The languages, platforms and tools I reach for. Hover a strip to pause it."
                />
            </div>

            <div className="flex flex-col gap-6">
                {TECH_CATEGORIES.map((cat, idx) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, x: MARQUEE_DIRECTIONS[idx] === "right" ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 max-w-6xl mx-auto px-4 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">{cat.label}</span>
                            <div className="h-px flex-1 bg-white/[0.06]" />
                        </div>
                        <MarqueeRow techs={cat.techs} direction={MARQUEE_DIRECTIONS[idx]} />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-20 px-4 max-w-6xl mx-auto"
            >
                <div className="flex items-center gap-3 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">Certifications</span>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {CERTIFICATIONS.map((cert) => (
                        <CertBadge3D
                            key={cert.title}
                            imageSrc={cert.imageSrc}
                            title={cert.title}
                            subtitle={cert.subtitle}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

// ============ Footer ============
function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/60">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <span className="font-jersey text-3xl text-white">AM</span>
                    <span className="font-mono text-xs text-white/40">{PERSONAL_INFO.footerText}</span>
                </div>
                <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-xs text-white/50">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                    ))}
                    <a href="#hero" className="text-accent hover:text-white transition-colors">Back to top ↑</a>
                </nav>
            </div>
        </footer>
    );
}

// ============ Main Portfolio Component ============
export function Portfolio() {
    // Dim the ASCII background as the visitor scrolls past the hero so section content stays readable
    const { scrollY } = useScroll();
    const dimOpacity = useTransform(scrollY, [0, 700], [0, 0.6]);

    return (
        <div className="flex w-full flex-col min-h-screen bg-black relative">
            {/* ASCII Gradient Background */}
            <div className="fixed inset-0 z-0" aria-hidden="true">
                <GradientASCII
                    colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
                    shape="horizon"
                    characters=" =+xX0S8#@"
                    cellSize={18}
                    density={0.8}
                    glyphOpacity={0.85}
                    glow={0.2}
                    depthOfField={0}
                    flicker={0.2}
                    softness={0.5}
                    scale={1}
                    flow={0.5}
                    speed={1}
                    gradientOpacity={0.9}
                    grain={0.08}
                    variation={0}
                    mouseInteraction
                    scrambleRadius={0.1}
                    clickEffect="wave"
                    intro
                    lightMode={false}
                    dpr={1.5}
                />
                {/* Readability overlays */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.55)_0%,_rgba(0,0,0,0.15)_55%,_transparent_100%)]" />
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
                <motion.div className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: dimOpacity }} />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <WorkExp />
                    <TechStackSection />
                    <Projects />
                    <Blogs />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Portfolio;
