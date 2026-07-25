import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { useI18n } from "@/i18n/context";
import { DashboardMockup } from "./DashboardMockup";

const TABS_I18N = {
  fr: ["Dashboard", "Patients", "Agenda", "Ordonnance", "Paiements", "Historique", "Statistiques"],
  en: ["Dashboard", "Patients", "Calendar", "Prescription", "Payments", "History", "Analytics"],
  ar: ["اللوحة", "المرضى", "الأجندة", "الوصفة", "المدفوعات", "السجل", "الإحصائيات"],
} as const;

export function Screenshots() {
  const { locale, t } = useI18n();
  const tabs = TABS_I18N[locale];
  const [active, setActive] = useState(0);

  return (
    <Section className="bg-muted/30 border-y border-border/60">
      <SectionHeader eyebrow={t("screens.eyebrow")} title={t("screens.title")} />
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((label, i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === i
                ? "bg-gradient-primary text-white shadow-elegant"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-5xl mx-auto"
      >
        <DashboardMockup />
      </motion.div>
    </Section>
  );
}