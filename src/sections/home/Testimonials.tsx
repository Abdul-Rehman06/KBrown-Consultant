import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The consultation helped me better understand my options and gave me a clear direction.",
    rating: 5
  },
  {
    quote: "The educational resources were organized, easy to understand, and extremely valuable.",
    rating: 5
  },
  {
    quote: "I appreciated the professional guidance and personalized recommendations.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-dark">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What Clients <span className="text-gold italic">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card-premium glass-dark flex flex-col justify-between group hover:border-gold/30 hover:bg-dark-300/80"
            >
              <Quote className="w-10 h-10 text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" />
              
              <p className="text-lg text-white mb-8 leading-relaxed font-medium">
                "{item.quote}"
              </p>
              
              <div className="flex items-center space-x-1 mt-auto">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}