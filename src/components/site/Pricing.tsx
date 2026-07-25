import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./Section";
import { useI18n } from "@/i18n/context";
import { PRICING_FEATURES } from "@/i18n/translations";
import { useTrialModal } from "./TrialModalContext";
import { TiltCard } from "@/components/ui/TiltCard";

export function Pricing() {
  const { locale, t } = useI18n();
  const { setOpen } = useTrialModal();
  const feats = PRICING_FEATURES[locale];

  const plans = [
    { id: "starter", name: t("pricing.starter"), desc: t("pricing.starterDesc"), price: "500", suffix: t("pricing.monthly"), features: feats.starter, popular: false },
    { id: "pro", name: t("pricing.pro"), desc: t("pricing.proDesc"), price: "950", suffix: t("pricing.monthly"), features: feats.pro, popular: true },
    { id: "enterprise", name: t("pricing.enterprise"), desc: t("pricing.enterpriseDesc"), price: t("pricing.custom"), suffix: "", features: feats.enterprise, popular: false },
  ];

  return (
    <Section id="pricing">
      <SectionHeader eyebrow={t("pricing.eyebrow")} title={t("pricing.title")} subtitle={t("pricing.subtitle")} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <TiltCard
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            popular={p.popular}
            className={`relative rounded-3xl p-8 cursor-pointer ${
              p.popular ? "md:scale-105" : ""
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-elegant">
                {t("pricing.popular")}
              </span>
            )}
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground min-h-[2.5rem]">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1.5">
              {p.suffix ? (
                <>
                  <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.suffix}</span>
                </>
              ) : (
                <span className="text-3xl font-bold tracking-tight">{p.price}</span>
              )}
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
              className={`mt-6 w-full h-11 ${p.popular ? "bg-gradient-primary text-primary-foreground" : ""}`}
              variant={p.popular ? "default" : "outline"}
            >
              {t("cta.trial")}
            </Button>
            <ul className="mt-6 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="size-4 text-accent shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}