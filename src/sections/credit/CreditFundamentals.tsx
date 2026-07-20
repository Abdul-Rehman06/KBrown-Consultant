import { motion } from 'framer-motion';
import { History, PieChart, Clock, Layers, Activity, ShieldCheck } from 'lucide-react';

const factors = [
  {
    title: 'Payment History',
    icon: <History className="w-8 h-8 text-gold" />
  },
  {
    title: 'Credit Utilization',
    icon: <PieChart className="w-8 h-8 text-gold" />
  },
  {
    title: 'Length of Credit History',
    icon: <Clock className="w-8 h-8 text-gold" />
  },
  {
    title: 'Credit Mix',
    icon: <Layers className="w-8 h-8 text-gold" />
  },
  {
    title: 'New Credit Activity',
    icon: <Activity className="w-8 h-8 text-gold" />
  },
  {
    title: 'Financial Management',
    icon: <ShieldCheck className="w-8 h-8 text-gold" />
  }
];

export default function CreditFundamentals() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Common Factors That May <br />
            <span className="text-gold italic">Influence Credit Profiles</span>
          </h2>
          <p className="text-gray-light text-lg">
            Understanding these foundational elements can help guide your financial planning and decision-making over time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-20 h-20 mx-auto rounded-full bg-dark flex items-center justify-center mb-6 border border-white/10 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {factor.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-2 relative z-10">
                {factor.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}