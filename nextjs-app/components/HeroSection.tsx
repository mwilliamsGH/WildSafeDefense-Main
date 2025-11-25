import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage: string;
  headline: string;
  subheadline?: string;
  primaryCTA: string;
  primaryCTALink: string;
  secondaryCTA?: string;
  secondaryCTALink?: string;
}

export default function HeroSection({
  backgroundImage,
  headline,
  subheadline,
  primaryCTA,
  primaryCTALink,
  secondaryCTA,
  secondaryCTALink,
}: HeroSectionProps) {
  return (
    <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
      <div className="bg-background flex flex-col justify-center items-center px-6 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-32">
        <div className="max-w-xl w-full text-left space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
            {headline}
          </h1>

          {subheadline && (
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {subheadline}
            </p>
          )}

          <div className="flex flex-col pt-6 sm:pt-8 sm:flex-row gap-4">
            <Link href={primaryCTALink} className="w-full sm:w-auto">
              <Button size="lg" className="w-full min-h-12 px-8 text-base">
                {primaryCTA}
              </Button>
            </Link>

            {secondaryCTA && secondaryCTALink && (
              <Link href={secondaryCTALink} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-h-12 px-8 text-base"
                >
                  {secondaryCTA}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center min-h-[350px] sm:min-h-[400px] lg:min-h-[calc(100vh-5rem)] order-first lg:order-last"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-primary/95"></div>
        <div className="relative z-10 h-full flex items-end justify-end p-6 sm:p-8 lg:p-16">
          <Image
            src="/wildsafe-logo-white.svg"
            alt="WildSafe Defense"
            width={240}
            height={240}
            className="h-32 sm:h-40 lg:h-60 w-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
