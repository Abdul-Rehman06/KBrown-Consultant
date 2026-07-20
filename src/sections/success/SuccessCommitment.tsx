import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Target } from 'lucide-react';

const commitments = [
  {
    icon: ShieldCheck,
    title: "No Shortcuts",
    description: "We don't believe in shortcuts or unrealistic promises."
  },
  {
    icon: Handshake,
    title: "Building Trust",
    description: "We believe in building trust through education, professionalism, and honest conversations."
  },
  {
    icon: Target,
    title: "Providing Clarity",
    description: "Every interaction is an opportunity to provide clarity, share knowledge, and help clients make informed financial decisions with greater confidence."
  }
];

export default function SuccessCommitment() {
  return (
    <section className="py-24 relative bg-[#0B1523] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              Our Core Values
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
          >
            Our <span className="text-[#D4AF37]">Commitment</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-heading text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
