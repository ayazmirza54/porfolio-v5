import React, { useRef, useState, useCallback, useEffect } from "react";
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

    // Spin animation state
    const [spinAngle, setSpinAngle] = useState(0);
    const spinStartTime = useRef<number | null>(null);
    const rafId = useRef<number | null>(null);
    const hasSpun = useRef(false);

    const SPIN_DURATION = 800; // ms for one full 360° rotation

    const animateSpin = useCallback((timestamp: number) => {
        if (spinStartTime.current === null) {
            spinStartTime.current = timestamp;
        }

        const elapsed = timestamp - spinStartTime.current;
        const progress = Math.min(elapsed / SPIN_DURATION, 1);

        // Ease-in-out cubic for a smooth spin
        const eased =
            progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        setSpinAngle(eased * 360);

        if (progress < 1) {
            rafId.current = requestAnimationFrame(animateSpin);
        } else {
            // Spin complete
            setSpinAngle(360); // Keep at 360 (visually same as 0) to avoid snap
            hasSpun.current = true;
            rafId.current = null;
            spinStartTime.current = null;
        }
    }, []);

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
        setSpinAngle(0);
        hasSpun.current = false;
        spinStartTime.current = null;
        if (rafId.current !== null) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
        // Kick off the spin animation
        hasSpun.current = false;
        spinStartTime.current = null;
        rafId.current = requestAnimationFrame(animateSpin);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (rafId.current !== null) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    const totalRotateY = rotateY + spinAngle;

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
                    transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${totalRotateY}deg) scale(${isHovering ? 1.05 : 1})`,
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

