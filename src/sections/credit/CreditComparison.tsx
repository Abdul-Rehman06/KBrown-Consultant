import { motion } from 'framer-motion';
import { User, Building, CheckCircle2 } from 'lucide-react';

const personalPoints = [
  'Individual financial history',
  'Consumer lending',
  'Personal borrowing',
  'Everyday financial activities'
];

const businessPoints = [
  'Business financial profile',
  'Company borrowing',
  'Vendor relationships',
  'Business growth'
];

export default function CreditComparison() {
  return (
    <section className="py-24 relative bg-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Personal Credit */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-dark border border-white/10 rounded-3xl p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <User className="w-32 h-32 text-white" />
            </div>
            <div className="w-14 h-14 rounded-full bg-dark-300 flex items-center justify-center mb-8 border border-white/5">
              <User className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-8">Personal Credit</h3>
            <ul className="space-y-4 relative z-10">
              {personalPoints.map((point, i) => (
                <li key={i} className="flex items-center text-gray-light text-lg">
                  <CheckCircle2 className="w-5 h-5 text-white/50 mr-4 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business Credit */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-dark border border-gold/20 rounded-3xl p-10 relative overflow-hidden group hover:border-gold/40 transition-colors duration-500 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Building className="w-32 h-32 text-gold" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-8 border border-gold/20">
              <Building className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-8">Business Credit</h3>
            <ul className="space-y-4 relative z-10">
              {businessPoints.map((point, i) => (
                <li key={i} className="flex items-center text-gray-light text-lg">
                  <CheckCircle2 className="w-5 h-5 text-gold mr-4 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl text-white/90 font-medium italic border-t border-b border-white/10 py-6 px-4 glass bg-dark-300/30">
            Both play different roles depending on your financial goals. Understanding how each works can help you make more informed decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}