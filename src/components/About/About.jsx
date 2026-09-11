import { motion } from "framer-motion";
import { ABOUT_CARDS } from "../../data/constants";
import styles from "./About.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className={styles.about} aria-label="About">
      <div className={styles.container}>
        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.intro}>
            I&apos;m a passionate frontend developer focused on crafting clean, performant,
            and user-centered web applications. I enjoy turning complex problems into
            elegant, intuitive interfaces using modern tools like React, TypeScript, and
            Framer Motion.
          </p>
          <p className={styles.intro}>
            With a strong eye for design and a commitment to best practices, I strive to
            deliver experiences that are both visually stunning and technically solid.
          </p>
        </motion.div>

        <motion.div
          className={styles.cardsCol}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ABOUT_CARDS.map((card) => (
            <motion.div key={card.title} className={styles.card} variants={itemVariants}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
