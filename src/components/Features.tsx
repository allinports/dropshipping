import { motion } from "motion/react";
import { Zap, Sliders, Sparkles, VolumeX, Coffee } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Zap,
      title: "Recarregável via USB",
      desc: "Sem pilha, sem fio preso na tomada.",
    },
    {
      icon: Sliders,
      title: "3 velocidades",
      desc: "Do espumar suave ao bater firme.",
    },
    {
      icon: Sparkles,
      title: "Cabeça removível",
      desc: "Lava em segundos, sem molhar o motor.",
    },
    {
      icon: VolumeX,
      title: "Silencioso",
      desc: "Não acorda a casa às 6h da manhã.",
    },
    {
      icon: Coffee,
      title: "Portátil",
      desc: "Cabe na bolsa, na mala, na gaveta.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-espresso-800 px-6 py-20 text-milk-100 sm:px-12 md:py-28" id="caracteristicas">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold tracking-widest text-crema-300 uppercase font-mono"
            id="features-eyebrow"
          >
            O que vem na caixa e no motor
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            id="features-title"
          >
            Um só botão. Três velocidades. Zero fio.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-milk-100/70"
            id="features-desc"
          >
            Recarrega no USB que você já tem em casa e cabe até na gaveta de talheres.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          id="features-grid"
        >
          {items.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group flex flex-col rounded-2xl border border-milk-100/10 bg-milk-100/[0.03] p-6 transition-all duration-300 hover:border-crema-400/30 hover:bg-milk-100/[0.06]"
                id={`features-item-${i}`}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-crema-400/10 text-crema-300 transition-colors duration-300 group-hover:bg-crema-400/20">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-sm font-semibold tracking-tight text-milk-50">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-milk-100/60">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
