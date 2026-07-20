import { motion } from 'framer-motion';
import { MessageSquare, BookOpen, Compass, Briefcase } from 'lucide-react';

const expectations = [
  {
    icon: MessageSquare,
    title: 'Personalized Discussion',
    description: 'Every session is tailored to your individual goals and questions.',
  },
  {
    icon: BookOpen,
    title: 'Educational Guidance',
    description: 'Gain a better understanding of funding concepts, financial planning, and business growth strategies.',
  },
  {
    icon: Compass,
    title: 'Strategic Direction',
    description: 'Leave with greater clarity on possible next steps based on your goals and circumstances.',
  },
  {
    icon: Briefcase,
    title: 'Professional Experience',
    description: 'Enjoy a relaxed, confidential conversation focused on education and informed decision-making.',
  },
];

export default function BookingExpectations() {
  return (
    <section className="py-24 relative bg-[#0B1523] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              What You Can Expect
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
          >
            During Your <span className="text-[#D4AF37]">Consultation</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {expectations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-heading text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
