import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up"); // Initial state is "up"
  const [prevScroll, setPrevScroll] = useState(0); // Initial previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setScrollDirection("up");
        return;
      }

      if (Math.abs(currentScroll - prevScroll) < 10) {
        return;
      }

      const direction = currentScroll > prevScroll ? "down" : "up";
      setScrollDirection(direction);
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]); // Depend on prevScroll to track the change

  return scrollDirection;
}
