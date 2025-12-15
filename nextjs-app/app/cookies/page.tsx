import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

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
            Last Updated: December 15, 2025
          </p>

          <div className="space-y-8 text-foreground">
            <p className="leading-relaxed">
              This Cookie Policy explains how WildSafe Defense ("we," "our," "us") uses cookies and similar tracking technologies on our websites, wildsafedefense.com and reports.wildsafedefense.com (collectively, the "Sites"), and in connection with our services. This policy should be read in conjunction with our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                1. What Are Cookies?
              </h2>
              <p className="leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies may be "session" cookies (which are deleted when you close your browser) or "persistent" cookies (which remain on your device until they expire or are deleted).
              </p>
              <p className="leading-relaxed">
                We also use similar tracking technologies such as web beacons (also known as pixel tags), local storage, and other tracking technologies that collect information about your use of our Sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                2. How We Use Cookies and Tracking Technologies
              </h2>
              <p className="leading-relaxed mb-4">
                We use cookies and similar tracking technologies for the following purposes:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Essential Cookies
              </h3>
              <p className="leading-relaxed mb-2">
                These cookies are necessary for the Sites to function properly. They enable basic functions like page navigation, form submissions, and access to secure areas of the website. The Sites cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Performance and Analytics Cookies
              </h3>
              <p className="leading-relaxed mb-2">
                These cookies help us understand how visitors interact with our Sites by collecting and reporting information anonymously. This helps us improve the way our Sites work.
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Track page views and user navigation patterns</li>
                <li>Measure site performance and loading times</li>
                <li>Identify errors and technical issues</li>
                <li>Analyze user engagement and behavior</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. Functionality Cookies
              </h3>
              <p className="leading-relaxed mb-4">
                These cookies allow the Sites to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                d. Marketing and Targeting Cookies
              </h3>
              <p className="leading-relaxed mb-2">
                These cookies are used to deliver advertisements that are relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                3. Third-Party Cookies and Tracking Technologies
              </h2>
              <p className="leading-relaxed mb-4">
                We use the following third-party services that may set cookies and similar tracking technologies on your device:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Google Analytics 4 (GA4)
              </h3>
              <p className="leading-relaxed mb-2">
                We use Google Analytics 4 to collect and analyze information about how visitors use our Sites. This helps us understand:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>How visitors navigate through our Sites</li>
                <li>Which pages are most popular</li>
                <li>How long visitors spend on each page</li>
                <li>What devices and browsers visitors use</li>
                <li>Geographic location of visitors (derived from IP address)</li>
                <li>User interactions and conversion events</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Google Analytics uses cookies and other tracking technologies to collect this information. The information generated by these cookies about your use of our Sites is transmitted to and stored by Google. Google may use this data to analyze your use of our Sites, compile reports on website activity, and provide other services related to website activity and internet usage.
              </p>
              <p className="leading-relaxed mb-4">
                For more information about Google Analytics and how it collects and processes data, please visit{" "}
                <a
                  href="https://www.google.com/policies/privacy/partners/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google's Privacy & Terms
                </a>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. GoHighLevel (GHL)
              </h3>
              <p className="leading-relaxed mb-2">
                We use GoHighLevel, a customer relationship management and marketing automation platform, which may set cookies and tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Track user interactions and attribution</li>
                <li>Monitor funnel performance and conversion events</li>
                <li>Enable remarketing and follow-up communications</li>
                <li>Personalize user experience based on interactions</li>
                <li>Trigger automated marketing workflows</li>
              </ul>
              <p className="leading-relaxed mb-4">
                For more information about GoHighLevel's privacy practices, please review their privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                4. Your Cookie Choices
              </h2>
              <p className="leading-relaxed mb-4">
                You have several options to manage or limit how cookies and other tracking technologies are used:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Browser Settings
              </h3>
              <p className="leading-relaxed mb-2">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Delete cookies that are already stored on your device</li>
                <li>Block all cookies (though this may affect website functionality)</li>
                <li>Set your browser to notify you before accepting cookies</li>
                <li>Delete cookies when you close your browser</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Please note that blocking or deleting cookies may impact your experience on our Sites, as some features may not function properly without cookies.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Google Analytics Opt-Out
              </h3>
              <p className="leading-relaxed mb-2">
                To opt out of Google Analytics tracking, you can:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>
                  Install the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  , which prevents Google Analytics from collecting information about your website visits
                </li>
                <li>Use Google's cookie settings in your Google Account to manage how Google collects and uses data</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. Do Not Track Signals
              </h3>
              <p className="leading-relaxed mb-4">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. Our Sites do not currently respond to DNT signals, but we continue to monitor developments in this area.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 mt-6">
                <p className="text-sm leading-relaxed">
                  <strong>Note:</strong> Disabling cookies may affect your experience on our website and limit certain features. Some functionality, such as form submissions and personalized content, may not work properly without cookies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                5. California Privacy Rights
              </h2>
              <p className="leading-relaxed mb-4">
                If you are a California resident, you have certain rights regarding the use of cookies and tracking technologies under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). For more information about your privacy rights and how to exercise them, please see our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . You may also opt out of the "sale" or "sharing" of your personal information by contacting us at support@wildsafedefense.com. For more information about your California privacy rights, see Section 6 of our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                6. Updates to This Cookie Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, law, or our data practices. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this Cookie Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                7. Contact Us
              </h2>
              <p className="leading-relaxed mb-2">
                If you have questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="leading-relaxed">
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
