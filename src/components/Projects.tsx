import { Github, ArrowUpRight } from "lucide-react";
import { FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

// Import project images
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.gif";
import p8 from "@/assets/p8.png";
import p9 from "@/assets/p9.png";
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
                    <div className="section-rule mx-auto" />
                </motion.div>

                {/* Main Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img
                                    className="project-preview w-full"
                                    src={p9}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h1 className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">
                                        Draftbuddy
                                    </h1>
                                </a>
                                <p className="mb-3 font-normal text-white/80">
                                    Draftbuddy — Your buddy for better drafts and send them over a teams message,a slack ping, an email or a linkedin post
                                </p>
                                <div className="flex flex-row justify-center text-center gap-4">
                                    <a
                                        className="project-link"
                                        href="https://draftbuddyy.vercel.app/"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/draftbuddy/"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            <Github size={12} /> Github Link
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img
                                    className="project-preview w-full"
                                    src={p1}
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
                                        className="project-link"
                                        href="https://texttocontent.vercel.app/"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/text-to-content-ai/"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img className="project-preview w-full" src={p2} alt="" />
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
                                        className="project-link"
                                        href="https://intellisketch.vercel.app/"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/intellisketch/"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img className="project-preview w-full" src={p3} alt="" />
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
                                        className="project-link"
                                        href="https://text-code-util-aiprod.vercel.app/"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/text-code-util.aiprod/"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img className="project-preview w-full" src={p4} alt="" />
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
                                        className="project-link"
                                        href="https://chat2pdf-using-gemini.streamlit.app/"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/chat2pdf-using-gemini"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                    <div className="section-rule mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Card 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img className="project-preview w-full" src={p5} alt="" />
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
                                        className="project-link"
                                        href="https://unix-bot.streamlit.app/"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/unixbot"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img className="project-preview w-full" src={p6} alt="" />
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
                                        className="project-link"
                                        href="https://query-smith.streamlit.app/"
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            🔗 Live Link
                                        </span>
                                    </a>
                                    <a
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/chat-with-db"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img className="project-preview w-full" src={p7} alt="" />
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
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/ec2-manager-tui"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
                            <a href="#">
                                <img className="project-preview w-full" src={p8} alt="" />
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
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/pingservice"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                        whileHover={{ y: -2 }}
                        className="surface-card project-card"
                    >

                        <div className="surface-content p-5 h-full">
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
                                        className="project-link"
                                        href="https://github.com/ayazmirza54/system-metrics-monitoring-script"
                                    >
                                        <span className="inline-flex items-center gap-2">
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
                    <div className="section-rule mb-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Small Project Card 1 */}
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="surface-card project-card"
                        >

                            <div className="surface-content p-4 h-full">
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
                                    <span className="project-tag">React</span>
                                    <span className="project-tag">TailwindCSS</span>
                                    <span className="project-tag">Gemini AI API</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Project Card 2 */}
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="surface-card project-card"
                        >

                            <div className="surface-content p-4 h-full">
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
                                    <span className="project-tag">JavaScript</span>
                                    <span className="project-tag">HTML/CSS</span>
                                    <span className="project-tag">Movie Database API</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Project Card 3 */}
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="surface-card project-card"
                        >

                            <div className="surface-content p-4 h-full">
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
                                    <span className="project-tag">HTML/CSS</span>
                                    <span className="project-tag">JavaScript</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Small Project Card 4 */}
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="surface-card project-card"
                        >

                            <div className="surface-content p-4 h-full">
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
                                    <span className="project-tag">React</span>
                                    <span className="project-tag">NodeJS</span>
                                    <span className="project-tag">Axios</span>
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
