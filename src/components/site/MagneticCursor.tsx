import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Ambient glow that softly follows the mouse — purely decorative, layered
 * under the real cursor. Feels alive without being distracting.
 */
export function MagneticCursor() {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const sx = useSpring(mx, { damping: 28, stiffness: 120 });
  const sy = useSpring(my, { damping: 28, stiffness: 120 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9990]"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: 320,
        height: 320,
        borderRadius: "50%",
        background: "radial-gradient(circle, oklch(0.66 0.2 262 / 0.08) 0%, transparent 70%)",
      }}
    />
  );
}
