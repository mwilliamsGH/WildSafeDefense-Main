interface ComparisonTableProps {
  sectionTitle?: string;
  subtitle?: string;
}

export default function ComparisonTable({
  sectionTitle = "Traditional vs. WildSafe",
  subtitle = "Get the protection you need without the complexity you don't."
}: ComparisonTableProps) {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-background rounded-lg shadow-lg">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left p-6 text-lg font-bold text-foreground">
                  Traditional Systems
                </th>
                <th className="text-left p-6 text-lg font-bold text-primary bg-primary/5">
                  WildSafe Tank
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-6 text-muted-foreground">$50,000-$150,000</td>
                <td className="p-6 font-semibold text-primary bg-primary/5">$21,500</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-6 text-muted-foreground">6-12 month installation</td>
                <td className="p-6 font-semibold text-primary bg-primary/5">8-14 weeks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-6 text-muted-foreground">Extensive permits required</td>
                <td className="p-6 font-semibold text-primary bg-primary/5">No permits required</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-6 text-muted-foreground">Grid-dependent</td>
                <td className="p-6 font-semibold text-primary bg-primary/5">Diesel off-grid</td>
              </tr>
              <tr>
                <td className="p-6 text-muted-foreground">Complex installation</td>
                <td className="p-6 font-semibold text-primary bg-primary/5">Professional turnkey setup</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
