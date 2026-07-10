import { motion } from "motion/react";

export default function ProblemSection() {
  const cards = [
    {
      num: "01",
      title: "MÁQUINA CARA",
      desc: "Cafeteiras com vaporizador custam caro e ocupam bancada só para dar conta do cappuccino de domingo.",
    },
    {
      num: "02",
      title: "GARFO NÃO RESOLVE",
      desc: "Bater leite à mão cansa o braço, demora e nunca chega na espuma firme que o café pede.",
    },
    {
      num: "03",
      title: "LOUÇA A MAIS",
      desc: "Batedeiras grandes viram mais uma peça pra lavar e guardar — e no fim ficam esquecidas no armário.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-milk-50 px-6 py-20 sm:px-12 md:py-28" id="agitacao">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold tracking-widest text-crema-500 uppercase font-mono"
            id="agit-eyebrow"
          >
            O problema não é o café
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl font-semibold tracking-tight text-espresso-900 sm:text-4xl"
            id="agit-title"
          >
            É fazer espuma boa sem virar a cozinha de ponta-cabeça.
          </motion.h2>
        </div>

        {/* Agitation Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          id="agit-cards-grid"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="flex flex-col rounded-2xl border border-[#ece2cd] bg-milk-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-crema-400/30"
              id={`agit-card-${i}`}
            >
              <span className="mb-4 font-mono text-xs font-semibold tracking-wider text-steel-600">
                {card.num} — {card.title}
              </span>
              <p className="text-[15px] leading-relaxed text-[#4a3b2c]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
