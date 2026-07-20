import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesCTA() {
  return (
    <section className="pt-12 pb-24 relative overflow-hidden bg-[#0B1523]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Let's Build Your Financial <br className="hidden md:block" />
            <span className="text-[#D4AF37]">Confidence Together</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're exploring funding opportunities, expanding your financial knowledge, or seeking strategic guidance for your business, KBrown Consultant is here to support your journey through education, transparency, and personalized consultations.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white font-medium mb-10"
          >
            Take the next step by scheduling your consultation and discover how informed decisions begin with the right conversation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Link to="/book-consultation" className="btn-primary w-full sm:w-auto flex items-center justify-center group px-8 py-4">
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/resources" className="btn-outline w-full sm:w-auto flex items-center justify-center px-8 py-4">
              Explore Our Resources
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-10 border-t border-white/10"
          >
            <p className="text-sm text-white/50 text-left leading-relaxed">
              <strong className="text-white/70 font-semibold">Disclaimer:</strong> The services provided by KBrown Consultant are intended for educational and informational purposes only. We do not guarantee funding approvals, credit score improvements, financial outcomes, or business results. Individual circumstances vary, and consultations should not be considered legal, tax, investment, lending, or credit repair advice. Third-party services and funding opportunities are subject to their own eligibility requirements, terms, and conditions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
