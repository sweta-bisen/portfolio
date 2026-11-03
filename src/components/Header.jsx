/* Header.jsx — sticky nav that tucks away while scrolling down. */

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, portfolio } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 80 && !open);
  });

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-line bg-paper/75 backdrop-blur-xl"
      animate={{ y: hidden ? -88 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-serif text-lg tracking-tight">
          {portfolio.name}
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="Page">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-leaf">
              {item.label}
            </a>
          ))}
          <a
            href={portfolio.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-4 py-1.5 font-medium text-ink transition hover:bg-leaf hover:text-paper"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden" aria-label="Page">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="px-1 py-2.5 text-sm" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={portfolio.resume} target="_blank" rel="noreferrer" className="px-1 py-2.5 text-sm text-leaf">
            Résumé
          </a>
        </nav>
      )}
    </motion.header>
  );
}
