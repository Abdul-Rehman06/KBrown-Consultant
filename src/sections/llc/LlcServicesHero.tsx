import { motion } from 'framer-motion';
import { Building2, XCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

export default function LlcServicesHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#0B1523] min-h-[80vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              K Brown Consultant Group
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading text-white mb-6 leading-tight"
          >
            Form a new business, or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2C96D]">close one out</span> the right way.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Fixed pricing, a licensed process, and a team that handles the paperwork so you don't have to figure it out alone.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Formation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
              <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 group relative flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-transparent group-hover:from-[#D4AF37]/5 rounded-3xl transition-colors duration-500" />
                
                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 mb-6">
                    <Building2 className="w-8 h-8 text-[#D4AF37]" />
                  </div>

                  <h3 className="text-3xl font-heading text-white mb-4">Start a New LLC</h3>
                  
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Get your business legally formed the right wayname search, Articles of Organization, EIN, and a Registered Agent set up correctly from day one.
                  </p>

                  <div className="text-2xl text-white font-heading mb-8">
                    Starting at <span className="text-[#D4AF37]">$1,750</span>
                  </div>
                </div>

                <Link 
                  to="/llc-formation"
                  className="w-full relative z-10 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1523] px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Start LLC Formation</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Tilt>
          </motion.div>

          {/* Dissolution Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
              <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-500 group relative flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-transparent group-hover:from-white/5 rounded-3xl transition-colors duration-500" />
                
                <div className="relative z-10 flex-grow">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                    <XCircle className="w-8 h-8 text-white/70" />
                  </div>

                  <h3 className="text-3xl font-heading text-white mb-4">Dissolve an Existing LLC</h3>
                  
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Close your LLC properlyverified dissolution status, Certificate of Status, and guidance on closing accounts, licenses, and final filings.
                  </p>

                  <div className="text-2xl text-white font-heading mb-8">
                    Starting at <span className="text-white/90">$675</span>
                  </div>
                </div>

                <Link 
                  to="/llc-dissolution"
                  className="w-full relative z-10 bg-white/5 border border-white/20 text-white hover:bg-white hover:text-[#0B1523] px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Start LLC Dissolution</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Tilt>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 text-white/50 text-sm tracking-widest uppercase font-medium"
        >
          K Brown Consultant Group · FIX THE FOUNDATION. FUND THE VISION.
        </motion.div>
      </div>
    </section>
  );
}