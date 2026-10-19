import { ArrowUpRight, ExternalLink, Github, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { WEBDEV_AI_PROJECTS, DEVOPS_PROJECTS, OTHER_PROJECTS } from "@/constants";
import p1 from "@/assets/projects/p1.webp";
import p2 from "@/assets/projects/p2.webp";
import p3 from "@/assets/projects/p3.webp";
import p4 from "@/assets/projects/p4.webp";
import p5 from "@/assets/projects/p5.webp";
import p6 from "@/assets/projects/p6.webp";
import p7Poster from "@/assets/projects/p7-poster.webp";
import p7Video from "@/assets/projects/p7.mp4";
import p8 from "@/assets/projects/p8.webp";
import p9 from "@/assets/projects/p9.webp";

const IMAGES: Record<string, string> = { p1, p2, p3, p4, p5, p6, p8, p9 };
const VIDEOS: Record<string, { src: string; poster: string }> = { p7: { src: p7Video, poster: p7Poster } };

type Project = (typeof WEBDEV_AI_PROJECTS)[number] | (typeof DEVOPS_PROJECTS)[number];

function ProjectMedia({ project }: { project: Project }) {
    const video = project.image ? VIDEOS[project.image] : undefined;
    const image = project.image ? IMAGES[project.image] : undefined;
    const mediaClass = "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]";

    if (video) {
        return (
            <video
                className={mediaClass}
                src={video.src}
                poster={video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-label={`${project.title} demo`}
            />
        );
    }
    if (image) {
        return <img className={mediaClass} src={image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />;
    }
    return (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgb(56_189_248/0.18),transparent_60%)]">
            <Terminal size={40} className="text-accent/70" />
        </div>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const technologies = "technologies" in project ? project.technologies : undefined;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            viewport={{ once: true, margin: "-60px" }}
            className="group glass-card flex flex-col overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-[transform,border-color] duration-300"
        >
            <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-black">
                <ProjectMedia project={project} />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/65">{project.description}</p>
                {technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <span key={tech} className="font-mono text-[11px] px-2 py-1 rounded-md border border-accent/20 bg-accent/5 text-accent-soft/80">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                <div className="mt-5 flex gap-3">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 font-mono text-xs text-white hover:border-accent/60 hover:bg-accent/10 transition-colors"
                        >
                            <ExternalLink size={13} /> Live
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 font-mono text-xs text-white hover:border-accent/60 hover:bg-accent/10 transition-colors"
                        >
                            <Github size={13} /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

function GroupLabel({ children }: { children: string }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">{children}</h3>
            <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
    );
}

const Projects = () => {
    return (
        <section id="projects" className="px-4 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    index="04"
                    label="Work"
                    title="Projects"
                    description="AI-powered web apps, plus the cloud and DevOps tooling I build to automate my day job."
                />

                <GroupLabel>Web & AI</GroupLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {WEBDEV_AI_PROJECTS.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                <GroupLabel>DevOps & Cloud</GroupLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {DEVOPS_PROJECTS.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                <GroupLabel>Other Noteworthy Projects</GroupLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {OTHER_PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i % 2) * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass-card p-5 hover:border-accent/40"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h4 className="font-semibold text-white">{project.title}</h4>
                                    <p className="mt-1 text-sm text-white/60">{project.description}</p>
                                </div>
                                <div className="flex flex-shrink-0 gap-1">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} source code`}
                                            className="p-1.5 rounded-md text-white/45 hover:text-accent hover:bg-white/5 transition-colors"
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} live demo`}
                                            className="p-1.5 rounded-md text-white/45 hover:text-accent hover:bg-white/5 transition-colors"
                                        >
                                            <ArrowUpRight size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="font-mono text-[11px] px-2 py-1 rounded-md border border-white/10 text-white/55">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
