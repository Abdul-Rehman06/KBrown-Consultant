import { motion } from 'framer-motion';
import { BookOpen, Users, ShieldCheck, Target } from 'lucide-react';

const reasons = [
  {
    icon: BookOpen,
    title: 'Education First',
    description: 'Helping you understand financial topics—not overwhelm you with jargon.',
  },
  {
    icon: Users,
    title: 'Personalized Conversations',
    description: 'No generic scripts. Every consultation is focused on your individual goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Guidance',
    description: 'Clear, transparent discussions designed to help you make informed decisions.',
  },
  {
    icon: Target,
    title: 'Long-Term Perspective',
    description: "We're committed to helping clients build knowledge and confidence over time.",
  },
];

export default function BookingWhyUs() {
  return (
    <section className="py-24 relative bg-[#13243D] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              Why Clients Choose KBrown Consultant Group LLC
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
          >
            Guidance Built Around <span className="text-[#D4AF37]">Education</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B1523]/50 border border-white/5 rounded-2xl p-8 hover:bg-[#0B1523] hover:border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
