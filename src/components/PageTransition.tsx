import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {/* Lift only, never fade: the page, and the hero headline as its LCP
          element, stay visible before JS runs and under reduced motion. */}
      <motion.div
        initial={{ y: 12 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
