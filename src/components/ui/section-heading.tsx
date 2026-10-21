import { motion } from "framer-motion";

interface SectionHeadingProps {
    index: string;
    label: string;
    title: string;
    description?: string;
}

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <p className="eyebrow mb-3">
                <span className="text-white/30">// {index}</span> {label}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">{title}</h2>
            {description && <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">{description}</p>}
        </motion.div>
    );
}
