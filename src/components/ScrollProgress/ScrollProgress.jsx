import styles from "./ScrollProgress.module.css";

export default function ScrollProgress({ progress }) {
  return (
    <div className={styles.track} aria-hidden="true">
      <div
        className={styles.bar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
