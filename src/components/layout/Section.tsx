import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  bgColor?: 1 | 2 | 3 | 4;
  children: ReactNode;
}

export default function Section({ id, className = '', bgColor, children }: SectionProps) {
  // Map the bgColor number to your CSS variables
  const sectionStyle = bgColor ? { backgroundColor: `var(--color-bg-${bgColor})` } : {};

  return (
    <section id={id} className={`section ${className}`.trim()} style={sectionStyle}>
      <div className="container">{children}</div>
    </section>
  );
}
