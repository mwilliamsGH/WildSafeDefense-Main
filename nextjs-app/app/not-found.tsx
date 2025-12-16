import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | WildSafe Defense",
  description: "The page you're looking for doesn't exist. Return to WildSafe Defense home or explore our wildfire protection solutions.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-background py-16 lg:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl lg:text-9xl font-bold text-primary/20 select-none">
              404
            </h1>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/WildSafeTank-logo.png"
              alt="WildSafe Defense Logo"
              width={200}
              height={200}
              className="h-32 lg:h-40 w-auto"
            />
          </div>

          {/* Main Message */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Looks like this page went up in smoke. The page you're looking for doesn't exist or may have been moved.
            </p>
          </div>

          {/* Helpful Links */}
          <div className="bg-muted/50 rounded-lg p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Where would you like to go?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/">
                <Button variant="outline" className="w-full justify-start">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
              <Link href="/product">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="w-4 h-4" />
                  Product
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="w-4 h-4" />
                  FAQ
                </Button>
              </Link>
              <Link href="/get-protected">
                <Button variant="default" className="w-full justify-start">
                  <ArrowLeft className="w-4 h-4" />
                  Get Protected
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="default">
                <ArrowLeft className="w-4 h-4" />
                Return to Home
              </Button>
            </Link>
            <Link href="/get-protected">
              <Button size="lg" variant="outline">
                Get Protected Now
              </Button>
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Need help? Contact us at{" "}
              <a
                href="mailto:support@wildsafedefense.com"
                className="text-primary hover:underline font-medium"
              >
                support@wildsafedefense.com
              </a>
              {" "}or call{" "}
              <a
                href="tel:8004185160"
                className="text-primary hover:underline font-medium"
              >
                (800) 418-5160
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

