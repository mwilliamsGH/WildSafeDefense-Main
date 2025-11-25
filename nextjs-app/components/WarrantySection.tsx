import { Shield, Wrench, FileCheck } from "lucide-react";

export default function WarrantySection() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built to Last, Backed by Warranty
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Your investment is protected with comprehensive coverage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* 3-Year Warranty */}
          <div className="bg-muted rounded-lg p-8 border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                3-Year Parts & Materials Warranty
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              If any component fails due to material defect or workmanship, we replace it at no cost.
              Covers tank, pump, engine, hoses, and all system hardware for three full years from installation.
            </p>
          </div>

          {/* First Year Maintenance */}
          <div className="bg-muted rounded-lg p-8 border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                First Year Maintenance Included
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Four quarterly professional inspections ensure your system stays operational when you need it most. We check:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Diesel pump function and fuel quality</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Engine performance and oil levels</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hose integrity and connection security</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tank condition and water quality</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>System pressure and delivery performance</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4 font-semibold">
              All four inspections included in your $21,500 purchase price—no additional cost.
            </p>
          </div>

          {/* Ongoing Service Options */}
          <div className="bg-muted rounded-lg p-8 border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                Ongoing Service Options
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h4 className="font-semibold text-foreground mb-1">After Year One:</h4>
                <p className="text-sm">
                  Continue quarterly maintenance with an annual service agreement to maintain full warranty coverage.
                  Service agreement pricing and details provided during your first-year inspections.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Self-Maintenance Option:</h4>
                <p className="text-sm">
                  You can opt out of the service agreement and maintain the system yourself using our comprehensive
                  training and documentation. Self-maintenance is permitted but shifts operational responsibility to
                  the property owner.
                </p>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-semibold text-foreground">
                  Important: Active service agreement maintains full 3-year warranty coverage. Self-maintenance removes
                  company liability for system performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
