import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlighted?: boolean;
}

interface PricingCardsProps {
  sectionTitle: string;
  plans: PricingPlan[];
  note?: string;
}

export default function PricingCards({ sectionTitle, plans, note }: PricingCardsProps) {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-primary"></div>
        <div className="bg-secondary"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white">
          {sectionTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`${
                plan.highlighted
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-card-foreground border-card-border'
              } shadow-lg`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="text-5xl font-bold mt-4">
                  {plan.price}
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Link href={plan.ctaLink} className="w-full">
                  <Button
                    size="lg"
                    variant={plan.highlighted ? "whiteOutline" : "default"}
                    className="w-full min-h-12"
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {note && (
          <p className="text-center text-white mt-8 text-sm">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
