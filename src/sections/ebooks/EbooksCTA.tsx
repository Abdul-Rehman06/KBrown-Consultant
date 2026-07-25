import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EbooksCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#D4AF37]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(11,21,35,0.1)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8 shadow-lg"
          >
            <Calendar className="w-8 h-8 text-[#0B1523]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#0B1523] mb-8 leading-tight"
          >
            Looking for <span className="text-white drop-shadow-md">Personalized Guidance?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-xl text-[#0B1523]/80 mb-12 max-w-2xl mx-auto font-medium"
          >
            <p>
              Our eBooks are a great place to begin, but sometimes a conversation can provide even greater clarity.
            </p>
            <p>
              If you'd like to discuss your goals, ask questions, or receive personalized educational guidance, schedule a one-on-one consultation with our team.
            </p>
            <p className="text-[#0B1523]">
              We're here to help you continue learning with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 bg-[#0B1523] text-white rounded-full font-semibold flex items-center justify-center gap-2 group hover:bg-[#13243D] transition-all duration-300 shadow-[0_10px_30px_rgba(11,21,35,0.3)] hover:shadow-[0_15px_40px_rgba(11,21,35,0.4)] hover:-translate-y-1"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Footer Disclaimer Specific to eBooks Page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto pt-12 border-t border-[#0B1523]/10 text-center"
        >
          <p className="text-sm text-[#0B1523]/60 leading-relaxed font-medium">
            <strong className="text-[#0B1523]">Disclaimer:</strong> The eBooks and educational materials available through KBrown Consultant Group LLC are provided for informational and educational purposes only. They do not constitute legal, tax, financial, lending, or credit repair advice. Readers should make decisions based on their individual circumstances and consult qualified professionals when appropriate. Access to these resources does not guarantee any specific financial, funding, or credit-related outcome.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
