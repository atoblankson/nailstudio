"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container, Button, Eyebrow } from "@/components/ui";
import { serviceRows, type ServiceRow } from "@/lib/data";

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-paper overflow-hidden">
      <Container className="space-y-16 md:space-y-24">
        {serviceRows.map((service: ServiceRow, index: number) => {
          const isTextLeft = index % 2 === 0;

          // Animations: text slides in from its respective side; image fades up
          const textSlideDirection = isTextLeft ? -35 : 35;

          return (
            <div
              key={service.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center"
            >
              {/* Text Block */}
              <motion.div
                initial={{ opacity: 0, x: textSlideDirection }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
                className={`flex flex-col items-center md:items-start text-center md:text-left ${
                  isTextLeft
                    ? "order-2 md:order-1 md:col-span-7 lg:col-span-7"
                    : "order-2 md:order-2 md:col-span-7 lg:col-span-7 md:pl-6"
                }`}
              >
                {/* Eyebrow with small icon */}
                <Eyebrow
                  icon={<Sparkles className="w-3 h-3 text-bronze" />}
                  className="mb-3.5"
                >
                  {service.eyebrow}
                </Eyebrow>

                {/* Title */}
                <h3
                  className="font-display font-normal text-[28px] sm:text-[32px] md:text-[34px] leading-tight text-ink tracking-tight"
                >
                  {service.titleInline ? (
                    <>
                      <span className="text-ink">{service.titlePrimary} </span>
                      <span className="text-ink/50">{service.titleSecondary}</span>
                    </>
                  ) : (
                    <>
                      <span className="block text-ink">{service.titlePrimary}</span>
                      <span className="block text-ink/50">{service.titleSecondary}</span>
                    </>
                  )}
                </h3>

                {/* Muted Paragraph */}
                <p className="mt-4 mb-7 text-[10px] uppercase font-body font-normal tracking-[0.08em] leading-relaxed text-ink/70 max-w-md">
                  {service.description}
                </p>

                {/* Small Dark Pill Button */}
                <div>
                  <Button
                    href={service.buttonHref || "#book"}
                    variant="dark"
                    size="sm"
                    className="px-6 py-2.5 text-[11px]"
                  >
                    {service.buttonText || "BOOK NOW"}
                  </Button>
                </div>
              </motion.div>

              {/* Image Block */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className={`flex justify-center ${
                  isTextLeft
                    ? "order-1 md:order-2 md:col-span-5 lg:col-span-5 md:justify-end"
                    : "order-1 md:order-1 md:col-span-5 lg:col-span-5 md:justify-start"
                }`}
              >
                <div className="relative">
                  {/* Frosted Glass Pill Badge with Floating Animation */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute z-20 pointer-events-none select-none rounded-full px-4 py-1.5 backdrop-blur-md bg-white/35 border border-white/50 shadow-xs flex flex-col items-center justify-center ${
                      service.badgePosition === "top-left"
                        ? "-top-3 -left-3 md:-top-4 md:-left-4"
                        : "-top-3 -right-3 md:-top-4 md:-right-4"
                    }`}
                  >
                    <span className="text-[13px] font-medium text-ink leading-none font-body">
                      {service.duration}
                    </span>
                    <span className="text-[7px] uppercase tracking-[0.14em] text-ink/65 font-body font-medium leading-none mt-1">
                      {service.badgeSubtext}
                    </span>
                  </motion.div>

                  {/* Rounded-3xl Square-ish Image Container (~190px mobile / ~300px desktop) */}
                  <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-3xl overflow-hidden bg-cream shadow-sm group">
                    <Image
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 300px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Services;
