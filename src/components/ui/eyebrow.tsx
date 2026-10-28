import React from "react";
import { LucideIcon } from "lucide-react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: LucideIcon | React.ComponentType<{ className?: string }> | React.ReactNode;
  iconClassName?: string;
  className?: string;
  as?: "div" | "span" | "p";
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  icon: Icon,
  iconClassName = "w-3 h-3 text-bronze shrink-0",
  className = "",
  as: Component = "div",
  ...props
}) => {
  const renderIcon = () => {
    if (!Icon) return null;
    if (React.isValidElement(Icon)) {
      return Icon;
    }
    const IconComponent = Icon as React.ComponentType<{ className?: string }>;
    return <IconComponent className={iconClassName} />;
  };

  return (
    <Component
      className={`inline-flex items-center gap-2 eyebrow text-ink/75 select-none font-medium ${className}`}
      {...props}
    >
      {renderIcon()}
      <span>{children}</span>
    </Component>
  );
};

export default Eyebrow;
