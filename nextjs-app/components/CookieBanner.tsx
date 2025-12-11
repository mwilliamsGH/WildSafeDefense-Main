"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("wildsafe-cookies-accepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("wildsafe-cookies-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-muted/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm text-foreground">
              We use cookies to enhance your experience and analyze site performance.{" "}
              <Link href="/cookies" className="text-primary hover:underline font-medium">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handleAccept} size="sm" className="min-h-9">
              Accept
            </Button>
            <button
              onClick={handleAccept}
              className="p-1 hover:bg-background/80 rounded transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
