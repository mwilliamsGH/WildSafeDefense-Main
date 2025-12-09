import Link from "next/link";
import { Check, X, Home, TreePine, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface WhyActiveDefenseProps {
  backgroundImage: string;
  headline: string;
  bodyText: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function WhyActiveDefense({
  backgroundImage,
  headline,
  bodyText,
  ctaText,
  ctaLink,
}: WhyActiveDefenseProps) {
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
    <section 
      className="relative py-20 lg:py-32 px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {headline}
          </h2>

          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            {bodyText}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {layers.map((layer, index) => (
            <Card
              key={index}
              className={`p-8 lg:p-10 flex flex-col items-start bg-background/90 backdrop-blur-sm ${
                !layer.complete
                  ? "border-l-8 border-l-primary border-t-2 border-r-2 border-b-2 shadow-2xl"
                  : "border-l-4 border-l-primary border-t border-r border-b"
              }`}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                <div className="text-primary-foreground">
                  {layer.icon}
                </div>
              </div>

              {/* Status Badge */}
              <div
                className={`text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-sm ${
                  layer.complete
                    ? "text-green-600 bg-green-600/10"
                    : "text-red-600 bg-red-600/10"
                }`}
              >
                {layer.complete ? "✓ COMPLETE" : "✗ CRITICAL GAP"}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {layer.title}
              </h3>

              {/* Subtitle/Description */}
              <p className="text-base text-muted-foreground leading-relaxed">
                {layer.subtitle}
              </p>
            </Card>
          ))}
        </div>

        {ctaText && ctaLink && (
          <div className="text-center mt-16">
            <Link href={ctaLink}>
              <Button size="lg" className="min-h-12 px-10">
                {ctaText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
