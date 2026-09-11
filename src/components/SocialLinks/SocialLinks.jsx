import { SOCIAL_LINKS } from "../../data/constants";
import styles from "./SocialLinks.module.css";

const FA_ICONS = {
  github: "fa-brands fa-github",
  linkedin: "fa-brands fa-linkedin",
  instagram: "fa-brands fa-instagram",
  "message-circle": "fa-brands fa-discord",
};

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`${styles.list} ${className}`} role="list">
      {SOCIAL_LINKS.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={styles.link}
          >
            <i className={FA_ICONS[icon]} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
