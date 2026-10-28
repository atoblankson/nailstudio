"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";
import { clientTestimonials, type TestimonialItem } from "@/lib/data";

export const Testimonials: React.FC = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = isDesktop ? 2 : 1;
  const totalPages = Math.ceil(clientTestimonials.length / itemsPerPage);

  // Clamp page if resizing changed totalPages
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPage(0);
    }
  }, [totalPages, page]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPage((prevPage) => {
      const next = prevPage + newDirection;
      if (next < 0) return totalPages - 1;
      if (next >= totalPages) return 0;
      return next;
    });
  };

  const currentItems = clientTestimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section id="testimonials" className="relative pt-12 pb-0 bg-paper">
      {/* Full-width dark block with rounded-[28px] top corners */}
      <div className="relative w-full bg-cocoa text-white rounded-t-[28px] overflow-hidden p-10 md:p-16 shadow-xl">
        
        {/* Subtle noise texture overlay at low opacity */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Top Row: Heading on the left */}
          <div className="mb-12 md:mb-16">
            <h2
              className="font-display text-white tracking-tight font-normal leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              <span className="block">What Our</span>
              <span className="block">Clients Say</span>
            </h2>
          </div>

          {/* Testimonial Rows / Carousel with Divider */}
          <div className="min-h-[190px] sm:min-h-[170px] md:min-h-[150px] relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 relative"
              >
                {/* Thin vertical divider line between testimonials on desktop */}
                {isDesktop && (
                  <div
                    className="absolute left-1/2 top-2 bottom-2 w-[1px] bg-white/20 -translate-x-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {currentItems.map((item: TestimonialItem, idx: number) => (
                  <div
                    key={item.id}
                    className={`flex flex-col justify-between space-y-5 ${
                      idx === 1 ? "md:pl-6" : ""
                    }`}
                  >
                    {/* Paragraph */}
                    <p className="text-[11px] text-white/80 font-body leading-relaxed max-w-[300px]">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Bold Author Name */}
                    <span className="text-[12px] font-semibold text-white tracking-wide font-body">
                      {item.author}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom-right: Circular nav buttons */}
          <div className="flex justify-end items-center gap-2.5 mt-10 md:mt-14">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonials"
              className="w-9 h-9 rounded-full bg-white text-cocoa flex items-center justify-center transition-all duration-300 hover:bg-bronze hover:text-white shadow-xs cursor-pointer select-none hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2]" />
            </button>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonials"
              className="w-9 h-9 rounded-full bg-white text-cocoa flex items-center justify-center transition-all duration-300 hover:bg-bronze hover:text-white shadow-xs cursor-pointer select-none hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Testimonials;
