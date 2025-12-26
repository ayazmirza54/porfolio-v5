import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FaLinkedin, FaGithub, FaTwitter, FaDev } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const SocialLinks = () => {
    const socialLinks = [
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/ayazmirza54", icon: <FaLinkedin size={20} />, username: "ayazmirza54" },
        { platform: "Github", link: "https://github.com/ayazmirza54", icon: <FaGithub size={20} />, username: "ayazmirza54" },
        { platform: "Twitter", link: "https://twitter.com/ayazmirza54", icon: <FaTwitter size={20} />, username: "ayazmirza54" },
        { platform: "Dev.to", link: "https://dev.to/ayazmirza54", icon: <FaDev size={20} />, username: "ayazmirza54" },
    ];

    return (
        <section id="contact" className="min-h-screen px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold capitalize mb-4 text-white">
                        📬 Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Header Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-6 h-full flex flex-col md:flex-row justify-center items-center gap-4">
                            <h3 className="text-2xl md:text-4xl font-bold text-white uppercase">
                                Ayaz Mirza
                            </h3>
                            <p className="text-lg md:text-xl text-white/70">
                                Software Engineer from Lucknow, India
                            </p>
                        </div>
                    </motion.div>

                    {/* Social Links Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 md:row-span-2 relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-4 h-full flex flex-col gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.platform}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative rounded-xl border border-gray-700 p-3 bg-black hover:bg-white/10 transition-all"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-white">
                                            {social.icon}
                                            <span className="font-bold">{social.platform}</span>
                                        </div>
                                        <span className="text-white/60 text-sm">{social.username}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Email/Phone Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-6 h-full">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="text-white/70" size={20} />
                                    <a href="mailto:ayazmirza54@gmail.com" className="text-white hover:text-white/80 transition-colors">
                                        ayazmirza54@gmail.com
                                    </a>
                                </div>
                                <span className="hidden md:block text-white/30">|</span>
                                <div className="flex items-center gap-3">
                                    <Phone className="text-white/70" size={20} />
                                    <a href="tel:+919889017774" className="text-white hover:text-white/80 transition-colors">
                                        +91 9889017774
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialLinks;
