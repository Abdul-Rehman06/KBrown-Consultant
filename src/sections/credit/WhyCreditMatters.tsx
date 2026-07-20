import { motion } from 'framer-motion';
import { Home, Building2, Car, FileText, Umbrella, Wallet } from 'lucide-react';

const matters = [
  {
    title: 'Purchasing a Home',
    description: 'Mortgage lenders evaluate financial history during the approval process.',
    icon: <Home className="w-6 h-6 text-gold" />
  },
  {
    title: 'Business Financing',
    description: 'Lenders review credit when considering commercial funding options.',
    icon: <Building2 className="w-6 h-6 text-gold" />
  },
  {
    title: 'Vehicle Financing',
    description: 'Auto loan terms and options often rely on credit evaluation.',
    icon: <Car className="w-6 h-6 text-gold" />
  },
  {
    title: 'Rental Applications',
    description: 'Property managers often review credit histories for leasing agreements.',
    icon: <FileText className="w-6 h-6 text-gold" />
  },
  {
    title: 'Insurance Considerations',
    description: 'Certain insurance providers may use credit-based scores to determine options.',
    icon: <Umbrella className="w-6 h-6 text-gold" />
  },
  {
    title: 'Financial Planning',
    description: 'Understanding credit is a foundational element of long-term wealth strategy.',
    icon: <Wallet className="w-6 h-6 text-gold" />
  }
];

export default function WhyCreditMatters() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-y border-white/5">
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Why Understanding <br className="md:hidden" />
            <span className="text-gold italic">Credit Is Important</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matters.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-light text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}