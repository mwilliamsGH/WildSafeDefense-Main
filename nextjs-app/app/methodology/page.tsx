import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Sources & Methodology | WildSafe Defense",
  description: "Learn about the data sources and methodology behind WildSafe Defense wildfire risk assessments.",
};

export default function Methodology() {
  return (
    <div>
      <Navigation />

      <main className="bg-background py-16 lg:py-24 px-6 lg:px-8">
        <article className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Data Sources & Methodology
          </h1>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Understanding how we generate wildfire risk assessments
          </p>

          <div className="space-y-8 text-foreground">
            <section className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <p className="leading-relaxed">
                WildSafe Defense wildfire risk reports combine publicly available data, third-party environmental
                datasets, and proprietary analysis to provide informational assessments of wildfire risk for California
                properties.
              </p>
              <p className="leading-relaxed mt-4 text-sm text-muted-foreground">
                <strong>Important:</strong> These reports are informational only and not certified fire engineering
                assessments.{" "}
                <Link href="/disclaimer" className="text-primary hover:underline">
                  See our disclaimer
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Primary Data Sources
              </h2>

              <div className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    1. CAL FIRE Fire Hazard Severity Zones (FHSZ)
                  </h3>
                  <p className="leading-relaxed text-muted-foreground mb-2">
                    Official fire hazard zone classifications from the California Department of Forestry and Fire
                    Protection.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>State Responsibility Area (SRA) zones</li>
                    <li>Local Responsibility Area (LRA) zones</li>
                    <li>Federal Responsibility Area (FRA) zones</li>
                    <li>Very High, High, and Moderate severity classifications</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    2. Parcel Boundaries
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Property parcel data from county assessor offices and public GIS databases to identify specific
                    property locations and boundaries.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    3. Vegetation Data
                  </h3>
                  <p className="leading-relaxed text-muted-foreground mb-2">
                    Vegetation indices and fuel load data from:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>LANDFIRE vegetation and fuel datasets</li>
                    <li>Satellite imagery (NDVI - Normalized Difference Vegetation Index)</li>
                    <li>California vegetation mapping programs</li>
                    <li>Fuel moisture estimates</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    4. Topography & Slope
                  </h3>
                  <p className="leading-relaxed text-muted-foreground mb-2">
                    Terrain analysis using:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>USGS Digital Elevation Models (DEMs)</li>
                    <li>Slope angle and aspect calculations</li>
                    <li>Ridge and valley identification</li>
                    <li>Fire spread direction modeling</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    5. Historical Fire Data
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Past wildfire perimeters and burn severity from CAL FIRE and federal agencies to understand
                    historical fire patterns in the region.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    6. Weather & Climate Data
                  </h3>
                  <p className="leading-relaxed text-muted-foreground mb-2">
                    Long-term weather patterns including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Average wind patterns</li>
                    <li>Precipitation trends</li>
                    <li>Temperature extremes</li>
                    <li>Drought indices</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Risk Scoring Model
              </h2>

              <p className="leading-relaxed mb-4">
                Our proprietary risk scoring model combines multiple data layers to generate a composite wildfire risk
                score for each property. The model considers:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Environmental Factors
                  </h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Fuel load and vegetation density</li>
                    <li>• Terrain and slope steepness</li>
                    <li>• Fire hazard zone classification</li>
                    <li>• Historical fire occurrence</li>
                  </ul>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Location-Specific Factors
                  </h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Distance to recent fires</li>
                    <li>• Proximity to wildland interface</li>
                    <li>• Access and evacuation routes</li>
                    <li>• Regional climate patterns</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <p className="text-sm leading-relaxed text-foreground">
                  <strong>Limitations:</strong> Our risk model is based on static data and does not account for
                  real-time conditions such as current wind, humidity, active fires, or property-specific
                  characteristics like building materials or defensible space implementation. Wildfire behavior is
                  dynamic and influenced by numerous factors beyond the scope of this assessment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Report Generation Process
              </h2>

              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Property Location Identification
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Address is geocoded and matched to parcel boundaries using county assessor data.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Data Layer Overlay
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Multiple geospatial datasets are overlaid on the property location to extract relevant
                      environmental and hazard information.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Risk Calculation
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Proprietary algorithms process the data layers to generate a composite risk score based on
                      weighted factors.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    4
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Report Assembly
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Risk scores, maps, and property-specific data are compiled into an informational PDF report.
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Questions or Feedback?
              </h2>
              <p className="leading-relaxed">
                For questions about our methodology or data sources, contact{" "}
                <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">
                  support@wildsafedefense.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
