import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductFeature {
  icon: React.ReactNode;
  label: string;
  headline: string;
  description: string;
}

interface ProductFeaturesProps {
  sectionTitle: string;
  subtitle: string;
  features: ProductFeature[];
}

export default function ProductFeatures({ sectionTitle, subtitle, features }: ProductFeaturesProps) {
  return (
    <section className="py-20 lg:py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 lg:p-10 flex flex-col items-start border-l-4 border-l-primary border-t border-r border-b"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                <div className="text-primary-foreground">
                  {feature.icon}
                </div>
              </div>

              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3 bg-primary/10 px-3 py-1 rounded-sm">
                {feature.label}
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {feature.headline}
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/get-protected">
            <Button size="lg" className="min-h-12 px-10">
              Ready to Get Protected?
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
