import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CertBadge3DProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    link?: string;
}

export default function CertBadge3D({ imageSrc, title, subtitle, link }: CertBadge3DProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glareX, setGlareX] = useState(50);
    const [glareY, setGlareY] = useState(50);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Tilt: max ±20deg
        const rY = (mouseX / (rect.width / 2)) * 20;
        const rX = -(mouseY / (rect.height / 2)) * 20;

        setRotateX(rX);
        setRotateY(rY);

        // Glare position
        const gX = ((e.clientX - rect.left) / rect.width) * 100;
        const gY = ((e.clientY - rect.top) / rect.height) * 100;
        setGlareX(gX);
        setGlareY(gY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setGlareX(50);
        setGlareY(50);
        setIsHovering(false);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const content = (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="cert-badge-3d-wrapper"
        >
            {/* Ambient glow behind the badge */}
            <div
                className="cert-badge-3d-glow"
                style={{
                    opacity: isHovering ? 0.8 : 0.3,
                }}
            />

            {/* 3D Card */}
            <div
                className="cert-badge-3d-card"
                style={{
                    transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovering ? 1.05 : 1})`,
                }}
            >
                {/* Badge image */}
                <div className="cert-badge-3d-image-container">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="cert-badge-3d-image"
                        draggable={false}
                    />

                    {/* Holographic shine overlay */}
                    <div
                        className="cert-badge-3d-shine"
                        style={{
                            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 30%, transparent 70%)`,
                            opacity: isHovering ? 1 : 0,
                        }}
                    />

                    {/* Edge highlight ring */}
                    <div
                        className="cert-badge-3d-ring"
                        style={{
                            opacity: isHovering ? 1 : 0,
                        }}
                    />
                </div>

                {/* Text label below badge */}
                <div className="cert-badge-3d-label">
                    <span className="cert-badge-3d-title">{title}</span>
                    <span className="cert-badge-3d-subtitle">{subtitle}</span>
                </div>
            </div>

            {/* Floating particles */}
            {isHovering && (
                <>
                    <div className="cert-badge-particle cert-badge-particle-1" />
                    <div className="cert-badge-particle cert-badge-particle-2" />
                    <div className="cert-badge-particle cert-badge-particle-3" />
                </>
            )}
        </motion.div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="cert-badge-3d-link">
                {content}
            </a>
        );
    }

    return content;
}
