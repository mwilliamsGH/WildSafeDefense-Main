interface TimelineStep {
  label: string;
  description: string;
}

interface HorizontalTimelineProps {
  title: string;
  steps: TimelineStep[];
}

export default function HorizontalTimeline({ title, steps }: HorizontalTimelineProps) {
  return (
    <section className="py-20 lg:py-32 px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          {title}
        </h2>

        <div className="relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10">
                    <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                  </div>

                  <div className="text-lg font-semibold text-primary mb-2">
                    {step.label}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-border mx-auto my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
