"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedLogo({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`flex items-center justify-center gap-0 overflow-visible pr-4 ${className}`}>
      {/* "AI" */}
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="text-[40px] sm:text-[72px] md:text-[88px] font-bold tracking-[-0.04em] text-[#1d1d1f] leading-none"
      >
        AI
      </motion.span>

      {/* space */}
      <div className="w-3 sm:w-4" />

      {/* "Studio" with animated gradient */}
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="text-[40px] sm:text-[72px] md:text-[88px] font-bold tracking-[-0.04em] leading-none relative"
        style={{
          background: "linear-gradient(135deg, #e8590c 0%, #d4a017 50%, #e8590c 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: reduceMotion ? "none" : "gradientShift 4s ease-in-out infinite",
        }}
      >
        Studio
        {/* Underline */}
        <motion.div
          className="absolute bottom-[-4px] left-0 right-0 h-[3px] rounded-full origin-left"
          style={{ background: "linear-gradient(90deg, #e8590c, #d4a017)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        />
      </motion.span>

      {/* Dot */}
      <motion.div
        className="relative ml-2 self-start mt-[12px] sm:mt-[22px] md:mt-[28px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#e8590c]" />
        {!reduceMotion && (
          <motion.div
            className="absolute inset-0 rounded-full border-[1.5px] border-[#e8590c]"
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ delay: 1.4, duration: 1.2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* CSS animation for gradient shift */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </div>
  );
}
