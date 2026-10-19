import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { BLOGS } from "@/constants";

const Blogs = () => {
    return (
        <section id="blogs" className="px-4 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="05" label="Writing" title="Blogs" description="Notes from building things, published on Dev.to." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {BLOGS.map((blog, index) => (
                        <motion.a
                            key={blog.link}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (index % 2) * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass-card flex flex-col p-6 hover:border-accent/40 hover:-translate-y-1 transition-[transform,border-color] duration-300"
                        >
                            <div className="flex items-center justify-between font-mono text-xs text-white/45">
                                <span>{blog.date} · {blog.readTime}</span>
                                <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/60">{blog.platform}</span>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-accent-soft transition-colors">
                                {blog.title}
                            </h3>
                            <p className="mt-2 flex-1 text-white/60 line-clamp-2">{blog.preview}</p>
                            <span className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-accent">
                                Read article
                                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
