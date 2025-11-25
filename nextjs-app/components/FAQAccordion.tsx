import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export default function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-l-2 border-primary pl-4"
        >
          <AccordionTrigger className="text-left text-base lg:text-lg font-semibold hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
