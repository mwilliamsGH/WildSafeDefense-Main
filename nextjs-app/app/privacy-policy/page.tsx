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
            Last Updated: December 15, 2025
          </p>

          <div className="space-y-8 text-foreground">
            <p className="leading-relaxed">
              This Privacy Policy explains how <strong>OFA Group</strong> ("WildSafe Defense," "we," "our," "us") collects, uses, discloses, and protects your information when you visit wildsafedefense.com, reports.wildsafedefense.com, or use any of our services, including personalized wildfire risk reports, consultation requests, and downloadable PDF reports (collectively, the "Services"). This Policy also describes your rights regarding your personal information and how you can exercise those rights.
            </p>

            <p className="leading-relaxed">
              By accessing or using our Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed mb-4">
                We collect information in several ways: directly from you when you provide it, automatically when you use our Services, and from third-party sources. The categories of personal information we collect are described below.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Information You Provide Directly
              </h3>
              <p className="leading-relaxed mb-2">
                When you interact with our Services, you may provide us with the following categories of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>Identifiers:</strong> Name, email address, phone number, mailing address, and property address</li>
                <li><strong>Contact Information:</strong> Information provided through consultation requests, contact forms, and customer service inquiries</li>
                <li><strong>Communication Records:</strong> Records of correspondence if you contact us, including emails, chat transcripts, and phone call records</li>
                <li><strong>Form Submissions:</strong> Data submitted through consultation requests, report downloads, newsletter signups, and feedback forms</li>
                <li><strong>Account Information:</strong> If you create an account, username, password, and account preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Information Collected Automatically
              </h3>
              <p className="leading-relaxed mb-2">
                When you access our Services, we automatically collect certain information through cookies, web beacons, and similar tracking technologies, including through Google Analytics 4 (GA4) and GoHighLevel tracking:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>Device Information:</strong> IP address, device type, operating system, browser type and version, device identifiers, and mobile network information</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, scroll depth, date and time of visits, and navigation paths through our site</li>
                <li><strong>Location Data:</strong> Approximate geographic location derived from IP address</li>
                <li><strong>Referral Information:</strong> Information about the website or advertisement that referred you to our Services</li>
                <li><strong>Analytics Event Data:</strong> Interactions with specific features, form submissions, button clicks, and conversion events</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. Property & Environmental Data
              </h3>
              <p className="leading-relaxed mb-2">
                When you view your personalized wildfire risk report, we process property-specific and environmental data from public and third-party sources:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Parcel boundaries and property information from county assessor records</li>
                <li>CAL FIRE Fire Hazard Severity Zone classifications</li>
                <li>Vegetation density, fuel load, and Normalized Difference Vegetation Index (NDVI) data</li>
                <li>Slope, elevation, aspect, and other topographical information</li>
                <li>Historical fire perimeters and burn severity data</li>
                <li>Custom-generated hazard metrics and composite risk scores</li>
              </ul>
              <p className="leading-relaxed mt-2">
                This data is processed to generate your informational wildfire risk report and is not used for purposes unrelated to our Services.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                d. Information from Third-Party Sources
              </h3>
              <p className="leading-relaxed">
                We may receive information about you from third-party sources, including publicly available databases, marketing partners, social media platforms, and data providers. This may include demographic information, property records, and information that helps us verify your identity or prevent fraud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect for the following business and commercial purposes:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Service Delivery
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Generate and deliver personalized wildfire risk reports</li>
                <li>Email requested report PDFs and related documentation</li>
                <li>Process and respond to consultation requests</li>
                <li>Provide customer support and technical assistance</li>
                <li>Create and manage your account if applicable</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Communications
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Send transactional emails related to your report requests</li>
                <li>Conduct remarketing or follow-up communication via GoHighLevel</li>
                <li>Send promotional communications about our products and services (with your consent where required)</li>
                <li>Respond to your inquiries and feedback</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. Service Improvement and Analytics
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Improve accuracy and performance of our risk assessment models</li>
                <li>Analyze site performance, user behavior, and engagement metrics</li>
                <li>Develop new features, products, and services</li>
                <li>Conduct research and statistical analysis</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                d. Legal and Security
              </h3>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Comply with legal obligations and respond to lawful requests</li>
                <li>Protect our rights, privacy, safety, or property</li>
                <li>Detect, prevent, and address fraud, security breaches, or technical issues</li>
                <li>Enforce our Terms of Service and other agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                3. How We Share Information
              </h2>
              <p className="leading-relaxed mb-4">
                We may share your personal information with the following categories of third parties for legitimate business purposes:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Affiliated Entities
              </h3>
              <p className="leading-relaxed mb-4">
                We share information with <strong>OFA Group</strong> and affiliated entities for purposes consistent with this Privacy Policy, including product delivery, sales, support, engineering functions, and corporate administration.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Service Providers
              </h3>
              <p className="leading-relaxed mb-2">
                We engage third-party service providers to perform functions on our behalf, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Google Analytics (website analytics and performance monitoring)</li>
                <li>GoHighLevel CRM (customer relationship management and marketing automation)</li>
                <li>Cloud hosting and infrastructure providers</li>
                <li>Email delivery and communication platforms</li>
                <li>Payment processors (if applicable)</li>
                <li>Data analytics and business intelligence providers</li>
              </ul>
              <p className="leading-relaxed mb-4">
                These service providers are contractually obligated to use your information only as necessary to provide services to us and in accordance with applicable data protection laws.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. Fire Protection Partners
              </h3>
              <p className="leading-relaxed mb-4">
                If you explicitly request a consultation or assessment, we may share relevant property details with our vetted installation, assessment, and fire protection partners to facilitate service delivery. We will not share your information with partners without your request or consent.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                d. Legal and Compliance Disclosures
              </h3>
              <p className="leading-relaxed mb-4">
                We may disclose your information when required by law, regulation, legal process, or governmental request; to enforce our Terms of Service; to protect the rights, property, or safety of WildSafe Defense, our users, or the public; or in connection with an investigation of suspected fraud, intellectual property infringement, or other unlawful activity.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                e. Business Transfers
              </h3>
              <p className="leading-relaxed mb-4">
                In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your information may be transferred as part of the transaction. We will notify you via email and/or prominent notice on our website of any change in ownership or uses of your personal information.
              </p>

              <p className="leading-relaxed font-semibold mb-4">
                We do not sell personal information as that term is traditionally understood. For information regarding "sales" and "sharing" under California law, see Section 6 (California Privacy Rights) below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                4. Data Storage, Security, and Retention
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Data Storage
              </h3>
              <p className="leading-relaxed mb-4">
                We store data in secure cloud infrastructure and customer relationship management systems (GoHighLevel). Our servers are located in the United States. By using our Services, you consent to the transfer and storage of your information in the United States, which may have different data protection laws than your country of residence.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Security Measures
              </h3>
              <p className="leading-relaxed mb-2">
                We implement reasonable administrative, technical, and physical security measures designed to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Encryption of data in transit using TLS/SSL protocols</li>
                <li>Secure access controls and authentication requirements</li>
                <li>Regular security assessments and monitoring</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="leading-relaxed mb-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. Data Retention
              </h3>
              <p className="leading-relaxed mb-2">
                We retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>Contact and communication data:</strong> Retained for up to 7 years following your last interaction with our Services</li>
                <li><strong>Report data:</strong> Retained for up to 5 years from the date of report generation</li>
                <li><strong>Analytics data:</strong> Retained in accordance with our analytics providers' retention policies (typically 14-26 months)</li>
                <li><strong>Marketing data:</strong> Retained until you opt out or request deletion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                5. Your Privacy Rights
              </h2>
              <p className="leading-relaxed mb-2">
                Depending on your location, you may have certain rights regarding your personal information. These rights may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li><strong>Right to Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete personal information</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your personal information, subject to certain exceptions</li>
                <li><strong>Right to Portability:</strong> Request a copy of your personal information in a structured, commonly used format</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications at any time</li>
              </ul>
              <p className="leading-relaxed">
                To exercise any of these rights, please contact us at: <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">support@wildsafedefense.com</a>
              </p>
              <p className="leading-relaxed mt-2">
                We will respond to your request within the timeframe required by applicable law. We may need to verify your identity before processing your request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                6. California Privacy Rights (CCPA/CPRA)
              </h2>
              <p className="leading-relaxed mb-4">
                If you are a California resident, you have specific privacy rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA). This section describes those rights and how to exercise them.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                a. Categories of Personal Information Collected
              </h3>
              <p className="leading-relaxed mb-2">
                In the preceding 12 months, we have collected the following categories of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li><strong>Identifiers:</strong> Name, email address, phone number, property address, IP address</li>
                <li><strong>Personal information categories:</strong> Contact information, property details</li>
                <li><strong>Internet or other electronic network activity:</strong> Browsing history, search history, interaction with our Services</li>
                <li><strong>Geolocation data:</strong> Approximate location derived from IP address</li>
                <li><strong>Professional or employment-related information:</strong> If provided in consultation requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                b. Your California Privacy Rights
              </h3>
              <p className="leading-relaxed mb-2">
                As a California resident, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li><strong>Know:</strong> Request disclosure of the categories and specific pieces of personal information we collect, use, disclose, and sell</li>
                <li><strong>Delete:</strong> Request deletion of your personal information, subject to certain exceptions</li>
                <li><strong>Correct:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Opt-Out of Sale/Sharing:</strong> Opt out of the "sale" or "sharing" of your personal information (as defined under CCPA/CPRA)</li>
                <li><strong>Limit Use of Sensitive Personal Information:</strong> Limit the use and disclosure of sensitive personal information</li>
                <li><strong>Non-Discrimination:</strong> Exercise your privacy rights without discrimination</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                c. How to Exercise Your Rights
              </h3>
              <p className="leading-relaxed mb-2">
                To exercise your California privacy rights, you may:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed mb-4">
                <li>Email us at <a href="mailto:support@wildsafedefense.com" className="text-primary hover:underline">support@wildsafedefense.com</a></li>
                <li>Call us at (800) 418-5160</li>
                <li>Submit a request through our website</li>
              </ul>
              <p className="leading-relaxed mb-4">
                We will verify your identity before processing your request and respond within 45 days (or as otherwise required by law).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                d. Authorized Agents
              </h3>
              <p className="leading-relaxed mb-4">
                You may designate an authorized agent to make requests on your behalf. The agent must provide proof of authorization, and we may still require verification of your identity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="leading-relaxed">
                For detailed information about our use of cookies and tracking technologies, including Google Analytics 4 and GoHighLevel, please see our{" "}
                <Link href="/cookies" className="text-primary hover:underline">
                  Cookie Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                8. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                9. Updates to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the "Last Updated" date at the top of this page and notify you by email or through a prominent notice on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                10. Contact Us
              </h2>
              <p className="leading-relaxed mb-2">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
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
