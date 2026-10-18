import React, { useState } from 'react';
import { MapPin, ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onApplyClick: () => void;
  onGovernanceClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleApplyClick = () => {
    closeMenu();
    onApplyClick();
  };

  return (
    <header className="sticky top-0 z-50 bg-sohan-cream/95 backdrop-blur-md border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <img
            src="/sohan-logo.png"
            alt="SOHAN Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          />
          <div>
            <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-sohan-cocoa">SOHAN</span>
            <span className="block text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-sohan-pistachio">
              City Partner Network
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold uppercase tracking-wider text-sohan-cocoa/80">
          <a href="#model" className="hover:text-sohan-cocoa transition-colors">The Model</a>
          <a href="#products" className="hover:text-sohan-cocoa transition-colors">Fragrances</a>
          <a href="#calculator" className="hover:text-sohan-cocoa transition-colors">Earnings</a>
          <a href="#tiers" className="hover:text-sohan-cocoa transition-colors">Starter Packs</a>
          <a href="#faq" className="hover:text-sohan-cocoa transition-colors">FAQs</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-sohan-pistachio/15 border border-sohan-pistachio/30 text-xs font-semibold text-sohan-cocoa">
            <span className="w-2 h-2 rounded-full bg-sohan-pistachio animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-sohan-pistachio" />
            <span>US 2026 Cohort</span>
          </div>
          <button
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sohan-cocoa text-sohan-cream font-semibold text-xs tracking-wider uppercase hover:bg-sohan-dark transition-all shadow-sm active:scale-95 min-h-[44px]"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onApplyClick}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-sohan-cocoa text-sohan-cream font-semibold text-[11px] tracking-wider uppercase hover:bg-sohan-dark transition-all shadow-xs active:scale-95 min-h-[40px]"
          >
            <span>Apply</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-sohan-card border border-sohan-border flex items-center justify-center text-sohan-cocoa hover:bg-sohan-cream transition-colors active:scale-95"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sohan-border bg-sohan-card/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between py-2 mb-2 border-b border-sohan-border/60 text-xs font-semibold text-sohan-cocoa/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sohan-pistachio animate-pulse" />
              <span>Founding 2026 Cohort Open</span>
            </span>
            <span className="text-sohan-pistachio font-bold">20 US Metros</span>
          </div>

          <nav className="flex flex-col space-y-1">
            <a
              href="#model"
              onClick={closeMenu}
              className="px-4 py-3 rounded-2xl text-sm font-semibold uppercase tracking-wider text-sohan-cocoa hover:bg-sohan-cream transition-colors flex items-center justify-between"
            >
              <span>The Model</span>
              <span className="text-[11px] text-sohan-muted normal-case font-normal">Dual-Engine Wholesale</span>
            </a>
            <a
              href="#products"
              onClick={closeMenu}
              className="px-4 py-3 rounded-2xl text-sm font-semibold uppercase tracking-wider text-sohan-cocoa hover:bg-sohan-cream transition-colors flex items-center justify-between"
            >
              <span>Fragrances</span>
              <span className="text-[11px] text-sohan-muted normal-case font-normal">5 Formulations</span>
            </a>
            <a
              href="#calculator"
              onClick={closeMenu}
              className="px-4 py-3 rounded-2xl text-sm font-semibold uppercase tracking-wider text-sohan-cocoa hover:bg-sohan-cream transition-colors flex items-center justify-between"
            >
              <span>Earnings</span>
              <span className="text-[11px] text-sohan-sugar normal-case font-bold">Revenue Estimator</span>
            </a>
            <a
              href="#tiers"
              onClick={closeMenu}
              className="px-4 py-3 rounded-2xl text-sm font-semibold uppercase tracking-wider text-sohan-cocoa hover:bg-sohan-cream transition-colors flex items-center justify-between"
            >
              <span>Starter Packs</span>
              <span className="text-[11px] text-sohan-muted normal-case font-normal">From $1,200</span>
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="px-4 py-3 rounded-2xl text-sm font-semibold uppercase tracking-wider text-sohan-cocoa hover:bg-sohan-cream transition-colors flex items-center justify-between"
            >
              <span>FAQs</span>
              <span className="text-[11px] text-sohan-muted normal-case font-normal">Common Questions</span>
            </a>
          </nav>

          <div className="pt-4 mt-3 border-t border-sohan-border">
            <button
              onClick={handleApplyClick}
              className="w-full py-3.5 rounded-full bg-sohan-cocoa text-sohan-cream font-bold text-xs uppercase tracking-wider hover:bg-sohan-dark transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Apply for Territory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
