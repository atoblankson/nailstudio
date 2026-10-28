"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Container, Eyebrow } from "@/components/ui";
import { teamMembers } from "@/lib/data";

export const Team: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="team" className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-paper overflow-hidden">
      <Container>
        {/* Two-Column Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          {/* Left Column: Eyebrow + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="space-y-3"
          >
            <Eyebrow>GET TO KNOW</Eyebrow>
            <h2
              className="font-display text-ink tracking-tight font-normal leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Our Team
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-[11px] text-ink/80 font-body leading-relaxed max-w-[320px]"
          >
            At Nue Studio in NYC&apos;s Financial District, Russian Manicures and Pedicures offering beauty, and lasting results. From Builder Gel to elegant Gel Pedicures, we deliver exceptional care and attention to detail.
          </motion.p>
        </div>

        {/* Team Member Cards (Side by side, max-w-[520px] total, left-aligned under heading) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 sm:gap-5 max-w-[520px]"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group flex flex-col bg-cream/80 border border-line/35 rounded-2xl p-2.5 sm:p-3 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-bronze/40"
            >
              {/* Portrait Photo */}
              <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-paper/60 mb-3 sm:mb-3.5">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 45vw, 240px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Card Meta Content */}
              <div className="flex flex-col items-center text-center px-1 pb-1 space-y-1">
                {/* Name */}
                <h3 className="font-display text-[22px] sm:text-[28px] text-ink leading-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <span className="text-[8.5px] uppercase font-body font-medium tracking-[0.16em] text-bronze">
                  {member.role}
                </span>

                {/* Description */}
                <p className="text-[8px] uppercase font-body tracking-[0.1em] text-ink/60 leading-relaxed max-w-[200px] pt-0.5">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;
