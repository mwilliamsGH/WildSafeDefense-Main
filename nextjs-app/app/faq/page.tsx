import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQ() {
  const allFAQs = [
    {
      question: "Why no permits?",
      answer: "Qualifies for California's accessory structure exemption (under 120 sq ft, under 8 ft height)."
    },
    {
      question: "How does it work during outages?",
      answer: "Diesel-powered. Operates independently of the electrical grid."
    },
    {
      question: "How long is installation?",
      answer: "60 days from order to operation. We handle everything."
    },
    {
      question: "What does it cost?",
      answer: "Starts at $25,000 including installation, testing, and training."
    },
    {
      question: "What size property?",
      answer: "Any property with 120 square feet of available space."
    },
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

      <div className="relative grid lg:grid-cols-2 min-h-[50vh]">
        <div className="bg-primary flex flex-col justify-center p-8 lg:p-16 py-16 lg:py-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground">
            Everything you need to know about The De-Wildfire Tank
          </p>
        </div>

        <div
          className="bg-cover bg-center relative min-h-[300px] lg:min-h-[50vh]"
          style={{ backgroundImage: `url(/images/Installed_water_tank_on_property_ab96e557.png)` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      <section className="py-16 lg:py-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <FAQAccordion faqs={allFAQs} />
      </section>

      <Footer />
    </div>
  );
}
