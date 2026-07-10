import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling down 400px to avoid cluttering the hero section
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-espresso-950 border-t border-milk-100/10 px-6 py-4 flex items-center justify-between gap-4 md:hidden pb-safe shadow-[0_-8px_24px_rgba(0,0,0,0.3)]"
          id="sticky-cta-panel"
        >
          <div className="flex flex-col" id="sticky-price">
            <span className="text-[10px] text-milk-100/50 line-through font-mono">R$ 169,90</span>
            <span className="text-sm font-bold tracking-tight text-milk-100 font-mono">
              R$ 139,90 <span className="text-[10px] text-crema-300 font-sans font-normal">à vista</span>
            </span>
          </div>

          <a
            href="#oferta"
            className="rounded-full bg-crema-400 px-6 py-2.5 text-xs font-bold text-espresso-950 shadow-md transition-all hover:bg-crema-300"
            id="sticky-cta-btn"
          >
            Comprar agora
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
