import { useState } from "react";
import { Mail, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section, SectionHeader, Reveal } from "./Section";
import { useT } from "@/i18n/context";

export function Contact() {
  const t = useT();
  const [f, setF] = useState({ name: "", clinic: "", phone: "", email: "", message: "" });
  const upd = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nom: ${f.name}\nCabinet: ${f.clinic}\nTéléphone: ${f.phone}\nEmail: ${f.email}\n\n${f.message}`
    );
    window.location.href = `mailto:contact@digicab.ma?subject=${encodeURIComponent("Contact — DigiCab")}&body=${body}`;
  };

  return (
    <Section id="contact">
      <SectionHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} subtitle={t("contact.subtitle")} />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
      <Reveal direction="left"
          className="lg:col-span-3"
        >
          <form
            onSubmit={submit}
            className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-4"
          >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label={t("form.lastName")} value={f.name} onChange={upd("name")} required />
            <Field label={t("form.clinic")} value={f.clinic} onChange={upd("clinic")} />
            <Field label={t("form.phone")} value={f.phone} onChange={upd("phone")} type="tel" />
            <Field label={t("form.email")} value={f.email} onChange={upd("email")} type="email" required />
          </div>
          <div className="space-y-2">
            <Label>{t("form.message")}</Label>
            <Textarea rows={5} value={f.message} onChange={upd("message")} required />
          </div>
            <Button type="submit" className="w-full sm:w-auto bg-gradient-primary text-primary-foreground h-11 px-8">
              {t("contact.send")}
            </Button>
          </form>
        </Reveal>

        <Reveal direction="right" delay={0.1} className="lg:col-span-2 space-y-4">
          <ContactCard icon={<MessageCircle className="size-5" />} label="WhatsApp" value="+212 6 39 28 64 01" href="https://wa.me/212639286401" />
          <ContactCard icon={<Phone className="size-5" />} label={t("form.phone")} value="+212 6 39 28 64 01" href="tel:+212639286401" />
          <ContactCard icon={<Mail className="size-5" />} label={t("form.email")} value="contact@digicab.ma" href="mailto:contact@digicab.ma" />
          <ContactCard icon={<MapPin className="size-5" />} label="Adresse" value={t("contact.address")} />
          <ContactCard icon={<Clock className="size-5" />} label="Horaires" value={t("contact.hours")} />

          <div className="rounded-2xl overflow-hidden border border-border bg-muted h-40 relative">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.56_0.2_262/0.15),oklch(0.72_0.16_165/0.15))]" />
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
              <MapPin className="size-4 me-2" /> Casablanca · Maroc
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input {...props} />
    </div>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-elegant transition-shadow">
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{inner}</a> : inner;
}