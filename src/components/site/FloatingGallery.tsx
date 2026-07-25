import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarCheck, UserRound, BarChart3, FileDown,
  ArrowRight,
} from "lucide-react";
import { useT } from "@/i18n/context";

/* -------------------------------------------------------------------------- */
/* Feature data with light & dark theme styling                                */
/* -------------------------------------------------------------------------- */
const FEATURES = [
  {
    id: "agenda",
    src: "/img-agenda.png",
    label: "Agenda intelligent",
    desc: "Planifiez, confirmez et gérez tous vos rendez-vous depuis un seul endroit. Vue jour, semaine ou mois — multi-praticiens, glisser-déposer.",
    Icon: CalendarCheck,
    align: "right" as const,
    bgGradient: "bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-950/50 dark:via-indigo-950/30 dark:to-background",
    accent: "oklch(0.56 0.2 262)",
  },
  {
    id: "patient",
    src: "/img-patient.png",
    label: "Dossier patient complet",
    desc: "Chaque patient a son propre dossier numérique — consultations, ordonnances, traitements, historique, tout est là, toujours à portée de clic.",
    Icon: UserRound,
    align: "left" as const,
    bgGradient: "bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent dark:from-purple-950/50 dark:via-violet-950/30 dark:to-background",
    accent: "oklch(0.62 0.2 295)",
  },
  {
    id: "stats",
    src: "/img-stats.png",
    label: "Statistiques & revenus",
    desc: "Suivez vos performances en temps réel. Graphiques clairs, indicateurs financiers, taux de présence — tout ce qu'il vous faut pour piloter votre cabinet.",
    Icon: BarChart3,
    align: "right" as const,
    bgGradient: "bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-950/50 dark:via-teal-950/30 dark:to-background",
    accent: "oklch(0.66 0.18 165)",
  },
  {
    id: "prescription",
    src: "/img-prescription.png",
    label: "Ordonnances en un clic",
    desc: "Générez des ordonnances PDF en quelques secondes. Modèles personnalisables, signature numérique, prêt à imprimer ou à envoyer par email.",
    Icon: FileDown,
    align: "left" as const,
    bgGradient: "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent dark:from-amber-950/50 dark:via-orange-950/30 dark:to-background",
    accent: "oklch(0.72 0.18 55)",
  },
];

/* -------------------------------------------------------------------------- */
/* Individual scroll-driven panel                                              */
/* -------------------------------------------------------------------------- */
function FeaturePanel({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isRight = feature.align === "right";
  const { Icon } = feature;

  /* Parallax — image drifts slower than scroll */
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  /* Clip-path reveal on image */
  const clipReveal = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    [
      isRight ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
      "inset(0 0% 0 0%)",
    ]
  );

  /* Text entrance */
  const textX = useTransform(scrollYProgress, [0.05, 0.35], [isRight ? -50 : 50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);

  return (
    <div
      ref={ref}
      className={`relative min-h-[500px] md:min-h-[580px] flex items-center overflow-hidden border-b border-border/40 py-16 md:py-24 ${feature.bgGradient}`}
    >
      {/* Accent glow blob — adapts to theme */}
      <div
        className="absolute pointer-events-none rounded-full blur-[130px] opacity-25 dark:opacity-20"
        style={{
          background: feature.accent,
          width: 480,
          height: 480,
          top: "50%",
          [isRight ? "left" : "right"]: "-10%",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`flex flex-col gap-10 lg:gap-16 items-center ${
            isRight ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* ── Image pane ── */}
          <div className="w-full lg:w-1/2 shrink-0">
            <motion.div
              style={{ clipPath: clipReveal }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-border/60 bg-card"
            >
              {/* Inner parallax container */}
              <motion.div style={{ y: imageY }}>
                <img
                  src={feature.src}
                  alt={feature.label}
                  className="w-full object-cover"
                  style={{ height: 350, objectPosition: "top", display: "block" }}
                  draggable={false}
                />
              </motion.div>

              {/* Gradient fade overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-t from-card to-transparent opacity-80" />
            </motion.div>
          </div>

          {/* ── Text pane ── */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
            className="w-full lg:w-1/2"
          >
            {/* Step number */}
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: feature.accent }}
            >
              {String(index + 1).padStart(2, "0")}
            </p>

            {/* Icon chip */}
            <div
              className="inline-flex items-center justify-center size-12 rounded-2xl mb-5 shadow-sm"
              style={{
                background: `${feature.accent}18`,
                border: `1px solid ${feature.accent}33`,
              }}
            >
              <Icon className="size-5" style={{ color: feature.accent }} />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
              {feature.label}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              {feature.desc}
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity group"
            >
              En savoir plus
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main section                                                               */
/* -------------------------------------------------------------------------- */
export function FloatingGallery() {
  const t = useT();

  return (
    <section id="gallery" className="overflow-hidden">
      {/* Section Header */}
      <div className="py-16 md:py-20 text-center px-4 bg-muted/30 border-y border-border/60">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Aperçu
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto text-foreground">
            {t("screens.title")}
          </h2>
        </motion.div>
      </div>

      {/* Full-bleed feature panels */}
      {FEATURES.map((feature, i) => (
        <FeaturePanel key={feature.id} feature={feature} index={i} />
      ))}
    </section>
  );
}
