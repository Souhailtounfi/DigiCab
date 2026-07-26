import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/context";
import { useTrialModal } from "./TrialModalContext";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  const t = useT();
  const { setOpen } = useTrialModal();
  const wa = () => window.open(`https://wa.me/212639286401?text=${encodeURIComponent("Bonjour CliniCab")}`, "_blank");

  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* animated gradient bg */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[600px] -z-10" aria-hidden>
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,oklch(0.56_0.2_262/0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.56_0.2_262/0.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" />
            {t("hero.badge")}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            {t("hero.title").split(",")[0]},
            <br />
            <span className="text-gradient">{t("hero.title").split(",").slice(1).join(",").trim()}</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">{t("hero.subtitle")}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              onClick={() => setOpen(true)}
              className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-95 h-12 px-6 group"
            >
              {t("cta.trial")}
              <ArrowRight className="size-4 ms-1 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" onClick={wa} className="h-12 px-6 gap-2">
              <MessageCircle className="size-4 text-[#25D366]" />
              {t("cta.whatsapp")}
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-accent" />
            RGPD · ISO 27001 · Hébergement souverain
          </div>


        </motion.div>

        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}