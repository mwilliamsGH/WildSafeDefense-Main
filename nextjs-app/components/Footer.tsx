import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="grid lg:grid-cols-2">
        <div className="px-8 lg:px-16 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>(800) 418-5160</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>support@wildsafedefense.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Monday–Friday, 8:00 AM – 6:00 PM PT</span>
                </div>
              </div>

              <p className="text-sm text-background/70">
                Response time: Within 24 hours
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Pages</h3>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
                <Link href="/product" className="text-background/80 hover:text-background transition-colors">
                  Product
                </Link>
                <Link href="/get-protected" className="text-background/80 hover:text-background transition-colors">
                  Get Protected
                </Link>
                <Link href="/faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-primary px-8 lg:px-16 py-16 lg:py-20">
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">
            Have Questions?
          </h3>

          <p className="text-primary-foreground/90 mb-6 leading-relaxed">
            Review our comprehensive FAQ for details on installation, pricing, permits, operation, and maintenance.
          </p>

          <Link href="/product#faq">
            <Button variant="secondary" size="lg" className="min-h-12">
              View FAQ
            </Button>
          </Link>
        </div>
      </div>

      <div className="px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <Image
              src="/wildsafe-horizontal.png"
              alt="WildSafe Defense"
              width={200}
              height={80}
              className="h-20 w-auto"
            />

            <p className="text-sm text-background/60">
              © 2025 WildSafe Defense. All rights reserved.
            </p>
          </div>

          <div className="pt-4 border-t border-background/10 mb-4">
            <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-background/60">
              <Link href="/privacy-policy" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/terms" className="hover:text-background transition-colors">
                Terms of Service
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/disclaimer" className="hover:text-background transition-colors">
                Disclaimer
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/cookies" className="hover:text-background transition-colors">
                Cookie Policy
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/accessibility" className="hover:text-background transition-colors">
                Accessibility
              </Link>
              <span className="hidden md:inline">|</span>
              <Link href="/methodology" className="hover:text-background transition-colors">
                Data Sources
              </Link>
            </nav>
          </div>

          <div className="pt-4 mb-4">
            <p className="text-xs text-background/50 text-center max-w-5xl mx-auto mb-4">
              WildSafe Defense wildfire risk reports are informational only and not a fire engineering assessment.{" "}
              <Link href="/disclaimer" className="text-background/70 hover:text-background underline">
                See Disclaimer
              </Link>
              .
            </p>
            <p className="text-xs text-background/50 text-center max-w-5xl mx-auto">
              Shipping & Installation Notice: Installation timelines are estimates based on current shipping conditions.
              International tank shipment currently requires 8-12 weeks. Total project timeline may vary based on shipping
              logistics and site-specific factors. Detailed schedule provided after site assessment and order confirmation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
