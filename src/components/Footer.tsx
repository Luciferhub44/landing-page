import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sohan-dark text-sohan-cream py-16 border-t border-sohan-cocoa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-sohan-cream flex items-center justify-center text-sohan-cocoa">
                <svg viewBox="0 0 100 100" className="w-5 h-5 fill-current">
                  <circle cx="50" cy="50" r="45" fill="#2B211A"/>
                  <path d="M75 50 C75 35 60 25 50 25 C36 25 25 36 25 50 C25 64 36 75 50 75 C60 75 70 70 75 60 C65 60 60 55 60 50 C60 45 68 45 75 50 Z" fill="#F2EADC"/>
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-sohan-cream">SOHAN</span>
            </div>
            <p className="text-sm text-sohan-cream/70 font-sans leading-relaxed max-w-sm mb-4">
              Artisanal Persian confectionery fragrance oils & solid botanical balms. Handcrafted formulations, zero ethanol alcohol, designed to bloom on skin mantle.
            </p>
            <p className="text-xs text-sohan-cream/50 uppercase tracking-widest font-semibold">
              Heritage: Poznań, Poland · US Network Headquarters: Austin, TX
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
              <li><span className="hover:text-sohan-cream cursor-pointer">90% Buy-Back Policy</span></li>
              <li><span className="hover:text-sohan-cream cursor-pointer">FTC Direct Sales Compliance</span></li>
              <li><span className="hover:text-sohan-cream cursor-pointer">Territory Exclusivity Terms</span></li>
              <li><span className="hover:text-sohan-cream cursor-pointer">Partner Portal Login</span></li>
              <li><span className="hover:text-sohan-cream cursor-pointer">Contact: partners@wearsohan.com</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sohan-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sohan-cream/50">
          <p>© 2026 SOHAN Fragrances. All rights reserved. SOHAN is a registered trademark.</p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sohan-pistachio" />
            <span>Authorized B2B Wholesale & Micro-Hub Network</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
