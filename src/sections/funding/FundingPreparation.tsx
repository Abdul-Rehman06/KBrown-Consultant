import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const checklist = [
  'Understand Your Goals',
  'Organize Business Information',
  'Review Financial Documents',
  'Learn About Available Options',
  'Prepare Questions',
  'Schedule Consultation'
];

export default function FundingPreparation() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Preparing Before <span className="text-gold italic">You Apply</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {checklist.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 flex items-center space-x-4 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors shrink-0">
                <CheckCircle2 className="w-5 h-5 text-gold" />
              </div>
              <span className="text-lg text-white font-medium group-hover:text-gold-light transition-colors">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}