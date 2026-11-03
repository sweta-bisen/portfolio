/* Hero.jsx — résumé headline, agent pipeline, and production metrics. */

import { motion, useReducedMotion } from "framer-motion";
import { FileText, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data.js";
import Pipeline from "./Pipeline.jsx";
import Portrait from "./Portrait.jsx";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-8 sm:px-8 sm:pt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(240px,22rem)] lg:items-center lg:gap-16">
        <div>
          <motion.p
            className="text-sm text-muted"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {portfolio.role} · {portfolio.location} · Bluegem IT Solution
          </motion.p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.08] font-medium tracking-tight sm:text-6xl">
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {portfolio.headline}
            </motion.span>
            <motion.span
              className="mt-2 block text-accent"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              {portfolio.headlineAccent}
            </motion.span>
          </h1>
          <motion.p
            className="mt-8 max-w-xl text-muted"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
          >
            {portfolio.about[0]}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a className="inline-flex items-center gap-1.5 underline decoration-line underline-offset-4 hover:text-leaf" href={`mailto:${portfolio.email}`}>
              <Mail size={14} aria-hidden="true" />
              {portfolio.email}
            </a>
            <a
              className="inline-flex items-center gap-1.5 underline decoration-line underline-offset-4 hover:text-leaf"
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={14} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-1.5 underline decoration-line underline-offset-4 hover:text-leaf"
              href={portfolio.resume}
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={14} aria-hidden="true" />
              Résumé
            </a>
          </motion.div>
        </div>
        <Portrait />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-4 pb-16 sm:px-8">
        <Pipeline />
      </div>
    </section>
  );
}
