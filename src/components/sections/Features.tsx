"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Sparkles, Heart, Clock } from "lucide-react";
import { Container } from "@/components/ui";
import { salonFeatures, type FeatureCard } from "@/lib/data";

export const Features: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const renderIcon = (iconName: FeatureCard["icon"], colorClass: string) => {
    const iconProps = { className: `w-4 h-4 ${colorClass} stroke-[1.5]` };
    switch (iconName) {
      case "sparkles":
        return <Sparkles {...iconProps} />;
      case "heart":
        return <Heart {...iconProps} />;
      case "clock":
        return <Clock {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section className="relative -mt-8 md:-mt-16 z-20 pb-16 md:pb-24 pointer-events-auto">
      <Container>
        {/* Alignment: right-aligned on desktop to balance left-aligned Team cards, or horizontal scroll on mobile */}
        <div className="flex flex-col md:flex-row md:justify-end">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-row gap-3 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory md:overflow-visible md:pb-0"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {salonFeatures.map((item) => {
              // Background & styling per card specification
              const isWhite = item.bg === "white";
              const isCream = item.bg === "cream";
              const isBronze = item.bg === "bronze";

              const bgClass = isWhite
                ? "bg-white text-ink border border-line/35 shadow-xs"
                : isCream
                ? "bg-[#ECE9E2] text-ink border border-line/35 shadow-xs"
                : "bg-bronze text-[#1A1412] border border-bronze/40 shadow-xs";

              const iconColor = isBronze ? "text-ink" : "text-bronze";

              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className={`shrink-0 snap-start w-[150px] min-h-[170px] md:h-[170px] rounded-xl p-3.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${bgClass}`}
                >
                  {/* Top: Outline Icon */}
                  <div className="w-6 h-6 flex items-center justify-start">
                    {renderIcon(item.icon, iconColor)}
                  </div>

                  {/* Middle / Bottom Content */}
                  <div className="space-y-1.5 mt-auto">
                    {/* Title: uppercase 12px tracking-wide */}
                    <h4 className="text-[12px] font-body font-medium uppercase tracking-[0.14em] leading-tight">
                      {item.title}
                    </h4>

                    {/* Text: tiny uppercase */}
                    <p
                      className={`text-[8px] uppercase font-body tracking-[0.08em] leading-relaxed line-clamp-4 ${
                        isBronze ? "text-ink/80" : "text-ink/65"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
