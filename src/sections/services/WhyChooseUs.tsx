import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Personalized one-on-one consultations',
  'Education-first approach',
  'Clear and transparent communication',
  'Practical financial guidance',
  'Modern digital experience',
  'High-quality educational resources',
  'Professional support',
  'Long-term relationship focused on your goals'
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-[#0B1523]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Why Choose <span className="text-[#D4AF37]">KBrown Consultant?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto"
          >
            Choosing the right consulting partner is about more than services—it's about trust. At KBrown Consultant, we're committed to creating an experience built on professionalism, transparency, and education.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center hover:border-[#D4AF37]/30 transition-colors group"
            >
              <div className="bg-white/5 p-3 rounded-full mb-4 group-hover:bg-[#D4AF37]/10 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <p className="text-white/80 font-medium text-sm md:text-base">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
