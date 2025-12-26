import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Blogs = () => {
    const blogs = [
        {
            title: "Intellisketch : AI powered drawing tool 🖌️",
            preview: "IntelliSketch: Building an AI-Powered Mathematical Sketching App",
            date: "Oct 12, 2024",
            readTime: "5 min read",
            link: "https://dev.to/ayazmirza54/intellisketch-ai-powered-drawing-tool-3i8e",
            platform: "Dev.to",
        },
        {
            title: "Migrating my app from chatgpt API to Gemini AI API",
            preview: "Migrating my app from chatgpt API to Gemini AI API",
            date: "Sept 14, 2024",
            readTime: "4 min read",
            link: "https://dev.to/ayazmirza54/migrating-my-app-from-chatgpt-api-to-gemini-ai-api-557o",
            platform: "Dev.to",
        },
        {
            title: "🤖 chatGPT on loop➰ using babyAGI and AutoGPT",
            preview: "Using babyAGI and AutoGPT to interact with chatGPT on loop",
            date: "Apr 13, 2023",
            readTime: "6 min read",
            link: "https://dev.to/ayazmirza54/chatgpt-on-loop-using-babyagi-and-autogpt-29c8",
            platform: "Dev.to",
        },
        {
            title: "Text and Code Utilities App using OpenAI API",
            preview: "Building a Text and Code Utilities App using OpenAI API",
            date: "Jan 28, 2023",
            readTime: "7 min read",
            link: "https://dev.to/ayazmirza54/text-and-code-utilities-app-using-openai-api-4m13",
            platform: "Dev.to",
        },
    ];

    return (
        <section id="blogs" className="min-h-screen px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold capitalize mb-4 text-white">
                        📝 Blogs
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogs.map((blog, index) => (
                        <motion.a
                            key={index}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="block relative rounded-2xl border-2 border-gray-600 p-2"
                        >
                            <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                            <div className="relative bg-black rounded-xl p-6 h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors pr-4">
                                        {blog.title}
                                    </h3>
                                    <ArrowUpRight size={24} className="text-white/70 flex-shrink-0" />
                                </div>

                                <p className="text-white/70 mb-4 line-clamp-2">
                                    {blog.preview}
                                </p>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-white/50">
                                        <span>{blog.date}</span>
                                        <span>•</span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <span className="text-white font-medium px-3 py-1 bg-white/10 rounded-full">
                                        {blog.platform}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
