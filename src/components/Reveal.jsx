/* Reveal.jsx — short fade on scroll. Skips motion when the user prefers reduced motion. */

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
