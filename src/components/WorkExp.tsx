import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
// @ts-ignore
import { WORK_EXPERIENCE } from "@/constants";
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
                    {WORK_EXPERIENCE.map((exp: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (index + 1) }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="relative rounded-2xl border-2 border-gray-600 p-2"
                        >
                            <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                            <div className="relative bg-black rounded-xl p-6 h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h1 className="text-xl md:text-2xl font-bold text-white">
                                        {exp.title}
                                    </h1>
                                    <div className={`px-3 py-1 text-xs font-medium rounded-full ${exp.status === 'Current' ? 'bg-green-900 text-green-300' : 'bg-gray-700 text-gray-300'}`}>
                                        {exp.status}
                                    </div>
                                </div>

                                <h4 className="text-xl mb-2 text-white/80">
                                    {exp.company}
                                </h4>

                                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-white/70">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <div className="space-y-2 text-white/80 text-sm">
                                    {exp.responsibilities.map((resp: string, i: number) => (
                                        <p key={i}>• {resp}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExp;
