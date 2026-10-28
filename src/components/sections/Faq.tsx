"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui";
import { salonFaqs, type FaqItem } from "@/lib/data";

export const Faq: React.FC = () => {
  // Accordion state: only one item open at a time
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-paper overflow-hidden">
      <Container className="max-w-[760px]">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-10 md:mb-14"
        >
          <h2
            className="font-display text-ink tracking-tight font-normal leading-[1.05]"
            style={{ fontSize: "clamp(26px, 4vw, 34px)" }}
          >
            Have Questions?
          </h2>

          <p className="text-[9.5px] sm:text-[10px] text-ink/70 font-body leading-relaxed max-w-md mx-auto mt-2.5">
            We&apos;re committed to making your experience as smooth and straightforward as possible.
          </p>
        </motion.div>

        {/* Accordion List (max-w-[620px]) */}
        <div className="max-w-[620px] mx-auto space-y-3">
          {salonFaqs.map((item: FaqItem) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`border border-ink/20 bg-transparent transition-all duration-300 ${
                  isOpen ? "rounded-3xl shadow-2xs" : "rounded-full"
                }`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  id={`faq-trigger-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer select-none group"
                >
                  <span className="text-[10.5px] sm:text-[11px] font-normal text-ink font-body tracking-wide pr-4">
                    {item.question}
                  </span>

                  {/* + icon that rotates 45deg into an x when open */}
                  <div
                    className={`shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300 ease-out text-ink/80 group-hover:text-bronze ${
                      isOpen ? "rotate-45 text-bronze" : "rotate-0"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[1.8]" />
                  </div>
                </button>

                {/* Answer Area animates height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pt-0.5 text-[10px] text-ink/70 leading-relaxed font-body">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
