import SEO from '../components/SEO';
import PageTransition from '../animations/PageTransition';
import TradelinesHero from '../sections/tradelines/TradelinesHero';
import TradelinesList from '../sections/tradelines/TradelinesList';
import TradelinesTrust from '../sections/tradelines/TradelinesTrust';

export default function Tradelines() {
  return (
    <PageTransition>
      <SEO 
        title="Premium Tradelines | KBrown Consultant" 
        description="Choose the tradeline plan for your needs. Explore our curated selection of premium tradelines designed to help you achieve your financial goals."
      />
      <main className="bg-[#0B1523] min-h-screen">
        <TradelinesHero />
        <TradelinesTrust />
        <TradelinesList />
      </main>
    </PageTransition>
  );
}
