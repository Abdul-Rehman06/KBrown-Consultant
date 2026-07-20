import { motion } from 'framer-motion';
import { Shield, BookOpen, Search, UserCheck, Laptop, Clock } from 'lucide-react';

const reasons = [
  {
    title: 'Professional Guidance',
    icon: <Shield className="w-6 h-6 text-gold" />
  },
  {
    title: 'Education First',
    icon: <BookOpen className="w-6 h-6 text-gold" />
  },
  {
    title: 'Transparent Process',
    icon: <Search className="w-6 h-6 text-gold" />
  },
  {
    title: 'Personalized Consultations',
    icon: <UserCheck className="w-6 h-6 text-gold" />
  },
  {
    title: 'Modern Digital Experience',
    icon: <Laptop className="w-6 h-6 text-gold" />
  },
  {
    title: 'Long-Term Support',
    icon: <Clock className="w-6 h-6 text-gold" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 relative bg-dark-500 overflow-hidden">
      {/* Animated Lines Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gold to-transparent w-full"
            style={{ top: `${20 * (i + 1)}%` }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Why Clients Choose <br className="hidden md:block" />
            <span className="text-gold italic">KBrown Consultant</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-white group-hover:text-gold-light transition-colors">
                {reason.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}