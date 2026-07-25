import { useT } from "@/i18n/context";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SOCIALS = [
  { label: "X", path: "M18.244 2H21l-6.52 7.45L22 22h-6.828l-4.77-6.44L4.8 22H2.045l6.98-7.98L2 2h6.914l4.31 5.86L18.244 2Zm-1.19 18h1.83L7.02 4H5.05l12.005 16Z" },
  { label: "LinkedIn", path: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8h4.53v14H.24V8Zm7.5 0h4.34v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V22h-4.52v-6.14c0-1.46-.02-3.34-2.04-3.34-2.04 0-2.36 1.6-2.36 3.24V22H7.74V8Z" },
  { label: "Instagram", path: "M12 2.2c3.2 0 3.58.012 4.85.07 1.17.054 1.8.25 2.22.415.56.217.96.477 1.38.9.42.42.68.82.9 1.38.164.42.36 1.05.414 2.22.058 1.27.07 1.65.07 4.85s-.012 3.58-.07 4.85c-.054 1.17-.25 1.8-.415 2.22-.217.56-.477.96-.9 1.38-.42.42-.82.68-1.38.9-.42.164-1.05.36-2.22.414-1.27.058-1.65.07-4.85.07s-3.58-.012-4.85-.07c-1.17-.054-1.8-.25-2.22-.415-.56-.217-.96-.477-1.38-.9-.42-.42-.68-.82-.9-1.38-.164-.42-.36-1.05-.414-2.22C2.212 15.58 2.2 15.2 2.2 12s.012-3.58.07-4.85c.054-1.17.25-1.8.415-2.22.217-.56.477-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.164 1.05-.36 2.22-.414C8.42 2.212 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.75.068-1.03.047-1.59.22-1.96.365-.49.19-.84.42-1.21.78-.36.37-.59.72-.78 1.21-.145.37-.318.93-.365 1.96C3.01 8.5 3 8.85 3 12s.01 3.5.068 4.75c.047 1.03.22 1.59.365 1.96.19.49.42.84.78 1.21.37.36.72.59 1.21.78.37.145.93.318 1.96.365C8.5 20.99 8.85 21 12 21s3.5-.01 4.75-.068c1.03-.047 1.59-.22 1.96-.365.49-.19.84-.42 1.21-.78.36-.37.59-.72.78-1.21.145-.37.318-.93.365-1.96C20.99 15.5 21 15.15 21 12s-.01-3.5-.068-4.75c-.047-1.03-.22-1.59-.365-1.96-.19-.49-.42-.84-.78-1.21-.37-.36-.72-.59-1.21-.78-.37-.145-.93-.318-1.96-.365C15.5 3.01 15.15 3 12 3Zm0 3.3a5.7 5.7 0 1 1 0 11.4 5.7 5.7 0 0 1 0-11.4Zm0 9.4a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4Zm5.9-9.6a1.33 1.33 0 1 1-2.66 0 1.33 1.33 0 0 1 2.66 0Z" },
  { label: "Facebook", path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94Z" },
];

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  const cols = [
    {
      title: t("footer.product"),
      links: [
        { l: t("footer.features"), h: "#features" },
        { l: t("footer.pricing"), h: "#pricing" },
        { l: t("nav.testimonials"), h: "#testimonials" },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { l: "FAQ", h: "#faq" },
        { l: t("footer.contact"), h: "#contact" },
        { l: "WhatsApp", h: "https://wa.me/212639286401" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { l: t("footer.privacy"), h: "#" },
        { l: t("footer.terms"), h: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.l}>
                    <a href={l.h} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {year} DigiCab. {t("footer.rights")}</p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}