import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const freeItems = [
  'Educational articles',
  'Starter guides',
  'Videos',
  'Checklists',
  'Downloads'
];

const premiumItems = [
  'Advanced workbooks',
  'In-depth guides',
  'Masterclasses',
  'Templates',
  'Exclusive educational content'
];

export default function ResourcesPricing() {
  return (
    <section className="py-24 relative bg-dark overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Free Resources */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-dark border border-white/10 rounded-3xl p-10 relative overflow-hidden"
          >
            <h3 className="text-3xl font-heading font-bold text-white mb-2">Free Resources</h3>
            <p className="text-gray-light mb-8">Accessible knowledge to start your journey.</p>
            
            <ul className="space-y-4 mb-10">
              {freeItems.map((item, i) => (
                <li key={i} className="flex items-center text-gray-light text-lg">
                  <CheckCircle2 className="w-5 h-5 text-white/50 mr-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full btn-outline border-white/20 hover:bg-white/5 py-4 text-lg">
              Browse Free Content
            </button>
          </motion.div>

          {/* Premium Resources */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-dark border border-gold/30 rounded-3xl p-10 relative overflow-hidden group shadow-[0_0_30px_rgba(212,175,55,0.05)]"
          >
            <div className="absolute top-0 right-0 bg-gold text-dark px-4 py-1.5 rounded-bl-xl font-bold text-xs uppercase tracking-wider flex items-center">
              <Star className="w-3 h-3 mr-1 fill-dark" /> Premium
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />

            <h3 className="text-3xl font-heading font-bold text-white mb-2 relative z-10">Premium Resources</h3>
            <p className="text-gold-light mb-8 relative z-10">In-depth materials for serious growth.</p>
            
            <ul className="space-y-4 mb-10 relative z-10">
              {premiumItems.map((item, i) => (
                <li key={i} className="flex items-center text-white text-lg">
                  <CheckCircle2 className="w-5 h-5 text-gold mr-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full btn-primary py-4 text-lg relative z-10">
              Unlock Premium Access
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}