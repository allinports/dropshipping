import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  selectedColor: "preto" | "branco";
  setSelectedColor: (color: "preto" | "branco") => void;
  productImages: { preto: string; branco: string };
}

export default function Hero({ selectedColor, setSelectedColor, productImages }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-radial from-espresso-800 via-espresso-900 to-espresso-950 px-6 py-20 text-milk-100 sm:px-12 md:py-28">
      {/* Subtle background grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40" 
        style={{
          backgroundImage: "radial-gradient(circle, rgba(251,245,233,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* 1° Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl text-milk-50 max-w-3xl"
            id="hero-title"
          >
            Espuma de cafeteria, <span className="text-crema-300">sem sair da cozinha.</span>
          </motion.h1>
          
          {/* 2° Sub texto */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 max-w-2xl text-base md:text-lg leading-relaxed text-milk-100/80 px-4"
            id="hero-desc"
          >
            Bata leite, chocolate, shakes e vitaminas em segundos com um motor potente, recarregável via USB e do tamanho da sua mão.
          </motion.p>
          
          {/* 3° Fotos do produto */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] overflow-hidden rounded-2xl bg-espresso-800/30 border border-milk-100/10 p-6 flex items-center justify-center shadow-2xl shadow-black/50 mb-8"
            id="hero-product-image-container"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedColor}
                src={productImages[selectedColor]}
                alt={`Mixer elétrico portátil recarregável na cor ${selectedColor}`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain rounded-xl"
              />
            </AnimatePresence>
          </motion.div>

          {/* 4° Cores */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-10" 
            id="color-picker"
          >
            <span className="text-xs text-milk-100/40 font-medium font-mono uppercase tracking-wider">Cor:</span>
            
            <button
              type="button"
              onClick={() => setSelectedColor("preto")}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-350 cursor-pointer ${
                selectedColor === "preto"
                  ? "border-crema-400 bg-crema-400/10 text-milk-50"
                  : "border-milk-100/10 bg-milk-100/5 text-milk-100/70 hover:border-milk-100/30"
              }`}
              aria-pressed={selectedColor === "preto"}
              id="color-btn-preto"
            >
              <span className="h-3.5 w-3.5 rounded-full bg-[#161010] border border-milk-100/20 shadow-xs" />
              Preto
            </button>

            <button
              type="button"
              onClick={() => setSelectedColor("branco")}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-350 cursor-pointer ${
                selectedColor === "branco"
                  ? "border-crema-400 bg-crema-400/10 text-milk-50"
                  : "border-milk-100/10 bg-milk-100/5 text-milk-100/70 hover:border-milk-100/30"
              }`}
              aria-pressed={selectedColor === "branco"}
              id="color-btn-branco"
            >
              <span className="h-3.5 w-3.5 rounded-full bg-[#f5f2ea] border border-espresso-950/20 shadow-xs" />
              Branco
            </button>
          </motion.div>

          {/* 5° Botão de compra */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            id="hero-cta-wrapper"
            className="w-full sm:w-auto px-4"
          >
            <a 
              href="#oferta" 
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-crema-400 px-12 py-5 text-base font-extrabold text-espresso-950 transition-all duration-300 hover:scale-[1.02] hover:bg-crema-300 hover:shadow-xl hover:shadow-crema-400/30"
              id="hero-cta-btn"
            >
              Quero o meu agora
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
