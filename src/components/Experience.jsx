/* Experience.jsx — current role and education from the résumé. */

import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "../data.js";
import CountUp from "./CountUp.jsx";
import Section from "./Section.jsx";

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section id="experience" label="Experience">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_14.5rem] lg:items-start">
      <div>
      {portfolio.experience.map((job) => (
        <article key={job.role} className="relative border-l border-line pl-7">
          <motion.span
            className="absolute top-1.5 -left-px h-[calc(100%-0.5rem)] w-px origin-top bg-accent"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-hidden="true"
          />
          <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="text-sm text-muted">{job.dates}</p>
          <h3 className="mt-2 font-serif text-3xl leading-tight font-medium">{job.role}</h3>
          <p className="mt-1 text-leaf">{job.org}</p>
          <ul className="mt-6 max-w-2xl space-y-3 text-muted">
            {job.points.map((point) => (
              <li key={point} className="grid grid-cols-[auto_1fr] gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}

      <div className="mt-14 border-t border-line pt-8">
        <h3 className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Education</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {portfolio.education.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
      </div>
      <dl className="grid grid-cols-3 gap-4 rounded-3xl bg-linen p-5 lg:sticky lg:top-28 lg:grid-cols-1 lg:gap-6 lg:p-6">
        {portfolio.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-serif text-4xl text-ink">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </dt>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
      </div>
    </Section>
  );
}
