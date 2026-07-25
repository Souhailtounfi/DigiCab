import { UserPlus, CalendarPlus, DoorOpen, Stethoscope, ClipboardList, CreditCard, Archive } from "lucide-react";
import { Section, SectionHeader, Reveal } from "./Section";
import { useI18n } from "@/i18n/context";
import { WORKFLOW_I18N } from "@/i18n/translations";

const ICONS = [UserPlus, CalendarPlus, DoorOpen, Stethoscope, ClipboardList, CreditCard, Archive];

export function Workflow() {
  const { locale, t } = useI18n();
  const steps = WORKFLOW_I18N[locale];

  return (
    <Section>
      <SectionHeader eyebrow={t("workflow.eyebrow")} title={t("workflow.title")} subtitle={t("workflow.subtitle")} />
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {steps.map((label, i) => {
            const Icon = ICONS[i] ?? UserPlus;
            return (
              <Reveal key={label} delay={i * 0.07} direction="up" className="text-center">
                <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:border-primary/30 transition-all duration-300 group">
                  <Icon className="size-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -top-2 -end-2 flex size-6 items-center justify-center rounded-full bg-gradient-primary text-[10px] font-bold text-white shadow-elegant">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-3 text-sm font-medium">{label}</div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}