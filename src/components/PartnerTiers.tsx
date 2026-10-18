import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

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
          <p className="text-xs font-bold uppercase tracking-widest text-sohan-pistachio mb-3">
            Wholesale Starter Tiers
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-6">
            Choose Your Founding Partner Tier
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans">
            Every dollar paid goes 100% directly toward tangible wholesale inventory backed by our FTC-compliant 90% buy-back guarantee. Zero franchise royalties or hidden recurring platform fees.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
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
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-sohan-sugar text-sohan-cream text-[10px] font-bold uppercase tracking-widest shadow-xs">
                  Most Selected
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

                <div className="rounded-2xl border border-current/15 overflow-hidden mb-6 text-xs divide-y divide-current/10">
                  <div className="grid grid-cols-5 p-2.5 items-center">
                    <span className="col-span-2 font-medium opacity-75">Inventory</span>
                    <span className="col-span-3 font-bold text-right">{tier.inventoryUnits}</span>
                  </div>
                  <div className="grid grid-cols-5 p-2.5 items-center bg-current/5">
                    <span className="col-span-2 font-medium opacity-75">Territory</span>
                    <span className="col-span-3 font-bold text-right">{tier.territory}</span>
                  </div>
                  <div className="grid grid-cols-5 p-2.5 items-center">
                    <span className="col-span-2 font-medium opacity-75">Ad Routing</span>
                    <span className="col-span-3 font-bold text-right">{tier.adRoutingCap}</span>
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

        {/* Detailed Comparison Table */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-sohan-cocoa mb-2">
              Detailed Tier Specifications
            </h3>
            <p className="text-xs sm:text-sm text-sohan-cocoa/75 max-w-xl mx-auto">
              Compare starter inventory, territory protections, and operational terms side-by-side.
            </p>
          </div>

          <div className="flex items-center justify-between px-2 mb-2 sm:hidden text-[11px] font-semibold text-sohan-muted">
            <span>Side-by-Side Matrix</span>
            <span className="text-sohan-sugar font-bold">Swipe horizontally →</span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-sohan-border bg-sohan-cream shadow-xs">
            <table className="w-full min-w-[620px] text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-sohan-border bg-sohan-card/90">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[11px] text-sohan-muted w-1/4">
                    Specification
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-sohan-cocoa w-1/4">
                    <span className="block font-display font-bold text-base sm:text-lg">Micro-Hub</span>
                    <span className="text-xs font-semibold text-sohan-pistachio">$1,200 Wholesale</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-sohan-cocoa bg-sohan-sugar/10 w-1/4 border-x border-sohan-sugar/30">
                    <span className="block font-display font-bold text-base sm:text-lg text-sohan-cocoa">City Partner</span>
                    <span className="text-xs font-bold text-sohan-sugar">$3,500 Wholesale · Core Hub</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-sohan-cocoa w-1/4">
                    <span className="block font-display font-bold text-base sm:text-lg">Regional Master Hub</span>
                    <span className="text-xs font-semibold text-sohan-muted">$8,000 Wholesale</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sohan-border/70 text-sohan-cocoa/90">
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Initial Inventory Volume</td>
                  <td className="p-4 sm:p-5">~75 units starter mix</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">~250 units full line</td>
                  <td className="p-4 sm:p-5">~600 units master stock</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Retail Direct Margin</td>
                  <td className="p-4 sm:p-5">45% ($16–$19 profit/unit)</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">50% ($17–$20 profit/unit)</td>
                  <td className="p-4 sm:p-5">52% maximum wholesale margin</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Territory Exclusivity</td>
                  <td className="p-4 sm:p-5">Single county / 3 metro zips</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">Full metro area exclusivity (1 per metro)</td>
                  <td className="p-4 sm:p-5">Multi-county / state distribution rights</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Monthly Ad Routing Cap</td>
                  <td className="p-4 sm:p-5">Up to 50 orders / mo ($250+ bounty)</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">Up to 150 orders / mo ($750+ bounty)</td>
                  <td className="p-4 sm:p-5">400+ orders / mo priority routing</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Pre-Kitted Mailers</td>
                  <td className="p-4 sm:p-5">100% pre-assembled luxury boxes</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">100% pre-assembled luxury boxes</td>
                  <td className="p-4 sm:p-5">100% pre-assembled + bulk packing station</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Counter Tasting Display</td>
                  <td className="p-4 sm:p-5">Acrylic tabletop display & blotters</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">Handcrafted wooden fragrance tasting tray</td>
                  <td className="p-4 sm:p-5">Master boutique testing & packing bar</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Client Sampling Stock</td>
                  <td className="p-4 sm:p-5">15 Discovery Trios</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">100 complimentary 2ml sample vials</td>
                  <td className="p-4 sm:p-5">300 complimentary 2ml sample vials</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Thermal Printer Hardware</td>
                  <td className="p-4 sm:p-5">Standard printer / BYO</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">Standard printer / BYO</td>
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Zebra 4×6 commercial thermal printer included</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">FTC 90% Buy-Back Protection</td>
                  <td className="p-4 sm:p-5">180-Day Guarantee</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-semibold text-sohan-cocoa">180-Day Guarantee</td>
                  <td className="p-4 sm:p-5">180-Day Guarantee</td>
                </tr>
                <tr className="hover:bg-sohan-card/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-sohan-cocoa">Estimated Monthly Revenue</td>
                  <td className="p-4 sm:p-5 font-bold text-sohan-cocoa">$400 – $900 / mo</td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/5 border-x border-sohan-sugar/20 font-bold text-sohan-sugar text-base">$1,500 – $3,200 / mo</td>
                  <td className="p-4 sm:p-5 font-bold text-sohan-cocoa">$3,500 – $7,500 / mo</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t border-sohan-border bg-sohan-card/90">
                  <td className="p-4 sm:p-5 font-bold text-xs uppercase tracking-wider text-sohan-muted">Action</td>
                  <td className="p-4 sm:p-5">
                    <button
                      onClick={() => onSelectTier('Micro-Hub Ambassador')}
                      className="w-full py-2.5 px-4 rounded-full bg-sohan-cocoa hover:bg-sohan-dark text-sohan-cream font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Select Tier 1
                    </button>
                  </td>
                  <td className="p-4 sm:p-5 bg-sohan-sugar/10 border-x border-sohan-sugar/30">
                    <button
                      onClick={() => onSelectTier('City Partner')}
                      className="w-full py-2.5 px-4 rounded-full bg-sohan-sugar hover:bg-sohan-sugar/90 text-sohan-cream font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                    >
                      Select City Partner
                    </button>
                  </td>
                  <td className="p-4 sm:p-5">
                    <button
                      onClick={() => onSelectTier('Regional Master Hub')}
                      className="w-full py-2.5 px-4 rounded-full bg-sohan-cocoa hover:bg-sohan-dark text-sohan-cream font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Select Tier 3
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
