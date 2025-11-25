import Navigation from "@/components/Navigation";
import ProductHero from "@/components/ProductHero";
import HalfPageSplit from "@/components/HalfPageSplit";
import SpecsGrid from "@/components/SpecsGrid";
import ProductFeatures from "@/components/ProductFeatures";
import HorizontalTimeline from "@/components/HorizontalTimeline";
import PricingCards from "@/components/PricingCards";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Droplet, Clock, Zap, Ruler, Calendar, Rocket, Battery, Sparkles } from "lucide-react";

export default function Product() {
  const productFAQs = [
    {
      question: "How much water?",
      answer: "3,000 gallons. 30 minutes of continuous high-pressure delivery."
    },
    {
      question: "How far does water reach?",
      answer: "Professional nozzles deliver high-pressure jetting up to three stories."
    },
    {
      question: "What if I'm in a rural area without hydrants?",
      answer: "Designed specifically for properties without reliable municipal water. 3,000-gallon stand-alone storage with diesel pump."
    },
    {
      question: "How is it powered?",
      answer: "Diesel pump and engine. No grid connection. Operates during power outages."
    },
    {
      question: "Does it look industrial?",
      answer: "Low-profile fiberglass design. We optimize placement during site assessment."
    },
    {
      question: "Basic vs. Pro?",
      answer: "Same core protection. Pro adds smart monitoring (coming soon) and service plan."
    },
    {
      question: "What maintenance?",
      answer: "Quarterly checks. Annual professional service recommended. Similar to generator upkeep."
    },
    {
      question: "Can it be installed on slopes?",
      answer: "Yes. Site assessment determines optimal placement."
    }
  ];

  return (
    <div>
      <Navigation />

      <ProductHero
        headline="De-Wildfire Tank"
        tagline="Engineered for independence. Built for California conditions."
      />

      <HalfPageSplit
        leftContent={
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Self-contained water storage and high-pressure pumping system for perimeter defense during wildfire events.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Diesel-powered pump draws from a 3,000-gallon fiberglass tank, delivering 30 minutes of continuous high-pressure water through commercial-grade hoses. Operates independently of electrical grids and municipal water—the two systems most likely to fail during emergencies.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Three-story reach protects rooftops, tall trees, and multi-level structures.
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
            label: "gallons"
          },
          {
            icon: <Clock className="w-12 h-12" />,
            value: "30",
            label: "minutes runtime"
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
            value: "60",
            label: "days install"
          }
        ]}
        ctaText="Download Complete Spec Sheet"
        ctaLink="#download"
      />

      <ProductFeatures
        sectionTitle="Why De-Wildfire Tank"
        subtitle="Built for California's toughest conditions"
        features={[
          {
            icon: <Rocket className="w-8 h-8" />,
            label: "FAST",
            headline: "No Permits. Installed in 60 Days.",
            description: "Qualifies for California's accessory structure exemption. No building permits. No planning approvals. Traditional systems take 6+ months and require extensive permitting."
          },
          {
            icon: <Battery className="w-8 h-8" />,
            label: "OFF-GRID",
            headline: "Works When Infrastructure Fails",
            description: "Diesel-powered system delivers 30 minutes of sustained high-pressure water independent of the grid and municipal supply. Your defense continues operating when power goes out."
          },
          {
            icon: <Sparkles className="w-8 h-8" />,
            label: "INTEGRATED",
            headline: "Designed to Blend",
            description: "Fiberglass construction with concealed placement optimized during site assessment. Maximize protection while minimizing visual impact."
          }
        ]}
      />

      <HorizontalTimeline
        title="60-Day Process"
        steps={[
          {
            label: "Weeks 1-2",
            description: "Order & Fabrication"
          },
          {
            label: "Weeks 3-4",
            description: "Pre-Delivery Coordination"
          },
          {
            label: "Weeks 5-7",
            description: "Delivery & Installation"
          },
          {
            label: "Week 8",
            description: "Testing & Training"
          }
        ]}
      />

      <PricingCards
        sectionTitle="Two Configurations"
        plans={[
          {
            name: "Wildfire Basic",
            price: "$25,000",
            description: "Complete protection system",
            features: [
              "3,000-gallon fiberglass tank",
              "Diesel high-pressure pump",
              "Commercial hoses and nozzles",
              "Complete installation",
              "Testing and training",
              "60-day guarantee"
            ],
            ctaText: "Get Custom Quote",
            ctaLink: "/get-protected",
            highlighted: false
          },
          {
            name: "Wildfire Pro",
            price: "$35,000+",
            description: "Enhanced monitoring and support",
            features: [
              "Everything in Basic",
              "Smart monitoring app (Coming Soon)",
              "Service plan",
              "Premium support",
              "Priority installation",
              "Extended warranty"
            ],
            ctaText: "Get Custom Quote",
            ctaLink: "/get-protected",
            highlighted: true
          }
        ]}
        note="Financing available. Many insurers offer premium reductions."
      />

      <section className="py-20 lg:py-32 px-8 bg-background" id="faq">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            Product FAQ
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <FAQAccordion faqs={productFAQs.slice(0, 4)} />
            </div>
            <div>
              <FAQAccordion faqs={productFAQs.slice(4)} />
            </div>
          </div>
        </div>
      </section>

      <HalfPageSplit
        leftContent={
          <div className="max-w-xl text-primary-foreground">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Protect Your Property
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Schedule a site assessment. Get a detailed quote the same day.
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
