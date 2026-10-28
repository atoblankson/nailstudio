import React from "react";

export interface SquiggleProps extends React.SVGProps<SVGSVGElement> {
  variant?: "a" | "b" | "c";
  className?: string;
  strokeWidth?: number | string;
}

export const Squiggle: React.FC<SquiggleProps> = ({
  variant = "a",
  className = "",
  strokeWidth = 1,
  ...props
}) => {
  // Variant A: Long elegant S-curve for top-right of the page
  if (variant === "a") {
    return (
      <svg
        viewBox="0 0 240 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute pointer-events-none text-ink/40 w-48 md:w-60 h-auto ${className}`}
        {...props}
      >
        <path
          d="M8 55 C 50 15, 100 80, 155 35 C 190 6, 215 50, 235 30"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  // Variant B: Curve cascading downward from left of the hero arch
  if (variant === "b") {
    return (
      <svg
        viewBox="0 0 90 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute pointer-events-none text-ink/40 w-16 md:w-20 h-auto ${className}`}
        {...props}
      >
        <path
          d="M75 10 C 35 45, 12 95, 38 140 C 65 185, 45 225, 18 250"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  // Variant C: Small delicate curl / swirl for gift card or accent details
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute pointer-events-none text-ink/40 w-14 md:w-16 h-auto ${className}`}
      {...props}
    >
      <path
        d="M6 30 C 18 10, 42 8, 54 20 C 64 32, 50 44, 38 38 C 28 32, 32 20, 44 18 C 56 16, 68 26, 74 32"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default Squiggle;
