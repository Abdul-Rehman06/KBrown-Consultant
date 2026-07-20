import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-[#0B1523]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Layers className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-8 leading-tight"
          >
            Strategic Financial Guidance <br className="hidden md:block" />
            <span className="text-[#D4AF37]">Designed Around Your Goals</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            <p>
              At KBrown Consultant, we believe every financial journey is unique. That's why our services are built around education, personalized consultations, and practical guidance that empowers individuals and business owners to make informed financial decisions.
            </p>
            <p>
              Whether you're exploring funding opportunities, expanding your financial knowledge, or planning your next business move, we're here to help you navigate the process with clarity and confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
