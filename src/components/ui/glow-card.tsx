import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
    return (
        <div className={cn("relative rounded-2xl border border-gray-800/50 p-2", className)}>
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-black">
                {children}
            </div>
        </div>
    );
}
