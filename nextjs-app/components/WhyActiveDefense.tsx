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
    <div
      className="relative flex items-center justify-center bg-cover bg-center min-h-[600px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-primary/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20 lg:py-32">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            {headline}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto px-4">
            {bodyText}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 max-w-6xl mx-auto">
          {layers.map((layer, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 lg:p-10 border-2 bg-white/10 backdrop-blur border-white/30"
              style={
                !layer.complete
                  ? {
                      boxShadow:
                        "0 0 40px rgba(40, 58, 58, 1), 0 0 80px rgba(40, 58, 58, 0.8), 0 0 120px rgba(40, 58, 58, 0.6), 0 0 160px rgba(40, 58, 58, 0.4)",
                    }
                  : undefined
              }
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0 ${
                    layer.complete ? "bg-white/20" : "bg-primary"
                  }`}
                >
                  <div
                    className={
                      layer.complete ? "text-white" : "text-primary-foreground"
                    }
                  >
                    {layer.icon}
                  </div>
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    layer.complete ? "bg-green-500/20" : "bg-red-500/20"
                  }`}
                >
                  {layer.complete ? (
                    <Check className="w-6 h-6 text-green-400" />
                  ) : (
                    <X className="w-6 h-6 text-red-400" />
                  )}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                {layer.title}
              </h3>

              <p
                className={`text-sm sm:text-base ${
                  layer.complete
                    ? "text-white/70"
                    : "text-primary-foreground font-semibold"
                }`}
              >
                {layer.subtitle}
              </p>
            </Card>
          ))}
        </div>

        {ctaText && ctaLink && (
          <div className="text-center">
            <Link href={ctaLink}>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur border-white/40 text-white hover:bg-white/20 min-h-12 px-10 shadow-xl"
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
