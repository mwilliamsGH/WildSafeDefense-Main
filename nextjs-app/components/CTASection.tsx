import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  backgroundImage: string;
  statLabel?: string;
  statValue?: string;
  headline: string;
  bodyText?: string;
  ctaText: string;
  ctaLink: string;
}

export default function CTASection({
  backgroundImage,
  statLabel,
  statValue,
  headline,
  bodyText,
  ctaText,
  ctaLink,
}: CTASectionProps) {
  return (
    <div
      className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16 text-center">
        {statLabel && statValue && (
          <div className="mb-6 sm:mb-8">
            <div className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-2">
              {statValue}
            </div>
            <div className="text-base sm:text-lg text-white/80">{statLabel}</div>
          </div>
        )}

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
          {headline}
        </h2>

        {bodyText && (
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            {bodyText}
          </p>
        )}

        <Link href={ctaLink}>
          <Button
            size="lg"
            variant="whiteOutline"
            className="w-full sm:w-auto min-h-12 px-10 text-base"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
