import { Star } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { useI18n } from "@/i18n/context";
import { TESTIMONIALS_I18N } from "@/i18n/translations";
import { TiltCard } from "@/components/ui/TiltCard";

export function Testimonials() {
  const { locale, t } = useI18n();
  const items = TESTIMONIALS_I18N[locale];

  return (
    <Section id="testimonials">
      <SectionHeader eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <TiltCard
            key={it.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-7 cursor-pointer"
          >
            <div className="flex gap-0.5 text-amber-400 mb-4">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-relaxed">&ldquo;{it.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-gradient-primary text-white font-semibold text-sm">
                {it.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="text-sm font-semibold">{it.name}</div>
                <div className="text-xs text-muted-foreground">{it.role}</div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}