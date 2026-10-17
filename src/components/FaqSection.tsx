import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who pays for customer shipping postage on SOHAN.com orders?",
      answer: "SOHAN pays 100% of all customer shipping postage. When you log into the Partner Portal to fulfill an order, the system automatically generates a pre-paid USPS Ground Advantage 4×6 thermal shipping label. You incur zero postage or packaging expense."
    },
    {
      question: "Do I need a commercial retail storefront to qualify?",
      answer: "No. While boutique and spa owners are great fits, many of our partners are independent estheticians, luxury creators, or e-commerce operators working from clean home studios. The only physical requirement is clean, climate-controlled, smoke-free, pet-free storage (e.g. a dedicated closet or shelving unit) and a basic printer."
    },
    {
      question: "What happens if digital ads underperform in my territory?",
      answer: "Unlike traditional franchises where you bear the entire risk of empty foot traffic, you have two safety nets: First, you retain 45% gross margin on direct local sales to your community. Second, under our FTC-compliant 90% Buy-Back Guarantee, you can return unopened inventory within 180 days for a 90% refund."
    },
    {
      question: "How does inventory restocking work when ad orders deplete my stock?",
      answer: "Our Shopify Multi-Location system tracks your local inventory in real-time. Whenever an ad-routed order is fulfilled, that unit is logged. Once your local stock reaches a reorder threshold (e.g. 15 units remaining), SOHAN automatically triggers a replenishment shipment from our central warehouse so your shelves stay stocked."
    },
    {
      question: "Can I sell SOHAN on Amazon, Walmart, or eBay?",
      answer: "No. To protect our luxury brand positioning, maintain strict MSRP pricing, and safeguard our partners' territory exclusivity, third-party marketplace listings are strictly prohibited. SOHAN products may only be sold through official SOHAN.com channels and authorized partner locations."
    },
    {
      question: "How long does onboarding take once my application is approved?",
      answer: "The onboarding process takes 3 to 5 business days. Once your partner agreement is signed and your wholesale tier order is placed, your inventory starter pack, marketing tester bar, and portal credentials ship within 48 hours."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-sohan-card/60 border-b border-sohan-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-sohan-sugar mb-3">
            Common Questions
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-sohan-cocoa tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-sohan-cocoa/80 leading-relaxed font-sans">
            Everything you need to know about inventory ownership, territory exclusivity, and fulfillment operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-sohan-cream border border-sohan-border overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-sohan-cocoa">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-sohan-card border border-sohan-border flex items-center justify-center shrink-0 text-sohan-cocoa transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-sohan-cocoa text-sohan-cream' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-sohan-cocoa/80 leading-relaxed border-t border-sohan-border/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
