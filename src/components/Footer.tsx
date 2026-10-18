import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenGovernance?: (policyId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGovernance }) => {
  return (
    <footer className="bg-sohan-dark text-sohan-cream py-16 border-t border-sohan-cocoa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-sohan-cream flex items-center justify-center p-1 overflow-hidden">
                <img
                  src="/sohan-logo.png"
                  alt="SOHAN Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-sohan-cream">SOHAN</span>
            </div>
            <p className="text-sm text-sohan-cream/70 font-sans leading-relaxed max-w-sm mb-4">
              Artisanal Persian confectionery fragrance oils & solid botanical balms. Handcrafted formulations, zero ethanol alcohol, designed to bloom on skin mantle.
            </p>
            <p className="text-xs text-sohan-cream/50 uppercase tracking-widest font-semibold">
              Heritage: Poland · US Network Headquarters: Wilmington, DE
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sohan-sugar mb-4">
              Partner Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-sohan-cream/80">
              <li><a href="#model" className="hover:text-sohan-cream transition-colors">The Dual-Engine Model</a></li>
              <li><a href="#products" className="hover:text-sohan-cream transition-colors">Olfactory Lineup</a></li>
              <li><a href="#calculator" className="hover:text-sohan-cream transition-colors">Earnings Estimator</a></li>
              <li><a href="#tiers" className="hover:text-sohan-cream transition-colors">Starter Packs</a></li>
              <li><a href="#faq" className="hover:text-sohan-cream transition-colors">Partner FAQs</a></li>
              <li><a href="#apply" className="hover:text-sohan-cream transition-colors">Territory Application</a></li>
            </ul>
          </div>

          {/* Legal Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sohan-sugar mb-4">
              Governance & Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-sohan-cream/80">
              <li>
                <button
                  onClick={() => onOpenGovernance?.('buy-back-policy')}
                  className="hover:text-sohan-cream transition-colors text-left"
                >
                  90% Buy-Back Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenGovernance?.('ftc-compliance')}
                  className="hover:text-sohan-cream transition-colors text-left"
                >
                  FTC Direct Sales Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenGovernance?.('territory-terms')}
                  className="hover:text-sohan-cream transition-colors text-left"
                >
                  Territory Exclusivity Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenGovernance?.('product-regulations')}
                  className="hover:text-sohan-cream transition-colors text-left"
                >
                  EU & FDA Product Safety
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenGovernance?.('map-conduct')}
                  className="hover:text-sohan-cream transition-colors text-left"
                >
                  Partner Code of Conduct (MAP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenGovernance?.()}
                  className="text-sohan-pistachio hover:underline transition-all text-left font-semibold"
                >
                  View All Governance Charters →
                </button>
              </li>
              <li>
                <a
                  href="mailto:partner@sohanscents.com"
                  className="hover:text-sohan-cream transition-colors"
                >
                  Contact: partner@sohanscents.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sohan-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sohan-cream/50">
          <p>© 2026 SOHAN Scents. All rights reserved. SOHAN is a registered trademark.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sohan-pistachio" />
            <span>Authorized B2B Wholesale & Micro-Hub Network</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
