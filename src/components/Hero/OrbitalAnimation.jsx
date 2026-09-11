import styles from "./OrbitalAnimation.module.css";

const RING1_DOTS = [0, 120, 240];
const RING2_DOTS = [60, 180, 300];
const RING3_DOTS = [30, 150, 270];

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${10 + (i * 7) % 80}%`,
  left: `${5 + (i * 11) % 90}%`,
  delay: `${i * 0.4}s`,
  size: i % 3 === 0 ? "Lg" : i % 2 === 0 ? "Md" : "Sm",
}));

function OrbitDot({ angle, sizeClass }) {
  return (
    <span
      className={`${styles.orbitDot} ${styles[sizeClass]}`}
      style={{ "--angle": `${angle}deg` }}
    />
  );
}

export default function OrbitalAnimation() {
  return (
    <div className={styles.orbitalSystem} aria-hidden="true">
      <div className={`${styles.orbitRing} ${styles.orbit1}`}>
        {RING1_DOTS.map((angle) => (
          <OrbitDot key={`r1-${angle}`} angle={angle} sizeClass="dotSm" />
        ))}
      </div>

      <div className={`${styles.orbitRing} ${styles.orbit2}`}>
        {RING2_DOTS.map((angle) => (
          <OrbitDot key={`r2-${angle}`} angle={angle} sizeClass="dotMd" />
        ))}
      </div>

      <div className={`${styles.orbitRing} ${styles.orbit3}`}>
        {RING3_DOTS.map((angle) => (
          <OrbitDot key={`r3-${angle}`} angle={angle} sizeClass="dotLg" />
        ))}
      </div>

      <div className={styles.profileWrapper}>
        <div className={styles.innerGlow} />
        <div className={styles.profileRing}>
          <img
            src="/profile.jpg"
            alt="Abdullah — Frontend Developer"
            className={styles.profileImage}
            onError={(e) => {
              e.currentTarget.src = "/Abdullah.jepg.jpeg";
            }}
          />
        </div>
      </div>

      <div className={styles.particles}>
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={`${styles.particle} ${styles[`particle${p.size}`]}`}
            style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          />
        ))}
      </div>
    </div>
  );
}
