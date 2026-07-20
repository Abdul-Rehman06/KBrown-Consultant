import { motion } from 'framer-motion';
import { Search, MessageSquare, BookOpen, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Every relationship begins with understanding your goals, questions, and priorities.'
  },
  {
    icon: MessageSquare,
    title: 'Consult',
    description: 'Meet with our team for a personalized discussion focused on education and strategic guidance.'
  },
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Receive educational resources, practical information, and greater clarity around the topics that matter most to you.'
  },
  {
    icon: ArrowRight,
    title: 'Move Forward',
    description: 'Take your next steps with increased confidence and a better understanding of your available options.'
  }
];

export default function ServicesProcess() {
  return (
    <section className="py-24 relative bg-[#0B1523]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#D4AF37] italic text-xl"
          >
            A Simple, Transparent Experience
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent z-0" />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-[#0B1523] border-2 border-[#D4AF37]/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:scale-110 hover:border-[#D4AF37]/60 transition-all duration-300">
                    <Icon className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
