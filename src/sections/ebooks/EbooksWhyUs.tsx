import { motion } from 'framer-motion';

export default function EbooksWhyUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#13243D]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0B1523] to-transparent opacity-80" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1523]/50 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              Our Philosophy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-8 leading-tight"
          >
            Why Our <span className="text-[#D4AF37]">eBooks?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-white/70 leading-relaxed"
          >
            <p>
              Every resource is created with one purpose: helping you better understand important financial topics through clear, practical, and educational content.
            </p>
            <p>
              Our eBooks are designed to simplify complex concepts without overwhelming technical language, making them valuable whether you're just getting started or expanding your existing knowledge.
            </p>
            <p>
              Each guide focuses on education, preparation, and informed decision-making so you can continue learning at your own pace.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
