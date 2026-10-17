import React from 'react';
import { Check, Star, Shield, ArrowRight } from 'lucide-react';

interface PartnerTiersProps {
  onSelectTier: (tierName: string) => void;
}

export const PartnerTiers: React.FC<PartnerTiersProps> = ({ onSelectTier }) => {
  const tiers = [
    {
      name: 'Micro-Hub Ambassador',
      level: 'Tier 1 · Entry Level',
      price: '$1,200',
      description: 'Ideal for independent estheticians, beauty creators, and boutique side-hustlers starting out.',
      inventoryUnits: '~75 Units Starter Mix',
      territory: 'Designated County / 3 Metro Zip Codes',
      adRoutingCap: 'Up to 50 ad orders / month',
      previewImages: [
        { src: '/Balm.jpg', alt: 'Solid Balm 15g' },
        { src: '/Set2.jpeg', alt: 'Discovery Set 3x2ml' },
      ],
      features: [
        'Curated mix: 15g Balms, 10ml Oils, Discovery Trios',
        'Pre-kitted luxury mailer packaging included',
        'Acrylic tabletop tester display with sampling blotters',
        'SOHAN Partner Portal access & automated label printing',
        '90% Inventory Buy-Back Guarantee'
      ],
      cta: 'Apply for Tier 1',
      popular: false
    },
    {
      name: 'City Partner',
      level: 'Tier 2 · Most Popular',
      price: '$3,500',
      description: 'Built for established boutique retailers, luxury spas, and ambitious regional brand builders.',
      inventoryUnits: '~250 Units Core Inventory',
      territory: 'Full Metro Area Exclusivity (e.g. Greater Austin)',
      adRoutingCap: 'Up to 150 ad orders / month',
      previewImages: [
        { src: '/Pistachio.png', alt: '№ 01 Saffron Pistachio Oil' },
        { src: '/Balm.jpg', alt: 'Solid Balm 15g' },
        { src: '/Set2.jpeg', alt: 'Discovery Set 3x2ml' },
      ],
      features: [
        'Expanded inventory mix across all three scents',
        'Full metropolitan territory exclusivity (1 partner per metro)',
        'Deluxe handcrafted wooden fragrance tasting tray',
        '100 complimentary 2ml sample vials for client gifting',
        'Priority ad routing in your metropolitan area',
        '90% Inventory Buy-Back Guarantee'
      ],
      cta: 'Apply for City Partner',
      popular: true
    },
    {
      name: 'Regional Master Hub',
      level: 'Tier 3 · Master Distributor',
      price: '$8,000',
      description: 'Designed for commercial fulfillment operators, multi-store owners, and wholesale distributors.',
      inventoryUnits: '~600 Units Bulk Inventory',
      territory: 'Multi-County or Multi-State Distribution Rights',
      adRoutingCap: '400+ ad orders / month priority routing',
      previewImages: [
        { src: '/Pistachio.png', alt: '№ 01 Pistachio' },
        { src: '/BurnSugar.png', alt: '№ 02 Burnt Sugar' },
        { src: '/Sesame.png', alt: '№ 03 Sesame Skin' },
        { src: '/Balm.jpg', alt: 'Solid Balm' },
      ],
      features: [
        'Master inventory volume with maximum margin buffer',
        'Multi-state or regional territory rights',
        'Zebra 4×6 commercial thermal label printer included',
        'Quarterly bulk pallet auto-replenishment terms',
        'Direct line to SOHAN executive founders & custom ad campaigns',
        '90% Inventory Buy-Back Guarantee'
      ],
      cta: 'Apply for Regional Hub',
      popular: false
    }
  ];

  return (
    <section id="tiers" className="py-20 md:py-32 bg-sohan-card/60 border-b border-sohan-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sohan-cream border border-sohan-border text-xs font-semibold uppercase tracking-wider text-sohan-cocoa mb-4">
            <Shield className="w-3.5 h-3.5 text-sohan-pistachio" />
            <span>Structured Investment Tiers</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-6">
            Choose Your Founding Partner Tier
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans">
            Every dollar paid goes 100% directly toward tangible wholesale inventory backed by our FTC-compliant 90% buy-back guarantee. Zero franchise royalties or hidden recurring platform fees.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-200 ${
                tier.popular
                  ? 'bg-sohan-cocoa text-sohan-cream border-2 border-sohan-sugar shadow-xl scale-100 lg:-translate-y-2'
                  : 'bg-sohan-cream text-sohan-cocoa border border-sohan-border hover:border-sohan-cocoa/40 shadow-xs'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-sohan-sugar text-sohan-cream text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-xs">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Recommended for Metro Hubs</span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <span className={`text-[11px] font-bold uppercase tracking-widest block mb-1 ${
                    tier.popular ? 'text-sohan-sugar' : 'text-sohan-pistachio'
                  }`}>
                    {tier.level}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2">
                    {tier.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${tier.popular ? 'text-sohan-cream/80' : 'text-sohan-cocoa/75'}`}>
                    {tier.description}
                  </p>
                </div>

                {/* Product Thumbnail Strip */}
                <div className="mb-6 p-3 rounded-2xl bg-current/5 border border-current/10">
                  <span className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-75">
                    Starter Stock Preview:
                  </span>
                  <div className="flex gap-2">
                    {tier.previewImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="w-12 h-16 rounded-lg bg-sohan-cream overflow-hidden border border-current/20 shrink-0"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-current/15">
                  <span className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
                    {tier.price}
                  </span>
                  <span className={`text-xs ml-2 uppercase font-medium ${tier.popular ? 'text-sohan-cream/70' : 'text-sohan-muted'}`}>
                    Wholesale Inventory Buy
                  </span>
                </div>

                <div className="space-y-2 mb-6 text-xs">
                  <div className="flex justify-between py-1 border-b border-current/10">
                    <span className="font-semibold">Inventory Included:</span>
                    <span className="font-bold">{tier.inventoryUnits}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-current/10">
                    <span className="font-semibold">Territory Rights:</span>
                    <span className="font-bold">{tier.territory}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-current/10">
                    <span className="font-semibold">Ad Routing Capacity:</span>
                    <span className="font-bold">{tier.adRoutingCap}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider opacity-80">Included in Package:</p>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        tier.popular ? 'bg-sohan-sugar text-sohan-cream' : 'bg-sohan-pistachio/20 text-sohan-cocoa'
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className={tier.popular ? 'text-sohan-cream/90' : 'text-sohan-cocoa/85'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-sohan-sugar hover:bg-sohan-sugar/90 text-sohan-cream'
                      : 'bg-sohan-cocoa hover:bg-sohan-dark text-sohan-cream'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
