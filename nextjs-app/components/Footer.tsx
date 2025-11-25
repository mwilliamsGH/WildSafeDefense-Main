import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="grid lg:grid-cols-2">
        <div className="px-8 lg:px-16 py-16 lg:py-20">
          <h3 className="text-2xl font-bold mb-6">Contact</h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>info@wildsafedefense.com</span>
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

      <div className="border-t border-background/10 px-8 py-6">
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

          <div className="pt-4 border-t border-background/10">
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
