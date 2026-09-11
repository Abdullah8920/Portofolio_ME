import { useState, useEffect, useRef } from "react";
import { LOADING_ICONS } from "../../data/constants";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [fallen, setFallen] = useState({
    loadingText: false,
    mainIcon: false,
    icon0: false,
    icon1: false,
    icon2: false,
    designerText: false,
  });
  const loadingRef = useRef(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setFallen((s) => ({ ...s, loadingText: true })), 100),
      setTimeout(() => setFallen((s) => ({ ...s, mainIcon: true })), 900),
      setTimeout(() => setFallen((s) => ({ ...s, icon0: true })), 1700),
      setTimeout(() => setFallen((s) => ({ ...s, icon1: true })), 2100),
      setTimeout(() => setFallen((s) => ({ ...s, icon2: true })), 2500),
      setTimeout(() => setFallen((s) => ({ ...s, designerText: true })), 2900),
      setTimeout(() => {
        if (loadingRef.current) loadingRef.current.style.opacity = "0";
        setTimeout(() => onComplete(), 500);
      }, 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const fc = (key) => (fallen[key] ? "fall-anim" : "hidden-el");

  return (
    <div className="loading-screen" ref={loadingRef} aria-hidden="true">
      <h1 className={fc("loadingText")}>MY PROFILE</h1>
      <i className={`fa-solid fa-laptop-code fa-5x main-icon ${fc("mainIcon")}`} />
      <div className="sub-icons">
        {LOADING_ICONS.map((icon, i) => (
          <i key={icon} className={`${icon} fa-2x ${fc(`icon${i}`)}`} />
        ))}
      </div>
      <h2 className={fc("designerText")}>Welcome to My Portfolio</h2>
    </div>
  );
}
