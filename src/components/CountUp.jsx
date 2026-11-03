/* CountUp.jsx — animates a résumé metric once it scrolls into view. */

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export default function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCurrent(value);
      return;
    }

    const start = performance.now();
    const duration = 900;
    let frame = 0;

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
}
