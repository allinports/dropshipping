import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="bg-espresso-950 text-milk-100 text-center py-20 px-6 sm:px-12 relative overflow-hidden" id="final-cta">
      {/* Subtle styling overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-15" 
        style={{
          backgroundImage: "radial-gradient(circle, rgba(251,245,233,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
      
      <div className="mx-auto max-w-xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl mb-4"
          id="final-cta-title"
        >
          Sua próxima xícara já pode vir com espuma de barista.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-milk-100/60 mb-8 max-w-sm mx-auto text-sm sm:text-base"
          id="final-cta-desc"
        >
          R$ 139,90 à vista, com frete expresso incluso e desconto de lançamento por tempo limitado.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="#oferta" 
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-crema-400 px-8 py-4 text-sm sm:text-base font-bold text-espresso-950 transition-all duration-300 hover:scale-[1.02] hover:bg-crema-300 hover:shadow-lg hover:shadow-crema-400/30"
            id="final-cta-btn"
          >
            Quero o meu com desconto
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
