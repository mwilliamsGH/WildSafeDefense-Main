import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wildfire Risk Report Disclaimer | WildSafe Defense",
  description: "Important disclaimer about WildSafe Defense wildfire risk reports and assessments.",
};

export default function Disclaimer() {
  return (
    <div>
      <Navigation />

      <main className="bg-background py-16 lg:py-24 px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Wildfire Risk Report Disclaimer
          </h1>

          <div className="space-y-6 text-foreground bg-primary/5 border-l-4 border-primary rounded-lg p-8">
            <p className="text-lg leading-relaxed">
              WildSafe Defense wildfire risk reports are <strong>informational summaries only</strong>. They are
              generated using publicly available data, third-party datasets, and proprietary modeling. They are{" "}
              <strong>not</strong> certified fire engineering assessments, insurance evaluations, or guarantees of
              future wildfire outcomes.
            </p>

            <p className="text-lg leading-relaxed">
              Wildfire behavior is influenced by numerous dynamic environmental and structural factors beyond the
              scope of this report.
            </p>

            <p className="text-lg leading-relaxed font-semibold">
              You assume all risk associated with any decisions made using this report.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              For full limitations and responsibilities, see our{" "}
              <Link href="/terms" className="text-primary hover:underline font-medium">
                Terms of Service
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Important Information
            </h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="leading-relaxed">
                  <strong>Not a Guarantee:</strong> Installation of WildSafe Defense does not guarantee prevention of
                  wildfire damage or property survival.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="leading-relaxed">
                  <strong>Professional Advice:</strong> This report is not a substitute for professional fire
                  engineering or mitigation planning.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="leading-relaxed">
                  <strong>Dynamic Conditions:</strong> Wildfire risk factors change based on weather, vegetation,
                  climate, and other variables not reflected in static assessments.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="leading-relaxed">
                  <strong>Insurance:</strong> This report is not an insurance evaluation and does not guarantee
                  premium reductions.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Questions about this disclaimer?{" "}
              <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
