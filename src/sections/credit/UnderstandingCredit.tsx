import { motion } from 'framer-motion';
import { Eye, BookOpen, TrendingUp } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const cards = [
  {
    title: 'Credit Awareness',
    icon: <Eye className="w-8 h-8 text-gold" />
  },
  {
    title: 'Financial Education',
    icon: <BookOpen className="w-8 h-8 text-gold" />
  },
  {
    title: 'Long-Term Planning',
    icon: <TrendingUp className="w-8 h-8 text-gold" />
  }
];

export default function UnderstandingCredit() {
  return (
    <section className="py-24 relative bg-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Credit Is More Than <br/>
            <span className="text-gold italic">Just a Score</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-light leading-relaxed space-y-6 max-w-3xl mx-auto"
          >
            <p>
              Credit represents a financial history that lenders and financial institutions may consider when evaluating certain financial products and services.
            </p>
            <p>
              Learning how credit works can help you make informed financial decisions, understand common lending practices, and develop healthy financial habits over time.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Tilt 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                perspective={1000} 
                scale={1.02} 
                transitionSpeed={1000}
                className="h-full"
              >
                <div className="h-full glass-dark p-10 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-dark-300/80 group transition-all duration-500 text-center flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-dark flex items-center justify-center mb-6 border border-white/10 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-gold-light transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}