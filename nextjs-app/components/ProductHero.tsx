import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductHeroProps {
  headline: string;
  tagline: string;
}

export default function ProductHero({ headline, tagline }: ProductHeroProps) {
  return (
    <div className="relative grid lg:grid-cols-2 min-h-[50vh]">
      <div className="bg-primary flex flex-col justify-center p-8 lg:p-16 py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8">
          {tagline}
        </p>
        <div>
          <Link href="/get-protected">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto min-h-12 px-8"
            >
              Schedule Site Assessment
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-muted flex items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[300px] lg:min-h-[50vh]">
        <Image
          src="/wildsafe-tank-logo.png"
          alt="WildSafe Tank Logo"
          width={400}
          height={400}
          className="max-h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}
