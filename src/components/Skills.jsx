/* Skills.jsx — skill groups from the résumé, laid out as a grid. */

import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Brain, Cloud, Sparkles } from "lucide-react";
import { portfolio } from "../data.js";
import Section from "./Section.jsx";

const icons = {
  "Generative AI": Sparkles,
  "Machine Learning": Brain,
  "Cloud & Data": Cloud,
  Deployment: Boxes,
};

function GroupIcon({ icon: Icon }) {
  return <Icon size={15} strokeWidth={1.75} aria-hidden="true" />;
}

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <Section id="skills" label="Stack">
      <p className="max-w-2xl text-muted">{portfolio.about[1]}</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {portfolio.skills.map((group, index) => (
          <motion.article
            key={group.group}
            className="rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/50"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <h3 className="flex items-center gap-2 font-medium">
              {icons[group.group] && (
                <span className="grid size-8 place-items-center rounded-full bg-linen text-leaf">
                  <GroupIcon icon={icons[group.group]} />
                </span>
              )}
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full bg-paper px-3 py-1 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
