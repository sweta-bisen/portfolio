/* App.jsx — composes the portfolio and the scroll progress bar. */

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <SmoothScroll />
      {!reduce && (
        <motion.div
          className="fixed top-0 right-0 left-0 z-50 h-0.5 origin-left bg-accent"
          style={{ scaleX }}
        />
      )}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
