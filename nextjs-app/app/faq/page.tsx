import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQ() {
  const allFAQs = [
    {
      question: "Why no permits required?",
      answer: "The WildSafe Tank qualifies for California's accessory structure exemption under Section 17 of the California Building Code. Because the system is under 120 square feet in footprint and below 8 feet in height, it requires no building permits or planning approval. This exemption is specifically designed to allow property owners to add essential protective infrastructure quickly—exactly what you need for wildfire defense. Traditional systems often require months of permitting; the WildSafe Tank bypasses this entirely."
    },
    {
      question: "How does it work during power outages?",
      answer: "The diesel-powered pump operates independently of the electrical grid. When power fails—which often happens during wildfire events due to intentional shut-offs or infrastructure damage—your system continues delivering high-pressure water without interruption. No grid connection means no vulnerability to power failures. The diesel engine provides reliable operation exactly when you need it most."
    },
    {
      question: "How long is installation?",
      answer: "8-14 weeks from order to operation in most cases. Here's the timeline breakdown: Tank fabrication and international shipping: 8-12 weeks. Delivery coordination and site preparation: 1-2 weeks. Installation, testing, and training: 1 week. We handle all logistics and keep you updated throughout the process. Your specific timeline will be confirmed after site assessment based on current shipping schedules. Traditional systems take 6-12 months due to permitting and complex installation requirements."
    },
    {
      question: "What does it cost?",
      answer: "$21,500 including everything you need: Complete system (tank, pump, hoses, all hardware), professional installation and positioning, system testing and commissioning, operator training and documentation, first-year quarterly maintenance (4 inspections), and 3-year parts and materials warranty. Payment structure: $100 deposit secures your installation window. Balance due after installation complete. Payment plans available with approved credit. May qualify for homeowner's insurance discounts—contact your insurance provider for details."
    },
    {
      question: "What size property do I need?",
      answer: "Any property with 120 square feet of available space and accessible terrain for delivery and installation. The system footprint is compact—roughly equivalent to a large garden shed. During your site assessment, we evaluate placement options based on fire risk, terrain, access, and aesthetics. Most residential properties in wildfire zones can accommodate the WildSafe Tank."
    },
    {
      question: "How much water does it hold?",
      answer: "3,000 gallons providing 30 minutes of continuous high-pressure delivery at professional flow rates. That's enough capacity to defend your roof, perimeter, and critical structures during the most dangerous phase of a wildfire event when embers are landing and flames are approaching. The system delivers water comparable to fire department equipment, giving you the tools to actively defend your property."
    },
    {
      question: "How far does the water reach?",
      answer: "Professional-grade nozzles deliver high-pressure water streams up to three stories vertically, protecting tall structures, rooftops, and trees near your home. Horizontal reach varies based on nozzle selection and pressure settings—typically 30-50 feet for effective firefighting. We optimize configuration during installation based on your property's specific layout and protection requirements."
    },
    {
      question: "What if I'm in a rural area without fire hydrants?",
      answer: "The WildSafe Tank is designed specifically for properties without reliable municipal water access. You get 3,000 gallons of dedicated on-site storage with a diesel-powered pump that operates completely independently. No hydrants needed. No municipal connection required. No dependence on water systems that may fail or provide insufficient pressure during emergencies. Your water supply is on-site, dedicated to your property, and always available."
    },
    {
      question: "How is the system powered?",
      answer: "Diesel pump and engine with no grid connection required. The system operates during power outages, which commonly occur during wildfire events due to Public Safety Power Shutoffs or infrastructure damage. Diesel fuel provides reliable, long-term storage capability unlike gasoline, which degrades faster. You maintain a simple fuel supply just like a backup generator—straightforward and dependable."
    },
    {
      question: "Does it look industrial on my property?",
      answer: "Low-profile fiberglass design with neutral finish minimizes visual impact. The system stays below 8 feet in height and uses approximately 120 square feet—similar footprint to a large garden shed. During your site assessment, we evaluate multiple placement options to optimize both fire protection and aesthetics. Most installations blend naturally into landscaping, behind structures, or in areas where they're functionally positioned but visually concealed. We work with your property's existing layout to integrate the system thoughtfully."
    },
    {
      question: "What's the difference between the base system and Pro?",
      answer: "Currently, we offer the WildSafe Tank base system at $21,500, which includes complete protection, installation, training, first-year maintenance (4 quarterly inspections), and a 3-year parts warranty. This is a comprehensive turnkey solution that delivers everything you need for active wildfire defense. WildSafe Pro is under development and will add smart monitoring capabilities, enhanced service coverage, extended warranty options, and premium support features. Contact us to learn about Pro features and availability timeline."
    },
    {
      question: "What maintenance does the system require?",
      answer: "Quarterly maintenance checks are straightforward and similar to maintaining a generator or other mechanical equipment: diesel pump function and fuel quality inspection, engine performance and oil level checks, hose integrity and connection security verification, tank condition and water quality assessment, and system pressure testing. First year: Four quarterly professional inspections included in your purchase price at no additional cost. After year one: Continue with an annual service agreement for ongoing professional maintenance (pricing details provided during first-year service), or opt to maintain the system yourself using our comprehensive training and documentation. Service agreement maintains full 3-year warranty coverage; self-maintenance is permitted but shifts operational responsibility to you."
    },
    {
      question: "Can it be installed on slopes or difficult terrain?",
      answer: "Yes. Site assessment determines optimal placement based on your specific terrain, access constraints, and protection needs. We've successfully installed systems on hillsides, slopes, and properties with challenging access conditions. Delivery and positioning logistics are carefully planned during the assessment phase to ensure feasible installation. In some cases, site preparation (grading, access improvement) may be required—we identify any special requirements during assessment and include them in your proposal."
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
            Everything you need to know about the WildSafe Tank
          </p>
        </div>

        <div
          className="bg-cover bg-center relative min-h-[300px] lg:min-h-[50vh]"
          style={{ backgroundImage: `url(/images/new-images/full-system-roof.png)` }}
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
