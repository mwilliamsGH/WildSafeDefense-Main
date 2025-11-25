import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyActiveDefense from "@/components/WhyActiveDefense";
import FeatureGrid from "@/components/FeatureGrid";
import FAQSnapshot from "@/components/FAQSnapshot";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function calculateDaysUntilFireSeason() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const juneFirst = new Date(currentYear, 5, 1); // June 1 (month is 0-indexed)

  if (today > juneFirst) {
    juneFirst.setFullYear(currentYear + 1);
  }

  const diffTime = juneFirst.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export default function Home() {
  const daysUntilFireSeason = calculateDaysUntilFireSeason();

  const faqs = [
    {
      question: "Why no permits?",
      answer:
        "The WildSafe Tank qualifies for California's accessory structure exemption under Section 17 of the California Building Code. Because it's under 120 square feet and below 8 feet in height, it requires no building permits or planning approval. This exemption is designed to allow property owners to add essential protective infrastructure quickly.",
    },
    {
      question: "How does it work during outages?",
      answer: "The diesel-powered pump operates independently of the electrical grid. When power fails—which often happens during wildfire events—your system continues delivering high-pressure water. No grid connection means no vulnerability to infrastructure failure.",
    },
    {
      question: "How long is installation?",
      answer: "8-14 weeks from order to operation in most cases. Tank fabrication and international shipping requires 8-12 weeks, followed by 1-2 weeks for delivery coordination and site prep, then final installation and testing. We handle all logistics and keep you updated throughout.",
    },
    {
      question: "What does it cost?",
      answer:
        "$21,500 including everything—tank, pump, installation, testing, training, first-year quarterly maintenance (4 inspections), and a 3-year parts warranty. $100 deposit secures your installation window. Balance due after installation complete. Payment plans available.",
    },
    {
      question: "What size property?",
      answer: "Any property with 120 square feet of available space and accessible terrain for delivery and installation. Site assessment determines optimal placement.",
    },
  ];

  return (
    <div>
      <Navigation />

      <HeroSection
        backgroundImage="/images/California_hillside_home_golden_hour_d389558d.png"
        headline="Wildfire Defense For California Homes"
        subheadline="When fire threatens your home, you need water you control and power that doesn't fail. The WildSafe Tank delivers 3,000 gallons of diesel-powered protection—operational in 8-14 weeks with no permits required."
        primaryCTA="Schedule Site Assessment"
        primaryCTALink="/get-protected"
        secondaryCTA="See How It Works"
        secondaryCTALink="/product"
      />

      <WhyActiveDefense
        backgroundImage="/images/Installed_water_tank_on_property_ab96e557.png"
        headline="Why Active Defense?"
        bodyText="Fire crews can't be everywhere. Municipal water systems fail under pressure. Power goes out when you need it most. You need active defense—water you control, power that doesn't fail, protection that doesn't depend on anyone else.

Most California properties complete fire-resistant materials and defensible space clearing, then stop. But those are passive measures—they reduce risk but can't actively fight flames. When embers land on your roof or fire reaches your perimeter, you need the third layer: active water defense you control."
        ctaText="Learn About Your Wildfire Risk"
        ctaLink="/product"
      />

      <FeatureGrid
        sectionTitle="Your Private Fire Defense System"
        subtitle="The WildSafe Tank: Water you control. Power that doesn't fail. Protection that doesn't wait."
        features={[
          {
            title: "Fast Installation",
            stat: "8-14 Weeks",
            description:
              "No permits. No foundation. No utility connections. Delivered, installed, operational in 8-14 weeks while traditional systems take 6+ months.",
            backgroundImage: "/images/Installed_water_tank_on_property_ab96e557.png",
            overlayColor: "dark",
          },
          {
            title: "Diesel-Powered",
            stat: "Independence",
            description:
              "Off-grid operation. Zero dependence on electrical grid or municipal water. Works when infrastructure fails.",
            backgroundImage: "/images/High_pressure_water_stream_closeup_fc5b905f.png",
            overlayColor: "black",
          },
          {
            title: "30 Minutes of Defense",
            stat: "Performance",
            description:
              "3,000 gallons. High-pressure pump. Three-story reach. Sustained water delivery when every minute counts.",
            backgroundImage: "/images/High_pressure_water_stream_closeup_fc5b905f.png",
            overlayColor: "dark",
          },
          {
            title: "Built to Blend",
            stat: "Design",
            description:
              "Concealed fiberglass design integrates into your landscape. Professional installation optimizes placement for protection and aesthetics.",
            backgroundImage: "/images/Installed_water_tank_on_property_ab96e557.png",
            overlayColor: "dark",
          },
        ]}
      />

      <FAQSnapshot
        sectionTitle="Common Questions"
        faqs={faqs}
        ctaText="See All Questions"
        ctaLink="/faq"
        backgroundImage="/images/Installed_water_tank_on_property_ab96e557.png"
      />

      <ComparisonTable />

      <CTASection
        backgroundImage="/images/Dramatic_fire_season_sky_silhouette_e0dae641.png"
        statValue={daysUntilFireSeason.toString()}
        statLabel="Days Until Fire Season"
        headline="Fire Season Starts Soon"
        bodyText="Traditional systems take 6-12 months. Order today, get protected in 8-14 weeks. Every week counts."
        ctaText="Schedule Site Assessment"
        ctaLink="/get-protected"
      />

      <Footer />
    </div>
  );
}
