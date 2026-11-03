/* Section.jsx — label column plus content, shared by the lower sections. */

export default function Section({ id, label, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-16">
        <h2 className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-accent uppercase md:pt-1">
          <span className="h-px w-5 shrink-0 bg-brass" aria-hidden="true" />
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
