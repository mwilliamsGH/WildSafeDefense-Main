import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  stat: string;
  description: string;
  backgroundImage: string;
  overlayColor: 'dark' | 'teal' | 'black' | 'light';
}

interface FeatureGridProps {
  sectionTitle: string;
  subtitle: string;
  features: Feature[];
}

const overlayColors = {
  dark: 'bg-black/70',
  teal: 'bg-primary/80',
  black: 'bg-black/80',
  light: 'bg-white/80',
};

const textColors = {
  dark: 'text-white',
  teal: 'text-white',
  black: 'text-white',
  light: 'text-foreground',
};

export default function FeatureGrid({ sectionTitle, subtitle, features }: FeatureGridProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-32 px-6 sm:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Image
              src="/wildsafe-tank-logo.png"
              alt="De-Wildfire Tank Logo"
              width={240}
              height={240}
              className="h-24 sm:h-32 lg:h-60 w-auto"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${feature.backgroundImage})` }}
            >
              <div className={`absolute inset-0 ${overlayColors[feature.overlayColor]}`}></div>

              <div className={`relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-12 ${textColors[feature.overlayColor]}`}>
                <div className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4 opacity-90">
                  {feature.stat}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/product">
            <Button size="lg" className="w-full sm:w-auto min-h-12 px-10 text-base">
              See Full Product Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
