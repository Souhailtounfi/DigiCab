import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion";

type TiltCardProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  popular?: boolean;
};

export function TiltCard({ children, className = "", popular = false, ...props }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Toned-down tilt: ±4° — smooth, not jarring
  const rotateX = useSpring(useTransform(y, [0, 1], [4, -4]), { damping: 30, stiffness: 180 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-4, 4]), { damping: 30, stiffness: 180 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        x.set(0.5);
        y.set(0.5);
      }}
      style={{
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative rounded-2xl border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-elegant ${
        popular ? "border-primary/50" : "border-border"
      } ${className}`}
      {...props}
    >
      {/* Subtle spotlight glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
        style={{
          background: `radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), oklch(0.56 0.2 262 / 0.08), transparent 70%)`,
        }}
        aria-hidden
      />

      <div style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
