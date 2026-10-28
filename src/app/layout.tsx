import type { Metadata } from "next";
import { Italiana, Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const displayFont = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Jost({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const logoFont = Cormorant_Garamond({
  weight: "500",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nue Studio | Manicure & Pedicure Nail Salon",
  description:
    "A sanctuary of quiet luxury, specialized nail care, manicures, pedicures, and bespoke nail artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${displayFont.variable} ${bodyFont.variable} ${logoFont.variable}`}
    >
      <body className="bg-paper text-ink antialiased selection:bg-bronze/20 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
