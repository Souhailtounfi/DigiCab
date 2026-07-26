import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFloat() {
  const href = `https://wa.me/212639286401?text=${encodeURIComponent("Bonjour CliniCab")}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow hover:bg-[#20BD5A] transition-colors"
      aria-label="WhatsApp"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="size-6 relative" />
    </motion.a>
  );
}