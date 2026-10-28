import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  clean?: boolean; // omit default max-w if custom width needed
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
  clean = false,
  ...props
}) => {
  const baseClasses = clean ? "" : "max-w-[1240px] mx-auto px-6 md:px-10";

  return (
    <Component className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Container;
