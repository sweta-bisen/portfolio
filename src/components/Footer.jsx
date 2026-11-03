/* Footer.jsx — short close of the page. */

import { portfolio } from "../data.js";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>
        <a href={portfolio.resume} target="_blank" rel="noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:text-leaf">
          Résumé
        </a>
      </div>
    </footer>
  );
}
