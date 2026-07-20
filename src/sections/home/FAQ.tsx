import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We provide comprehensive financial consulting, including funding guidance, credit education, financial strategy development, and personalized business consulting designed to help you scale."
  },
  {
    question: "How do consultations work?",
    answer: "Our consultations are one-on-one sessions where we review your current financial or business situation, discuss your goals, and provide actionable, educational guidance tailored to your specific needs."
  },
  {
    question: "How can I access your resources?",
    answer: "You can access our free and premium educational resources, including eBooks, guides, and checklists, directly through the Resources section of our website."
  },
  {
    question: "Do you provide business funding?",
    answer: "We do not directly lend money. Instead, we provide educational consulting to help you understand the funding landscape, prepare your business profile, and navigate available opportunities effectively."
  },
  {
    question: "What topics are covered during consultations?",
    answer: "Topics vary based on your needs but often include business funding readiness, personal and business credit fundamentals, operational strategy, and long-term financial planning."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book a consultation directly through our website by clicking the 'Book Consultation' button, which will guide you to our secure calendar to choose a time that works for you."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-dark-500 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              Frequently <br />
              <span className="text-gold italic">Asked</span> Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-light text-lg mb-8"
            >
              Find answers to common questions about our consulting services and educational resources.
            </motion.p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white/5 border-gold/30' : 'bg-dark hover:bg-white/5 hover:border-white/20'}`}
                  >
                    <button
                      className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className={`text-lg font-heading font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white'}`}>
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-gold text-dark' : 'bg-white/10 text-white'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 text-gray-light leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}