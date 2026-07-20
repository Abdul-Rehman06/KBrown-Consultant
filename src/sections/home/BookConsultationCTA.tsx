import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BookConsultationCTA() {
  return (
    <section className="py-32 relative bg-dark overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-300/20 to-dark z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-gold/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold-light uppercase tracking-wider">Strategy Session</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight"
          >
            Ready to Take the <br />
            <span className="text-gold italic">Next Step?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-light mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Schedule a one-on-one consultation to discuss your goals and receive personalized educational guidance tailored to your financial journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Link to GHL Calendar or Booking Page */}
            <a href="/book-consultation" className="btn-primary text-lg px-12 py-4 inline-flex items-center group shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              Book Your Consultation
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}