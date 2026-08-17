import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CreditCard, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function TradelinesPreview() {
  return (
    <section className="py-24 relative bg-[#0B1523] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            >
              <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
                Premium Tradelines
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading text-white mb-6 leading-tight"
            >
              Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2C96D]">Credit Journey</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 mb-8 leading-relaxed"
            >
              Enhance your credit profile with our curated selection of high-limit, aged tradelines. We offer a transparent, professional approach to help you achieve your financial goals in a fraction of the time.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {[
                { icon: ShieldCheck, text: "100% Legal Consumer Rights" },
                { icon: TrendingUp, text: "Proven Results" },
                { icon: CreditCard, text: "Major Bureau Reporting" }
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mr-4">
                    <item.icon className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  {item.text}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/tradelines" 
                className="btn-primary inline-flex items-center group"
              >
                View Tradeline Plans
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
              >
                <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-3xl" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center">
                        <CreditCard className="w-7 h-7 text-[#D4AF37]" />
                      </div>
                      <div className="bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-semibold border border-[#D4AF37]/30">
                        Featured
                      </div>
                    </div>
                    <h3 className="text-2xl font-heading text-white mb-2">American Express (Platinum)</h3>
                    <p className="text-white/60 mb-8">High-Limit Premium Tradeline</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/50">History</span>
                        <span className="text-white">Since 1988</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/50">Reporting</span>
                        <span className="text-white">Major 3 Bureaus</span>
                      </div>
                    </div>
                    
                    <Link 
                      to="/tradelines"
                      className="w-full block text-center py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
                    >
                      Explore All Options
                    </Link>
                  </div>
                </div>
              </Tilt>
              
              {/* Decorative Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
