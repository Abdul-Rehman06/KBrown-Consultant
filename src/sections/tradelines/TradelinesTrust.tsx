import { motion } from 'framer-motion';
import { Scale, Award, ShieldCheck, Zap } from 'lucide-react';

const trustItems = [
  {
    icon: Scale,
    title: "100%",
    subtitle: "Legal Consumer Rights",
    delay: 0.1
  },
  {
    icon: Award,
    title: "8 Years",
    subtitle: "Of Credit Experience",
    delay: 0.2
  },
  {
    icon: ShieldCheck,
    title: "Zero",
    subtitle: "Hidden Fees",
    delay: 0.3
  },
  {
    icon: Zap,
    title: "Proven",
    subtitle: "Results in a Fraction of the time",
    delay: 0.4
  }
];

export default function TradelinesTrust() {
  return (
    <section className="py-16 relative bg-[#0B1523] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                <item.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-3xl font-heading text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 font-medium uppercase tracking-wider">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
