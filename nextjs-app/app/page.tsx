import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyActiveDefense from "@/components/WhyActiveDefense";
import FeatureGrid from "@/components/FeatureGrid";
import FAQSnapshot from "@/components/FAQSnapshot";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function calculateDaysUntilJuly() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const julyFirst = new Date(currentYear, 6, 1);

  if (today > julyFirst) {
    julyFirst.setFullYear(currentYear + 1);
  }

  const diffTime = julyFirst.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export default function Home() {
  const daysUntilJuly = calculateDaysUntilJuly();

  const faqs = [
    {
      question: "Why no permits?",
      answer:
        "Qualifies for California's accessory structure exemption (under 120 sq ft, under 8 ft height).",
    },
    {
      question: "How does it work during outages?",
      answer: "Diesel-powered. Operates independently of the electrical grid.",
    },
    {
      question: "How long is installation?",
      answer: "60 days from order to operation. We handle everything.",
    },
    {
      question: "What does it cost?",
      answer:
        "Starts at $25,000 including installation, testing, and training.",
    },
    {
      question: "What size property?",
      answer: "Any property with 120 square feet of available space.",
    },
  ];

  return (
    <div>
      <Navigation />

      <HeroSection
        backgroundImage="/images/California_hillside_home_golden_hour_d389558d.png"
        headline="Wildfire Defense For California Homes"
        subheadline="Self-contained water tank and pump system for wildfire defense. Diesel-powered, off-grid, and operational in 60 days—no permits required."
        primaryCTA="Schedule Site Assessment"
        primaryCTALink="/get-protected"
        secondaryCTA="See How It Works"
        secondaryCTALink="/product"
      />

      <WhyActiveDefense
        backgroundImage="/images/Installed_water_tank_on_property_ab96e557.png"
        headline="Why Active Defense?"
        bodyText="Fire crews can't be everywhere. Municipal water systems fail under pressure. Power goes out. You need active defense—water you control, power that doesn't fail, protection that doesn't depend on anyone else."
        ctaText="Learn About Your Wildfire Risk"
        ctaLink="/product"
      />

      <FeatureGrid
        sectionTitle="Your Private Fire Defense System"
        subtitle="Water you control. Power that doesn't fail. Protection that doesn't wait."
        features={[
          {
            title: "60-Day Installation",
            stat: "Speed",
            description:
              "No permits. No foundation. No utility connections. Delivered, installed, operational in 60 days.",
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
              "Concealed design integrates into your landscape. Professional installation optimizes placement for protection and aesthetics.",
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

      <CTASection
        backgroundImage="/images/Dramatic_fire_season_sky_silhouette_e0dae641.png"
        statValue={daysUntilJuly.toString()}
        statLabel="Days"
        headline="Fire Season Starts Soon"
        bodyText="Traditional systems take 6 months. Order today → protected in 60 days."
        ctaText="Schedule Site Assessment"
        ctaLink="/get-protected"
      />

      <Footer />
    </div>
  );
}
