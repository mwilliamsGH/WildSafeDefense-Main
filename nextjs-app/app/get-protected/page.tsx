import Navigation from "@/components/Navigation";
import HalfPageSplit from "@/components/HalfPageSplit";
import ContactForm from "@/components/ContactForm";
import VerticalTimeline from "@/components/VerticalTimeline";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Check } from "lucide-react";

export default function GetProtected() {
  return (
    <div>
      <Navigation />

      <div className="relative grid lg:grid-cols-2 min-h-[50vh]">
        <div className="bg-primary flex flex-col justify-center p-8 lg:p-16 py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Get Protected in 60 Days
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8">
            Free site assessment. Custom system design. Same-day quote.
          </p>
          <div>
            <a href="#assessment">
              <Button size="lg" variant="secondary" className="min-h-12 px-8">
                Schedule Assessment Below
              </Button>
            </a>
          </div>
        </div>

        <div
          className="bg-cover bg-center relative min-h-[300px] lg:min-h-[50vh]"
          style={{ backgroundImage: `url(/images/Panoramic_California_fire_season_landscape_2e27a8a1.png)` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      <HalfPageSplit
        leftImage="/images/Professional_site_assessment_consultation_a3098bff.png"
        rightContent={
          <div className="max-w-2xl" id="assessment">
            <ContactForm
              title="Schedule Your Free Site Assessment"
              description="30-minute property evaluation. We assess fire risk, terrain, and access, then design a system optimized for your needs. Detailed proposal delivered same day."
              expectations={[
                "Property risk evaluation",
                "Custom system recommendation (Basic or Pro)",
                "Detailed pricing proposal",
                "Installation timeline"
              ]}
              submitText="Start My Assessment"
            />
          </div>
        }
        rightBg="bg-muted"
      />

      <VerticalTimeline
        title="What Happens Next"
        steps={[
          {
            title: "Site Assessment (30 min)",
            description: "Property evaluation and system design."
          },
          {
            title: "Proposal (Same Day)",
            description: "Detailed specifications and pricing via email."
          },
          {
            title: "Order Confirmation",
            description: "Sign contract. Lock in 60-day installation window."
          },
          {
            title: "Installation (60 Days)",
            description: "Delivery, positioning, testing, commissioning, training."
          },
          {
            title: "System Handoff",
            description: "Training, documentation. System ready to defend."
          }
        ]}
      />

      <section className="relative grid lg:grid-cols-2 min-h-[70vh]">
        <div className="bg-primary flex flex-col justify-center p-8 lg:p-16 py-16 lg:py-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Service Area
              </h2>
            </div>

            <p className="text-base sm:text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              We serve high-risk fire zones throughout California, including rural and remote areas.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-4">
              Primary Regions:
            </h3>

            <ul className="space-y-3 mb-8">
              {['Napa Valley', 'Sonoma County', 'Marin County', 'Santa Barbara', 'Los Angeles Foothills'].map((region, index) => (
                <li key={index} className="flex items-center gap-3 text-primary-foreground">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base sm:text-lg">{region}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base text-primary-foreground/80 font-medium">
              Contact us to confirm availability for your location.
            </p>
          </div>
        </div>

        <div
          className="bg-cover bg-center relative min-h-[300px] lg:min-h-[70vh]"
          style={{ backgroundImage: `url(/images/Peaceful_protected_California_property_dbc2c389.png)` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-end p-8 lg:p-16">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-md">
              Fire season is predictable. Damage doesn't have to be.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
