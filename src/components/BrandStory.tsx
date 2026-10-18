import React, { useState } from 'react';
import { Droplets, Shield, Flame } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'oils' | 'balm' | 'sets'>('all');

  const products = [
    {
      id: 'no01-oil',
      category: 'oils',
      number: '№ 01',
      title: 'Saffron Pistachio Oil',
      image: '/Pistachio.png',
      formats: 'Perfume Oil Extract (10 ml)',
      notes: 'Iranian saffron, roasted green pistachios, golden brittle, sea salt',
      tagline: 'Flagship gourmand that blooms on pulse points with intimate all-day warmth.',
      retailPrice: '$38.00 (€34)',
      wholesaleBuy: '$19.00',
      margin: '50% Margin',
      tag: 'Bestseller',
      accentColor: 'bg-sohan-pistachio/20 text-sohan-cocoa border-sohan-pistachio/40'
    },
    {
      id: 'no01-balm',
      category: 'balm',
      number: '№ 01',
      title: 'Saffron Pistachio Balm',
      image: '/Balm.jpg',
      formats: 'Solid Perfume Balm (15 g Tin)',
      notes: 'Botanical waxes, saffron filaments, pistachio brittle, sandalwood',
      tagline: '0% liquid. Impossible to leak in handbags, carry-on luggage, or silk pockets.',
      retailPrice: '$32.00 (€29)',
      wholesaleBuy: '$16.00',
      margin: '50% Margin',
      tag: 'Pocket Luxury',
      accentColor: 'bg-sohan-pistachio/20 text-sohan-cocoa border-sohan-pistachio/40'
    },
    {
      id: 'no02-oil',
      category: 'oils',
      number: '№ 02',
      title: 'Burnt Sugar Oil',
      image: '/BurnSugar.png',
      formats: 'Perfume Oil Extract (10 ml)',
      notes: 'Scorched dark caramel, blonde tobacco leaf, honeycomb, smoky bourbon vanilla',
      tagline: 'Deep, enveloping, smoky-sweet allure with 10+ hour skin-mantle sillage.',
      retailPrice: '$38.00 (€34)',
      wholesaleBuy: '$19.00',
      margin: '50% Margin',
      tag: 'Night & Winter',
      accentColor: 'bg-sohan-sugar/20 text-sohan-cocoa border-sohan-sugar/40'
    },
    {
      id: 'no03-oil',
      category: 'oils',
      number: '№ 03',
      title: 'Sesame Skin Oil',
      image: '/Sesame.png',
      formats: 'Perfume Oil Extract (10 ml)',
      notes: 'Toasted white sesame seeds, crushed green cardamom, warm cashmere skin musk',
      tagline: 'Clean, tactile second-skin scent that blooms quietly with your natural body heat.',
      retailPrice: '$38.00 (€34)',
      wholesaleBuy: '$19.00',
      margin: '50% Margin',
      tag: 'Quiet Luxury',
      accentColor: 'bg-sohan-muted/20 text-sohan-cocoa border-sohan-muted/40'
    },
    {
      id: 'discovery-set',
      category: 'sets',
      number: 'ENTRY',
      title: 'Discovery Set (3 × 2ml)',
      image: '/Set2.jpeg',
      secondaryImage: '/Set1.jpeg',
      formats: 'Kraft Box · 3 Corked Amber Vials',
      notes: 'All 3 signature scents in miniature apothecary vials + €18 voucher card inside',
      tagline: 'The zero-risk blind-buy eliminator. 100% credited back toward full-size bottles.',
      retailPrice: '$20.00 (€18)',
      wholesaleBuy: '$10.00',
      margin: '50% Margin',
      tag: 'Primary Tripwire',
      accentColor: 'bg-sohan-cocoa text-sohan-cream border-sohan-cocoa'
    }
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-20 md:py-32 bg-sohan-card/60 border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-sohan-pistachio mb-3">
            Artisanal Fragrance Formulation
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-6">
            The Collection You'll Represent
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans">
            Inspired by historic Persian confectionery rituals, SOHAN is formulated entirely without alcohol. 
            Infused with cold-pressed botanical waxes and concentrated fragrance extracts, our products lock directly to the skin mantle.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center sm:justify-center overflow-x-auto pb-2 sm:pb-0 gap-2 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {[
            { key: 'all', label: 'All Products (5)' },
            { key: 'oils', label: 'Perfume Oils (10ml)' },
            { key: 'balm', label: 'Solid Balms (15g)' },
            { key: 'sets', label: 'Discovery Sets (3x2ml)' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 py-2.5 sm:px-5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap min-h-[42px] transition-all ${
                activeFilter === tab.key
                  ? 'bg-sohan-cocoa text-sohan-cream shadow-xs'
                  : 'bg-sohan-cream text-sohan-cocoa/80 border border-sohan-border hover:border-sohan-cocoa'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Real Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="flex flex-col justify-between rounded-3xl bg-sohan-cream border border-sohan-border hover:border-sohan-cocoa/40 transition-all hover:shadow-md group overflow-hidden"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative aspect-[3/4] bg-sohan-cream overflow-hidden border-b border-sohan-border">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-display font-black text-sm text-sohan-cocoa bg-sohan-cream/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-sohan-border/80">
                      {p.number}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border shadow-2xs ${p.accentColor}`}>
                      {p.tag}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-sohan-cocoa mb-1 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-sohan-muted mb-3">
                    {p.formats}
                  </p>

                  <p className="text-xs text-sohan-cocoa/75 mb-3 leading-relaxed">
                    {p.tagline}
                  </p>

                  <div className="p-2.5 rounded-xl bg-sohan-card border border-sohan-border/60 text-[11px] text-sohan-cocoa/80 leading-snug">
                    <strong className="text-sohan-cocoa font-semibold">Notes:</strong> {p.notes}
                  </div>
                </div>
              </div>

              {/* Price & Margin Footer */}
              <div className="p-5 pt-3 border-t border-sohan-border/80 flex items-center justify-between text-xs bg-sohan-cream">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-sohan-muted">MSRP</span>
                  <span className="font-bold text-sohan-cocoa text-sm">{p.retailPrice}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] uppercase font-bold text-sohan-pistachio">Your Cost</span>
                  <span className="font-bold text-sohan-pistachio text-sm">{p.wholesaleBuy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-sohan-cocoa text-sohan-cream">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sohan-cream/10 flex items-center justify-center text-sohan-cream shrink-0">
              <Droplets className="w-5 h-5 text-sohan-pistachio" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-1">0% Liquid Leaks</h4>
              <p className="text-xs text-sohan-cream/80 leading-relaxed">
                Solid balms and heavy glass roll-ons are 100% leak-proof in silk handbags, luggage, and pocket carry.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sohan-cream/10 flex items-center justify-center text-sohan-cream shrink-0">
              <Flame className="w-5 h-5 text-sohan-sugar" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-1">Non-Flammable (Cheap Mail)</h4>
              <p className="text-xs text-sohan-cream/80 leading-relaxed">
                Zero ethanol alcohol means no Hazmat shipping fees. Every order travels via cheap, fast USPS Ground.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sohan-cream/10 flex items-center justify-center text-sohan-cream shrink-0">
              <Shield className="w-5 h-5 text-sohan-cream" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-1">European Regulation Ready</h4>
              <p className="text-xs text-sohan-cream/80 leading-relaxed">
                Clean botanical formulas fully compliant with EU cosmetics directives and US FDA labeling standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};