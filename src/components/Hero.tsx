import React from 'react';
import { ShieldCheck, Truck, Clock, TrendingUp, ArrowRight } from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
  onCalculateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onCalculateClick }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 border-b border-sohan-border">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sohan-pistachio/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-sohan-sugar/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sohan-card border border-sohan-border shadow-xs mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-sohan-pistachio animate-ping shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-sohan-cocoa truncate">
              Founding Metro Cohort · 20 US Territories
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-7xl tracking-tight text-sohan-cocoa leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6">
            Own the SOHAN Fragrance Network in Your City.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-sohan-cocoa/80 leading-relaxed font-sans max-w-3xl mx-auto mb-8">
            A modern hybrid model pairing high-margin artisanal fragrance wholesale with decentralized micro-fulfillment. 
            Earn <strong className="text-sohan-cocoa font-bold">45%–50% margin</strong> on local sales, plus an automated <strong className="text-sohan-cocoa font-bold">$5.00 fulfillment bounty</strong> on online orders our ads drive in your territory.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <button
              onClick={onApplyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-sohan-cocoa text-sohan-cream font-bold text-xs uppercase tracking-wider hover:bg-sohan-dark transition-all shadow-md active:scale-95 group min-h-[48px]"
            >
              <span>Claim Your Metro Territory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onCalculateClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-sohan-card border border-sohan-border text-sohan-cocoa font-semibold text-xs uppercase tracking-wider hover:bg-sohan-cream transition-all shadow-xs min-h-[48px]"
            >
              <TrendingUp className="w-4 h-4 text-sohan-pistachio" />
              <span>Calculate Your Revenue</span>
            </button>
          </div>
        </div>

        {/* Product Visual Showcase Banner */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="p-3 sm:p-4 rounded-3xl bg-sohan-card border border-sohan-border shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {/* Product 1: Pistachio */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-sohan-cream border border-sohan-border/80 group">
                <img
                  src="/Pistachio.png"
                  alt="SOHAN № 01 Saffron Pistachio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sohan-cocoa/80 via-transparent to-transparent flex flex-col justify-end p-3 text-sohan-cream">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sohan-pistachio">№ 01 Bestseller</span>
                  <span className="font-display font-bold text-xs sm:text-sm">Saffron Pistachio</span>
                </div>
              </div>

              {/* Product 2: Balm Tin */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-sohan-cream border border-sohan-border/80 group">
                <img
                  src="/Balm.jpg"
                  alt="SOHAN Solid Perfume Balm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sohan-cocoa/80 via-transparent to-transparent flex flex-col justify-end p-3 text-sohan-cream">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sohan-cream/80">0% Liquid</span>
                  <span className="font-display font-bold text-xs sm:text-sm">Solid Perfume Balm</span>
                </div>
              </div>

              {/* Product 3: Burnt Sugar */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-sohan-cream border border-sohan-border/80 group">
                <img
                  src="/BurnSugar.png"
                  alt="SOHAN № 02 Burnt Sugar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sohan-cocoa/80 via-transparent to-transparent flex flex-col justify-end p-3 text-sohan-cream">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sohan-sugar">№ 02 Caramel</span>
                  <span className="font-display font-bold text-xs sm:text-sm">Burnt Sugar</span>
                </div>
              </div>

              {/* Product 4: Discovery Set */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-sohan-cream border border-sohan-border/80 group">
                <img
                  src="/Set2.jpeg"
                  alt="SOHAN Discovery Set 3x2ml"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sohan-cocoa/80 via-transparent to-transparent flex flex-col justify-end p-3 text-sohan-cream">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sohan-cream/80">3 × 2ml Trio</span>
                  <span className="font-display font-bold text-xs sm:text-sm">Discovery Set</span>
                </div>
              </div>
            </div>

            <div className="py-2.5 px-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sohan-cocoa/80">
              <span className="font-semibold">
                Pure botanical fragrance extracts · 100% alcohol-free · European artisanal compounding
              </span>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sohan-cocoa">
                Avg. Gross Margin: 45%–50%
              </span>
            </div>
          </div>
        </div>

        {/* Core Trust Anchors */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-sohan-card/80 border border-sohan-border/80 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-sohan-pistachio/15 flex items-center justify-center text-sohan-pistachio mb-2.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-bold font-display text-sohan-cocoa">45% Margin</p>
            <p className="text-[11px] sm:text-xs text-sohan-cocoa/70 mt-1">Wholesale profit on local sales</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-sohan-card/80 border border-sohan-border/80 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-sohan-sugar/15 flex items-center justify-center text-sohan-sugar mb-2.5">
              <Truck className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-bold font-display text-sohan-cocoa">$5.00 / Box</p>
            <p className="text-[11px] sm:text-xs text-sohan-cocoa/70 mt-1">Automated local order bounty</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-sohan-card/80 border border-sohan-border/80 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-sohan-pistachio/15 flex items-center justify-center text-sohan-pistachio mb-2.5">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-bold font-display text-sohan-cocoa">&lt;60s Packing</p>
            <p className="text-[11px] sm:text-xs text-sohan-cocoa/70 mt-1">Pre-kitted boxes. Slap the label</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-sohan-card/80 border border-sohan-border/80 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-sohan-cocoa/10 flex items-center justify-center text-sohan-cocoa mb-2.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-bold font-display text-sohan-cocoa">90% Shield</p>
            <p className="text-[11px] sm:text-xs text-sohan-cocoa/70 mt-1">180-day inventory buy-back</p>
          </div>
        </div>
      </div>
    </section>
  );
};
