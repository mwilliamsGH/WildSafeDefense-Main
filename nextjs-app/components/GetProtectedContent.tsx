"use client";

import { useSearchParams } from "next/navigation";
import HalfPageSplit from "@/components/HalfPageSplit";
import GoHighLevelForm from "@/components/GoHighLevelForm";
import { Button } from "@/components/ui/button";
import { MapPin, Check } from "lucide-react";
import { sanitizePropertyId } from "@/lib/utils";

export default function GetProtectedContent() {
  const searchParams = useSearchParams();
  const rawPropertyId = searchParams.get("pid");
  const propertyId = sanitizePropertyId(rawPropertyId) || undefined;

  return (
    <>
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
          style={{ backgroundImage: `url(/images/new-images/tank-beside-house.png)` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      <HalfPageSplit
        leftImage="/images/new-images/doors-open-house.png"
        rightContent={
          <div className="max-w-2xl" id="assessment">
            <GoHighLevelForm
              title="Schedule Your Free Site Assessment"
              description="We'll contact you within 24 hours to schedule your property evaluation and discuss your specific needs, property access, and installation timeline."
              propertyId={propertyId}
            />
          </div>
        }
        rightBg="bg-muted"
      />

      <section className="py-16 lg:py-24 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4">
              YOUR PROTECTION JOURNEY
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              From Assessment to Installation
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              30-minute site visit to operational system in 8-14 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Site Assessment</h3>
              <p className="text-sm text-muted-foreground mb-3">
                30-minute property evaluation covering fire risk, system placement, and access requirements.
              </p>
              <p className="text-xs text-muted-foreground font-semibold">
                Same-day proposal with pricing and timeline
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl border-2 border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Order & Fabrication</h3>
              <p className="text-sm text-muted-foreground mb-3">
                $100 deposit secures your installation window. We handle tank fabrication, international shipping, and logistics.
              </p>
              <p className="text-xs text-muted-foreground font-semibold">
                8-14 weeks with regular progress updates
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Install & Train</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Professional installation, system testing, and complete operator training.
              </p>
              <p className="text-xs text-muted-foreground font-semibold">
                First quarterly inspection included
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-8 lg:p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">What You'll Receive:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 font-bold">✓</span>
                    <span>Fire risk assessment for your property</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 font-bold">✓</span>
                    <span>Custom placement recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 font-bold">✓</span>
                    <span>Complete cost breakdown and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 font-bold">✓</span>
                    <span>Professional installation and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 font-bold">✓</span>
                    <span>3-year warranty and first-year maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                <p className="text-sm mb-4 text-white/90">
                  Contact within 24 hours to schedule your assessment. Same-day proposal after site visit.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-xs font-semibold">
                    No pressure. No obligation. Just the information you need to protect your property.
                  </p>
                </div>
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
          style={{ backgroundImage: `url(/images/new-images/doors-closed-house.png)` }}
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
    </>
  );
}
