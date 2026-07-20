import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Entrepreneurs',
    description: 'Looking to explore funding strategies for new ventures.'
  },
  {
    title: 'Startups',
    description: 'Seeking educational guidance on early-stage capital.'
  },
  {
    title: 'Growing Businesses',
    description: 'Planning for expansion and operational scaling.'
  },
  {
    title: 'Small Business Owners',
    description: 'Evaluating working capital and equipment financing.'
  },
  {
    title: 'Self-Employed Professionals',
    description: 'Understanding personal vs. business financial strategies.'
  },
  {
    title: 'Established Companies',
    description: 'Reviewing long-term strategic investments and planning.'
  }
];

export default function FundingWhoBenefits() {
  return (
    <section className="py-24 relative bg-dark-500 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Who This Is <span className="text-gold italic">Designed For</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 group"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold transition-colors">
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