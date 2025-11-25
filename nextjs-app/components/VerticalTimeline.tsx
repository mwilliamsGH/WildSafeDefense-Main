import { Card } from "@/components/ui/card";
import { ClipboardCheck, Mail, FileCheck, Wrench, Shield } from "lucide-react";

interface TimelineStep {
  title: string;
  description: string;
}

interface VerticalTimelineProps {
  title: string;
  steps: TimelineStep[];
}

const stepIcons = [ClipboardCheck, Mail, FileCheck, Wrench, Shield];

const stepColors = [
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/80",
  "bg-primary"
];

const iconColors = [
  "text-primary",
  "text-primary",
  "text-primary",
  "text-primary",
  "text-primary-foreground"
];

export default function VerticalTimeline({ title, steps }: VerticalTimelineProps) {
  return (
    <section className="py-20 lg:py-32 px-8 bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-20">
          {title}
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = stepIcons[index] || ClipboardCheck;
            return (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-md ${stepColors[index]} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-8 h-8 ${iconColors[index]}`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 flex-1 bg-primary/30 mt-6"></div>
                  )}
                </div>

                <Card className="flex-1 p-6 lg:p-8 mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
