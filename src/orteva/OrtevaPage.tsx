import { useEffect } from 'react';
import { track } from './analytics';
import { AnnouncementBar } from './components/AnnouncementBar';
import { OrtevaHeader } from './components/OrtevaHeader';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { HowItWorks } from './components/HowItWorks';
import { ScienceSection } from './components/ScienceSection';
import { Reviews } from './components/Reviews';
import { Comparison } from './components/Comparison';
import { ShippingSection } from './components/ShippingSection';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { OrtevaFooter } from './components/OrtevaFooter';
import { StickyAtcBar } from './components/StickyAtcBar';
import { CartDrawer } from './components/CartDrawer';

/** The full Orteva PDP — 15 sections, top to bottom, each doing its conversion job. */
export function OrtevaPage() {
  useEffect(() => {
    track('view_content', { product: 'orteva-knee-sleeve' });
  }, []);

  return (
    <div id="top" className="min-h-screen bg-white font-sans text-orteva-ink antialiased">
      <AnnouncementBar />
      <OrtevaHeader />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <BenefitsGrid />
        <HowItWorks />
        <ScienceSection />
        <Reviews />
        <Comparison />
        <ShippingSection />
        <Faq />
        <FinalCta />
      </main>
      <OrtevaFooter />
      <StickyAtcBar />
      <CartDrawer />
    </div>
  );
}
