import { useState } from "react";
import { Calendar, ChevronDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { WORK_EXPERIENCE } from "@/constants";

const VISIBLE_BULLETS = 3;

type Experience = (typeof WORK_EXPERIENCE)[number];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
    const [expanded, setExpanded] = useState(false);
    const isCurrent = exp.status === "Current";
    const bullets = expanded ? exp.responsibilities : exp.responsibilities.slice(0, VISIBLE_BULLETS);
    const hiddenCount = exp.responsibilities.length - VISIBLE_BULLETS;

    return (
        <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative pl-8 md:pl-12"
        >
            {/* Timeline node */}
            <span
                className={`absolute left-0 top-7 -translate-x-1/2 h-3.5 w-3.5 rounded-full border-2
                            ${isCurrent ? "border-mint bg-mint/30 shadow-[0_0_12px_rgb(64_255_170/0.7)]" : "border-accent/70 bg-black"}`}
            />

            <article className="glass-card p-6 md:p-8 hover:border-accent/30">
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.title}</h3>
                        <p className="mt-1 text-white/70">{exp.company}</p>
                    </div>
                    <span
                        className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border
                                    ${isCurrent ? "border-mint/40 text-mint bg-mint/10" : "border-white/10 text-white/50"}`}
                    >
                        {exp.status}
                    </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs text-white/45">
                    <span className="flex items-center gap-1.5"><Calendar size={13} />{exp.duration}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} />{exp.location}</span>
                </div>

                <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-white/75">
                    {bullets.map((resp) => (
                        <li key={resp} className="flex gap-3">
                            <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                            <span>{resp}</span>
                        </li>
                    ))}
                </ul>

                {hiddenCount > 0 && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-accent hover:text-white transition-colors"
                    >
                        {expanded ? "Show less" : `Show ${hiddenCount} more`}
                        <ChevronDown size={14} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                    </button>
                )}
            </article>
        </motion.li>
    );
}

const WorkExp = () => {
    return (
        <section id="work-experience" className="px-4 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="02" label="Career" title="Work Experience" />
                <ol className="relative max-w-4xl space-y-8 border-l border-white/10 ml-1.5">
                    {WORK_EXPERIENCE.map((exp, index) => (
                        <ExperienceCard key={exp.title} exp={exp} index={index} />
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default WorkExp;
