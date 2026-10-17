import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { DualEngineModel } from './components/DualEngineModel';
import { FulfillmentProcess } from './components/FulfillmentProcess';
import { EarningsCalculator } from './components/EarningsCalculator';
import { PartnerTiers } from './components/PartnerTiers';
import { TrustAndCompliance } from './components/TrustAndCompliance';
import { FaqSection } from './components/FaqSection';
import { ApplicationForm } from './components/ApplicationForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('City Partner');

  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName);
    scrollToApply();
  };

  return (
    <div className="min-h-screen bg-sohan-cream text-sohan-cocoa flex flex-col">
      <Header onApplyClick={scrollToApply} />
      <main className="flex-grow">
        <Hero onApplyClick={scrollToApply} onCalculateClick={scrollToCalculator} />
        <BrandStory />
        <DualEngineModel />
        <FulfillmentProcess />
        <EarningsCalculator onApplyClick={scrollToApply} />
        <PartnerTiers onSelectTier={handleSelectTier} />
        <TrustAndCompliance />
        <FaqSection />
        <ApplicationForm initialTier={selectedTier} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
