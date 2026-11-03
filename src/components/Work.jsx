/* Work.jsx — production systems, each led by its résumé result. */

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data.js";
import ProjectDiagram from "./ProjectDiagram.jsx";
import Section from "./Section.jsx";

export default function Work() {
  const reduce = useReducedMotion();

  return (
    <Section id="work" label="Selected systems">
      <div className="grid gap-4 lg:grid-cols-6">
        {portfolio.projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-accent/35 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduce ? undefined : { y: -4 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: reduce ? 0 : index * 0.04 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted">0{index + 1}</p>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-leaf"
              />
            </div>
            <ProjectDiagram name={project.title} />
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-2 font-serif text-xl leading-snug text-leaf">{project.result}</p>
            <p className="mt-4 text-sm text-muted">
              <span className="font-medium text-ink">Problem. </span>
              {project.problem}
            </p>
            <p className="mt-2 text-sm text-muted">
              <span className="font-medium text-ink">Built. </span>
              {project.built}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-5">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
