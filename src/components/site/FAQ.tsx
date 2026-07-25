import { Section, SectionHeader, Reveal } from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/i18n/context";
import { FAQ_I18N } from "@/i18n/translations";

export function FAQ() {
  const { locale, t } = useI18n();
  const items = FAQ_I18N[locale];

  return (
    <Section id="faq" className="bg-muted/30 border-y border-border/60">
      <SectionHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <AccordionItem
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-soft hover:border-primary/20 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}