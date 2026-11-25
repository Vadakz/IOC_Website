
import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, duration = 2200 }) {
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(String(value ?? ""));

  useEffect(() => {
    const originalValue = String(value ?? "");
    const numberPattern = /(\d[\d,]*(?:\.\d+)?)/g;
    const matches = [...originalValue.matchAll(numberPattern)];

    // Leave text without numbers unchanged.
    if (!matches.length) {
      setDisplayValue(originalValue);
      return;
    }

    const parts = originalValue.split(numberPattern);

    const numbers = matches.map((match) => {
      const text = match[0];

      return {
        target: Number(text.replace(/,/g, "")),
        decimals: (text.split(".")[1] || "").length,
        useGrouping: text.includes(","),
      };
    });

    const formatValue = (number, config) => {
      return new Intl.NumberFormat("en-US", {
        useGrouping: config.useGrouping,
        minimumFractionDigits: config.decimals,
        maximumFractionDigits: config.decimals,
      }).format(number);
    };

    const renderValue = (progress) => {
      let numberIndex = 0;

      return parts
        .map((part) => {
          if (/^\d[\d,]*(?:\.\d+)?$/.test(part)) {
            const config = numbers[numberIndex];
            const currentNumber = config.target * progress;

            numberIndex++;

            return formatValue(currentNumber, config);
          }

          return part;
        })
        .join("");
    };

    const showFinalValue = () => {
      setDisplayValue(originalValue);
    };

    setDisplayValue(renderValue(0));

    const element = elementRef.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      showFinalValue();
      return;
    }

    let hasStarted = false;
    let observer;

    const startAnimation = () => {
      if (hasStarted) return;

      hasStarted = true;

      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out animation.
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setDisplayValue(renderValue(easedProgress));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          showFinalValue();
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(element);
    } else {
      startAnimation();
    }

    return () => {
      observer?.disconnect();

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} aria-label={String(value ?? "")}>
      {displayValue}
    </span>
  );
}
