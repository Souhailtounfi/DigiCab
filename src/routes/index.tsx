import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Features } from "@/components/site/Features";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Workflow } from "@/components/site/Workflow";
import { FloatingGallery } from "@/components/site/FloatingGallery";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const SITE_URL = "https://clini-cab.vercel.app";

const PAGE_TITLE =
  "CliniCab | Logiciel de gestion de cabinet médical au Maroc";

const PAGE_DESCRIPTION =
  "CliniCab simplifie la gestion des cabinets médicaux au Maroc : patients, rendez-vous, consultations, ordonnances, paiements et statistiques.";

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "CliniCab",
      alternateName: "CliniCab Maroc",
      url: `${SITE_URL}/`,
      inLanguage: "fr-MA",
    },

    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CliniCab",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-v2.png`,
      },
      areaServed: {
        "@type": "Country",
        name: "Morocco",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+212639286401",
        contactType: "sales",
        areaServed: "MA",
        availableLanguage: ["French", "Arabic", "English"],
      },
    },

    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/#application`,
      name: "CliniCab",
      url: `${SITE_URL}/`,
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser",
      inLanguage: ["fr-MA", "ar-MA", "en"],
      description: PAGE_DESCRIPTION,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      featureList: [
        "Gestion des patients",
        "Gestion des rendez-vous",
        "Agenda médical",
        "Gestion des consultations",
        "Création d'ordonnances",
        "Suivi des paiements",
        "Statistiques du cabinet",
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: PAGE_DESCRIPTION,
      },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      // Open Graph
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "CliniCab",
      },
      {
        property: "og:locale",
        content: "fr_MA",
      },
      {
        property: "og:title",
        content: PAGE_TITLE,
      },
      {
        property: "og:description",
        content: PAGE_DESCRIPTION,
      },
      {
        property: "og:url",
        content: `${SITE_URL}/`,
      },
      {
        property: "og:image",
        content: `${SITE_URL}/logo-v2.png`,
      },
      {
        property: "og:image:alt",
        content: "Logo de CliniCab",
      },

      // X / Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: PAGE_TITLE,
      },
      {
        name: "twitter:description",
        content: PAGE_DESCRIPTION,
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/logo-v2.png`,
      },
      {
        name: "twitter:image:alt",
        content: "Logo de CliniCab",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: `${SITE_URL}/`,
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen bg-background text-foreground antialiased [font-family:Inter,system-ui,sans-serif]">
        <Navbar />

        <main>
          <Hero />
          <Trust />
          <FloatingGallery />
          <Features />
          <WhyChoose />
          <Workflow />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}