import { motion, LayoutGroup } from "framer-motion";
import { Home, User, Code2, FolderOpen, Mail } from "lucide-react";
import { NAV_ITEMS } from "../../data/constants";
import { scrollToSection } from "../../hooks/useActiveSection";
import styles from "./Navbar.module.css";

const ICON_MAP = {
  home: Home,
  user: User,
  code: Code2,
  folder: FolderOpen,
  mail: Mail,
};

export default function Navbar({ activeSection }) {
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <LayoutGroup>
        <div className={styles.navContainer}>
        <ul className={styles.navList} role="list">
          {NAV_ITEMS.map(({ id, label, icon }) => {
            const Icon = ICON_MAP[icon];
            const isActive = activeSection === id;

            return (
              <li key={id} className={styles.navItem}>
                <button
                  type="button"
                  className={`${styles.navButton} ${isActive ? styles.active : ""}`}
                  onClick={() => scrollToSection(id)}
                  aria-current={isActive ? "true" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill-indicator"
                      className={styles.pillIndicator}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon size={16} aria-hidden="true" />
                  <span>{label}</span>
                </button>
                {isActive && (
                  <motion.span
                    layoutId="nav-line-indicator"
                    className={styles.itemLine}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
        </div>
      </LayoutGroup>
    </nav>
  );
}
