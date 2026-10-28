"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { Sparkle, Squiggle } from "@/components/decor";

export const GiftCard: React.FC = () => {
  return (
    <section
      id="gift-card"
      className="relative -mt-6 md:-mt-8 z-10 bg-[#F2F2F0] rounded-t-[28px] overflow-hidden py-16 md:py-24 shadow-md"
    >
      {/* Decorative Squiggle: Variant C (Small curl at left edge) */}
      <Squiggle
        variant="c"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-ink/35 pointer-events-none select-none hidden sm:block"
      />

      {/* Decorative thin curve at right edge going off-screen */}
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -right-8 md:-right-4 top-1/3 w-36 md:w-48 text-ink/20 pointer-events-none select-none"
        aria-hidden="true"
      >
        <path
          d="M10 60 C 50 15, 110 95, 155 35"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          
          {/* LEFT COLUMN: Heading, Paragraph with Bold Leads, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-2 md:order-1 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Heading */}
            <h2
              className="font-display text-ink tracking-tight font-normal leading-[1.05]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 44px)" }}
            >
              Gift Card
            </h2>

            {/* Paragraph with bold phrases */}
            <p className="mt-5 mb-8 text-[9.5px] sm:text-[10px] text-ink/80 font-body leading-relaxed max-w-[320px]">
              At Nue Studio, we specialize in{" "}
              <strong className="font-semibold text-ink">Russian Manicure and Pedicure</strong>{" "}
              services designed for precision, beauty, and lasting results. Located in the heart of{" "}
              <strong className="font-semibold text-ink">Financial District, NYC</strong>, our expert
              team offers everything from{" "}
              <strong className="font-semibold text-ink">Builder Gel Manicures</strong> to elegant{" "}
              <strong className="font-semibold text-ink">Gel Pedicures</strong>. Whether you&apos;re
              looking for flawless nails or restorative nail care, we deliver unmatched quality and
              attention to detail.
            </p>

            {/* CTA Button */}
            <div>
              <Button
                href="#book"
                variant="dark"
                size="sm"
                className="px-6 py-2.5 text-[11px]"
              >
                BUY A GIFT CARD
              </Button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: ArchFrame with Black Almond Nails photo & Sparkle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-1 md:order-2 md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px]">
              
              {/* Offset 1px Outline Arch */}
              <div
                className="absolute -top-3.5 -left-3.5 -right-3.5 bottom-0 border border-ink/25 rounded-t-[9999px] rounded-b-none pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Twinkling Sparkle at Top-Left of Arch Outline */}
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-5 -left-5 z-20 pointer-events-none"
              >
                <Sparkle size={22} className="text-bronze stroke-[1.2]" />
              </motion.div>

              {/* Masked Arch Image (Aspect ~ 3/4) */}
              <div className="relative w-full aspect-[3/4] rounded-t-[9999px] rounded-b-none overflow-hidden bg-cream shadow-sm z-10 group">
                <Image
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80"
                  alt="Long black almond manicured nails with gold rings on hand"
                  fill
                  sizes="(max-width: 640px) 240px, 280px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default GiftCard;
