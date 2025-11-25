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
            Get Protected in 8-14 Weeks
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8">
            Free site assessment. Custom system design. Same-day detailed proposal.
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

      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What You Get in 30 Minutes
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your site assessment is a 30-minute property evaluation with no pressure and no obligation—just the information you need to make the right decision.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
              <h3 className="font-bold text-foreground mb-3">You'll receive:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comprehensive fire risk assessment for your specific property</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom system placement recommendations optimized for terrain and access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Detailed cost breakdown including installation, training, and warranty</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Realistic installation timeline based on current shipping schedules (currently 8-14 weeks)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Answers to every question about operation, maintenance, and performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="font-bold text-foreground mb-3">Same-day proposal:</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete specifications, pricing, and timeline delivered via email within hours of your assessment.
              </p>
              <div className="mt-4 p-4 bg-background rounded border border-primary/20">
                <p className="text-sm font-semibold text-foreground">
                  We'll contact you within 24 hours to schedule your property evaluation and discuss your specific needs, property access, and installation timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HalfPageSplit
        leftImage="/images/Professional_site_assessment_consultation_a3098bff.png"
        rightContent={
          <div className="max-w-2xl" id="assessment">
            <ContactForm
              title="Schedule Your Free Site Assessment"
              description="We'll contact you within 24 hours to schedule your property evaluation and discuss your specific needs, property access, and installation timeline."
              expectations={[
                "Comprehensive fire risk assessment",
                "Custom system placement recommendations",
                "Detailed cost breakdown with warranty details",
                "Realistic 8-14 week installation timeline",
                "Same-day proposal via email"
              ]}
              submitText="Request Site Assessment"
            />
          </div>
        }
        rightBg="bg-muted"
      />

      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
            What Happens Next
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">We Receive Your Inquiry</h3>
                <p className="text-muted-foreground">
                  You'll get an automatic confirmation email immediately. Our team reviews your information and responds within 24 hours (typically much faster) to schedule your site assessment at a time that works for you.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Site Assessment (30 Minutes)</h3>
                <p className="text-muted-foreground mb-3">
                  On-site property evaluation covering:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Fire risk factors specific to your location and terrain</li>
                  <li>• Optimal system placement for protection and aesthetics</li>
                  <li>• Access requirements for delivery and installation</li>
                  <li>• Custom recommendations for your property's needs</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Proposal (Same Day)</h3>
                <p className="text-muted-foreground mb-3">
                  Detailed specifications and pricing delivered via email within hours:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Complete system breakdown and configuration</li>
                  <li>• Installation timeline based on current shipping schedules</li>
                  <li>• Payment options including financing details</li>
                  <li>• Warranty and maintenance coverage explanation</li>
                  <li>• Next steps for moving forward</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Secure Your Installation Window</h3>
                <p className="text-muted-foreground">
                  $100 deposit locks in your spot in the installation queue. We provide a detailed project timeline with shipping estimates, delivery windows, and installation dates. You'll know exactly when to expect each phase.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Installation (8-14 Weeks)</h3>
                <p className="text-muted-foreground mb-3">
                  We manage every detail:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Tank fabrication and international shipping (8-12 weeks)</li>
                  <li>• Customs and freight logistics</li>
                  <li>• Site preparation and delivery coordination</li>
                  <li>• Professional installation and positioning</li>
                  <li>• System testing and commissioning</li>
                  <li>• Operator training and documentation</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  You stay informed at every step with regular updates on fabrication, shipping, and delivery progress.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  6
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">System Handoff & First Inspection</h3>
                <p className="text-muted-foreground mb-3">
                  Complete operator training session covering:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• System startup and operation procedures</li>
                  <li>• Maintenance requirements and schedules</li>
                  <li>• Safety protocols and emergency operation</li>
                  <li>• Documentation and warranty details</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3 font-semibold">
                  Your first quarterly maintenance inspection (included in purchase) ensures everything is perfect. System is operational and ready to defend your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              We serve high-risk fire zones throughout California, including rural and remote areas where municipal water and grid power are unreliable.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-4">
              Primary Service Regions:
            </h3>

            <ul className="space-y-3 mb-8">
              {[
                'Napa Valley & Wine Country',
                'Sonoma County',
                'Marin County',
                'Santa Barbara & Central Coast',
                'Los Angeles & Ventura Foothills',
                'Lake Tahoe Basin',
                'Sierra Nevada Foothills',
                'San Diego Backcountry'
              ].map((region, index) => (
                <li key={index} className="flex items-center gap-3 text-primary-foreground">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base sm:text-lg">{region}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base text-primary-foreground/80 font-medium mb-4">
              Regional Availability: Contact us to confirm service availability for your specific location. We're continuously expanding to serve more California wildfire zones.
            </p>

            <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg border-l-4 border-primary-foreground">
              <h4 className="font-bold text-primary-foreground mb-2 text-sm">Current Installation Timeline:</h4>
              <p className="text-sm text-primary-foreground/90">
                8-14 weeks from order to operation. Tank fabrication and international shipping currently requires 8-12 weeks. We'll provide your specific timeline after site assessment based on current shipping schedules and your property's installation requirements.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-center relative min-h-[300px] lg:min-h-[70vh]"
          style={{ backgroundImage: `url(/images/Peaceful_protected_California_property_dbc2c389.png)` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-end p-8 lg:p-16">
            <div className="max-w-md">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-4">
                Fire season is predictable. The damage doesn't have to be.
              </p>
              <p className="text-sm text-white/90">
                — WildSafe Defense Team
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
