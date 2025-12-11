import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | WildSafe Defense",
  description: "Privacy Policy for WildSafe Defense. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <Navigation />

      <main className="bg-background py-16 lg:py-24 px-6 lg:px-8">
        <article className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-muted-foreground mb-12">
            Last Updated: [DATE]
          </p>

          <div className="space-y-8 text-foreground">
            <p className="leading-relaxed">
              This Privacy Policy explains how <strong>[ENTITY LEGAL NAME]</strong> ("WildSafe Defense," "we," "our," "us")
              collects, uses, and protects your information when you visit wildsafedefense.com, reports.wildsafedefense.com,
              or use any of our services, including personalized wildfire risk reports, consultation requests, and downloadable
              PDF reports (collectively, the "Services").
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed mb-4">
                We collect the following types of information:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Name</li>
                <li>Email address</li>
                <li>Property address</li>
                <li>Form submissions (consultation requests, report downloads)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Automatically Collected Data
              </h3>
              <p className="leading-relaxed mb-2">
                Through GA4 and GoHighLevel tracking:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>IP address</li>
                <li>Device/browser info</li>
                <li>Pages visited</li>
                <li>Date/time of interactions</li>
                <li>Referral source</li>
                <li>Common analytics event data</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. Property & Environmental Data
              </h3>
              <p className="leading-relaxed mb-2">
                When you view your personalized wildfire risk report, we process:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Parcel boundaries</li>
                <li>CAL FIRE Fire Hazard Severity Zones</li>
                <li>Vegetation, slope, topography data</li>
                <li>Custom-generated hazard metrics</li>
              </ul>
              <p className="leading-relaxed mt-2">
                This data is used to generate your informational wildfire risk report.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-2">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Deliver wildfire risk reports</li>
                <li>Email requested report PDFs</li>
                <li>Respond to consultation requests</li>
                <li>Improve accuracy and performance of our reports</li>
                <li>Analyze site performance and user behavior</li>
                <li>Conduct remarketing or follow-up communication via GoHighLevel</li>
                <li>Improve our Services and develop new features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                3. How We Share Information
              </h2>
              <p className="leading-relaxed mb-4">
                We may share information with:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Internal Teams / Parent Organization
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>[OFA GROUP] and authorized personnel involved in product delivery</li>
                <li>Sales, support, and engineering functions</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Service Providers
              </h3>
              <p className="leading-relaxed mb-2">
                Including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Google Analytics</li>
                <li>GoHighLevel CRM</li>
                <li>Hosting providers</li>
                <li>Email delivery systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. Fire Protection Partners
              </h3>
              <p className="leading-relaxed mb-4">
                If you explicitly request a consultation, we may share relevant property details with our
                installation/assessment partners.
              </p>

              <p className="leading-relaxed font-semibold">
                We do not sell personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                4. Data Storage & Security
              </h2>
              <p className="leading-relaxed">
                We store data in secure cloud infrastructure and CRM systems (GHL). We use reasonable administrative
                and technical security measures to protect data; however, no method of transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                5. Your Rights
              </h2>
              <p className="leading-relaxed mb-2">
                Depending on your location, you may request:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Access to your data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Opt-out from marketing communications</li>
              </ul>
              <p className="leading-relaxed">
                Requests: <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">support@wildsafedefense.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                6. Cookies & Tracking
              </h2>
              <p className="leading-relaxed">
                See our full{" "}
                <Link href="/cookies" className="text-primary hover:underline">
                  Cookie Policy
                </Link>{" "}
                for details on GA4, GHL tracking, and opt-out mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                7. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our Services are not intended for individuals under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically. Changes take effect when posted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                9. Contact
              </h2>
              <p className="leading-relaxed">
                <strong>[ENTITY LEGAL NAME]</strong><br />
                [COMPANY ADDRESS]<br />
                Email: <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">support@wildsafedefense.com</a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
