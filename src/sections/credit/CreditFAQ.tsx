import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What topics do you cover?',
    answer: 'We provide educational information related to personal finance, business funding, credit fundamentals, and financial planning.'
  },
  {
    question: 'Do you improve or repair credit?',
    answer: 'Our focus is on education, financial guidance, and consultations. We encourage clients to make informed decisions based on their individual circumstances. We do not provide credit repair services.'
  },
  {
    question: 'Will my credit score increase?',
    answer: 'Individual financial outcomes vary based on many factors. We do not guarantee any specific results or score increases.'
  },
  {
    question: 'Can I schedule a consultation?',
    answer: 'Yes. You can book a personalized consultation through our online scheduling system to discuss your specific goals.'
  },
  {
    question: 'Are your educational resources free?',
    answer: 'Some resources are complimentary, while others may be offered as premium educational materials.'
  }
];

export default function CreditFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-dark overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Frequently Asked <span className="text-gold italic">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
              >
                <span className="text-lg font-semibold text-white pr-8 group-hover:text-gold-light transition-colors">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-dark-300 flex items-center justify-center shrink-0 border border-white/10 text-gold group-hover:border-gold/50 transition-colors">
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}