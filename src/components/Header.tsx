import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-sohan-cream/90 backdrop-blur-md border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sohan-cocoa flex items-center justify-center text-sohan-cream">
            <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
              <circle cx="50" cy="50" r="45" fill="#2B211A"/>
              <path d="M75 50 C75 35 60 25 50 25 C36 25 25 36 25 50 C25 64 36 75 50 75 C60 75 70 70 75 60 C65 60 60 55 60 50 C60 45 68 45 75 50 Z" fill="#F2EADC"/>
              <ellipse cx="44" cy="40" rx="3" ry="7" transform="rotate(-25 44 40)" fill="#7D8F5C"/>
              <ellipse cx="48" cy="53" rx="3" ry="7" transform="rotate(35 48 53)" fill="#7D8F5C"/>
              <ellipse cx="40" cy="58" rx="3" ry="6" transform="rotate(-15 40 58)" fill="#7D8F5C"/>
            </svg>
          </div>
          <div>
            <span className="font-display font-bold text-2xl tracking-wider text-sohan-cocoa">SOHAN</span>
            <span className="block text-[10px] tracking-widest uppercase font-semibold text-sohan-pistachio">
              City Partner Network
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-sohan-cocoa/80">
          <a href="#model" className="hover:text-sohan-cocoa transition-colors">The Model</a>
          <a href="#products" className="hover:text-sohan-cocoa transition-colors">Fragrances</a>
          <a href="#calculator" className="hover:text-sohan-cocoa transition-colors">Earnings</a>
          <a href="#tiers" className="hover:text-sohan-cocoa transition-colors">Starter Packs</a>
          <a href="#faq" className="hover:text-sohan-cocoa transition-colors">FAQs</a>
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
