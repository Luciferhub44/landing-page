import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Search,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Building,
  Mail,
  Printer,
  ChevronRight
} from 'lucide-react';

interface GovernancePageProps {
  onBackClick: () => void;
  onApplyClick: () => void;
  initialPolicyId?: string;
}

interface PolicySection {
  id: string;
  badge: string;
  title: string;
  shortSummary: string;
  category: 'compliance' | 'commercial' | 'legal' | 'product';
  effectiveDate: string;
  clauses: {
    number: string;
    title: string;
    content: string;
    bullets?: string[];
  }[];
}

const POLICIES: PolicySection[] = [
  {
    id: 'ftc-compliance',
    badge: 'Statutory Standard',
    title: 'FTC Direct Selling & Anti-Pyramid Compliance Charter',
    shortSummary: 'Definitive structural safeguards ensuring pure product commerce with strictly zero recruitment compensation.',
    category: 'compliance',
    effectiveDate: 'October 1, 2026',
    clauses: [
      {
        number: '1.1',
        title: 'B2B Wholesale & Independent Contractor Classification',
        content:
          'SOHAN operates exclusively as a legitimate B2B wholesale supplier and decentralized micro-fulfillment network under 16 CFR Part 437 (FTC Business Opportunity Rule). SOHAN City Partners and Regional Masters are bona fide independent wholesale distributors and independent fulfillment contractors (IRS Form 1099-NEC). Partners are not employees, franchisees, or legal agents of SOHAN Scents Americas LLC.',
        bullets: [
          'No recruitment compensation: SOHAN pays zero bonuses, bounties, or commissions for sponsoring, enrolling, or introducing other partners.',
          'No multi-level downlines: Compensation is strictly two-fold: (a) immediate wholesale gross margin (45%–50%) on direct product sales, and (b) a fixed service bounty ($5.00/order) for performing physical fulfillment of digital orders.',
          'No passive recruitment overrides: Partners derive zero income from subsequent sales made by other geographic partners.'
        ]
      },
      {
        number: '1.2',
        title: 'Truth in Advertising & Earnings Disclaimer (FTC Guides Against Deception)',
        content:
          'SOHAN does not represent, promise, or guarantee any specific income, profit margin, or return on investment. Wholesale partner revenues depend solely on individual local sales execution, commercial relationships, consumer demand, and fulfillment volumes in the designated territory.',
        bullets: [
          'Illustrations, calculators, and earnings scenarios on SOHAN portals are for analytical modeling only and do not constitute income guarantees.',
          'Partners are strictly prohibited from publishing false, deceptive, or exaggerated earnings testimonials, lifestyle claims, or guarantees of passive wealth.'
        ]
      },
      {
        number: '1.3',
        title: 'Real Tangible Inventory vs. Bogus Onboarding Fees',
        content:
          '100% of the funds invested in SOHAN Starter Packs (Boutique, City Partner, Regional Master) are allocated to tangible, marketable inventory, tester discovery kits, and professional packaging equipment. SOHAN charges zero ongoing franchise royalties, zero compulsory software seat licenses, and zero administrative participation dues.'
      }
    ]
  },
  {
    id: 'buy-back-policy',
    badge: 'Guaranteed Protection',
    title: '180-Day 90% Inventory Buy-Back & Voluntary Exit Shield',
    shortSummary: 'Statutory inventory repurchase guarantee shielding partners from downside inventory risk upon exit.',
    category: 'commercial',
    effectiveDate: 'October 1, 2026',
    clauses: [
      {
        number: '2.1',
        title: 'Statutory Repurchase Guarantee (180-Day Window)',
        content:
          'In full accordance with consumer protection statutes and voluntary ethical direct-selling standards, any partner who elects to discontinue their partnership within one hundred and eighty (180) calendar days of initial delivery may return all unsold, undamaged, and resalable wholesale inventory for a mandatory 90% cash refund of the net wholesale cost paid.',
        bullets: [
          'Applicable items: Unopened 10ml Extrait de Parfum bottles, unopened 15g Solid Perfume Balm tins, and unopened Discovery Set cartons in original protective sleeves.',
          'Repurchase valuation: 90% of the original invoice unit price paid (excluding original outbound freight or optional expedited shipping).',
          'Refund method: Direct ACH electronic funds transfer or bank wire within fourteen (14) business days of physical warehouse receipt and QC inspection.'
        ]
      },
      {
        number: '2.2',
        title: 'RMA Inspection & Non-Returnable Hardware Provisions',
        content:
          'To initiate a voluntary exit buy-back, partners submit an RMA request to partner@sohanscents.com. Returned inventory must undergo quality control inspection to verify tamper-evident seal integrity and absence of heat/UV degradation.',
        bullets: [
          'Retained assets: The wireless Bluetooth 4x6 thermal shipping printer, packaging accessories, and opened discovery tester vials remain the partner’s permanent property and are not returned.',
          'Return logistics: SOHAN generates prepaid discounted carrier shipping labels, the cost of which is deducted from the net buy-back disbursement.'
        ]
      }
    ]
  },
  {
    id: 'territory-terms',
    badge: 'Contracted Rights',
    title: 'Territory Exclusivity & Micro-Hub Ad Routing Protocol',
    shortSummary: 'Contractual territorial boundaries, automated ad order routing, and fulfillment performance SLAs.',
    category: 'commercial',
    effectiveDate: 'October 1, 2026',
    clauses: [
      {
        number: '3.1',
        title: 'Territory Boundary Designation',
        content:
          'City Partners and Regional Masters receive contracted geographic exclusivity defined by designated 3-digit USPS Postal ZIP Code prefixes or designated metropolitan statistical areas (MSAs). During the active term of this agreement, SOHAN shall not onboard a second overlapping City Partner within the designated boundaries.',
        bullets: [
          'Exclusivity window: 12 months from execution date, automatically renewable upon maintaining active partner standing.',
          'Local wholesale sovereignty: The partner holds exclusive wholesale distribution rights to independent brick-and-mortar boutiques, gift shops, salons, and pop-up markets within their zone.'
        ]
      },
      {
        number: '3.2',
        title: 'Automated Local Order Routing & $5.00 Bounty Payout',
        content:
          'When digital marketing campaigns funded entirely by SOHAN generate direct-to-consumer e-commerce orders with shipping addresses inside the partner’s protected postal codes, the orders are automatically dispatched into the partner’s portal for local fulfillment.',
        bullets: [
          'Fixed fulfillment bounty: SOHAN credits the partner with $5.00 USD per fulfilled package, disbursed bi-weekly via automated ACH.',
          'Prepaid postage: SOHAN generates prepaid 4x6 thermal USPS Ground Advantage shipping labels directly inside the partner portal. Partners incur $0 postage expense.',
          'Packaging SLA: Partner agrees to pack, label, and present parcels for USPS carrier scan within twenty-four (24) to forty-eight (48) business hours of order routing.'
        ]
      },
      {
        number: '3.3',
        title: 'Temporary Vacation Routing & Fail-Safe Protocol',
        content:
          'Partners may activate "Vacation Hold" mode in their portal up to thirty (30) cumulative calendar days per year. During vacation holds, online orders are temporarily rerouted to SOHAN’s central fulfillment hub to ensure customer delivery speed, without forfeiting territory exclusivity.'
      }
    ]
  },
  {
    id: 'product-regulations',
    badge: 'Regulatory Grade',
    title: 'Product Safety, EU Formulation & FDA Compliance Standards',
    shortSummary: 'Alcohol-free cosmetic compounding, non-hazmat postal certification, and international regulatory conformance.',
    category: 'product',
    effectiveDate: 'October 1, 2026',
    clauses: [
      {
        number: '4.1',
        title: 'Alcohol-Free Botanical Formulations',
        content:
          'All SOHAN fragrance extracts and solid balms are formulated without denatured ethyl alcohol (ethanol), phthalates, parabens, synthetic colorants, or nitro-musks. Products are compounded utilizing pure botanical carrier waxes, cold-pressed jojoba esters, and fractionated coconut triglycerides.',
        bullets: [
          'EU Cosmetics Regulation: 100% compliant with European Cosmetics Regulation (EC) No 1223/2009.',
          'FDA MoCRA Registration: SOHAN formulations and compounding manufacturing facilities are registered under the US Modernization of Cosmetics Regulation Act (MoCRA).',
          'IFRA Standards: Formulations strictly observe the 51st Amendment of the International Fragrance Association (IFRA) Code of Practice.'
        ]
      },
      {
        number: '4.2',
        title: 'Non-Flammable / Non-Hazmat USPS Postal Classification',
        content:
          'Because SOHAN formulations contain 0% flammable ethanol, their tested flashpoint exceeds 200°F (93.3°C). Under 49 CFR § 173.120 and USPS Publication 52 (Hazardous, Restricted, and Perishable Mail), SOHAN products are classified as non-hazardous, non-flammable consumer goods.',
        bullets: [
          'Unrestricted mailability: Eligible for standard, economical USPS Ground Advantage mail and commercial air transport without hazardous materials surcharges, special ORM-D labeling, or ground-only freight restrictions.'
        ]
      },
      {
        number: '4.3',
        title: 'Batch Traceability & Stability Warranties',
        content:
          'Every product container displays an indelible batch production code and a 36-month shelf-life indicator (PAO 24M upon opening). Partners are warranted against formulation separation, oxidation, or clouding under normal indoor climate-controlled storage conditions.'
      }
    ]
  },
  {
    id: 'map-conduct',
    badge: 'Brand Integrity',
    title: 'Partner Code of Conduct & Minimum Advertised Price (MAP)',
    shortSummary: 'Mandatory brand stewardship, luxury channel integrity, and strict anti-discounting policies.',
    category: 'legal',
    effectiveDate: 'October 1, 2026',
    clauses: [
      {
        number: '5.1',
        title: 'Unilateral Minimum Advertised Price (MAP) Enforcement',
        content:
          'To protect the prestige luxury reputation of SOHAN and safeguard gross profit margins for all network partners, SOHAN maintains a strict unilateral MAP policy across all public channels.',
        bullets: [
          'MAP Price floors: № 01, № 02, and № 03 Extrait Oils may not be publicly advertised or discounted below $38.00 USD; Solid Balms below $32.00 USD; Discovery Sets below $20.00 USD.',
          'Violations: Advertising below MAP on social media, public websites, or public print flyers constitutes grounds for immediate suspension of wholesale replenishment.'
        ]
      },
      {
        number: '5.2',
        title: 'Authorized vs. Prohibited Sales Channels',
        content:
          'SOHAN products are designed for high-touch, tactile luxury experiences. Permitted channels include: high-end local boutiques, apothecary salons, artisan maker markets, private trunk shows, and direct in-person client consultations.',
        bullets: [
          'Prohibited mass marketplaces: Partners may not list SOHAN products on mass auction or aggregator marketplaces including Amazon, eBay, Walmart.com, Temu, or AliExpress.',
          'Brand asset utilization: Partners may utilize high-resolution product photography, logos, and approved typography provided in the SOHAN Partner Asset Library strictly for authorized marketing.'
        ]
      }
    ]
  },
  {
    id: 'privacy-security',
    badge: 'Data Protection',
    title: 'Customer Data Privacy & Fulfillment Non-Solicitation',
    shortSummary: 'CCPA/GDPR compliance, encrypted PII handling, and strict prohibitions on customer data harvesting.',
    category: 'compliance',
    effectiveDate: 'October 1, 2026',
    clauses: [
      {
        number: '6.1',
        title: 'Fulfillment Customer PII Confidentiality',
        content:
          'When fulfilling digital DTC orders dispatched by SOHAN’s advertising system, partners receive customer names, shipping addresses, and packaging slips. This Personally Identifiable Information (PII) is delivered solely for the purpose of printing shipping labels and packing orders.',
        bullets: [
          'Strict non-solicitation: Partners shall not harvest, export, store, or sell customer contact information, nor independently contact digital customers for unauthorized commercial solicitations.',
          'Data security standards: All customer transmission over the SOHAN partner portal is protected with TLS 1.3 encryption and complies with CCPA/CPRA (California) and GDPR standards.'
        ]
      },
      {
        number: '6.2',
        title: 'Partner Data Protection & Banking Security',
        content:
          'SOHAN stores partner tax documentation (W-9 / 1099-NEC) and ACH payout banking details via encrypted, SOC-2 compliant payment gateway infrastructure. SOHAN never sells or shares partner personal information with third-party data brokers.'
      }
    ]
  },
  {
    id: 'arbitration-legal',
    badge: 'Dispute Resolution',
    title: 'Governing Law, Mediation & Binding Commercial Arbitration',
    shortSummary: 'Standard commercial resolution protocols governed under Delaware law with mutual legal fee protections.',
    category: 'legal',
    effectiveDate: 'October 1, 2026',
    clauses: [
      {
        number: '7.1',
        title: 'Governing Law & Delaware Jurisdiction',
        content:
          'This agreement, partner relationships, and all related commercial transactions are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.'
      },
      {
        number: '7.2',
        title: 'Dispute Resolution Ladder (Informal Negotiation & Arbitration)',
        content:
          'In the event of any controversy, claim, or dispute arising out of or relating to the partner agreement, the parties agree to adhere to the following phased resolution process:',
        bullets: [
          'Phase 1 (Informal Conference): Good-faith direct negotiation between the partner and SOHAN Executive Operations for a period of thirty (30) days.',
          'Phase 2 (Binding Arbitration): If unresolved, the dispute shall be resolved by confidential binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules.',
          'Class action waiver: Claims must be brought in an individual capacity and not as a plaintiff or class member in any purported class, collective, or representative proceeding.'
        ]
      }
    ]
  }
];

export const GovernancePage: React.FC<GovernancePageProps> = ({
  onBackClick,
  onApplyClick,
  initialPolicyId
}) => {
  const [selectedPolicyId, setSelectedPolicyId] = useState<string>(
    initialPolicyId || POLICIES[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    if (initialPolicyId) {
      setSelectedPolicyId(initialPolicyId);
      const element = document.getElementById(initialPolicyId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialPolicyId]);

  const handlePrint = () => {
    window.print();
  };

  const filteredPolicies = POLICIES.filter((policy) => {
    const matchesCategory =
      activeCategory === 'all' || policy.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.clauses.some(
        (c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });


  return (
    <div className="min-h-screen bg-sohan-cream text-sohan-cocoa flex flex-col font-sans">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-sohan-cream/95 backdrop-blur-md border-b border-sohan-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-sohan-card border border-sohan-border text-xs font-semibold text-sohan-cocoa hover:bg-sohan-cream hover:border-sohan-cocoa transition-all shadow-2xs group"
              aria-label="Back to overview"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Back to Overview</span>
              <span className="sm:hidden">Back</span>
            </button>

            <div className="flex items-center gap-2.5 pl-2 border-l border-sohan-border">
              <img
                src="/sohan-logo.png"
                alt="SOHAN Logo"
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className="font-display font-bold text-lg text-sohan-cocoa">
                  SOHAN
                </span>
                <span className="block text-[9px] uppercase tracking-widest font-semibold text-sohan-pistachio">
                  Legal & Governance Charter
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-sohan-card border border-sohan-border text-xs font-semibold text-sohan-cocoa hover:bg-sohan-cream transition-all shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-sohan-muted" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sohan-cocoa text-sohan-cream font-semibold text-xs tracking-wider uppercase hover:bg-sohan-dark transition-all shadow-xs"
            >
              <span>Apply for Territory</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-sohan-card/60 border-b border-sohan-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sohan-cream border border-sohan-border text-[11px] font-bold uppercase tracking-widest text-sohan-pistachio mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Network Operating Policies · Updated 2026</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight leading-[1.12] mb-4">
              Governance, Terms & Regulatory Standards
            </h1>
            <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans mb-6">
              Complete transparency for every City Partner and Regional Master. 
              Review the enforceable commercial agreements, FTC anti-pyramid safeguards, 
              90% inventory repurchase shield, and European cosmetic formulation standards.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-sohan-cream border border-sohan-border">
                <span className="block text-[10px] uppercase font-bold text-sohan-muted">Downline Model</span>
                <span className="font-display font-bold text-base text-sohan-cocoa">0% MLM / Zero Recruits</span>
              </div>
              <div className="p-3 rounded-2xl bg-sohan-cream border border-sohan-border">
                <span className="block text-[10px] uppercase font-bold text-sohan-pistachio">Exit Shield</span>
                <span className="font-display font-bold text-base text-sohan-pistachio">90% Buy-Back (180d)</span>
              </div>
              <div className="p-3 rounded-2xl bg-sohan-cream border border-sohan-border">
                <span className="block text-[10px] uppercase font-bold text-sohan-sugar">Ad Payouts</span>
                <span className="font-display font-bold text-base text-sohan-sugar">$5.00 / Order SLA</span>
              </div>
              <div className="p-3 rounded-2xl bg-sohan-cream border border-sohan-border">
                <span className="block text-[10px] uppercase font-bold text-sohan-cocoa">Jurisdiction</span>
                <span className="font-display font-bold text-base text-sohan-cocoa">Delaware · AAA Rules</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex-grow w-full">
        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-sohan-border">
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-sohan-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search policies (e.g. buy-back, FTC, MAP, arbitration)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-sohan-card border border-sohan-border text-xs text-sohan-cocoa placeholder:text-sohan-muted focus:outline-none focus:ring-2 focus:ring-sohan-cocoa/20 focus:border-sohan-cocoa"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            {[
              { id: 'all', label: 'All Charters' },
              { id: 'compliance', label: 'Compliance & FTC' },
              { id: 'commercial', label: 'Territory & Buy-Back' },
              { id: 'product', label: 'Safety & FDA' },
              { id: 'legal', label: 'Conduct & Legal' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-sohan-cocoa text-sohan-cream shadow-2xs'
                    : 'bg-sohan-card border border-sohan-border text-sohan-cocoa/75 hover:border-sohan-cocoa'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Navigation Sidebar */}
          <aside className="lg:col-span-4 space-y-2">
            <div className="sticky top-28 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sohan-muted px-3 mb-2">
                Policy Directory ({filteredPolicies.length})
              </h3>
              {filteredPolicies.map((policy) => {
                const isSelected = selectedPolicyId === policy.id;
                return (
                  <button
                    key={policy.id}
                    onClick={() => {
                      setSelectedPolicyId(policy.id);
                      const el = document.getElementById(policy.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all border flex items-start justify-between gap-3 group ${
                      isSelected
                        ? 'bg-sohan-card border-sohan-cocoa shadow-xs'
                        : 'bg-sohan-cream/80 border-sohan-border hover:bg-sohan-card hover:border-sohan-cocoa/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-sohan-sugar">
                          {policy.badge}
                        </span>
                        <span className="text-[10px] text-sohan-muted font-mono">
                          {policy.clauses.length} Clauses
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-sohan-cocoa leading-snug">
                        {policy.title}
                      </h4>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform mt-1 ${
                        isSelected
                          ? 'text-sohan-cocoa translate-x-0.5'
                          : 'text-sohan-muted group-hover:text-sohan-cocoa'
                      }`}
                    />
                  </button>
                );
              })}

              {/* Legal Inquiries Box */}
              <div className="p-4 rounded-2xl bg-sohan-dark text-sohan-cream mt-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sohan-pistachio mb-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Legal Compliance Office</span>
                </div>
                <p className="text-[11px] text-sohan-cream/70 leading-relaxed mb-3">
                  Inquiries regarding territorial zoning, contract amendments, or FTC documentation may be directed to our legal team.
                </p>
                <a
                  href="mailto:compliance@sohanscents.com"
                  className="text-xs font-semibold text-sohan-cream underline underline-offset-4 hover:text-sohan-pistachio transition-colors block"
                >
                  compliance@sohanscents.com
                </a>
              </div>
            </div>
          </aside>

          {/* Right Detailed Reading Area */}
          <main className="lg:col-span-8 space-y-12">
            {filteredPolicies.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-sohan-card border border-sohan-border">
                <AlertTriangle className="w-8 h-8 text-sohan-sugar mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg text-sohan-cocoa mb-1">
                  No matching policy clauses found
                </h3>
                <p className="text-xs text-sohan-cocoa/70 mb-4">
                  Try adjusting your search keyword or clearing the category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 rounded-full bg-sohan-cocoa text-sohan-cream text-xs font-semibold uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredPolicies.map((policy) => (
                <article
                  key={policy.id}
                  id={policy.id}
                  className="p-6 sm:p-8 rounded-3xl bg-sohan-card border border-sohan-border shadow-xs scroll-mt-28"
                >
                  {/* Article Header */}
                  <div className="border-b border-sohan-border pb-6 mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-sohan-sugar/15 text-sohan-cocoa border border-sohan-sugar/30">
                        {policy.badge}
                      </span>
                      <span className="text-xs font-mono text-sohan-muted">
                        Effective: {policy.effectiveDate}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-sohan-cocoa mb-2">
                      {policy.title}
                    </h2>
                    <p className="text-sm text-sohan-cocoa/80 leading-relaxed font-sans">
                      {policy.shortSummary}
                    </p>
                  </div>

                  {/* Clauses */}
                  <div className="space-y-6">
                    {policy.clauses.map((clause) => (
                      <div
                        key={clause.number}
                        className="p-4 sm:p-5 rounded-2xl bg-sohan-cream/60 border border-sohan-border/70"
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="font-mono text-xs font-bold text-sohan-pistachio bg-sohan-cream px-2 py-0.5 rounded border border-sohan-border">
                            § {clause.number}
                          </span>
                          <h3 className="font-display font-bold text-base text-sohan-cocoa">
                            {clause.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-sohan-cocoa/85 leading-relaxed mb-3">
                          {clause.content}
                        </p>

                        {clause.bullets && clause.bullets.length > 0 && (
                          <ul className="space-y-2 mt-2 pt-2 border-t border-sohan-border/60">
                            {clause.bullets.map((bullet, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs text-sohan-cocoa/80 leading-relaxed"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-sohan-pistachio shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Quick Section Footer */}
                  <div className="mt-6 pt-4 border-t border-sohan-border/60 flex items-center justify-between text-xs text-sohan-muted">
                    <span className="font-mono text-[11px]">SOHAN Legal Repository · US Network Spec</span>
                    <a
                      href="#top"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-sohan-cocoa underline underline-offset-2"
                    >
                      Back to Top ↑
                    </a>
                  </div>
                </article>
              ))
            )}

            {/* Corporate Entity & Registry Footer Box */}
            <div className="p-8 rounded-3xl bg-sohan-dark text-sohan-cream border border-sohan-dark shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sohan-cream/10 flex items-center justify-center text-sohan-cream">
                  <Building className="w-5 h-5 text-sohan-pistachio" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-sohan-cream">
                    SOHAN Scents Americas LLC
                  </h3>
                  <p className="text-xs text-sohan-cream/60">
                    Registered US Corporation · State of Delaware File #7842910
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-sohan-cream/80 border-t border-sohan-cream/10 pt-4">
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sohan-sugar text-[11px] mb-1">
                    Network Headquarters
                  </h4>
                  <p className="leading-relaxed">
                    SOHAN Scents Americas LLC<br />
                    1209 Orange Street<br />
                    Wilmington, Delaware 19801, USA
                  </p>
                </div>

                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sohan-sugar text-[11px] mb-1">
                    European Formulation Facility
                  </h4>
                  <p className="leading-relaxed">
                    SOHAN Parfums Sp. z o.o.<br />
                    ul. Koszykowa 61, 00-667<br />
                    Warsaw, Poland (EU Compliance Lab)
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-sohan-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-sohan-cream/60">
                <p>© 2026 SOHAN Scents Americas LLC. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:compliance@sohanscents.com"
                    className="hover:text-sohan-cream underline underline-offset-2"
                  >
                    Direct Legal Contact
                  </a>
                  <button
                    onClick={onApplyClick}
                    className="hover:text-sohan-cream underline underline-offset-2"
                  >
                    Partner Application
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
