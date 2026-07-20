import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Schedule Consultation',
    description: 'Meet with our team to discuss your goals and current financial situation.'
  },
  {
    number: '02',
    title: 'Receive Personalized Guidance',
    description: 'We help you understand available options and educational resources based on your needs.'
  },
  {
    number: '03',
    title: 'Take Your Next Step',
    description: 'Move forward with greater clarity and confidence using a personalized action plan.'
  }
];

export default function HowWeWork() {
  return (
    <section className="py-24 relative bg-dark-500 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">How We <span className="text-gold italic">Work</span></h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 md:border-none md:flex md:justify-between ml-4 md:ml-0">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-12 md:pl-0 pb-12 md:pb-0 md:w-1/3 md:text-center group"
              >
                {/* Node */}
                <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-dark border border-gold/50 flex items-center justify-center z-10 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500">
                  <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-150 transition-transform duration-500" />
                </div>
                
                <div className="md:pt-16">
                  <div className="text-gold font-mono text-sm tracking-widest mb-3">STEP {step.number}</div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-gold-light transition-colors">{step.title}</h3>
                  <p className="text-gray-light leading-relaxed px-0 md:px-4">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}