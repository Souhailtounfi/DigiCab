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

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
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
  );
}
