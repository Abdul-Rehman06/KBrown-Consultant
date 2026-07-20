import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const faqs = [
  {
    question: "How long is the consultation?",
    answer: "The consultation length will be confirmed during the booking process."
  },
  {
    question: "Is the consultation confidential?",
    answer: "Yes. Every consultation is handled with professionalism and respect for your privacy."
  },
  {
    question: "What should I prepare?",
    answer: "Bring any questions, goals, or relevant information you'd like to discuss. The more context you provide, the more personalized the conversation can be."
  },
  {
    question: "Will I receive recommendations?",
    answer: "You'll receive educational guidance and information relevant to your goals and circumstances."
  },
  {
    question: "Can I reschedule my appointment?",
    answer: "Yes. You'll receive a confirmation email with options to manage your booking."
  }
];

export default function BookingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B1523]">
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
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
          >
            Have <span className="text-[#D4AF37]">Questions?</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={twMerge(
                    clsx(
                      "w-full text-left px-6 py-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group",
                      isOpen
                        ? "bg-white/10 border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.05)]"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    )
                  )}
                >
                  <span className={clsx(
                    "text-lg font-medium transition-colors duration-300",
                    isOpen ? "text-[#D4AF37]" : "text-white group-hover:text-white"
                  )}>
                    {faq.question}
                  </span>
                  <div className={clsx(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ml-4",
                    isOpen ? "bg-[#D4AF37]/20" : "bg-white/5 group-hover:bg-white/10"
                  )}>
                    <ChevronDown
                      className={clsx(
                        "w-5 h-5 transition-transform duration-300",
                        isOpen ? "text-[#D4AF37] rotate-180" : "text-white/60 group-hover:text-white"
                      )}
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-6 text-white/70 leading-relaxed border-x border-b border-white/5 rounded-b-2xl mx-2 bg-white/[0.02]">
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
    </section>
  );
}
