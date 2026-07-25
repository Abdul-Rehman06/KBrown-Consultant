import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const faqs = [
  {
    question: "What does KBrown Consultant Group LLC do?",
    answer: "KBrown Consultant Group LLC provides educational resources, personalized consultations, and strategic guidance related to business funding, financial education, and business growth. Our goal is to help individuals and business owners better understand their options and make informed financial decisions."
  },
  {
    question: "How do I schedule a consultation?",
    answer: "Scheduling is simple. Visit our Book a Consultation page, choose a convenient time through our online calendar, and you'll receive a confirmation with all the details for your appointment."
  },
  {
    question: "What can I expect during my consultation?",
    answer: "Your consultation is a one-on-one conversation focused on your goals, questions, and current situation. We'll provide educational guidance, discuss relevant financial concepts, and help you better understand available options based on your needs."
  },
  {
    question: "Do you guarantee funding or approvals?",
    answer: "No. Funding decisions are made by independent financial institutions and lending partners based on their own eligibility requirements and underwriting criteria. We do not guarantee funding, approvals, or specific outcomes."
  },
  {
    question: "Do you guarantee credit score improvements?",
    answer: "No. Individual financial situations vary, and we do not guarantee any changes to credit scores or financial outcomes. Our focus is on education, guidance, and helping clients make informed decisions."
  },
  {
    question: "Who can benefit from your services?",
    answer: "Our services are designed for entrepreneurs, small business owners, startups, professionals, and individuals who want to improve their financial knowledge, understand funding opportunities, and make more informed financial decisions."
  },
  {
    question: "Are your educational resources free?",
    answer: "We offer a combination of complimentary and premium educational resources. Some guides and articles are available at no cost, while others may require registration or purchase."
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes. Depending on availability, consultations may be conducted virtually, allowing you to connect with our team from wherever you are."
  },
  {
    question: "How long does a consultation last?",
    answer: "Consultation length may vary depending on the type of session you schedule. The expected duration will be provided during the booking process."
  },
  {
    question: "What should I prepare before my consultation?",
    answer: "We recommend preparing any questions you'd like to discuss, along with relevant business or financial information that may help us better understand your goals. The more context you provide, the more personalized your consultation can be."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes. We respect your privacy and treat every conversation with professionalism and confidentiality. Information shared during consultations is handled in accordance with our Privacy Policy."
  },
  {
    question: "Do you work with new businesses?",
    answer: "Yes. Whether you're launching a new venture or growing an established business, our educational resources and consultations are designed to support individuals and businesses at various stages of their journey."
  },
  {
    question: "Can I contact you before booking?",
    answer: "Absolutely. If you have general questions or would like more information before scheduling a consultation, you're welcome to contact our team. We'll be happy to point you in the right direction."
  },
  {
    question: "How often do you publish new resources?",
    answer: "Our resource library continues to grow with new articles, guides, eBooks, and educational content designed to help our clients stay informed about financial topics and business growth."
  },
  {
    question: "What if I need additional support after my consultation?",
    answer: "Depending on your needs, additional consultations, educational resources, or recommended next steps may be discussed during your session. Our goal is to provide ongoing value and help you continue learning with confidence."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-[#0B1523] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
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
                    "text-lg md:text-xl font-heading transition-colors duration-300 pr-8",
                    isOpen ? "text-[#D4AF37]" : "text-white group-hover:text-white"
                  )}>
                    {faq.question}
                  </span>
                  <div className={clsx(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0",
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
                      <div className="px-6 py-6 text-white/70 text-lg leading-relaxed border-x border-b border-white/5 rounded-b-2xl mx-2 bg-white/[0.02]">
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
