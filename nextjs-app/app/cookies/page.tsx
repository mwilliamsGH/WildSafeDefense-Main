import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | WildSafe Defense",
  description: "Cookie Policy for WildSafe Defense. Learn about the cookies and tracking technologies we use.",
};

export default function Cookies() {
  return (
    <div>
      <Navigation />

      <main className="bg-background py-16 lg:py-24 px-6 lg:px-8">
        <article className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>

          <p className="text-sm text-muted-foreground mb-12">
            Last Updated: [DATE]
          </p>

          <div className="space-y-8 text-foreground">
            <p className="leading-relaxed">
              WildSafe Defense uses cookies and tracking technologies to enhance user experience and analyze website
              performance.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                1. Tools We Use
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Google Analytics 4
              </h3>
              <p className="leading-relaxed mb-2">
                For:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-6">
                <li>traffic metrics</li>
                <li>device/browser tracking</li>
                <li>engagement analytics</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                GoHighLevel Tracking
              </h3>
              <p className="leading-relaxed mb-2">
                For:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>attribution</li>
                <li>funnel performance</li>
                <li>event triggers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                2. Types of Cookies
              </h2>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Essential
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Required for basic site functionality and security.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Performance
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Help us understand how visitors interact with our site.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Analytics
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Collect data about user behavior and site performance (Google Analytics 4).
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Marketing
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Track user interactions for marketing and remarketing purposes (via GHL).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                3. How to Opt Out
              </h2>
              <p className="leading-relaxed mb-2">
                You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Disable cookies via browser settings</li>
                <li>
                  Install{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics opt-out tools
                  </a>
                </li>
                <li>Clear your browser cookies periodically</li>
                <li>Use private/incognito browsing mode</li>
              </ul>

              <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 mt-6">
                <p className="text-sm leading-relaxed">
                  <strong>Note:</strong> Disabling cookies may affect your experience on our website and limit certain
                  features.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                4. Contact
              </h2>
              <p className="leading-relaxed">
                Questions about cookies?{" "}
                <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">
                  support@wildsafedefense.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
