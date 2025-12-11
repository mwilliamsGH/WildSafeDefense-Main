import Link from "next/link";
import { Check, X, Home, TreePine, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface WhyActiveDefenseAltProps {
  backgroundImage: string;
  headline: string;
  bodyText: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function WhyActiveDefenseAlt({
  backgroundImage,
  headline,
  bodyText,
  ctaText,
  ctaLink,
}: WhyActiveDefenseAltProps) {
  const layers = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Hardening",
      subtitle: "Fire-resistant materials",
      complete: true,
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Defensible Space",
      subtitle: "Cleared vegetation",
      complete: true,
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Active Water Defense",
      subtitle: "* Most properties stop here",
      complete: false,
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Stacked Cards */}
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <Card
                key={index}
                className={`p-6 lg:p-8 flex items-start gap-4 ${
                  !layer.complete
                    ? "border-l-8 border-l-primary border-t-2 border-r-2 border-b-2 shadow-2xl"
                    : "border-l-4 border-l-primary border-t border-r border-b"
                }`}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                  <div className="text-primary-foreground">
                    {layer.icon}
                  </div>
                </div>

                <div className="flex-1">
                  {/* Status Badge */}
                  <div
                    className={`inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-sm ${
                      layer.complete
                        ? "text-green-600 bg-green-600/10"
                        : "text-red-600 bg-red-600/10"
                    }`}
                  >
                    {layer.complete ? "✓ COMPLETE" : "✗ CRITICAL GAP"}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    {layer.title}
                  </h3>

                  {/* Subtitle/Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {layer.subtitle}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Side - Title, Body, CTA */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {headline}
            </h2>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              {bodyText}
            </p>

            {ctaText && ctaLink && (
              <div>
                <Link href={ctaLink}>
                  <Button size="lg" className="min-h-12 px-10">
                    {ctaText}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
