import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-dark pt-32 pb-24 flex items-center justify-center">
      <SEO 
        title={`${title} | KBrown Consultant`}
        description={`The ${title} page is coming soon. Stay tuned for premium financial consulting updates from KBrown Consultant.`}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-gold text-xl italic">
          Coming Soon
        </p>
      </motion.div>
    </div>
  );
}