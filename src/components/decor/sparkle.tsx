import React from "react";

export interface SparkleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number | string;
}

export const Sparkle: React.FC<SparkleProps> = ({
  size = 20,
  className = "text-ink",
  strokeWidth = 1,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 pointer-events-none transition-transform duration-500 ${className}`}
      {...props}
    >
      {/* 4-point concave star diamond shape with 1px stroke */}
      <path
        d="M12 1.5 Q12 12 22.5 12 Q12 12 12 22.5 Q12 12 1.5 12 Q12 12 12 1.5 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default Sparkle;
