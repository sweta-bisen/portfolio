/* Portrait.jsx — editorial portrait. Pointer tilt is eased in one frame loop. */

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { portfolio } from "../data.js";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const FOLLOW = 0.16;

const labels = [
  { name: "Machine Learning", place: "top-0 left-0 -translate-y-[78%]" },
  { name: "Generative AI", place: "top-0 right-0 -translate-y-[78%]" },
  { name: "RAG", place: "bottom-0 left-0" },
  { name: "AI Agents", place: "bottom-0 right-0" },
];

const chipClass =
  "w-fit shrink-0 whitespace-nowrap rounded-full border border-line bg-surface px-3 py-1 text-[0.7rem] font-medium leading-none text-ink";

function setTransform(node, value) {
  if (node) node.style.transform = value;
}

export default function Portrait() {
  const reduce = useReducedMotion();
  const stageRef = useRef(null);
  const photoRef = useRef(null);
  const orbitRef = useRef(null);
  const washRef = useRef(null);
  const chipRef = useRef(null);
  const fineRef = useRef(false);
  const frameId = useRef(0);
  const running = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [missing, setMissing] = useState(false);

  function apply(nx, ny) {
    setTransform(
      photoRef.current,
      `rotateX(${(-ny * 2.2).toFixed(2)}deg) rotateY(${(nx * 2.4).toFixed(2)}deg) translate3d(${(nx * 3).toFixed(2)}px, ${(ny * 2.4).toFixed(2)}px, 0)`,
    );
    setTransform(orbitRef.current, `translate3d(${(nx * 7).toFixed(2)}px, ${(ny * 5).toFixed(2)}px, 0)`);
    setTransform(washRef.current, `translate3d(${(nx * -5).toFixed(2)}px, ${(ny * -4).toFixed(2)}px, 0)`);
    setTransform(chipRef.current, `translate3d(${(nx * 4).toFixed(2)}px, ${(ny * 3).toFixed(2)}px, 0)`);
  }

  function clearMotion() {
    cancelAnimationFrame(frameId.current);
    running.current = false;
    target.current = { x: 0, y: 0 };
    current.current = { x: 0, y: 0 };
    stageRef.current?.classList.remove("is-hover");
    for (const node of [photoRef.current, orbitRef.current, washRef.current, chipRef.current]) {
      if (node) node.style.transform = "";
    }
  }

  function tick() {
    if (!fineRef.current) {
      clearMotion();
      return;
    }
    const next = current.current;
    const goal = target.current;
    next.x += (goal.x - next.x) * FOLLOW;
    next.y += (goal.y - next.y) * FOLLOW;
    const settled = Math.abs(goal.x - next.x) < 0.004 && Math.abs(goal.y - next.y) < 0.004;
    if (settled) {
      running.current = false;
      if (goal.x === 0 && goal.y === 0) clearMotion();
      else apply(goal.x, goal.y);
      return;
    }
    apply(next.x, next.y);
    frameId.current = requestAnimationFrame(tick);
  }

  function start() {
    if (running.current) return;
    running.current = true;
    frameId.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    const hover = window.matchMedia(FINE_POINTER);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      fineRef.current = hover.matches && !motion.matches && !reduce;
      if (!fineRef.current) clearMotion();
    };
    sync();
    hover.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    return () => {
      hover.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
      cancelAnimationFrame(frameId.current);
    };
  }, [reduce]);

  function allowTilt(event) {
    return fineRef.current && event.pointerType !== "touch";
  }

  function onPointerMove(event) {
    if (!allowTilt(event)) return;
    const stage = stageRef.current;
    if (!stage) return;
    const box = stage.getBoundingClientRect();
    const nx = Math.max(-1, Math.min(1, ((event.clientX - box.left) / box.width - 0.5) * 2));
    const ny = Math.max(-1, Math.min(1, ((event.clientY - box.top) / box.height - 0.5) * 2));
    target.current = { x: nx, y: ny };
    stage.classList.add("is-hover");
    start();
  }

  function onPointerLeave() {
    target.current = { x: 0, y: 0 };
    stageRef.current?.classList.remove("is-hover");
    if (fineRef.current) start();
  }

  if (missing) return null;

  return (
    <figure
      className="portrait-figure relative mx-auto w-full max-w-[19rem] lg:mx-0 lg:max-w-[22rem] lg:justify-self-end"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div ref={stageRef} className="portrait-stage relative mx-auto aspect-square w-full">
        <span
          ref={washRef}
          aria-hidden="true"
          className="portrait-layer portrait-wash pointer-events-none absolute top-0 left-0 size-[58%] rounded-full bg-linen"
        />
        <div ref={orbitRef} aria-hidden="true" className="portrait-layer portrait-ring pointer-events-none absolute inset-0">
          <svg className="size-full text-accent" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.45" />
            <circle cx="82" cy="18" r="1.4" fill="currentColor" opacity="0.55" />
            <circle cx="78" cy="84" r="1.8" className="fill-brass" />
          </svg>
          <span className="absolute inset-[4%] rounded-full border border-accent/65" />
        </div>
        <div className="absolute inset-[8%] z-[1]">
          <div ref={photoRef} className="portrait-layer portrait-photo size-full rounded-full">
            <div className="portrait-reveal size-full rounded-full bg-paper p-[6px]">
            <img
              src={portfolio.portrait}
              alt="Sweta Bisen"
              draggable="false"
              className="aspect-square w-full rounded-full object-cover object-center"
              onError={() => setMissing(true)}
            />
            </div>
          </div>
        </div>
        <ul ref={chipRef} aria-hidden="true" className="portrait-layer portrait-meta pointer-events-none absolute inset-0 z-20 hidden lg:block">
          {labels.map((label) => (
            <li key={label.name} className={`${chipClass} absolute ${label.place}`}>
              {label.name}
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="portrait-meta mx-auto mt-4 w-fit rounded-full border border-brass/50 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-muted uppercase">
        {portfolio.role} · {portfolio.location}
      </figcaption>
      <ul className="portrait-meta mx-auto mt-4 grid w-full max-w-[17.5rem] grid-cols-2 justify-items-center gap-2 lg:sr-only">
        {labels.map((label) => (
          <li key={label.name} className={chipClass}>
            {label.name}
          </li>
        ))}
      </ul>
    </figure>
  );
}
