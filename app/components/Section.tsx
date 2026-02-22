import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  maxWidth?: string;
}

export default function Section({ children, className = "", id, maxWidth = "max-w-5xl" }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className={`w-full ${maxWidth} px-6 mx-auto`}>
        {children}
      </div>
    </section>
  );
}
