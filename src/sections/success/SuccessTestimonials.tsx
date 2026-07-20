import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The consultation was incredibly informative and helped me better understand my options. I walked away feeling much more confident about my next steps.",
    author: "Client Name",
    role: "Business Owner"
  },
  {
    quote: "I appreciated how everything was explained in a way that was easy to understand. There was no pressure—just honest guidance and valuable information.",
    author: "Client Name",
    role: "Entrepreneur"
  },
  {
    quote: "The educational resources were organized, professional, and answered many of the questions I had before our consultation.",
    author: "Client Name",
    role: "Small Business Owner"
  },
  {
    quote: "From scheduling to the consultation itself, the entire experience was smooth, professional, and focused on helping me make informed decisions.",
    author: "Client Name",
    role: "Business Professional"
  }
];

export default function SuccessTestimonials() {
  return (
    <section className="py-24 relative bg-[#0B1523]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6"
          >
            What Our Clients <span className="text-[#D4AF37]">Appreciate</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(212,175,55,0.00)_0%,transparent_70%)] rounded-full group-hover:bg-[#D4AF37]/10 transition-colors duration-500 pointer-events-none" />
              
              <Quote className="w-10 h-10 text-[#D4AF37]/40 mb-6 group-hover:text-[#D4AF37] transition-colors duration-500" />
              
              <p className="text-lg text-white/80 leading-relaxed mb-8 relative z-10 font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center border border-[#D4AF37]/30">
                  <span className="text-[#D4AF37] font-heading font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold tracking-wide">
                    {testimonial.author}
                  </h4>
                  <p className="text-[#D4AF37] text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center mt-12"
        >
          <p className="text-sm text-white/40 italic">
            Note: Replace all placeholder testimonials with verified client feedback before publishing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
