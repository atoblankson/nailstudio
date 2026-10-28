"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui";

// Bespoke clean Instagram icon
const InstagramIcon: React.FC<{ className?: string }> = ({
  className = "w-3.5 h-3.5 text-bronze",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-cocoa text-white rounded-t-[28px] overflow-hidden px-6 md:px-10 py-12 md:py-14 shadow-2xl mt-12">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          
          {/* Left Column: Brand Logo & Tagline */}
          <div className="flex flex-col space-y-2.5 max-w-sm">
            <Link
              href="#home"
              className="text-[34px] md:text-[38px] text-bronze italic font-medium leading-none tracking-tight select-none transition-opacity duration-300 hover:opacity-90"
              style={{ fontFamily: "var(--font-logo)" }}
            >
              Nue Studio
            </Link>
            <p className="text-[9px] uppercase tracking-[0.16em] text-white/60 font-body font-medium leading-tight">
              EFFICIENT NAILS, EXCEPTIONAL BEAUTY
            </p>
          </div>

          {/* Right Columns: Three link columns (2-col grid on mobile, 3-col on sm/desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 w-full lg:w-auto">
            {/* Column 1: MAIN */}
            <div className="space-y-3">
              <span className="block text-[8.5px] uppercase font-bold tracking-[0.16em] text-white/50 font-body">
                MAIN
              </span>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#home"
                    className="text-[10px] text-white/80 font-body transition-colors duration-200 hover:text-bronze"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-[10px] text-white/80 font-body transition-colors duration-200 hover:text-bronze"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="text-[10px] text-white/80 font-body transition-colors duration-200 hover:text-bronze"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: PAGES */}
            <div className="space-y-3">
              <span className="block text-[8.5px] uppercase font-bold tracking-[0.16em] text-white/50 font-body">
                PAGES
              </span>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#contact"
                    className="text-[10px] text-white/80 font-body transition-colors duration-200 hover:text-bronze"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#privacy"
                    className="text-[10px] text-white/80 font-body transition-colors duration-200 hover:text-bronze"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: SOCIAL MEDIA */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <span className="block text-[8.5px] uppercase font-bold tracking-[0.16em] text-white/50 font-body">
                SOCIAL MEDIA
              </span>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] text-white/80 font-body transition-colors duration-200 hover:text-bronze"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-bronze" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Divider, Copyright & Back to Top */}
        <div className="mt-12 md:mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Centered tiny copyright */}
          <p className="text-[9.5px] text-white/50 font-body tracking-wider order-2 sm:order-1">
            © 2026 Nue Studio. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[9.5px] uppercase font-body font-medium tracking-[0.12em] text-white/70 transition-colors duration-200 hover:text-bronze cursor-pointer select-none order-1 sm:order-2 group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
