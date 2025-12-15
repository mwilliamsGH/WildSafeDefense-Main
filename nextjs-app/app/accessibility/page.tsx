import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Accessibility Statement | WildSafe Defense",
  description: "WildSafe Defense's commitment to web accessibility for all users.",
};

export default function Accessibility() {
  return (
    <div>
      <Navigation />

      <main className="bg-background py-16 lg:py-24 px-6 lg:px-8">
        <article className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Accessibility Statement
          </h1>

          <p className="text-sm text-muted-foreground mb-12">
            Last Updated: December 15, 2025
          </p>

          <div className="space-y-8 text-foreground">
            <p className="leading-relaxed">
              WildSafe Defense is committed to ensuring digital accessibility for all users, including people with disabilities. We continually work to improve the user experience for everyone and to apply relevant accessibility standards and best practices.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Our Commitment
              </h2>
              <p className="leading-relaxed mb-4">
                We are committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. To achieve this, we aim to comply with:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards</li>
                <li>Americans with Disabilities Act (ADA) requirements</li>
                <li>California Government Code Section 7405 and 11135</li>
                <li>Section 508 of the Rehabilitation Act of 1973</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Accessibility Features
              </h2>
              <p className="leading-relaxed mb-4">
                Our website includes the following accessibility features:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Structure and Navigation
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Semantic HTML and proper heading hierarchy for easy navigation</li>
                <li>Consistent navigation structure across all pages</li>
                <li>Skip navigation links to bypass repetitive content</li>
                <li>ARIA landmarks to identify page regions</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Visual Design
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Sufficient color contrast ratios meeting WCAG 2.1 AA standards</li>
                <li>Legible font sizes with the ability to resize text up to 200%</li>
                <li>Information is not conveyed by color alone</li>
                <li>Responsive design that adapts to different screen sizes and devices</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Assistive Technology Compatibility
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Compatibility with popular screen readers (NVDA, JAWS, VoiceOver)</li>
                <li>Full keyboard navigation support for all interactive elements</li>
                <li>Visible focus indicators for keyboard users</li>
                <li>Form labels and error messages are programmatically associated</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Media and Content
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Descriptive alternative text for images and visual content</li>
                <li>Captions or transcripts for video and audio content (where applicable)</li>
                <li>PDF documents are tagged for accessibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Known Limitations
              </h2>
              <p className="leading-relaxed mb-2">
                While we strive for full accessibility, some content or features may have limitations:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Some older PDF documents may not be fully accessible; contact us for alternative formats</li>
                <li>Third-party content or embedded applications may not meet all accessibility standards</li>
                <li>Interactive maps may have limited accessibility for screen reader users</li>
              </ul>
              <p className="leading-relaxed">
                We are actively working to address these limitations and improve accessibility throughout our Sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Need Assistance?
              </h2>
              <p className="leading-relaxed mb-4">
                If you encounter any accessibility barriers while using our website, require assistance accessing information, or need content in an alternative format, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="leading-relaxed">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">
                    support@wildsafedefense.com
                  </a>
                  <br />
                  <strong>Phone:</strong> (800) 418-5160
                  <br />
                  <strong>Hours:</strong> Monday–Friday, 8:00 AM – 6:00 PM PT
                </p>
              </div>
              <p className="leading-relaxed mt-4">
                When contacting us, please describe the specific accessibility issue or the content/format you need, and we will work to provide an accessible alternative.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Feedback Welcome
              </h2>
              <p className="leading-relaxed">
                We welcome feedback on the accessibility of our website. Your input helps us identify areas for improvement and ensures our website remains accessible to everyone. Please share your experiences, suggestions, or concerns by contacting us using the information above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                California Unruh Civil Rights Act
              </h2>
              <p className="leading-relaxed">
                WildSafe Defense is committed to complying with the California Unruh Civil Rights Act (California Civil Code Section 51), which requires full and equal accommodations, advantages, facilities, privileges, or services in all business establishments. If you believe you have been discriminated against, you may file a complaint with the California Department of Fair Employment and Housing.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">
              This accessibility statement was last reviewed on December 15, 2025.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
