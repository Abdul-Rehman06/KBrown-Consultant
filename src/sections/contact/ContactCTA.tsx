import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
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
            Ready to Start the <span className="text-white drop-shadow-md">Conversation?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-xl text-[#0B1523]/80 mb-12 max-w-2xl mx-auto font-medium"
          >
            <p>
              Whether you're exploring funding opportunities, looking to expand your financial knowledge, or seeking professional guidance, we're here to help.
            </p>
            <p>
              We look forward to connecting with you and learning more about your goals.
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
              to="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 bg-[#0B1523] text-white rounded-full font-semibold flex items-center justify-center gap-2 group hover:bg-[#13243D] transition-all duration-300 shadow-[0_10px_30px_rgba(11,21,35,0.3)] hover:shadow-[0_15px_40px_rgba(11,21,35,0.4)] hover:-translate-y-1"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/resources"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#0B1523] border border-[#0B1523] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#0B1523]/5 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Explore Our Resources
            </Link>
          </motion.div>
        </div>

        {/* Footer Disclaimer Specific to Contact Page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto pt-12 border-t border-[#0B1523]/10 text-center"
        >
          <p className="text-sm text-[#0B1523]/60 leading-relaxed font-medium">
            <strong className="text-[#0B1523]">Disclaimer:</strong> The information submitted through this contact form is used solely to respond to your inquiry and provide requested information. Contacting KBrown Consultant does not establish a client relationship, nor does it guarantee eligibility for any financial product, funding opportunity, or specific outcome. All consultations and educational resources are provided for informational purposes only.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
