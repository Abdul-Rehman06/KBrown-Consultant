import { motion } from 'framer-motion';

export default function TradelinesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#0B1523]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              Premium Tradelines
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading text-white mb-6 leading-tight"
          >
            Choose the tradeline plan for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2C96D]">your needs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Explore our curated selection of premium tradelines designed to help you achieve your financial goals.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
