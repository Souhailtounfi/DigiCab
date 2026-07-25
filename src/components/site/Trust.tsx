import { motion } from "framer-motion";
import { useT } from "@/i18n/context";

const LOGOS = ["Clinique Atlas", "Centre Médical Anfa", "Dental Studio", "Vita Health", "MedCare+", "PolyClinic"];

export function Trust() {
  const t = useT();
  return (
    <section className="border-y border-border/60 bg-muted/30 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold">{t("trust.title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("trust.subtitle")}</p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-4">
          {LOGOS.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center h-12 text-sm font-semibold text-muted-foreground/70 hover:text-foreground transition-colors tracking-tight"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}