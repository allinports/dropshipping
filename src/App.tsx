/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import Features from "./components/Features";
import OfferCard from "./components/OfferCard";
import FAQ from "./components/FAQ";
import FooterCTA from "./components/FooterCTA";
import StickyCTA from "./components/StickyCTA";
import Footer from "./components/Footer";

export default function App() {
  // Shared color state to keep image and color swatches synchronized across sections
  const [selectedColor, setSelectedColor] = useState<"preto" | "branco">("preto");

  // Premium, real-world images for the portable mixer
  const productImages = {
    preto: "https://i.ibb.co/xqJsZVdR/Chat-GPT-Image-9-de-jul-de-2026-23-44-16.png",
    branco: "https://i.ibb.co/VYxHhzPZ/Chat-GPT-Image-9-de-jul-de-2026-23-44-42.png",
  };

  return (
    <div className="min-h-screen bg-milk-50 font-sans text-ink selection:bg-crema-300 selection:text-espresso-950" id="landing-page-root">
      {/* 1. Hero Section */}
      <Hero 
        selectedColor={selectedColor} 
        setSelectedColor={setSelectedColor} 
        productImages={productImages} 
      />

      {/* 2. Problem/Agitation Section */}
      <ProblemSection />

      {/* 3. Features & Specifications Section */}
      <Features />

      {/* 4. Product Offer & Interactive Pricing Card */}
      <OfferCard 
        selectedColor={selectedColor} 
        setSelectedColor={setSelectedColor} 
      />

      {/* 5. Interactive FAQ Accordion */}
      <FAQ />

      {/* 6. High-Contrast Footer Call-To-Action */}
      <FooterCTA />

      {/* 7. Persistent Page Footer */}
      <Footer />

      {/* 8. Responsive Mobile Floating CTA Bar */}
      <StickyCTA />
    </div>
  );
}
