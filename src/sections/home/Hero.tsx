import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveGrid } from '../../components/ui/interactive-grid';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-32"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 bg-[#0B1523]">
        <InteractiveGrid />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(212,175,55,0.10)_0%,transparent_70%)] rounded-full animate-float pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] pointer-events-none" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Content */}
        <div className="text-left z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-gold/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="text-gold">✨</span>
            <span className="text-xs md:text-sm font-medium text-gold-light tracking-wide">Trusted Financial Consulting for Entrepreneurs & Growing Businesses</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Build a Stronger <br />
            <span className="text-gradient-gold italic">Financial Future</span><br />
            with Expert Guidance
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-light max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Whether you're preparing for funding opportunities, learning how personal and business credit work, or looking for strategic financial guidance, KBrown Consultant Group LLC provides educational resources and personalized consultations designed to help you make informed decisions.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/book-consultation" className="btn-primary w-full sm:w-auto flex items-center justify-center group text-base">
              Book Your Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://kbrownconsultantgroupllc.getcredithelpnow.com/billing" target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto flex items-center justify-center group text-base">
              Get Started For $0
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image & Floating Cards */}
        <div className="relative h-[600px] hidden lg:block z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10" />
            <img 
              src="/kevin-main.jpeg" 
              alt="Kevin Brown - Financial Consultant" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Floating HTML Cards over Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-[10%] right-[-10%] glass-dark p-4 rounded-xl border-gold/20 animate-float z-20"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-sm font-heading font-bold text-white mb-1">Funding Guidance</p>
            <p className="text-xs text-gold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Personalized Strategy</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-[20%] left-[-5%] glass-dark p-4 rounded-xl border-gold/20 animate-float z-20"
            style={{ animationDelay: '1.5s' }}
          >
            <p className="text-sm font-heading font-bold text-white mb-1">Financial Education</p>
            <p className="text-xs text-gold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Learn With Confidence</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-[5%] right-[10%] glass-dark p-4 rounded-xl border-gold/20 animate-float z-20"
            style={{ animationDelay: '2.5s' }}
          >
            <p className="text-sm font-heading font-bold text-white mb-1">Business Growth</p>
            <p className="text-xs text-gold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Build Smarter</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-xs text-gray uppercase tracking-[0.2em] mb-2 font-mono">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}