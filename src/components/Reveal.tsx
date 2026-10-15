import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  as?: "div" | "article";
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  children: ReactNode;
};

/**
 * Scroll entrance that never hides content by default. The server renders the
 * element visible; after hydration only an element still below the fold is
 * dropped and then lifted in, so a reader without JS, a crawler, or anyone who
 * prefers reduced motion always sees it in place.
 */
export function Reveal({
  as = "div",
  className,
  delay = 0,
  y = 16,
  amount = 0.2,
  children,
}: RevealProps) {
  const element = useRef<HTMLElement | null>(null);
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = element.current;
    if (!node) return;
    if (reduceMotion) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    controls.set({ opacity: 0, y });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        void controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay, ease: "easeOut" },
        });
      },
      { threshold: amount },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, reduceMotion, y, amount, delay]);

  const ref = (node: HTMLElement | null) => {
    element.current = node;
  };

  return as === "article" ? (
    <motion.article ref={ref} animate={controls} className={className}>
      {children}
    </motion.article>
  ) : (
    <motion.div ref={ref} animate={controls} className={className}>
      {children}
    </motion.div>
  );
}
