import { motion } from 'framer-motion';

export default function BookingAbout() {
  return (
    <section className="py-20 relative bg-[#0B1523]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              What This Consultation Is About
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-8 leading-tight"
          >
            A Conversation Focused on <span className="text-[#D4AF37]">Your Goals</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-white/70 leading-relaxed"
          >
            <p>
              Every financial journey is unique, and every consultation begins by understanding your current situation, your goals, and the questions that matter most to you.
            </p>
            <p>
              Our role is to provide educational guidance, discuss financial concepts, and help you better understand available options so you can move forward with greater confidence.
            </p>
            <p>
              Whether you're an entrepreneur, business owner, or someone looking to expand your financial knowledge, this session is designed to provide clarity—not pressure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
