import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaDev, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";

const SOCIAL_ICONS: Record<string, ReactNode> = {
    LinkedIn: <FaLinkedinIn size={18} />,
    Github: <FaGithub size={18} />,
    Twitter: <FaXTwitter size={18} />,
    "Dev.to": <FaDev size={18} />,
};

const Contact = () => {
    return (
        <section id="contact" className="px-4 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="06" label="Contact" title="Get In Touch" />

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card relative overflow-hidden p-8 md:p-12"
                    >
                        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
                        <p className="font-mono text-sm text-accent-soft/80">Have a pipeline, project or role in mind?</p>
                        <h3 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
                            Let's build something <span className="text-accent">reliable</span>.
                        </h3>
                        <p className="mt-4 flex items-center gap-2 text-white/55">
                            <MapPin size={16} /> {PERSONAL_INFO.locationFull}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Button asChild size="lg">
                                <a href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20Ayaz!`}>
                                    <Mail size={16} /> {PERSONAL_INFO.email}
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`}>
                                    <Phone size={16} /> {PERSONAL_INFO.phone}
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-3 flex flex-col"
                    >
                        {SOCIAL_LINKS.map((social) => (
                            <li key={social.platform} className="flex-1">
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex h-full items-center justify-between gap-4 rounded-xl px-4 py-4 hover:bg-white/5 transition-colors"
                                >
                                    <span className="flex items-center gap-3 text-white">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 group-hover:text-accent group-hover:border-accent/40 transition-colors">
                                            {SOCIAL_ICONS[social.platform]}
                                        </span>
                                        <span>
                                            <span className="block font-medium">{social.platform}</span>
                                            <span className="block font-mono text-xs text-white/45">@{social.username}</span>
                                        </span>
                                    </span>
                                    <ArrowUpRight size={18} className="text-white/30 transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
