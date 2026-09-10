import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function FormationStateThankYou() {
  return (
    <PageTransition>
      <SEO 
        title="You're Completely Set | KBrown Consultant Group" 
        description="LLC Formation State Selection Guide Thank You Screen"
        noindex={true}
      />
      <main className="bg-[#0B1523] min-h-screen pt-32 pb-24 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />

              <div className="relative z-10 text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/10 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h1 className="text-3xl md:text-4xl font-heading text-white mb-4">
                  You're Completely Set <span className="text-[#D4AF37]">✓</span>
                </h1>
                <p className="text-white/80 text-lg leading-relaxed">
                  That's everything, payment, your full paperwork, and now your state preference are all in. Our team has what we need to get your LLC formed the right way.
                </p>
              </div>

              <div className="bg-black/20 border border-white/5 rounded-2xl p-6 md:p-8 mb-8">
                <h2 className="text-xl font-heading text-[#D4AF37] mb-6">What happens next:</h2>
                <ul className="space-y-4">
                  {[
                    "Our team reviews your state selection alongside your intake form",
                    "We finalize your formation strategy and begin filing",
                    "You'll hear from us with updates as your LLC moves through the process typically 5–10 business days for standard processing"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                      <p>{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="text-center space-y-6">
                <p className="text-white/60 text-sm italic">
                  Questions in the meantime? Reply to any of our emails or call us at (954) 382-5511.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-[#D4AF37] font-heading uppercase tracking-wider text-sm">
                    K Brown Consultant Group
                  </p>
                  <p className="text-white/50 text-xs mt-1 uppercase tracking-widest">
                    Fix the Foundation. Fund the Vision.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}