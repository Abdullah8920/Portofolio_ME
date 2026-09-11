import { useState, useEffect } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const ratios = {};
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratios[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
          });

          let bestId = sectionIds[0];
          let bestRatio = 0;

          sectionIds.forEach((sectionId) => {
            const ratio = ratios[sectionId] ?? 0;
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = sectionId;
            }
          });

          if (bestRatio > 0) {
            setActiveSection(bestId);
          }
        },
        {
          rootMargin: "-35% 0px -35% 0px",
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return activeSection;
}

export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
