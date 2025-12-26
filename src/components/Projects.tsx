import { Github, ArrowUpRight } from "lucide-react";
import { FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold capitalize mb-4 text-white">
                        🕸️Webdev 🫱🏽‍🫲🏾 AI🤖 Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                {/* Main Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img
                                    className="rounded-t-lg w-full"
                                    src="https://opengraph.b-cdn.net/production/images/d2191f8c-f07c-494b-854b-281f67c52b6e.png?token=QK8jkkzV7j7xvYLQdz4UvUYMfRqlyDzGNER8TCVsP8c&height=1013&width=1200&expires=33271056025"
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">
                                        Text to Content AI
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    Text to Content AI is an AI-powered tool that converts text into content. It uses the Gemini API to generate content based on the text input.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://texttocontent.vercel.app/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/text-to-content-ai/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src="https://ayazmirza54.in/project_2.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">
                                        Intellisketch : AI powered drawing tool 🖌️
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    IntelliSketch is an AI-powered drawing app that uses Google Gemini API to interpret and solve mathematical sketches and graphical problems in real-time.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://intellisketch.vercel.app/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/intellisketch/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src="https://ayazmirza54.in/project_1.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">
                                        Text/Code Utils.AI
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    Text and Code Utilities: AI-enhanced tool by Google Gemini, offering streamlined text analysis and code generation.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://text-code-util-aiprod.vercel.app/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/text-code-util.aiprod/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src="https://ayazmirza54.in/project_4.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">
                                        Chat2pdf using gemini
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    AI-powered app for conversational PDF interaction using Gemini and LangChain.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://chat2pdf-using-gemini.streamlit.app/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/chat2pdf-using-gemini"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* DevOps Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 mt-16"
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold capitalize mb-4 text-white">
                        Devops Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Card 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src="https://ayazmirza54.in/unixbot.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-white">
                                        📜 UnixBot
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    UnixBot is a chatbot that can be used to chat about unix commands. It uses the Gemini API to generate responses.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://unix-bot.streamlit.app/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/unixbot"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src="https://ayazmirza54.in/query-smith.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">
                                        ⚒️ QuerySmith
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    QuerySmith is a chatbot that can be used to generate SQL queries. It uses the Gemini API to generate responses.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://query-smith.streamlit.app/"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/chat-with-db"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 7 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src="https://ayazmirza54.in/ec2-control.gif" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight flex justify-center items-center gap-4 text-white">
                                        <FaServer size={30} /> EC2 Manager TUI
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    A CLI tool to manage EC2 instances. It uses the AWS SDK for Python to interact with the AWS API.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/ec2-manager-tui"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 8 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src="https://ayazmirza54.in/keep-alive.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">
                                        📌 Keep Alive EC2 Script
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    This script keeps an EC2 instance alive by pinging it every 10 minutes.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/pingservice"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 9 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-5 h-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src="/system-metrics.png" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">
                                        System Metrics Logging Script
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    This script logs system metrics (CPU usage and memory usage) to a PostgreSQL database.
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="text-[10px] h-10 group relative w-fit overflow-hidden rounded-xl border border-gray-700 bg-black font-bold transition-all duration-300 hover:border-gray-500"
                                        href="https://github.com/ayazmirza54/system-metrics-monitoring-script"
                                    >
                                        <span className="inline-flex h-full w-fit items-center gap-1 rounded-[10px] bg-black/80 px-2 py-2 text-white transition-all duration-300 group-hover:rounded-2xl group-hover:bg-black/0">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Other Noteworthy Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">Other Noteworthy Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Small Project Card 1 */}
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="relative rounded-2xl border-2 border-gray-600 p-2"
                        >
                            <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                            <div className="relative bg-black rounded-xl p-4 h-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-lg font-semibold mb-2 text-white">Studysensie</h1>
                                        <p className="text-sm text-white/70 mb-4">Quiz Generator using Gemini AI API</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="https://github.com/ayazmirza54/studysensei/" className="text-white/70 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href="https://studysensei.vercel.app/" className="text-white/70 hover:text-white transition-colors">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-xs">
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">React</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">TailwindCSS</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">Gemini AI API</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Project Card 2 */}
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="relative rounded-2xl border-2 border-gray-600 p-2"
                        >
                            <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                            <div className="relative bg-black rounded-xl p-4 h-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-lg font-semibold mb-2 text-white">Movie-Finder</h1>
                                        <p className="text-sm text-white/70 mb-4">Movie Finder app using the Movie Database API</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="https://github.com/ayazmirza54/movie-finder" className="text-white/70 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href="https://movie-finder-lake-six.vercel.app/" className="text-white/70 hover:text-white transition-colors">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-xs">
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">JavaScript</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">HTML/CSS</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">Movie Database API</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Project Card 3 */}
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="relative rounded-2xl border-2 border-gray-600 p-2"
                        >
                            <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                            <div className="relative bg-black rounded-xl p-4 h-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-lg font-semibold mb-2 text-white">Stone-Paper-Scissor-Game</h1>
                                        <p className="text-sm text-white/70 mb-4">Stone Paper Scissor Game using React and TailwindCSS</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="https://rock-paper-scrissors.netlify.app/" className="text-white/70 hover:text-white transition-colors">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-xs">
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">HTML/CSS</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">JavaScript</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Project Card 4 */}
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="relative rounded-2xl border-2 border-gray-600 p-2"
                        >
                            <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                            <div className="relative bg-black rounded-xl p-4 h-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-lg font-semibold mb-2 text-white">Quote-Generator</h1>
                                        <p className="text-sm text-white/70 mb-4">Quote Generator using an external API</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="https://quote-generator-live.netlify.app" className="text-white/70 hover:text-white transition-colors">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-xs">
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">React</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">NodeJS</span>
                                    <span className="px-2 py-1 bg-gray-800 rounded text-white/70">Axios</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
