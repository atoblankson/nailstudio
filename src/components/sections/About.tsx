"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Container, Button, Eyebrow } from "@/components/ui";

// Bespoke minimal nail polish icon
const NailPolishIcon: React.FC<{ className?: string }> = ({ className = "w-3 h-3 text-bronze shrink-0" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="9.5" y="2" width="5" height="7" rx="0.8" />
    <path d="M6.5 10 C6.5 9.4 7 9 7.6 9 L16.4 9 C17 9 17.5 9.4 17.5 10 L17.5 20 C17.5 21.1 16.6 22 15.5 22 L8.5 22 C7.4 22 6.5 21.1 6.5 20 Z" />
    <path d="M9.5 15 Q12 14 14.5 15" strokeWidth="1.2" />
  </svg>
);

export const About: React.FC = () => {
  // Split title words for staggered scroll reveal
  const titleWords = ["ABOUT", "US"];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "115%", opacity: 0 },
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
    <section id="about" className="relative py-24 md:py-32 bg-paper overflow-hidden">
      <Container className="flex flex-col items-center text-center">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 md:mb-6"
        >
          <Eyebrow icon={<NailPolishIcon />}>
            GO-TO NAILS
          </Eyebrow>
        </motion.div>

        {/* Giant Centered Heading */}
        <motion.h2
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-display uppercase text-ink select-none tracking-tight font-normal leading-[0.92] text-center"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
          }}
        >
          <span className="inline-flex gap-4 sm:gap-6 md:gap-8 overflow-hidden py-1">
            {titleWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden">
                <motion.span variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.h2>

        {/* Tiny Uppercase Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-6 md:mt-8 max-w-[360px] text-[10px] uppercase font-body font-normal tracking-[0.12em] leading-relaxed text-ink/80 text-center"
        >
          I SPECIALIZE IN PRECISION MANICURES AND PEDICURES, DELIVERING BEAUTIFUL, LONG-LASTING RESULTS WITH ATTENTION TO DETAIL.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-8 md:mt-10 mb-14 md:mb-20"
        >
          <Button
            href="#book"
            variant="dark"
            size="sm"
            className="px-6 py-2.5 text-[11px]"
          >
            BOOK NOW
          </Button>
        </motion.div>

        {/* Large Centered Image (~700px max-width, 4/3 aspect, 20px rounded) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative w-full max-w-[700px] aspect-[4/3] rounded-[20px] overflow-hidden bg-cream shadow-sm"
        >
          <Image
            src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1400&q=85"
            alt="Close-up of hand holding a nail file on warm peach beige background with manicured nude pink nails"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
          />
        </motion.div>

      </Container>
    </section>
  );
};

export default About;
