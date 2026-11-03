/* Contact.jsx — email and LinkedIn as clear actions. No phone, no form. */

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data.js";
import Section from "./Section.jsx";

const links = [
  {
    label: "Email",
    value: portfolio.email,
    href: `mailto:${portfolio.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/swetabisen",
    href: portfolio.linkedin,
    external: true,
    icon: Linkedin,
  },
];

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <Section id="contact" label="Contact">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="max-w-xl font-serif text-3xl leading-snug font-medium tracking-tight sm:text-4xl">
          Based in {portfolio.location}.
        </p>
        <p className="mt-3 max-w-lg text-muted">
          Machine learning and generative AI for healthcare, pharma, and finance.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-5 py-4 transition hover:border-accent"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-linen text-leaf">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm break-all text-ink transition group-hover:text-leaf">
                        {item.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-leaf"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </Section>
  );
}
