import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import { scrollToSection } from "../../hooks/useActiveSection";
import SocialLinks from "../SocialLinks/SocialLinks";
import OrbitalAnimation from "./OrbitalAnimation";
import styles from "./Hero.module.css";

export default function Hero() {
  const words = ["Full Stack Developer", "MERN Stack Developer"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className={styles.hero} aria-label="Home">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className={styles.greeting}>Hi, I&apos;m Abdullah</p>

          <h1 className={styles.title}>
            {text}
            <span className={styles.cursor}>|</span>
          </h1>

          <p className={styles.description}>
            I build modern, responsive and interactive web experiences using
            modern frontend technologies.
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={() => scrollToSection("projects")}
            >
              <FolderOpen size={18} aria-hidden="true" />
              View Projects
            </button>

            <button
              type="button"
              className={styles.btnSecondary}
              onClick={() => window.open("/abdullah-resume.pdf", "_blank")}
            >
              <Download size={18} aria-hidden="true" />
              <span> MY CV</span>
            </button>
          </div>

          <SocialLinks className={styles.social} />
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <OrbitalAnimation />
        </motion.div>
      </div>
    </section>
  );
}