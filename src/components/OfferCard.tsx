import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Lock, Truck, RotateCcw, X, CreditCard, ShoppingBag } from "lucide-react";

interface OfferCardProps {
  selectedColor: "preto" | "branco";
  setSelectedColor: (color: "preto" | "branco") => void;
}

export default function OfferCard({ selectedColor, setSelectedColor }: OfferCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  
  const originalPrice = 169.90;
  const currentPrice = 139.90;
  
  const totalOriginal = originalPrice * quantity;
  const totalCurrent = currentPrice * quantity;
  const totalSavings = totalOriginal - totalCurrent;

  return (
    <section className="bg-milk-100 px-6 py-20 sm:px-12 md:py-28" id="oferta">
      <div className="mx-auto max-w-4xl">
        
        {/* Main Grid Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-[#ece2cd] bg-milk-50 shadow-xl grid grid-cols-1 md:grid-cols-2"
          id="offer-card-wrapper"
        >
          
          {/* Left Side: Product Contents */}
          <div className="p-8 sm:p-12 flex flex-col justify-between" id="offer-left-panel">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest text-crema-500 uppercase font-mono" id="offer-eyebrow">
                O que vem na caixa
              </p>
              <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-espresso-900 sm:text-3xl" id="offer-title">
                Tudo pronto pra sua primeira espuma hoje.
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-[#5c4a37]">
                Um kit completo, com materiais duráveis e batedores de aço inoxidável fáceis de encaixar e limpar.
              </p>
              
              <ul className="space-y-4 mb-8" id="box-contents-list">
                {[
                  "1 Mixer elétrico recarregável",
                  "2 Batedores intercambiáveis (fouet e espumador)",
                  "1 Cabo USB para carregamento rápido",
                  "Manual de instruções em português"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4a3b2c] border-b border-dashed border-[#e6d9be]/60 pb-3 last:border-0 last:pb-0">
                    <Check className="h-5 w-5 text-crema-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick interactive quantity selector & color selection sync */}
            <div className="pt-4 border-t border-[#e6d9be]" id="offer-interactive-controls">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs text-[#5c4a37] font-semibold">Selecione a cor:</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedColor("preto")}
                      className={`h-7 px-3 text-xs font-medium rounded-full border transition-all ${
                        selectedColor === "preto"
                          ? "border-espresso-900 bg-espresso-900 text-milk-100"
                          : "border-[#ece2cd] text-[#4a3b2c] hover:border-[#dab766]"
                      }`}
                    >
                      Preto
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedColor("branco")}
                      className={`h-7 px-3 text-xs font-medium rounded-full border transition-all ${
                        selectedColor === "branco"
                          ? "border-espresso-900 bg-[#f5f2ea] text-espresso-900"
                          : "border-[#ece2cd] text-[#4a3b2c] hover:border-[#dab766]"
                      }`}
                    >
                      Branco
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs text-[#5c4a37] font-semibold">Quantidade:</span>
                  <div className="flex items-center border border-[#ece2cd] rounded-lg h-8 bg-milk-100">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 h-full hover:bg-[#ece2cd] text-espresso-900 transition-colors rounded-l-lg font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-mono font-bold text-espresso-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 h-full hover:bg-[#ece2cd] text-espresso-900 transition-colors rounded-r-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Commercial Pricing Details */}
          <div className="bg-espresso-900 text-milk-100 p-8 sm:p-12 flex flex-col justify-center relative" id="offer-right-panel">
            <span className="absolute top-6 right-6 border border-crema-400 text-crema-300 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
              -17% HOJE
            </span>
            
            <div className="mb-1 text-sm text-milk-100/50 line-through font-mono">
              R$ {totalOriginal.toFixed(2).replace(".", ",")}
            </div>
            
            <div className="mb-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-milk-50">
              R$ {totalCurrent.toFixed(2).replace(".", ",")} <span className="text-sm font-sans font-normal text-crema-300">à vista</span>
            </div>
            
            <p className="mb-8 text-xs font-mono text-milk-100/60">
              ou em até 6x sem juros de R$ {(totalCurrent / 6).toFixed(2).replace(".", ",")} no cartão
            </p>

            <a
              href={selectedColor === "branco" ? "https://seguro.allinports.shop/r/MVDKLUTCCX" : "https://seguro.allinports.shop/r/ARGLEF8Y98"}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 rounded-full bg-crema-400 px-4 py-3.5 sm:py-4.5 text-center text-sm sm:text-base font-extrabold text-espresso-950 transition-all duration-300 hover:scale-[1.02] hover:bg-crema-300 hover:shadow-xl hover:shadow-crema-400/20 leading-tight"
              id="offer-buy-btn"
            >
              <span>Garantir Meu Mixer</span>
              <span>+ Frete Grátis</span>
            </a>

            {/* Trust factors */}
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-milk-100/15 pt-6 text-center" id="offer-trust-grid">
              <div className="flex flex-col items-center gap-1">
                <Lock className="h-4 w-4 text-crema-300" />
                <span className="text-[10px] text-milk-100/60 font-medium">Compra segura</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="h-4 w-4 text-crema-300" />
                <span className="text-[10px] text-milk-100/60 font-medium">Envio rastreado</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="h-4 w-4 text-crema-300" />
                <span className="text-[10px] text-milk-100/60 font-medium">Troca garantida</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Checkout Simulated Modal */}
      <AnimatePresence>
        {showCheckout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs" id="checkout-overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-milk-50 rounded-3xl overflow-hidden border border-[#ece2cd] shadow-2xl p-6 text-espresso-900"
              id="checkout-modal"
            >
              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                className="absolute top-4 right-4 p-1 rounded-full text-espresso-900/50 hover:text-espresso-900 hover:bg-[#ece2cd]/50 transition-all"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center text-center mt-2 mb-6">
                <div className="h-12 w-12 rounded-full bg-crema-400/10 flex items-center justify-center text-crema-500 mb-3">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-espresso-900">
                  Resumo do Pedido
                </h3>
                <p className="text-xs text-[#5c4a37]">
                  Finalize sua compra segura com desconto garantido
                </p>
              </div>

              {/* Receipt details */}
              <div className="bg-milk-100 rounded-2xl p-4 border border-[#ece2cd] mb-6 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center text-[#4a3b2c]">
                  <span>Item:</span>
                  <span className="font-sans font-semibold">Mixer Elétrico Portátil ({selectedColor})</span>
                </div>
                <div className="flex justify-between items-center text-[#4a3b2c]">
                  <span>Quantidade:</span>
                  <span className="font-bold">{quantity}x</span>
                </div>
                <div className="flex justify-between items-center text-[#4a3b2c]">
                  <span>Subtotal:</span>
                  <span>R$ {totalOriginal.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between items-center text-crema-500 font-semibold">
                  <span>Desconto de Campanha (-17%):</span>
                  <span>- R$ {totalSavings.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between items-center text-[#4a3b2c]">
                  <span>Frete Expresso:</span>
                  <span className="text-emerald-700 font-sans font-bold">GRÁTIS</span>
                </div>
                <div className="h-px bg-[#ece2cd] my-2" />
                <div className="flex justify-between items-center text-sm font-bold text-espresso-900">
                  <span>Total Final:</span>
                  <span>R$ {totalCurrent.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>

              {/* Secure Checkout details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-150 rounded-xl text-xs text-emerald-800">
                  <Lock className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Conexão criptografada de 256 bits protegida por SSL.</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-milk-100 border border-[#ece2cd] rounded-xl text-xs text-[#4a3b2c]">
                  <CreditCard className="h-4 w-4 text-espresso-700 shrink-0" />
                  <span>Aceitamos Pix, Boleto e Cartão de Crédito em até 6x.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    alert("Compra simulada com sucesso! Obrigado pela preferência.");
                    setShowCheckout(false);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-crema-500 hover:bg-crema-400 text-milk-50 font-bold text-sm py-3.5 px-4 transition-all duration-300"
                >
                  Confirmar Pagamento
                </button>
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className="rounded-full bg-[#ece2cd]/40 hover:bg-[#ece2cd]/70 text-[#4a3b2c] text-xs font-semibold py-3.5 px-4 transition-all"
                >
                  Voltar
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
