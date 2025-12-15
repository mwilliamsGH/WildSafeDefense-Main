import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | WildSafe Defense",
  description: "Terms of Service for WildSafe Defense. Learn about the terms governing your use of our services.",
};

export default function Terms() {
  return (
    <div>
      <Navigation />

      <main className="bg-background py-16 lg:py-24 px-6 lg:px-8">
        <article className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>

          <p className="text-sm text-muted-foreground mb-12">
            Last Updated: December 15, 2025
          </p>

          <div className="space-y-8 text-foreground">
            <p className="leading-relaxed">
              Welcome to WildSafe Defense. These Terms govern your use of wildsafedefense.com,
              reports.wildsafedefense.com, and all related wildfire risk Services (the "Services") provided by{" "}
              <strong>OFA Group</strong>.
            </p>

            <p className="leading-relaxed font-semibold">
              By accessing or using the Services, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                1. Informational Purpose Only
              </h2>
              <p className="leading-relaxed mb-4">
                Wildfire risk reports, hazard scores, summaries, maps, and all related content are informational.
              </p>
              <p className="leading-relaxed mb-2">
                They are not:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>engineering assessments</li>
                <li>fire protection guarantees</li>
                <li>insurance evaluations</li>
                <li>substitute for professional inspection or mitigation plans</li>
              </ul>
              <p className="leading-relaxed">
                We make no guarantee that our assessments reflect actual future fire behavior or risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                2. No Guarantee of Protection
              </h2>
              <p className="leading-relaxed mb-2">
                Installing WildSafe Defense or following recommendations does not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>prevention of wildfire damage</li>
                <li>property survival</li>
                <li>reduced insurance premiums</li>
              </ul>
              <p className="leading-relaxed">
                Wildfire behavior is unpredictable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                3. User Responsibilities
              </h2>
              <p className="leading-relaxed mb-2">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>misuse the Site</li>
                <li>scrape or harvest report data</li>
                <li>redistribute our risk scoring system without permission</li>
                <li>reverse engineer the report generation methods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                4. Intellectual Property
              </h2>
              <p className="leading-relaxed mb-4">
                All reports, graphics, text, images, and scoring models are the property of{" "}
                <strong>OFA Group</strong>.
              </p>
              <p className="leading-relaxed">
                You may download your report for personal use only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed mb-2">
                To the fullest extent allowed by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>We are not liable for property loss, damages, or misinterpretation of report data.</li>
                <li>We are not liable for decisions made using our reports.</li>
                <li>Total liability will not exceed the amount you paid to access the Services (typically $0).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                6. Third-Party Services
              </h2>
              <p className="leading-relaxed">
                The Services integrate with Google Analytics, GoHighLevel, and other third-party systems. Their terms
                apply independently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                7. Modification of Terms
              </h2>
              <p className="leading-relaxed">
                We may update these Terms at any time. Continued use constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                8. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of <strong>California, United States</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                9. Contact
              </h2>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="leading-relaxed">
                  <strong>OFA Group</strong><br />
                  609 Deep Valley Drive, Suite 200, Rolling Hills, CA 90274<br />
                  Email: <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">support@wildsafedefense.com</a>
                  <br />
                  Phone: (800) 418-5160
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
