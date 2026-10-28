"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "dark" | "light" | "outline";
  size?: "sm" | "md";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "dark",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base classes: fully rounded pill, uppercase, tracking 0.14em, font-body weight 500, smooth hover lift + transition
    const baseStyles =
      "inline-flex items-center justify-center font-body uppercase font-medium tracking-[0.14em] rounded-full transition-all duration-300 ease-out cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5 active:translate-y-0";

    const sizeStyles = {
      sm: "text-[11px] px-5 py-2.5 gap-2",
      md: "text-[12px] px-6 py-3 gap-2.5",
    };

    const variantStyles = {
      dark: "bg-cocoa text-[#FAF8F5] border border-cocoa hover:bg-bronze hover:border-bronze hover:text-white shadow-sm",
      light: "bg-cream text-ink border border-line/40 hover:bg-bronze hover:text-white hover:border-bronze",
      outline: "bg-transparent text-ink border border-ink/25 hover:bg-bronze hover:text-white hover:border-bronze",
    };

    const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0 transition-transform duration-300">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0 transition-transform duration-300">{icon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={combinedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
