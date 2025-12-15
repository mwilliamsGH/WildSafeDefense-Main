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
                WildSafe Defense wildfire risk reports combine publicly available data, third-party environmental datasets, and proprietary analysis to provide informational assessments of wildfire risk for California properties.
              </p>
              <p className="leading-relaxed mt-4 text-sm text-muted-foreground">
                <strong>Important:</strong> These reports are informational only and are NOT certified fire engineering assessments.{" "}
                <Link href="/disclaimer" className="text-primary hover:underline">
                  See our Wildfire Risk Report Disclaimer
                </Link>
                {" "}for full limitations.
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
                  <p className="leading-relaxed mb-2">
                    Official fire hazard zone classifications from the California Department of Forestry and Fire Protection (CAL FIRE), which are the legal basis for wildfire hazard identification in California:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>State Responsibility Area (SRA) zones:</strong> Areas where CAL FIRE has primary firefighting responsibility</li>
                    <li><strong>Local Responsibility Area (LRA) zones:</strong> Areas where local fire departments have primary responsibility</li>
                    <li><strong>Federal Responsibility Area (FRA) zones:</strong> Federal lands where federal agencies have firefighting jurisdiction</li>
                    <li><strong>Severity Classifications:</strong> Very High, High, and Moderate fire hazard severity ratings. FHSZ maps are updated periodically by CAL FIRE and reflect an assessment of fuels, terrain, weather patterns, and other factors.</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    2. Parcel Boundaries and Property Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    Property parcel data from county assessor offices and public GIS databases to accurately identify specific property locations and boundaries. This data includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Parcel geometry and boundaries</li>
                    <li>Assessor Parcel Number (APN)</li>
                    <li>Property address and location</li>
                    <li>Lot size and acreage</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    3. Vegetation and Fuel Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    Vegetation indices and fuel load data from multiple authoritative sources:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>LANDFIRE:</strong> Landscape Fire and Resource Management Planning Tools vegetation and fuel datasets</li>
                    <li><strong>Satellite Imagery:</strong> Normalized Difference Vegetation Index (NDVI) derived from Landsat and Sentinel satellites</li>
                    <li><strong>California Vegetation Mapping:</strong> CalVeg and other state vegetation classification programs</li>
                    <li><strong>Fuel Moisture:</strong> Live and dead fuel moisture estimates where available</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    4. Topography and Terrain Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    Terrain analysis is critical for understanding fire behavior, as fire spreads faster uphill. We use:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>USGS Digital Elevation Models (DEMs):</strong> High-resolution elevation data</li>
                    <li><strong>Slope Analysis:</strong> Slope angle and steepness calculations</li>
                    <li><strong>Aspect:</strong> Directional orientation of slopes (south-facing slopes are generally drier)</li>
                    <li><strong>Terrain Features:</strong> Ridge and valley identification for fire spread modeling</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    5. Historical Fire Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    Past wildfire perimeters and burn severity from CAL FIRE, USGS, and federal agencies to understand historical fire patterns:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Historical fire perimeters and boundaries</li>
                    <li>Fire occurrence frequency by region</li>
                    <li>Burn severity and fire intensity data</li>
                    <li>Time since last fire in surrounding areas</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    6. Weather and Climate Data
                  </h3>
                  <p className="leading-relaxed mb-2">
                    Long-term weather patterns and climate data that influence wildfire risk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Average wind patterns and prevailing wind directions</li>
                    <li>Precipitation trends and seasonal patterns</li>
                    <li>Temperature extremes and heat wave frequency</li>
                    <li>Drought indices (Palmer Drought Severity Index, etc.)</li>
                    <li>Red Flag Warning and fire weather event history</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Risk Scoring Methodology
              </h2>

              <p className="leading-relaxed mb-4">
                Our proprietary risk scoring model combines multiple data layers to generate a composite wildfire risk score for each property. The model weighs and integrates the following factor categories:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Environmental Factors
                  </h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Fuel load, vegetation type, and vegetation density</li>
                    <li>• Terrain steepness, slope, and aspect</li>
                    <li>• Official Fire Hazard Severity Zone classification</li>
                    <li>• Historical fire occurrence in the surrounding region</li>
                  </ul>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Location-Specific Factors
                  </h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Distance to recent fires and fire perimeters</li>
                    <li>• Proximity to Wildland-Urban Interface (WUI)</li>
                    <li>• Access and evacuation route considerations</li>
                    <li>• Regional climate and weather patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Model Limitations
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <p className="text-sm leading-relaxed mb-2">
                  Our risk model has inherent limitations that users should understand:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed">
                  <li>Based on static data snapshots and does not reflect real-time conditions</li>
                  <li>Does not account for current wind, humidity, temperature, or active fires</li>
                  <li>Does not evaluate property-specific characteristics (building materials, roof type, vents, defensible space implementation)</li>
                  <li>Cannot predict fire ignition locations or human-caused fires</li>
                  <li>Does not assess emergency response capabilities or fire suppression resources</li>
                  <li>Wildfire behavior is inherently dynamic and influenced by numerous factors beyond any assessment's scope</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Report Generation Process
              </h2>

              <p className="leading-relaxed mb-4">
                Our reports are generated through the following automated process:
              </p>

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
                      The provided address is geocoded and matched to parcel boundaries using county assessor data and geospatial databases.
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
                      Multiple geospatial datasets are overlaid on the property location to extract relevant environmental, hazard, and contextual information.
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
                      Proprietary algorithms process the data layers to generate composite risk scores based on weighted factors and validated models.
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
                      Risk scores, maps, contextual data, and property-specific information are compiled into a comprehensive informational report available in both web-based and downloadable PDF formats.
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Data Currency and Updates
              </h2>
              <p className="leading-relaxed mb-2">
                We strive to use the most current data available, but data currency varies by source:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>CAL FIRE FHSZ maps are updated periodically by the state</li>
                <li>Satellite imagery and vegetation data are typically updated seasonally or annually</li>
                <li>Parcel data is updated as counties publish new assessor information</li>
                <li>Historical fire data is updated as new fire perimeters are finalized</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Questions or Feedback
              </h2>
              <p className="leading-relaxed">
                For questions about our methodology, data sources, or report generation process, please contact us at{" "}
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
