import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item opened by default

  const faqItems: FAQItem[] = [
    {
      question: "Quanto tempo dura a bateria carregada?",
      answer: "Uma carga completa via USB rende semanas de uso diário para café e vitaminas — o consumo de energia é extremamente baixo por ser um motor compacto e altamente otimizado.",
    },
    {
      question: "Serve para outras bebidas além de café?",
      answer: "Com certeza! O batedor espumador funciona perfeitamente para leite, capuccino, chocolate quente e shakes. O batedor tipo fouet é ótimo para misturar wheys, vitaminas, molhos ou até bater claras em neve e pequenos cremes.",
    },
    {
      question: "Como faço para trocar em caso de defeito?",
      answer: "Nosso produto conta com garantia incondicional contra defeitos de fabricação. Basta entrar em contato com o suporte através de nossos canais de atendimento com o número da compra e providenciaremos a substituição imediata ou reembolso.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo exato de entrega varia de acordo com sua região e o CEP de destino, sendo calculado automaticamente na etapa de envio do checkout antes da confirmação do pagamento.",
    },
  ];

  return (
    <section className="bg-milk-50 px-6 py-20 sm:px-12 md:py-28" id="faq">
      <div className="mx-auto max-w-3xl">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-crema-500 uppercase font-mono" id="faq-eyebrow">
            Perguntas Frequentes
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso-900 sm:text-4xl" id="faq-title">
            Antes de você clicar em comprar
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#e6d9be] pb-4 last:border-0"
                id={`faq-item-container-${index}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-4 text-left font-semibold text-espresso-900 hover:text-crema-500 transition-colors"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <span className="text-base sm:text-lg tracking-tight font-sans">
                    {item.question}
                  </span>
                  <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#ece2cd]/50 text-espresso-900 shrink-0">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-crema-500" />
                    ) : (
                      <Plus className="h-4 w-4 text-crema-500" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                      id={`faq-answer-wrapper-${index}`}
                    >
                      <p className="pb-4 pr-6 text-sm sm:text-[15px] leading-relaxed text-[#5c4a37]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
