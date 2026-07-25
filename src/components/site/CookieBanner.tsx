import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/context";

export function CookieBanner() {
  const t = useT();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const v = localStorage.getItem("cf-cookies");
    if (!v) setTimeout(() => setVisible(true), 1200);
  }, []);
  const close = (choice: "accept" | "decline") => {
    localStorage.setItem("cf-cookies", choice);
    setVisible(false);
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-4 shadow-glow"
        >
          <p className="text-sm text-muted-foreground">{t("cookies.text")}</p>
          <div className="mt-3 flex gap-2">
            <Button size="sm" onClick={() => close("accept")} className="bg-gradient-primary text-primary-foreground">
              {t("cookies.accept")}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => close("decline")}>
              {t("cookies.decline")}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}