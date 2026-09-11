import { motion } from "framer-motion";
import styles from "./SkillCard.module.css";

const ICON_CLASS = {
  html5: "devicon-html5-plain colored",
  css3: "devicon-css3-plain colored",
  bootstrap: "devicon-bootstrap-plain colored",
  javascript: "devicon-javascript-plain colored",
  typescript: "devicon-typescript-plain colored",
  react: "devicon-react-original colored",
  nextjs: "devicon-nextjs-original",
  reactnative: "devicon-react-original colored",
  redux: "devicon-redux-original colored",
  nodejs: "devicon-nodejs-plain colored",
  express: "devicon-express-original",
  mongodb: "devicon-mongodb-plain colored",
  git: "devicon-git-plain colored",
  github: "devicon-github-original",
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function SkillCard({ skill }) {
  const iconClass = ICON_CLASS[skill.icon] || "devicon-devicon-plain";

  return (
    <motion.div className={styles.card} variants={cardVariants}>
      <i className={`${iconClass} ${styles.icon}`} aria-hidden="true" />
      <span className={styles.name}>{skill.name}</span>
    </motion.div>
  );
}
