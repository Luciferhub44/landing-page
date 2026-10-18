import React, { useState, useEffect } from 'react';
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
import { GovernancePage } from './components/GovernancePage';

export const App: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('City Partner');
  const [currentView, setCurrentView] = useState<'landing' | 'governance'>(() => {
    return typeof window !== 'undefined' && window.location.hash.startsWith('#governance')
      ? 'governance'
      : 'landing';
  });
  const [targetPolicyId, setTargetPolicyId] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#governance-')) {
        return hash.replace('#governance-', '');
      }
    }
    return undefined;
  });

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

  const openGovernance = (policyId?: string) => {
    setTargetPolicyId(policyId);
    setCurrentView('governance');
    if (typeof window !== 'undefined') {
      window.location.hash = policyId ? `#governance-${policyId}` : '#governance';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const backToLanding = () => {
    setCurrentView('landing');
    if (typeof window !== 'undefined') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleApplyFromGovernance = () => {
    backToLanding();
    setTimeout(() => {
      scrollToApply();
    }, 100);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#governance')) {
        setCurrentView('governance');
        if (hash.startsWith('#governance-')) {
          setTargetPolicyId(hash.replace('#governance-', ''));
        }
      } else if (currentView === 'governance' && !hash.startsWith('#governance')) {
        setCurrentView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  if (currentView === 'governance') {
    return (
      <div className="min-h-screen bg-sohan-cream text-sohan-cocoa flex flex-col">
        <GovernancePage
          onBackClick={backToLanding}
          onApplyClick={handleApplyFromGovernance}
          initialPolicyId={targetPolicyId}
        />
        <Footer onOpenGovernance={openGovernance} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sohan-cream text-sohan-cocoa flex flex-col">
      <Header
        onApplyClick={scrollToApply}
        onGovernanceClick={() => openGovernance()}
      />
      <main className="flex-grow">
        <Hero onApplyClick={scrollToApply} onCalculateClick={scrollToCalculator} />
        <BrandStory />
        <DualEngineModel />
        <FulfillmentProcess />
        <EarningsCalculator onApplyClick={scrollToApply} />
        <PartnerTiers onSelectTier={handleSelectTier} />
        <TrustAndCompliance onOpenGovernance={openGovernance} />
        <FaqSection />
        <ApplicationForm initialTier={selectedTier} />
      </main>
      <Footer onOpenGovernance={openGovernance} />
    </div>
  );
};

export default App;
