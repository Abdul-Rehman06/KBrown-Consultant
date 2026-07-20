import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Schedule Your Appointment',
    description: 'Choose a convenient date and time using our online calendar.',
  },
  {
    number: '02',
    title: 'Meet With Our Team',
    description: "We'll discuss your goals, answer questions, and learn more about your situation.",
  },
  {
    number: '03',
    title: 'Receive Educational Guidance',
    description: "We'll walk through relevant financial concepts and provide practical information tailored to your discussion.",
  },
  {
    number: '04',
    title: 'Continue With Confidence',
    description: "Based on your goals, we'll help you understand available resources and discuss appropriate next steps.",
  },
];

export default function BookingProcess() {
  return (
    <section className="py-24 relative bg-[#0B1523]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-[#D4AF37] tracking-wide uppercase">
              Our Consultation Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
          >
            A Simple, Transparent <span className="text-[#D4AF37]">Process</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent z-0" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="w-24 h-24 rounded-full bg-[#0B1523] border border-[#D4AF37]/30 flex items-center justify-center mb-8 relative group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.05)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  <div className="absolute inset-2 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-2xl font-numbers font-bold text-[#D4AF37]">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-heading text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-sm">
                  {step.description}
                </p>

                {/* Mobile Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-12 bg-gradient-to-b from-[#D4AF37]/30 to-transparent mt-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
