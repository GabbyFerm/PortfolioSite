import { useEffect, useRef, useState } from 'react';

interface SquiggleProps {
  delay?: number;
}

export default function Squiggle({ delay = 0 }: SquiggleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const squiggleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
        rootMargin: '-50px', // Start animation slightly before it enters viewport
      }
    );

    if (squiggleRef.current) {
      observer.observe(squiggleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={squiggleRef}
      className={`squiggle ${isVisible ? 'animate' : ''}`}
      style={{ animationDelay: `${delay}s` }}
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 5 Q10 2, 20 5 T40 5 T60 5 T80 5 T100 5 T120 5 T140 5 T160 5 T180 5 T200 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
