import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResourcesCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#D4AF37]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(11,21,35,0.1)_0%,transparent_60%)]" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8 shadow-lg"
          >
            <BookOpen className="w-8 h-8 text-[#0B1523]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#0B1523] mb-8 leading-tight"
          >
            Knowledge Is One of Your <br />
            <span className="text-white drop-shadow-md">Greatest Investments</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#0B1523]/80 mb-12 max-w-2xl mx-auto font-medium"
          >
            Explore practical educational resources designed to help you better understand funding, financial planning, and business growth. Start learning today and continue building confidence with every step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/resources"
              className="w-full sm:w-auto px-8 py-4 bg-[#0B1523] text-white rounded-full font-semibold flex items-center justify-center gap-2 group hover:bg-[#13243D] transition-all duration-300 shadow-[0_10px_30px_rgba(11,21,35,0.3)] hover:shadow-[0_15px_40px_rgba(11,21,35,0.4)] hover:-translate-y-1"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#0B1523] border border-[#0B1523] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#0B1523]/5 transition-all duration-300"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
