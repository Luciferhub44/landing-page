import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
  onGovernanceClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick, onGovernanceClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-sohan-cream/90 backdrop-blur-md border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/sohan-logo.png"
            alt="SOHAN Logo"
            className="w-10 h-10 object-contain"
          />
          <div>
            <span className="font-display font-bold text-2xl tracking-wider text-sohan-cocoa">SOHAN</span>
            <span className="block text-[10px] tracking-widest uppercase font-semibold text-sohan-pistachio">
              City Partner Network
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold uppercase tracking-wider text-sohan-cocoa/80">
          <a href="#model" className="hover:text-sohan-cocoa transition-colors">The Model</a>
          <a href="#products" className="hover:text-sohan-cocoa transition-colors">Fragrances</a>
          <a href="#calculator" className="hover:text-sohan-cocoa transition-colors">Earnings</a>
          <a href="#tiers" className="hover:text-sohan-cocoa transition-colors">Starter Packs</a>
          <a href="#faq" className="hover:text-sohan-cocoa transition-colors">FAQs</a>
          <button
            onClick={onGovernanceClick}
            className="hover:text-sohan-cocoa text-sohan-sugar transition-colors font-bold uppercase tracking-wider"
          >
            Governance
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-sohan-pistachio/15 border border-sohan-pistachio/30 text-xs font-semibold text-sohan-cocoa">
            <span className="w-2 h-2 rounded-full bg-sohan-pistachio animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-sohan-pistachio" />
            <span>US 2026 Cohort</span>
          </div>
          <button
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sohan-cocoa text-sohan-cream font-semibold text-xs tracking-wider uppercase hover:bg-sohan-dark transition-all shadow-sm active:scale-95"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
