import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function SuccessHero() {
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
            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              Success Stories
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-8 leading-tight"
          >
            Real Experiences. <br className="hidden md:block" />
            Meaningful Conversations. <br className="hidden md:block" />
            <span className="text-[#D4AF37]">Lasting Confidence.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            <p>
              Every financial journey is different, and so is every conversation we have. At KBrown Consultant, our focus is on providing professional guidance, educational resources, and personalized support that helps clients better understand their options and move forward with confidence.
            </p>
            <p>
              We believe that informed decisions begin with honest conversations, thoughtful planning, and a commitment to long-term financial growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
