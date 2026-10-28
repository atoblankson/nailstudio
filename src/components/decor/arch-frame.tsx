import React from "react";
import Image, { StaticImageData } from "next/image";
import { Sparkle } from "./sparkle";

export type SparklePlacement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "arch-apex"
  | { top?: string; left?: string; right?: string; bottom?: string; size?: number; className?: string };

export interface ArchFrameProps {
  image: string | StaticImageData;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[3/4]" or "aspect-[4/5]"
  outlineOffset?: number; // default 14px
  outlineClassName?: string;
  sparkles?: boolean | SparklePlacement[];
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}

export const ArchFrame: React.FC<ArchFrameProps> = ({
  image,
  alt,
  className = "",
  aspectRatio = "aspect-[3/4]",
  outlineOffset = 14,
  outlineClassName = "border-ink/25",
  sparkles = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  children,
}) => {
  // Sparkle placement helpers
  const renderSparkles = () => {
    if (!sparkles) return null;

    const placements: SparklePlacement[] =
      sparkles === true
        ? ["top-right"]
        : Array.isArray(sparkles)
        ? sparkles
        : [];

    return (
      <>
        {placements.map((placement, idx) => {
          if (typeof placement === "string") {
            const positionClasses: Record<string, string> = {
              "top-left": "-top-4 -left-4",
              "top-right": "-top-4 -right-4",
              "bottom-left": "-bottom-3 -left-3",
              "bottom-right": "-bottom-3 -right-3",
              "arch-apex": "-top-7 left-1/2 -translate-x-1/2",
            };

            return (
              <div
                key={idx}
                className={`absolute pointer-events-none z-20 ${positionClasses[placement] || "-top-4 -right-4"}`}
              >
                <Sparkle size={20} className="text-bronze" />
              </div>
            );
          }

          // Custom coordinate object
          const { top, left, right, bottom, size = 20, className: customClass = "text-bronze" } = placement;
          return (
            <div
              key={idx}
              className="absolute pointer-events-none z-20"
              style={{ top, left, right, bottom }}
            >
              <Sparkle size={size} className={customClass} />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div
      className={`relative inline-block w-full max-w-full ${className}`}
      style={{
        paddingTop: `${outlineOffset}px`,
        paddingLeft: `${outlineOffset}px`,
        paddingRight: `${outlineOffset}px`,
      }}
    >
      {/* Outer 1px Outline Arch (Offset ~14px outside the image, flat bottom, no fill) */}
      <div
        className={`absolute inset-x-0 top-0 bottom-0 pointer-events-none border border-solid rounded-t-[9999px] rounded-b-none ${outlineClassName}`}
        aria-hidden="true"
      />

      {/* Optional Sparkles */}
      {renderSparkles()}

      {/* Main Image Masked in Arch Shape (rounded-t-full, flat bottom) */}
      <div
        className={`relative w-full overflow-hidden rounded-t-[9999px] rounded-b-none bg-cream ${aspectRatio}`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        {children}
      </div>
    </div>
  );
};

export default ArchFrame;
