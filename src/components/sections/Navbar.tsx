"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container, Button } from "@/components/ui";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-paper/85 backdrop-blur-md border-b border-line/60 py-4 shadow-xs"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="#home"
            className="text-[30px] md:text-[34px] text-bronze italic font-medium leading-none select-none transition-opacity duration-300 hover:opacity-90 tracking-tight"
            style={{ fontFamily: "var(--font-logo)" }}
          >
            Nue Studio
          </Link>

          {/* Desktop Right: Links & Book Now Button */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group relative py-1 text-[12px] font-body font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:text-bronze"
                  >
                    {link.label}
                    {/* Underline growing from left on hover */}
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-bronze transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Book Now Button */}
            <Button
              href="#book"
              variant="dark"
              size="md"
              className="px-7 py-3 text-[12px]"
            >
              BOOK NOW
            </Button>
          </nav>

          {/* Mobile: Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink hover:text-bronze transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </Container>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-paper px-8 pt-28 pb-12 md:hidden"
          >
            {/* Nav Links List */}
            <div className="flex flex-col space-y-6">
              <span className="eyebrow text-ink/40 tracking-[0.2em]">Menu</span>
              <ul className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * (idx + 1), duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-display text-4xl text-ink transition-colors duration-300 hover:text-bronze"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="space-y-6 pt-8 border-t border-line/40"
            >
              <Button
                href="#book"
                variant="dark"
                size="md"
                className="w-full py-4 text-[12px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK NOW
              </Button>

              <div className="flex items-center justify-between text-xs text-ink/60 font-body">
                <span style={{ fontFamily: "var(--font-logo)" }} className="italic text-base text-bronze">
                  Nue Studio
                </span>
                <span>Haute Nail Atelier</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
