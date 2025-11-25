"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Zap, Droplet, Home } from "lucide-react";

interface ProductShowcaseProps {
  sectionTitle: string;
  subtitle: string;
  closedImage: string;
  openImage: string;
}

export default function ProductShowcase({
  sectionTitle,
  subtitle,
  closedImage,
  openImage,
}: ProductShowcaseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 px-6 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">{subtitle}</p>
        </div>

        {/* Interactive Image Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[16/10] rounded-md overflow-hidden">
            {/* Closed Image */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={closedImage}
                alt="WildSafe Defense system with doors closed"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Open Image */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={openImage}
                alt="WildSafe Defense system with doors open showing equipment"
                fill
                className="object-cover"
              />
            </div>

            {/* Toggle Button */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className="min-h-12 px-8 text-base shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <span>{isOpen ? "Close System" : "Open System"}</span>
              </Button>
            </div>
          </div>

          {/* Features Grid Below */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-4">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                Diesel-Powered Pump
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                High-pressure water delivery independent of the electrical grid
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-4">
                <Droplet className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                3,000 Gallon Tank
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Dedicated water supply for 30+ minutes of continuous defense
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-4">
                <Home className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                Concealed Design
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Blends seamlessly into your property while remaining accessible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
