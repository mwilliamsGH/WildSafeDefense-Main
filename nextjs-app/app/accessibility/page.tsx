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

          <div className="space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              WildSafe Defense is committed to making our website accessible to all users, including those with
              disabilities. We strive to meet or exceed accessibility standards and continuously improve the user
              experience for everyone.
            </p>

            <section className="bg-muted/50 rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Commitment
              </h2>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <span className="leading-relaxed">
                    We follow web accessibility best practices and WCAG (Web Content Accessibility Guidelines)
                    recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <span className="leading-relaxed">
                    Our website is designed to be compatible with screen readers and assistive technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <span className="leading-relaxed">
                    We use semantic HTML and proper heading structures for easy navigation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <span className="leading-relaxed">
                    We provide text alternatives for non-text content
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <span className="leading-relaxed">
                    Our site is navigable using keyboard controls
                  </span>
                </li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Accessibility Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Responsive Design
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Our website adapts to different screen sizes and devices.
                  </p>
                </div>
                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Clear Navigation
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Consistent navigation structure across all pages.
                  </p>
                </div>
                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Readable Text
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Sufficient contrast ratios and legible font sizes.
                  </p>
                </div>
                <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Alternative Text
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Descriptive alt text for images and visual content.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Need Assistance?
              </h2>
              <p className="leading-relaxed mb-4">
                If you encounter any accessibility barriers while using our website or require assistance accessing
                information, please contact us:
              </p>
              <div className="bg-muted rounded-lg p-6">
                <p className="leading-relaxed">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">
                    support@wildsafedefense.com
                  </a>
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Phone:</strong> (800) 418-5160
                </p>
                <p className="leading-relaxed mt-2">
                  <strong>Hours:</strong> Monday–Friday, 8:00 AM – 6:00 PM PT
                </p>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ongoing Improvements
              </h2>
              <p className="leading-relaxed">
                We are continuously working to improve the accessibility of our website. We welcome feedback and
                suggestions on how we can better serve all users. Your input helps us identify areas for improvement
                and ensure our website remains accessible to everyone.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">
              This accessibility statement was last reviewed on [DATE].
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
