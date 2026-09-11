import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styles from "./ProjectCard.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectCard({ project }) {
  return (
    <motion.article className={styles.card} variants={cardVariants}>
      <div className={styles.imageWrap}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <ul className={styles.tags} role="list">
          {project.technologies.map((tech) => (
            <li key={tech} className={styles.tag}>{tech}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href={project.github} className={styles.btn} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" aria-hidden="true" />
            GitHub
          </a>
          <a href={project.demo} className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
