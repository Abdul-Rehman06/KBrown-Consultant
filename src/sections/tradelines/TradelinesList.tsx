import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, CheckCircle2, CreditCard, FileText, Shield, TrendingUp, Users, X } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { useEffect, useMemo, useState } from 'react';
import { tradelinesData } from '../../data/tradelines';

export default function TradelinesList() {
  const [open, setOpen] = useState(false);
  const [selectedTradelineId, setSelectedTradelineId] = useState<string | null>(null);

  const selectedTradeline = useMemo(() => {
    if (!selectedTradelineId) return null;
    return tradelinesData.find((x) => x.id === selectedTradelineId) ?? null;
  }, [selectedTradelineId]);

  useEffect(() => {
    if (!open) return;

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://api.kbrownconsultant.com/js/form_embed.js"]'
    );

    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://api.kbrownconsultant.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const openForm = (tradelineId: string) => {
    setSelectedTradelineId(tradelineId);
    setOpen(true);
  };

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

                  <button
                    type="button"
                    onClick={() => openForm(tradeline.id)}
                    className="w-full relative z-10 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1523] px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto"
                  >
                    <span>Choose This Tradeline</span>
                    <CheckCircle2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-4xl bg-[#0B1523] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Tradelines Form</div>
                  <div className="text-lg md:text-xl font-heading text-white">
                    {selectedTradeline?.name ?? 'Choose This Tradeline'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 md:p-6">
                <div className="w-full h-[70vh] min-h-[520px] max-h-[760px] bg-black/20 border border-white/10 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://api.kbrownconsultant.com/widget/form/6u5ymHnjsWJYSyabGXHR"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '0px' }}
                    id="inline-6u5ymHnjsWJYSyabGXHR"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Tradelines Form"
                    data-height="432"
                    data-layout-iframe-id="inline-6u5ymHnjsWJYSyabGXHR"
                    data-form-id="6u5ymHnjsWJYSyabGXHR"
                    title="Tradelines Form"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
