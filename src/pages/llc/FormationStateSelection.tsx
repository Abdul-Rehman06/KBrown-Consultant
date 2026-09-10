import SEO from '../../components/SEO';
import PageTransition from '../../animations/PageTransition';
import { motion } from 'framer-motion';

export default function FormationStateSelection() {
  return (
    <PageTransition>
      <SEO 
        title="LLC Formation State Selection | KBrown Consultant Group" 
        description="LLC Formation State Selection Guide Survey"
        noindex={true}
      />
      <main className="bg-[#0B1523] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-heading text-white mb-4">
                State Selection Guide
              </h1>
              <p className="text-white/60">
                Review the state options below and select the state where you'd like us to form your new LLC.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl p-4 md:p-8 backdrop-blur-xl"
            >
              <div className="w-full rounded-xl overflow-hidden" style={{ minHeight: '2000px' }}>
                <iframe 
                  src="https://api.kbrownconsultant.com/widget/survey/GEwQGPGVStrwj67bJCyg" 
                  style={{ border: 'none', width: '100%', minHeight: '2000px', height: '100%' }} 
                  scrolling="yes" 
                  id="GEwQGPGVStrwj67bJCyg" 
                  title="survey" 
                  data-cookie-consent="true" 
                  data-cookie-consent-provider="auto"
                ></iframe>
                <script src="https://api.kbrownconsultant.com/js/form_embed.js"></script>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}