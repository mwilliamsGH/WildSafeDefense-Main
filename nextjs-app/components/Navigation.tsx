"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Only hide logo on homepage
    if (pathname !== "/") {
      setShowLogo(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/faq", label: "FAQ" },
    { href: "/get-protected", label: "Get Protected" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {showLogo && (
            <Link href="/">
              <Image
                src="/wildsafedefense-horizontal.svg"
                alt="WildSafe Defense"
                width={230}
                height={150}
                className="h-14 w-auto cursor-pointer"
                priority
              />
            </Link>
          )}
          {!showLogo && <div className="h-10" />}

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-base font-medium transition-colors hover:text-primary cursor-pointer ${
                    pathname === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <Link href="/get-protected">
              <Button>Schedule Assessment</Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block text-base font-medium cursor-pointer ${
                    pathname === link.href ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <Link href="/get-protected">
              <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Schedule Assessment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
