import { motion } from 'framer-motion';
import { CreditCard, Calendar, TrendingUp, Users, FileText, CheckCircle2, Shield } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { tradelinesData } from '../../data/tradelines';
import { Link } from 'react-router-dom';

export default function TradelinesList() {
  return (
    <section className="py-24 relative bg-[#0B1523]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tradelinesData.map((tradeline, index) => (
            <motion.div
              key={tradeline.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 group relative flex flex-col">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-transparent group-hover:from-[#D4AF37]/5 rounded-3xl transition-colors duration-500" />
                  
                  <div className="relative z-10 flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                        <CreditCard className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-heading text-white mb-2 leading-snug">
                      {tradeline.name}
                    </h3>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-6">
                      {tradeline.type}
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-white/50 flex items-center gap-2"><Calendar className="w-4 h-4" /> Date Opened</span>
                        <span className="text-white font-medium">{tradeline.dateOpened}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-white/50 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Current Limit</span>
                        <span className="text-[#D4AF37] font-medium">{tradeline.currentCreditLimit}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-white/50 flex items-center gap-2"><Users className="w-4 h-4" /> Auth Users</span>
                        <span className="text-white font-medium">{tradeline.howMany}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-white/50 flex items-center gap-2"><FileText className="w-4 h-4" /> Statement Date</span>
                        <span className="text-white font-medium">{tradeline.statementClosingDate}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-white/50 flex items-center gap-2"><Shield className="w-4 h-4" /> Bureaus</span>
                        <span className="text-white font-medium text-right max-w-[120px]">{tradeline.bureausReportingTo}</span>
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-2xl p-4 mb-6 border border-white/5">
                      <div className="text-center mb-3 border-b border-white/10 pb-3">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Monthly Pricing</p>
                        <p className="text-2xl text-white font-heading">{tradeline.monthlyPricing}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">6 Months (10% Off)</p>
                        <p className="text-xl text-[#D4AF37] font-heading">{tradeline.sixMonthsPricing}</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to="/book-consultation"
                    className="w-full relative z-10 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1523] px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto"
                  >
                    <span>Choose This Tradeline</span>
                    <CheckCircle2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </Link>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
