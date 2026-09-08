import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function LlcFormationContent() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#0B1523] min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              K Brown Consultant Group
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading text-white mb-6"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2C96D]">LLC Formation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Pick your package and tell us a bit about your business — we'll send your payment link right away.
          </motion.p>
        </div>

        {/* Section 1: Packages */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2000} className="h-full">
              <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm font-medium mb-6 w-fit">
                  Core Filing
                </div>
                <h3 className="text-2xl font-heading text-white mb-2">Basic Formation</h3>
                <div className="text-4xl font-heading text-[#D4AF37] mb-8">$1,750</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Name availability search', 'Articles of Organization filed', 'Registered Agent designation', 'EIN obtained from IRS'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2000} className="h-full">
              <div className="h-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-3xl p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0B1523] text-xs font-bold uppercase tracking-wider py-1 px-8 translate-x-6 translate-y-4 rotate-45">
                  Most Popular
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6 w-fit">
                  Premium Service
                </div>
                <h3 className="text-2xl font-heading text-white mb-2">Full Formation</h3>
                <div className="text-4xl font-heading text-[#D4AF37] mb-8">$2,250</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Everything in Basic', 'Custom Operating Agreement', 'Bank account setup guidance', 'Business credit consultation'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className={i === 0 ? "font-semibold text-white" : ""}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Section 2: Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative">
            <h3 className="text-2xl font-heading text-white mb-2">Your Information</h3>
            <p className="text-white/60 mb-8">
              Payment is required before formation work begins. Once you submit, we'll send a payment link matching your selected package. Full paperwork — Service Agreement, Authorization, and state selection — is sent after payment.
            </p>

            <div className="w-full min-h-[600px] bg-transparent rounded-xl overflow-hidden">
              {/* REPLACE WITH ACTUAL GHL IFRAME FOR FORMATION */}
              <iframe
                src="https://api.ahriat.com/widget/form/FORMATION_FORM_ID_HERE"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '5px', minHeight: '600px' }}
                id="inline-FORMATION_FORM_ID_HERE"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="LLC Formation Form"
                data-height="600"
                data-layout-iframe-id="inline-FORMATION_FORM_ID_HERE"
                data-form-id="FORMATION_FORM_ID_HERE"
                title="LLC Formation Form"
              >
              </iframe>
              <script src="https://api.ahriat.com/js/form_embed.js"></script>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}