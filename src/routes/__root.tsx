import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/i18n/context";
import { ThemeProvider } from "@/lib/theme";
import { TrialModalProvider } from "@/components/site/TrialModalContext";
import { TrialModal } from "@/components/site/TrialModal";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { BackToTop } from "@/components/site/BackToTop";
import { CookieBanner } from "@/components/site/CookieBanner";
import { MagneticCursor } from "@/components/site/MagneticCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page non trouvée</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Impossible de charger la page
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur est survenue. Veuillez réessayer ou retourner à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "CliniCab",
      "alternateName": "CliniCab Maroc",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web, iOS, Android, Windows, macOS",
      "url": "https://CliniCab.ma",
      "description": "CliniCab est la plateforme N°1 au Maroc pour la gestion de cabinets médicaux et dentaires: dossiers patients, agenda intelligent, ordonnances PDF, consultations, facturation et statistiques.",
      "offers": {
        "@type": "Offer",
        "price": "500",
        "priceCurrency": "MAD"
      }
    },
    {
      "@type": "Organization",
      "name": "CliniCab",
      "url": "https://CliniCab.ma",
      "logo": "https://CliniCab.ma/logo.png",
      "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212639286401",
        "contactType": "sales",
        "areaServed": "MA",
        "availableLanguage": ["French", "Arabic", "English"]
      }
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CliniCab — Logiciel de Gestion de Cabinet Médical au Maroc" },
      {
        name: "description",
        content:
          "CliniCab est le logiciel N°1 au Maroc pour la gestion intégrée des cabinets médicaux et dentaires: gestion des patients, agenda intelligent, ordonnances PDF, consultations et facturation.",
      },
      {
        name: "keywords",
        content:
          "CliniCab, CliniCab Maroc, logiciel cabinet médical Maroc, gestion cabinet dentaire, logiciel médecin Maroc, dossier patient électronique, ordonnance médicale PDF, agenda médical Casablanca, gestion consultation médicale",
      },
      { name: "author", content: "CliniCab" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#4f46e5" },

      /* Open Graph / Facebook */
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CliniCab" },
      { property: "og:title", content: "CliniCab — Logiciel de Gestion de Cabinet Médical au Maroc" },
      {
        property: "og:description",
        content:
          "Centralisez vos patients, rendez-vous, consultations, ordonnances et paiements avec CliniCab. Essai gratuit disponible.",
      },
      { property: "og:image", content: "https://CliniCab.ma/logo.png" },

      /* Twitter */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@CliniCab" },
      { name: "twitter:title", content: "CliniCab — Logiciel de Gestion de Cabinet Médical au Maroc" },
      { name: "twitter:description", content: "Centralisez vos patients, rendez-vous, consultations et ordonnances avec CliniCab. Essai gratuit disponible." },
      { name: "twitter:image", content: "https://CliniCab.ma/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://CliniCab.ma/" },
      { rel: "icon", href: "/favicon-v2.ico" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <TrialModalProvider>
            <Outlet />
            <TrialModal />
            <WhatsAppFloat />
            <BackToTop />
            <CookieBanner />
            <MagneticCursor />
          </TrialModalProvider>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
