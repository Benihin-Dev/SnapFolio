import React from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getAnimationClass = () => {
    if (!inView) return "opacity-0";

    const baseClass =
      "transform transition-all duration-1000 ease-out opacity-100";
    const translations = {
      up: "translate-y-0",
      left: "translate-x-0",
      right: "translate-x-0",
    };

    const initialTranslations = {
      up: "translate-y-16",
      left: "-translate-x-16",
      right: "translate-x-16",
    };

    return `${baseClass} ${
      inView ? translations[direction] : initialTranslations[direction]
    }`;
  };

  return (
    <div
      ref={ref}
      className={getAnimationClass()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
