import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Spec {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface SpecsGridProps {
  title: string;
  specs: Spec[];
  ctaText?: string;
  ctaLink?: string;
}

export default function SpecsGrid({ title, specs, ctaText, ctaLink }: SpecsGridProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-32 px-6 sm:px-8 bg-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-background mb-12 sm:mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {specs.map((spec, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4 text-white">
                {spec.icon}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {spec.value}
              </div>
              <div className="text-xs sm:text-sm text-background/80">
                {spec.label}
              </div>
            </div>
          ))}
        </div>

        {ctaText && ctaLink && (
          <div className="text-center">
            {ctaLink.endsWith('.pdf') ? (
              <a href={ctaLink} download target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="whiteOutline"
                  className="w-full sm:w-auto border-background/30 text-background hover:bg-background/20 hover:text-white min-h-12 px-8 transition-colors"
                >
                  {ctaText}
                </Button>
              </a>
            ) : (
              <Link href={ctaLink}>
                <Button
                  size="lg"
                  variant="whiteOutline"
                  className="w-full sm:w-auto border-background/30 text-background hover:bg-background/20 hover:text-white min-h-12 px-8 transition-colors"
                >
                  {ctaText}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
