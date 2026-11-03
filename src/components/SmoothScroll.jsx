/* SmoothScroll.jsx — Lenis wheel smoothing. Native scroll stays on for reduced motion. */

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });

    const onClick = (event) => {
      const node = event.target instanceof Element ? event.target : event.target.parentElement;
      const link = node?.closest("a[href^='#']");
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -72 });
    };

    document.addEventListener("click", onClick);
    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
