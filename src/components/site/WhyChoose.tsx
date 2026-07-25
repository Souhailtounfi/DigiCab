import { Clock, BellRing, Sparkles, FileText, ShieldCheck, MousePointerClick } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { useI18n } from "@/i18n/context";
import { WHY_I18N, WHY_KEYS } from "@/i18n/translations";
import { TiltCard } from "@/components/ui/TiltCard";

const ICONS = {
  time: Clock, noshows: BellRing, org: Sparkles, history: FileText, secure: ShieldCheck, ux: MousePointerClick,
};

export function WhyChoose() {
  const { locale, t } = useI18n();
  const dict = WHY_I18N[locale];

  return (
    <Section id="why" className="bg-muted/30 border-y border-border/60">
      <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_KEYS.map((k, i) => {
          const Icon = ICONS[k];
          const item = dict[k];
          return (
            <TiltCard
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative overflow-hidden cursor-pointer"
            >
              <div className="absolute -top-8 -end-8 size-32 rounded-full bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elegant">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </Section>
  );
}