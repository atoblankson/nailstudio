"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { Sparkle, Squiggle } from "@/components/decor";

export const Hero: React.FC = () => {
  // Motion variants for staggered H1 line reveal
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-20"
    >
      {/* Decorative Squiggle: Variant A enters from top-right corner and flows down off-screen */}
      <Squiggle
        variant="a"
        className="absolute -top-6 -right-10 md:top-2 md:-right-6 w-64 sm:w-80 md:w-96 text-ink/20 pointer-events-none -z-10 select-none"
      />

      {/* Thin calligraphic line curving down from arch toward bottom-left, passing behind text column */}
      <svg
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 text-ink/15 hidden lg:block"
        aria-hidden="true"
      >
        <path
          d="M720 220 C 620 320, 480 390, 360 420 C 240 450, 140 490, 40 560"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 2"
          className="opacity-40"
        />
        <path
          d="M680 200 C 560 300, 420 360, 280 430 C 180 480, 110 520, 20 580"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Vertically centered typography & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl">
            {/* Staggered 3-Line H1 */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hero-h1 text-ink tracking-tight font-normal"
              style={{ lineHeight: 1.02 }}
            >
              {/* Line 1 */}
              <span className="block overflow-hidden py-0.5">
                <motion.span variants={lineVariants} className="block">
                  Manicure And
                </motion.span>
              </span>

              {/* Line 2 */}
              <span className="block overflow-hidden py-0.5">
                <motion.span variants={lineVariants} className="block">
                  Pedicure
                </motion.span>
              </span>

              {/* Line 3: Italic, Bronze */}
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={lineVariants}
                  className="block text-bronze italic"
                  style={{ fontFamily: "var(--font-logo)" }}
                >
                  Nail Salon
                </motion.span>
              </span>
            </motion.h1>

            {/* Subtitle / Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
              className="mt-6 text-[13px] tracking-wide text-ink/80 font-body font-light leading-relaxed max-w-md"
            >
              Your journey to Elegance and Beauty starts with us
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
              className="mt-10"
            >
              <Button
                href="#book"
                variant="dark"
                size="md"
                className="px-8 py-3.5 text-[12px] tracking-[0.14em]"
              >
                BOOK NOW
              </Button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Offset Arch Image, Outline & Sparkles */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            
            {/* Arch composition wrapper (~440px on desktop) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[440px]">
              
              {/* Asymmetrical 1px Outline Arch (extending left and above the photo) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
                className="absolute -top-4 -left-5 md:-top-5 md:-left-6 right-1 bottom-0 border border-ink/25 rounded-t-[9999px] rounded-b-none pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Sparkle 1: Top-left of arch outline (bigger ~28px) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.08, 0.94, 1],
                  rotate: [0, 8, -8, 0],
                  opacity: 1,
                }}
                transition={{
                  scale: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                  opacity: { duration: 0.6, delay: 0.4 },
                }}
                className="absolute -top-3 -left-7 md:-top-4 md:-left-8 z-20 pointer-events-none"
              >
                <Sparkle size={28} className="text-ink/80 stroke-[1.2]" />
              </motion.div>

              {/* Sparkle 2: Top-left of arch outline (smaller ~18px, slightly overlapping the outline) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 0.92, 1.1, 1],
                  rotate: [0, -10, 10, 0],
                  opacity: 1,
                }}
                transition={{
                  scale: { repeat: Infinity, duration: 5.5, delay: 0.4, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 6.5, delay: 0.4, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.5 },
                }}
                className="absolute -top-6 left-2 md:-top-7 md:left-3 z-20 pointer-events-none"
              >
                <Sparkle size={18} className="text-bronze stroke-[1.1]" />
              </motion.div>

              {/* Sparkle 3: Left edge of outline around 70% down (~26px) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.06, 0.95, 1],
                  rotate: [0, 9, -9, 0],
                  opacity: 1,
                }}
                transition={{
                  scale: { repeat: Infinity, duration: 6.2, delay: 0.8, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 7.2, delay: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.6, delay: 0.6 },
                }}
                className="absolute top-[70%] -left-6 md:-left-7 z-20 pointer-events-none"
              >
                <Sparkle size={26} className="text-ink/70 stroke-[1.1]" />
              </motion.div>

              {/* Arch Image with clip-path bottom-to-top reveal animation */}
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
                className="relative w-full aspect-[4/5] rounded-t-[9999px] rounded-b-none overflow-hidden bg-cream shadow-sm z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85"
                  alt="Portrait of an elegant woman with slicked-back hair and dark manicured nails touching her face"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 440px"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
