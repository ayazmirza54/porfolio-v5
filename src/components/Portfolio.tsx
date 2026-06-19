import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/sign-in-flow-1";
import { GradientButton } from "@/components/ui/gradient-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Projects from "@/components/Projects";
import WorkExp from "@/components/WorkExp";
import Blogs from "@/components/Blogs";
import SocialLinks from "@/components/SocialLinks";
import CVDownload from "@/components/CVDownload";
import { FaDev } from "react-icons/fa";
import GradientText from "@/components/GradientText";
import CertBadge3D from "@/components/CertBadge3D";
import awsIcon from "@/assets/aws.svg";
import azureIcon from "@/assets/azure.svg";
import gcpIcon from "@/assets/gcp.svg";
import ec2Icon from "@/assets/ec2.svg";
import lambdaIcon from "@/assets/lambda.svg";
import cloudwatchIcon from "@/assets/cloudwatch.svg";
import redshiftIcon from "@/assets/redshift.svg";
import shellIcon from "@/assets/shell.png";

// ============ Navbar Component ============
const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a href={href} className="group relative inline-block overflow-hidden h-5 flex items-center text-sm">
            <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
                <span className="text-gray-300">{children}</span>
                <span className="text-white">{children}</span>
            </div>
        </a>
    );
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
    const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
        if (isOpen) {
            setHeaderShapeClass('rounded-xl');
        } else {
            shapeTimeoutRef.current = setTimeout(() => setHeaderShapeClass('rounded-full'), 300);
        }
        return () => { if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current); };
    }, [isOpen]);

    const navLinksData = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#work-experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Blogs', href: '#blogs' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center pl-6 pr-6 py-3 backdrop-blur-sm
                       ${headerShapeClass} border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto transition-[border-radius] duration-0 ease-in-out`}>
            <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
                <div className="flex items-center">
                    <span className="text-white font-jersey text-4xl">AM</span>
                </div>
                <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
                    {navLinksData.map((link) => (
                        <AnimatedNavLink key={link.href} href={link.href}>{link.label}</AnimatedNavLink>
                    ))}
                </nav>
                <div className="hidden sm:flex items-center gap-2 sm:gap-3">
                    <GradientButton className="px-6 py-2 text-sm">
                        <a href="#contact">Let's Talk</a>
                    </GradientButton>
                </div>
                <button className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" onClick={toggleMenu}>
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>
            <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center space-y-4 text-base w-full">
                    {navLinksData.map((link) => (
                        <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors w-full text-center">{link.label}</a>
                    ))}
                </nav>
                <div className="flex flex-col items-center space-y-4 mt-4 w-full">
                    <GradientButton className="w-full">
                        <a href="#contact">Let's Talk</a>
                    </GradientButton>
                </div>
            </div>
        </header>
    );
}

// ============ Hero Section ============
function HeroSection() {
    return (
        <section id="hero" className="min-h-screen mt-20 flex flex-col justify-center items-center text-center px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 max-w-3xl"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
                >
                    <span className="text-white/70 text-sm">👋 Welcome to my portfolio</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    <h3 className="text-[50px]">
                        Hi, I'm</h3>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        <span className="font-jersey text-[80px]">Ayaz Mirza</span>
                    </GradientText>
                </h1>

                <p className="text-lg md:text-lg text-white/60 font-light max-w-2xl mx-auto">
                    Senior Consultant at Wipro with 6+ years of experience in ETL development using Ab Initio ETL tool.
                    Experienced in working with cloud providers like AWS, Azure and GCP.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
                >
                    <GradientButton>
                        <a href="#projects">View Projects</a>
                    </GradientButton>
                    <CVDownload />
                    <GradientButton variant="variant" asChild>
                        <a href="mailto:ayazmirza54@gmail.com?subject=Hello%20Ayaz!">Get in Touch</a>
                    </GradientButton>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex gap-4 justify-center pt-6"
                >
                    <a
                        href="https://www.linkedin.com/in/ayazmirza54"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border-2 border-gray-600 bg-black flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-400 transition-all hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                    <a
                        href="https://github.com/ayazmirza54"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border-2 border-gray-600 bg-black flex items-center justify-center text-white/70 hover:text-green-400 hover:border-green-400 transition-all hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    <a
                        href="https://twitter.com/ayazmirza54"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border-2 border-gray-600 bg-black flex items-center justify-center text-white/70 hover:text-sky-400 hover:border-sky-400 transition-all hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a
                        href="https://dev.to/ayazmirza54"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border-2 border-gray-600 bg-black flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all hover:scale-110"
                    >
                        <FaDev size={20} />         </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}

// ============ About Section ============
function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl text-center space-y-8"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
                <p className="text-lg text-white/70 leading-relaxed">
                    Data Engineer with 6+ years of experience in designing, building, and optimizing high-volume ETL
                    pipelines using Ab Initio and SQL. Skilled in automation with Shell scripting and Ansible, data
                    visualization with Power BI, and leveraging Google Cloud Platform (GCP) & AWS for scalable cloud based solutions. Strong background in troubleshooting performance issues, ensuring data quality, and
                    delivering efficient, reliable data workflows.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                    {[
                        { label: "Years Experience", value: "6+" },
                        { label: "Projects Completed", value: "13+" },
                        { label: "Technologies", value: "15+" },
                        { label: "Happy Clients", value: "2+" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="relative rounded-2xl border-2 border-gray-600 p-2"
                        >
                            <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={4} />
                            <div className="relative bg-black rounded-xl p-6 h-full">
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-white/60">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

// ============ Tech Stack Marquee Strip ============
const accentColors = [
    "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    "from-violet-500/20 to-purple-500/20 border-violet-500/30",
    "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    "from-orange-500/20 to-amber-500/20 border-orange-500/30",
    "from-pink-500/20 to-rose-500/20 border-pink-500/30",
];

const accentDot = [
    "bg-cyan-400",
    "bg-violet-400",
    "bg-emerald-400",
    "bg-orange-400",
    "bg-pink-400",
];

function MarqueeRow({
    techs,
    direction = "left",
}: {
    techs: { name: string; icon: string; svgIcon?: string }[];
    direction?: "left" | "right" | "left-slow";
}) {
    // Duplicate twice so seamless loop always has enough content
    const items = [...techs, ...techs, ...techs, ...techs];
    const trackClass =
        direction === "right"
            ? "marquee-track marquee-track--right"
            : direction === "left-slow"
                ? "marquee-track marquee-track--left-slow"
                : "marquee-track marquee-track--left";

    return (
        <div className="marquee-viewport py-1">
            <div className={trackClass}>
                {items.map((tech, i) => (
                    <div
                        key={`${tech.name}-${i}`}
                        className="flex-shrink-0 mx-2 flex items-center gap-2.5 px-4 py-2.5
                                   rounded-xl border border-white/20 bg-[#111]
                                   hover:bg-[#1c1c1c] hover:border-white/40
                                   transition-colors duration-300 cursor-default group"
                    >
                        {tech.svgIcon ? (
                            <img
                                src={tech.svgIcon}
                                alt={tech.name}
                                className="w-5 h-5 object-contain flex-shrink-0
                                           group-hover:scale-110 transition-transform duration-300"
                            />
                        ) : (
                            <span className="text-xl leading-none flex-shrink-0
                                            group-hover:scale-110 transition-transform duration-300">
                                {tech.icon}
                            </span>
                        )}
                        <span className="text-white/70 text-sm font-medium whitespace-nowrap
                                         group-hover:text-white transition-colors duration-300">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TechStackSection() {
    const categories: { label: string; techs: { name: string; icon: string; svgIcon?: string }[] }[] = [
        {
            label: "Languages",
            techs: [
                { name: "JavaScript", icon: "⚡" },
                { name: "HTML5", icon: "🌐" },
                { name: "CSS3", icon: "🎨" },
                { name: "Markdown", icon: "📝" },
                { name: "Shell Script", icon: "", svgIcon: shellIcon },
                { name: "C++", icon: "⚙️" },
                { name: "C", icon: "🔧" },
            ],
        },
        {
            label: "Frameworks & Libraries",
            techs: [
                { name: "React", icon: "⚛️" },
                { name: "React Router", icon: "🛣️" },
                { name: "Express.js", icon: "🚂" },
                { name: "Node.js", icon: "📦" },
                { name: "TailwindCSS", icon: "💨" },
                { name: "Bootstrap", icon: "🅱️" },
            ],
        },
        {
            label: "Databases",
            techs: [
                { name: "MySQL", icon: "🗄️" },
                { name: "PostgreSQL", icon: "🐘" },
            ],
        },
        {
            label: "Tools & Platforms",
            techs: [
                { name: "Canva", icon: "🎨" },
                { name: "Figma", icon: "🎯" },
                { name: "Ansible", icon: "🔄" },
                { name: "Notion", icon: "📓" },
                { name: "Git", icon: "🔀" },
                { name: "Ab Initio ETL", icon: "🏭" },
                { name: "Power BI", icon: "📊" },
                { name: "Grafana", icon: "📈" },
                { name: "Gemini AI", icon: "🤖" },
                { name: "Claude AI", icon: "🧠" },
                { name: "ChatGPT", icon: "💬" },
            ],
        },
        {
            label: "Cloud Technologies",
            techs: [
                { name: "AWS", icon: "", svgIcon: awsIcon },
                { name: "Azure", icon: "", svgIcon: azureIcon },
                { name: "GCP", icon: "", svgIcon: gcpIcon },
                { name: "AWS EC2", icon: "", svgIcon: ec2Icon },
                { name: "AWS Lambda", icon: "", svgIcon: lambdaIcon },
                { name: "CloudWatch", icon: "", svgIcon: cloudwatchIcon },
                { name: "Redshift", icon: "", svgIcon: redshiftIcon },
                { name: "Docker", icon: "🐳" },
            ],
        },
    ];

    const directions: ("left" | "right" | "left-slow")[] = [
        "left",
        "right",
        "left-slow",
        "right",
        "left",
    ];

    const certifications = [
        {
            imageSrc: "/image.png",
            title: "Associate Cloud Engineer",
            subtitle: "Google Cloud Certified",
        },
    ];

    return (
        <section id="tech-stack" className="flex flex-col justify-center py-24 overflow-hidden">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16 px-4"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
                <p className="text-white/40 text-sm mt-4 tracking-widest uppercase">
                    Hover any strip to pause · scroll to explore
                </p>
            </motion.div>

            {/* Marquee rows */}
            <div className="flex flex-col gap-6">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, x: directions[idx] === "right" ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Category label */}
                        <div className="flex items-center gap-3 px-6 mb-3">
                            <span className={`w-2 h-2 rounded-full ${accentDot[idx % accentDot.length]}`} />
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                                {cat.label}
                            </span>
                            <div className="h-px flex-1 bg-white/[0.06]" />
                        </div>

                        {/* Gradient band behind each strip */}
                        <div
                            className={`absolute inset-y-6 inset-x-0 rounded-2xl bg-gradient-to-r ${accentColors[idx % accentColors.length]}
                                        border opacity-50 blur-sm pointer-events-none`}
                        />

                        <MarqueeRow techs={cat.techs} direction={directions[idx]} />
                    </motion.div>
                ))}
            </div>

            {/* Certifications */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-20 px-4"
            >
                <div className="flex items-center gap-3 mb-8 max-w-6xl mx-auto">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                        Certifications
                    </span>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {certifications.map((cert) => (
                        <CertBadge3D
                            key={cert.title}
                            imageSrc={cert.imageSrc}
                            title={cert.title}
                            subtitle={cert.subtitle}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}


// ============ Main Portfolio Component ============
export function Portfolio() {
    const [initialCanvasVisible] = useState(true);

    return (
        <div className="flex w-full flex-col min-h-screen bg-black relative">
            {/* Shader Background */}
            <div className="fixed inset-0 z-0">
                {initialCanvasVisible && (
                    <div className="absolute inset-0">
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-black"
                            colors={[[255, 255, 255], [255, 255, 255]]}
                            dotSize={6}
                            opacities={[0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
                            reverse={false}
                        />
                    </div>
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,1)_0%,_transparent_100%)]" />
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <WorkExp />
                    <TechStackSection />
                    <Projects />
                    <Blogs />
                    <SocialLinks />
                </main>

                {/* Footer */}
                <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10">
                    <p>© 2026 Ayaz Mirza. Built with ✨ & ❤️</p>
                </footer>
            </div>
        </div>
    );
}

export default Portfolio;
