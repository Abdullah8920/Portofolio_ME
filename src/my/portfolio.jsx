import { useState, useCallback } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar/Navbar";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { SECTION_IDS } from "../data/constants";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollProgress } from "../hooks/useScrollProgress";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const scrollProgress = useScrollProgress();

  const handleLoadingComplete = useCallback(() => {
    setLoadingDone(true);
    setShowContent(true);
  }, []);

  return (
    <>
      {!loadingDone && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`${styles.mainContent} ${showContent ? styles.visible : ""}`}>
        <ScrollProgress progress={scrollProgress} />
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}
