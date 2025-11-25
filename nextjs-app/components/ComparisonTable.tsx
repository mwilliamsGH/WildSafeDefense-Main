import { Check, X } from "lucide-react";

interface ComparisonTableProps {
  sectionTitle?: string;
  subtitle?: string;
}

export default function ComparisonTable({
  sectionTitle = "Traditional vs. WildSafe",
  subtitle = "Get the protection you need without the complexity you don't."
}: ComparisonTableProps) {
  const comparisons = [
    { traditional: "$50,000-$150,000", wildsafe: "$21,500", highlight: true },
    { traditional: "6-12 month installation", wildsafe: "8-14 weeks", highlight: true },
    { traditional: "Extensive permits required", wildsafe: "No permits required", highlight: true },
    { traditional: "Grid-dependent", wildsafe: "Diesel off-grid", highlight: true },
    { traditional: "Complex installation", wildsafe: "Professional turnkey setup", highlight: true },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-6 sm:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-muted rounded-md overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-foreground/5">
                <th className="text-left p-6 sm:p-8 text-base sm:text-lg lg:text-xl font-bold text-foreground w-1/2">
                  Traditional Systems
                </th>
                <th className="text-left p-6 sm:p-8 text-base sm:text-lg lg:text-xl font-bold text-primary-foreground bg-primary w-1/2">
                  WildSafe Tank
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr
                  key={index}
                  className={index !== comparisons.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="p-4 sm:p-6 lg:p-8 text-sm sm:text-base lg:text-lg text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{comparison.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 lg:p-8 font-semibold text-sm sm:text-base lg:text-lg text-foreground bg-primary/10">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{comparison.wildsafe}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            <strong>Value Context:</strong> Traditional whole-property fire suppression systems cost $50,000-$150,000 and require 6-12 months of installation.
          </p>
        </div>
      </div>
    </section>
  );
}
