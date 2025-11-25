import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQAccordion from "./FAQAccordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSnapshotProps {
  sectionTitle: string;
  faqs: FAQ[];
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  reverse?: boolean;
}

export default function FAQSnapshot({
  sectionTitle,
  faqs,
  ctaText,
  ctaLink,
  backgroundImage,
  reverse = false,
}: FAQSnapshotProps) {
  const content = (
    <div className="bg-card px-6 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-32 flex items-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 sm:mb-12">
          {sectionTitle}
        </h2>

        <FAQAccordion faqs={faqs} />

        <div className="mt-8 sm:mt-12">
          <Link href={ctaLink}>
            <Button size="lg" className="w-full sm:w-auto min-h-12 px-8">
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  const image = (
    <div
      className="bg-cover bg-center min-h-[300px] sm:min-h-[400px] lg:min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );

  return (
    <div className="grid lg:grid-cols-2">
      {reverse ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}
