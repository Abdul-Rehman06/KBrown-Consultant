import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, Compass } from 'lucide-react';

const reasons = [
  {
    title: 'Knowledge',
    description: 'Helping you better understand financial topics.',
    icon: <BookOpen className="w-10 h-10 text-gold" />
  },
  {
    title: 'Transparency',
    description: 'Clear, honest communication without unrealistic promises.',
    icon: <ShieldCheck className="w-10 h-10 text-gold" />
  },
  {
    title: 'Personalized Guidance',
    description: 'Educational consultations tailored to your goals.',
    icon: <Compass className="w-10 h-10 text-gold" />
  }
];

export default function CreditWhyKBrown() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Education <span className="text-gold italic">Before Decisions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass p-12 rounded-3xl border border-white/10 hover:border-gold/30 hover:bg-dark-300/80 group transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-24 h-24 rounded-full bg-dark flex items-center justify-center mb-8 border border-white/10 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {reason.icon}
                </div>
              </div>
              
              <h3 className="text-3xl font-heading font-bold text-white mb-4 relative z-10">
                {reason.title}
              </h3>
              <p className="text-gray-light text-lg leading-relaxed relative z-10">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}