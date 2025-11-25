import Navigation from "@/components/Navigation";
import ProductHero from "@/components/ProductHero";
import HalfPageSplit from "@/components/HalfPageSplit";
import SpecsGrid from "@/components/SpecsGrid";
import ProductFeatures from "@/components/ProductFeatures";
import HorizontalTimeline from "@/components/HorizontalTimeline";
import PricingCards from "@/components/PricingCards";
import InstallationWarranty from "@/components/InstallationWarranty";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Droplet, Clock, Zap, Ruler, Calendar, Rocket, Battery, Sparkles } from "lucide-react";

export default function Product() {
  const productFAQs = [
    {
      question: "How much water does it hold?",
      answer: "3,000 gallons providing 30 minutes of continuous high-pressure delivery. That's enough capacity to defend your roof, perimeter, and critical structures during the most dangerous phase of a wildfire event. The system delivers professional-grade flow rates comparable to fire department equipment."
    },
    {
      question: "How far does the water reach?",
      answer: "Professional nozzles deliver high-pressure water streams up to three stories vertically. This protects tall structures, rooftops, and trees near your home. Horizontal reach varies based on nozzle selection and pressure settings—we optimize configuration during installation for your specific property layout."
    },
    {
      question: "What if I'm in a rural area without fire hydrants?",
      answer: "The WildSafe Tank is designed specifically for properties without reliable municipal water access. You get 3,000 gallons of dedicated storage with a diesel-powered pump that operates completely independently. No hydrants needed. No municipal connection required. Your water supply is on-site and always available."
    },
    {
      question: "How is it powered?",
      answer: "Diesel pump and engine with no grid connection. The system operates during power outages, which commonly occur during wildfire events. Diesel fuel provides reliable, long-term storage capability unlike gasoline. You maintain a simple fuel supply just like a backup generator."
    },
    {
      question: "Does maintenance require special skills?",
      answer: "Quarterly maintenance is straightforward—similar to maintaining a generator or other mechanical equipment. We provide complete training during installation. First year includes four professional inspections at no cost. After year one, you can continue with our service agreement or handle maintenance yourself using our detailed procedures and checklists."
    },
    {
      question: "Does it look industrial?",
      answer: "Low-profile fiberglass design minimizes visual impact. During your site assessment, we evaluate multiple placement options to optimize both protection and aesthetics. Most installations blend naturally into landscaping. The tank's neutral finish and below-8-foot height help it integrate with your property rather than dominate it."
    },
    {
      question: "What's the difference between Basic and Pro?",
      answer: "Currently, we offer the WildSafe Tank base system at $21,500 with complete protection, installation, training, first-year maintenance, and 3-year warranty. WildSafe Pro is under development and will add smart monitoring, enhanced service coverage, and extended warranty options. Contact us to learn about Pro features and availability."
    },
    {
      question: "Can it be installed on slopes or difficult terrain?",
      answer: "Yes. Site assessment determines optimal placement based on your specific terrain, access, and protection needs. We've successfully installed systems on slopes, hillsides, and properties with challenging access. Delivery and positioning logistics are planned during the assessment phase to ensure feasible installation."
    },
    {
      question: "What warranty coverage do I get?",
      answer: "Two warranty components protect your investment: Parts & Materials (3 years) covers any component that fails due to defect or workmanship at no charge. Maintenance (1st year included) provides four quarterly professional inspections in your purchase price. After year one, continue with an annual service agreement (pricing details provided during first-year service) or maintain the system yourself. Service agreement maintains full warranty coverage."
    }
  ];

  return (
    <div>
      <Navigation />

      <ProductHero
        headline="WildSafe Tank"
        tagline="Engineered for independence. Built for California conditions."
      />

      <HalfPageSplit
        leftContent={
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 italic">
              2 AM. Fire jumps the ridge. Power fails. Water pressure drops. Your diesel pump kicks on—3,000 gallons ready.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Self-contained diesel pump draws from a 3,000-gallon tank, delivering 30 minutes of high-pressure water. Independent of electrical grids and municipal water—the systems that fail during emergencies.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Three-story reach protects roofs, perimeter, and structures when infrastructure fails.
            </p>
            <Link href="/get-protected">
              <Button size="lg" className="w-full sm:w-auto min-h-12 px-8">
                Get Protected Today
              </Button>
            </Link>
          </div>
        }
        rightImage="/images/new-images/Tank-side.jpeg"
        leftBg="bg-muted"
      />

      <SpecsGrid
        title="Key Specifications"
        specs={[
          {
            icon: <Droplet className="w-12 h-12" />,
            value: "3,000",
            label: "gallons capacity"
          },
          {
            icon: <Clock className="w-12 h-12" />,
            value: "30",
            label: "minutes continuous runtime"
          },
          {
            icon: <Zap className="w-12 h-12" />,
            value: "Diesel",
            label: "off-grid power"
          },
          {
            icon: <Ruler className="w-12 h-12" />,
            value: "120",
            label: "sq ft footprint"
          },
          {
            icon: <Calendar className="w-12 h-12" />,
            value: "8-14",
            label: "weeks installation*"
          }
        ]}
        ctaText="Schedule Site Assessment for Detailed Specs"
        ctaLink="/get-protected"
      />

      <div className="px-6 lg:px-8 -mt-8 pb-8 bg-primary text-center">
        <p className="text-sm text-primary-foreground/80 max-w-3xl mx-auto">
          *Installation timeline includes 8-12 weeks for international tank shipping plus delivery coordination and on-site setup.
        </p>
      </div>

      <ProductFeatures
        sectionTitle="Why WildSafe Tank"
        subtitle="Built for California's toughest conditions"
        features={[
          {
            icon: <Rocket className="w-8 h-8" />,
            label: "FAST",
            headline: "No Permits. Installed in 8-14 Weeks.",
            description: "Qualifies for California's accessory structure exemption—no permits, approvals, or foundation required. Delivered, installed, and operational while traditional systems wait 6-12 months for permitting."
          },
          {
            icon: <Battery className="w-8 h-8" />,
            label: "OFF-GRID",
            headline: "Works When Infrastructure Fails",
            description: "Diesel-powered system operates independently—30 minutes of high-pressure water when power and municipal supply fail. No grid connection means no vulnerability."
          },
          {
            icon: <Sparkles className="w-8 h-8" />,
            label: "INTEGRATED",
            headline: "Designed to Blend",
            description: "Low-profile fiberglass with concealed placement optimized during site assessment. Professional installation integrates naturally into your property."
          }
        ]}
      />

      <InstallationWarranty />

      <section className="py-12 lg:py-16 px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
              TRANSPARENT PRICING
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Protection That Fits Your Budget
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Professional-grade wildfire defense at a fraction of traditional system costs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* WildSafe Tank - Featured */}
            <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-xl p-6 lg:p-8 shadow-2xl transform transition-transform hover:scale-105">
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                MOST POPULAR
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">WildSafe Tank</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-white">$21,500</span>
                </div>
                <p className="text-white/90">Complete wildfire defense system</p>
              </div>

              <h4 className="font-bold text-white mb-2 text-sm">What's Included:</h4>
              <ul className="space-y-1.5 mb-4">
                {[
                  "3,000-gallon fiberglass tank",
                  "Diesel high-pressure pump system",
                  "Commercial-grade hoses and nozzles",
                  "Professional installation and positioning",
                  "Complete system testing and commissioning",
                  "Operator training and documentation",
                  "First year quarterly maintenance (4 inspections included)",
                  "3-year parts and materials warranty"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-xs text-white/95">
                    <span className="text-yellow-400 mr-2 font-bold flex-shrink-0">✓</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                <h4 className="font-bold text-white mb-2 text-xs">How Payment Works:</h4>
                <ul className="space-y-1 text-xs text-white/90">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>$100 deposit to schedule (secures your installation window)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Balance due after installation and testing complete</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Payment plans available with approved credit</span>
                  </li>
                </ul>
              </div>

              <Link href="/get-protected">
                <Button size="lg" variant="secondary" className="w-full min-h-12 font-bold shadow-lg hover:shadow-xl transition-shadow">
                  Schedule Site Assessment
                </Button>
              </Link>
            </div>

            {/* WildSafe Pro - Coming Soon */}
            <div className="bg-background rounded-xl p-6 lg:p-8 shadow-xl border-2 border-border hover:border-primary/30 transition-colors">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                COMING SOON
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">WildSafe Pro</h3>
                <div className="text-2xl font-bold text-muted-foreground mb-1">Pricing TBD</div>
                <p className="text-muted-foreground text-sm">Enhanced monitoring and extended service coverage</p>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Premium system configuration with smart monitoring capabilities and comprehensive service plans for maximum peace of mind.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="font-bold text-foreground mb-2 text-xs">Coming features:</p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    <span>Smart monitoring app</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    <span>Enhanced service coverage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    <span>Extended warranty options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    <span>Premium support</span>
                  </li>
                </ul>
              </div>

              <Link href="/get-protected">
                <Button size="lg" variant="outline" className="w-full min-h-12 font-semibold border-2 hover:bg-primary/5">
                  Contact Us to Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-6 bg-primary/5 border-l-4 border-primary rounded-lg p-4 lg:p-5">
            <div className="space-y-2">
              <p className="text-sm text-foreground font-bold flex items-start">
                <span className="text-primary mr-2">💰</span>
                <span>Value Context: Traditional whole-property fire suppression systems cost $50,000-$150,000 and require 6-12 months of installation.</span>
              </p>
              <p className="text-xs text-muted-foreground flex items-start">
                <span className="text-primary mr-2">🛡️</span>
                <span>May qualify for homeowner's insurance discounts. Contact your insurance provider for details on potential premium reductions.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 px-8 bg-background" id="faq">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            Product FAQ
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <FAQAccordion faqs={productFAQs.slice(0, 5)} />
            </div>
            <div>
              <FAQAccordion faqs={productFAQs.slice(5)} />
            </div>
          </div>
        </div>
      </section>

      <HalfPageSplit
        leftContent={
          <div className="max-w-xl text-primary-foreground">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Protect Your Property in 8-14 Weeks
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Schedule a free 30-minute site assessment. Get a detailed proposal with pricing, placement recommendations, and installation timeline the same day.
            </p>
            <Link href="/get-protected">
              <Button size="lg" variant="secondary" className="min-h-12 px-8">
                Schedule Site Assessment
              </Button>
            </Link>
          </div>
        }
        rightImage="/images/new-images/doors-open-landscape.png"
        leftBg="bg-primary"
      />

      <Footer />
    </div>
  );
}
