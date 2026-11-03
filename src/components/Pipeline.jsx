/* Pipeline.jsx — the five-agent financial system as a quiet sequence. */

import { BarChart3, Database, Lightbulb, ListChecks, Play } from "lucide-react";
import { portfolio } from "../data.js";

const icons = [Database, ListChecks, Lightbulb, Play, BarChart3];

export default function Pipeline() {
  const { title, summary, steps } = portfolio.workflow;

  return (
    <div className="border-t border-line pt-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">{title}</p>
      <p className="mt-2 font-serif text-2xl leading-snug font-medium">{summary}</p>
      <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <li key={step.name} className="relative">
              {index < steps.length - 1 && (
                <span
                  className="absolute top-5 left-[calc(50%+1.4rem)] hidden h-px w-[calc(100%-2.8rem)] bg-brass/50 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex items-center gap-3 rounded-2xl border border-transparent px-1 py-2 transition hover:border-line hover:bg-surface lg:flex-col lg:px-2 lg:text-center">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-linen bg-linen text-leaf">
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{step.name}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted">{step.detail}</span>
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
