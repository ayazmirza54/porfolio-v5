import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const WorkExp = () => {
    return (
        <section id="work-experience" className="min-h-screen px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold capitalize mb-4 text-white">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Job Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-6 h-full">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-xl md:text-2xl font-bold text-white">
                                    Senior Consultant
                                </h1>
                                <div className="px-3 py-1 text-xs font-medium bg-green-900 text-green-300 rounded-full">
                                    Current
                                </div>
                            </div>

                            <h4 className="text-xl mb-2 text-white/80">
                                Wipro Limited
                            </h4>

                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-white/70">
                                <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    <span>Nov 2019 - Present</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    <span>Greater Noida, India</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-white/80 text-sm">
                                <p>• Worked on Ab Initio ETL tool to process client side information and provide valuable insights</p>
                                <p>• Extensive experience in designing graphs, scheduling jobs through Control Centre</p>
                                <p>• Proficiently scripting Unix shell commands for ETL optimization</p>
                                <p>• Monitoring ETL job execution and addressing issues to minimize delays</p>
                                <p>• Created shell scripts to automate monitoring of critical server metrics</p>
                                <p>• Leveraged Grafana, Control Center, Queryit, and SQLExplorer for operational efficiency</p>
                                <p>• Appointed as L2, providing guidance to L1 teammates</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Second Job Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="relative rounded-2xl border-2 border-gray-600 p-2"
                    >
                        <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                        <div className="relative bg-black rounded-xl p-6 h-full">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-xl md:text-2xl font-bold text-white">
                                    Frontend Web Developer
                                </h1>
                                <div className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
                                    Completed
                                </div>
                            </div>

                            <h4 className="text-xl mb-2 text-white/80">
                                Cosmo Infosolutions Pvt Ltd
                            </h4>

                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-white/70">
                                <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    <span>June 2019 - Oct 2019</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    <span>Lucknow, India</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-white/80 text-sm">
                                <p>• Front-end developer skilled in HTML, CSS, JavaScript, and ReactJS</p>
                                <p>• Experienced in designing landing pages that capture attention</p>
                                <p>• Focuses on layouts that are visually appealing and easy to navigate</p>
                                <p>• Designs responsive pages that work well on desktop and mobile</p>
                                <p>• Attention to layout, color, and typography for polished appearance</p>
                                <p>• Creates seamless and enjoyable experience for every user</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WorkExp;
