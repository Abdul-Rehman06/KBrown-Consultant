import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gold">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(255,255,255,0.20)_0%,transparent_70%)] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(11,21,35,0.20)_0%,transparent_70%)] rounded-full mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-dark mb-8 leading-tight tracking-tight max-w-5xl mx-auto"
        >
          Your Financial Journey Starts with the <span className="italic text-white drop-shadow-md">Right Guidance</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-dark/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Whether you're looking to learn more about funding opportunities, improve your financial knowledge, or schedule a personalized consultation, we're here to help you take the next step with confidence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link to="https://kbcnsult.com/funding/" className="relative overflow-hidden bg-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center group">
            See if you qualify for funding
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="https://kbrownconsultantgroupllc.getcredithelpnow.com/billing" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden bg-transparent border-2 border-dark text-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-dark/5 hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center group">
            Get Started For $0
          </a>
        </motion.div>
      </div>
    </section>
  );
}