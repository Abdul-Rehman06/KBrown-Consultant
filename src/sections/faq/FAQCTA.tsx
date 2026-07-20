import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQCTA() {
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#0B1523] mb-8 leading-tight"
          >
            Still Have <span className="text-white drop-shadow-md">Questions?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-xl text-[#0B1523]/80 mb-12 max-w-2xl mx-auto font-medium"
          >
            <p>
              If you couldn't find the answer you were looking for, we'd love to hear from you.
            </p>
            <p>
              Reach out to our team or schedule a personalized consultation, and we'll be happy to answer your questions and help you better understand your options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#0B1523] text-white rounded-full font-semibold flex items-center justify-center gap-2 group hover:bg-[#13243D] transition-all duration-300 shadow-[0_10px_30px_rgba(11,21,35,0.3)] hover:shadow-[0_15px_40px_rgba(11,21,35,0.4)] hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
            
            <Link
              to="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#0B1523] border border-[#0B1523] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#0B1523]/5 transition-all duration-300"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Footer Disclaimer Specific to FAQ Page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto pt-12 border-t border-[#0B1523]/10 text-center"
        >
          <p className="text-sm text-[#0B1523]/60 leading-relaxed font-medium">
            <strong className="text-[#0B1523]">Disclaimer:</strong> The information provided in these FAQs is intended for general informational and educational purposes only. It should not be considered legal, tax, financial, lending, or credit repair advice. Individual circumstances vary, and any funding opportunities or third-party services are subject to their own eligibility requirements, underwriting standards, and terms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
