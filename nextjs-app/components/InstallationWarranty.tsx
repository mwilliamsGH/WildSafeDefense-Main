import { Shield, Wrench, Clock, Package } from "lucide-react";

export default function InstallationWarranty() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Installation & Coverage
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            8-14 week turnkey installation with comprehensive warranty
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Installation Timeline */}
          <div className="bg-muted rounded-lg p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-7 h-7 text-primary flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Installation Timeline
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Weeks 1-2: Order & Fabrication</p>
                  <p className="text-xs text-muted-foreground">$100 deposit secures installation window</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Weeks 3-10: International Shipping</p>
                  <p className="text-xs text-muted-foreground">We handle customs and logistics</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Weeks 11-12: Site Prep</p>
                  <p className="text-xs text-muted-foreground">Delivery coordination and access verification</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Weeks 13-14: Install & Train</p>
                  <p className="text-xs text-muted-foreground">Testing, commissioning, operator training</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                *Timeline estimates based on current shipping. Total 8-14 weeks typical; may vary by logistics and site factors.
              </p>
            </div>
          </div>

          {/* Warranty & Maintenance */}
          <div className="bg-muted rounded-lg p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-7 h-7 text-primary flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Warranty & Maintenance
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">3-Year Parts Warranty</h4>
                <p className="text-xs text-muted-foreground">
                  All components covered for material defects and workmanship. Free replacement if failure occurs.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">First Year Maintenance (Included)</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Four quarterly professional inspections at no cost:
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Pump function & fuel quality</li>
                  <li>• Engine performance & oil</li>
                  <li>• Hose integrity & connections</li>
                  <li>• Tank condition & water quality</li>
                  <li>• Pressure testing</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">After Year One</h4>
                <p className="text-xs text-muted-foreground">
                  Continue with annual service agreement (maintains warranty) or self-maintain using our documentation.
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Service agreement required for full warranty coverage. Self-maintenance permitted but shifts responsibility to owner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
