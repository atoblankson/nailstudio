import React from "react";
import {
  Navbar,
  Hero,
  About,
  Team,
  Features,
  Services,
  Testimonials,
  GiftCard,
  Faq,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-bronze/20 selection:text-ink">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Us Section */}
      <About />

      {/* 4. Team Section */}
      <Team />

      {/* 5. Features Section */}
      <Features />

      {/* 6. Signature Services (Zig-zag) */}
      <Services />

      {/* 7. Testimonials (Dark sliding block) */}
      <Testimonials />

      {/* 8. Gift Card CTA */}
      <GiftCard />

      {/* 9. Frequently Asked Questions */}
      <Faq />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
