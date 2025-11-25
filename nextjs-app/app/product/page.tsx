import Navigation from "@/components/Navigation";
import ProductHero from "@/components/ProductHero";
import HalfPageSplit from "@/components/HalfPageSplit";
import SpecsGrid from "@/components/SpecsGrid";
import ProductFeatures from "@/components/ProductFeatures";
import HorizontalTimeline from "@/components/HorizontalTimeline";
import PricingCards from "@/components/PricingCards";
import WarrantySection from "@/components/WarrantySection";
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
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6 italic">
              Picture this: It's 2 AM. Winds shift. Fire jumps the ridge. Power's out across the valley. Water pressure drops to nothing. But your diesel pump kicks on, drawing from 3,000 gallons that are always there, always ready.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 italic">
              For 30 minutes, you have high-pressure water reaching every vulnerable point—your roof, your perimeter, the tall trees near your home. That's the difference between watching your house burn and having the tools to defend it.
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
              Technical Overview
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              The WildSafe Tank is a self-contained water storage and high-pressure pumping system for perimeter defense during wildfire events.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              The diesel-powered pump draws from a 3,000-gallon fiberglass tank, delivering 30 minutes of continuous high-pressure water through commercial-grade hoses. The system operates independently of electrical grids and municipal water—the two systems most likely to fail during emergencies.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Three-story reach protects rooftops, tall trees, and multi-level structures. When infrastructure fails, your defense continues.
            </p>
            <Link href="/get-protected">
              <Button size="lg" className="w-full sm:w-auto min-h-12 px-8">
                Get Protected Today
              </Button>
            </Link>
          </div>
        }
        rightImage="/images/High_pressure_water_stream_closeup_fc5b905f.png"
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
            description: "Qualifies for California's accessory structure exemption. No building permits. No planning approvals. No foundation requirements. Traditional systems take 6-12 months and require extensive permitting and utility connections. We deliver, install, test, and train—while others are still in the approval process."
          },
          {
            icon: <Battery className="w-8 h-8" />,
            label: "OFF-GRID",
            headline: "Works When Infrastructure Fails",
            description: "Diesel-powered system delivers 30 minutes of sustained high-pressure water independent of the grid and municipal supply. During wildfire events, power fails and water pressure drops. Your defense continues operating when everything else stops. No grid connection means no vulnerability."
          },
          {
            icon: <Sparkles className="w-8 h-8" />,
            label: "INTEGRATED",
            headline: "Designed to Blend",
            description: "Low-profile fiberglass construction with concealed placement optimized during your site assessment. We maximize protection while minimizing visual impact. Professional installation ensures the system integrates naturally into your property's landscape."
          }
        ]}
      />

      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Installation Process*
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-foreground mb-2">Weeks 1-2</h3>
              <p className="text-sm text-muted-foreground">Order & Fabrication</p>
              <p className="text-xs text-muted-foreground mt-2">Tank fabrication begins immediately upon order confirmation. Your $100 deposit secures your installation window.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-foreground mb-2">Weeks 3-10</h3>
              <p className="text-sm text-muted-foreground">International Shipping</p>
              <p className="text-xs text-muted-foreground mt-2">Tank ships internationally (currently 8-12 weeks). We coordinate customs, freight, and delivery logistics while keeping you updated.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-foreground mb-2">Weeks 11-12</h3>
              <p className="text-sm text-muted-foreground">Pre-Delivery Coordination</p>
              <p className="text-xs text-muted-foreground mt-2">Site preparation, access verification, and delivery scheduling. We confirm optimal placement based on your site assessment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-foreground mb-2">Weeks 13-14</h3>
              <p className="text-sm text-muted-foreground">Installation & Testing</p>
              <p className="text-xs text-muted-foreground mt-2">Delivery, positioning, pump installation, system testing, and operator training. Complete handoff with documentation.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg border-l-4 border-primary">
            <h3 className="font-bold text-foreground mb-2">Shipping & Installation Timeline Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              *Installation timelines are estimates based on current shipping conditions. International tank shipment currently requires 8-12 weeks. Total project timeline typically ranges from 8-14 weeks but may vary based on shipping logistics and site-specific factors. Detailed schedule provided after site assessment and order confirmation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Protection That Fits Your Budget
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* WildSafe Tank */}
            <div className="bg-background rounded-lg p-8 shadow-lg border-2 border-primary">
              <h3 className="text-2xl font-bold text-foreground mb-2">WildSafe Tank</h3>
              <div className="text-4xl font-bold text-primary mb-2">$21,500</div>
              <p className="text-muted-foreground mb-6">Complete wildfire defense system</p>

              <h4 className="font-bold text-foreground mb-3">What's Included:</h4>
              <ul className="space-y-2 mb-6">
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
                  <li key={i} className="flex items-start text-sm text-muted-foreground">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-4 mb-4">
                <h4 className="font-bold text-foreground mb-2">How Payment Works:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• $100 deposit to schedule (secures your installation window)</li>
                  <li>• Balance due after installation and testing complete</li>
                  <li>• Payment plans available with approved credit</li>
                </ul>
              </div>

              <Link href="/get-protected">
                <Button size="lg" className="w-full min-h-12">
                  Schedule Site Assessment
                </Button>
              </Link>
            </div>

            {/* WildSafe Pro */}
            <div className="bg-background rounded-lg p-8 shadow-lg border border-border opacity-90">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                COMING SOON
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">WildSafe Pro</h3>
              <div className="text-2xl font-bold text-muted-foreground mb-2">Pricing TBD</div>
              <p className="text-muted-foreground mb-6">Enhanced monitoring and extended service coverage</p>

              <p className="text-sm text-muted-foreground mb-6">
                Premium system configuration with smart monitoring capabilities and comprehensive service plans for maximum peace of mind.
              </p>

              <div className="mb-6 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">Coming features:</p>
                <ul className="space-y-1">
                  <li>• Smart monitoring app</li>
                  <li>• Enhanced service coverage</li>
                  <li>• Extended warranty options</li>
                  <li>• Premium support</li>
                </ul>
              </div>

              <Link href="/get-protected">
                <Button size="lg" variant="outline" className="w-full min-h-12">
                  Contact Us to Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-muted-foreground font-semibold">
              Value Context: Traditional whole-property fire suppression systems cost $50,000-$150,000 and require 6-12 months of installation.
            </p>
            <p className="text-sm text-muted-foreground">
              May qualify for homeowner's insurance discounts. Contact your insurance provider for details on potential premium reductions.
            </p>
          </div>
        </div>
      </section>

      <WarrantySection />

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
        rightImage="/images/Complete_wildfire_defense_system_installation_42927234.png"
        leftBg="bg-primary"
      />

      <Footer />
    </div>
  );
}
