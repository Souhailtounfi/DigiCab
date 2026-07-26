import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useT } from "@/i18n/context";
import { useTrialModal } from "./TrialModalContext";

const WHATSAPP = "212639286401";
const EMAIL_TO = "contact@CliniCab.ma";

export function TrialModal() {
  const t = useT();
  const { open, setOpen } = useTrialModal();
  const [f, setF] = useState({
    firstName: "", lastName: "", clinic: "", specialty: "",
    phone: "", email: "", city: "", practitioners: "", message: "",
  });

  const upd = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Prénom: ${f.firstName}\nNom: ${f.lastName}\nCabinet: ${f.clinic}\nSpécialité: ${f.specialty}\n` +
      `Téléphone: ${f.phone}\nEmail: ${f.email}\nVille: ${f.city}\nPraticiens: ${f.practitioners}\n\n${f.message}`
    );
    window.location.href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent("Essai gratuit — CliniCab")}&body=${body}`;
  };

  const wa = () => {
    const msg = encodeURIComponent("Bonjour CliniCab, je souhaite démarrer un essai gratuit.");
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("form.trialTitle")}</DialogTitle>
          <DialogDescription>{t("form.trialSubtitle")}</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Field label={t("form.firstName")} value={f.firstName} onChange={upd("firstName")} required />
          <Field label={t("form.lastName")} value={f.lastName} onChange={upd("lastName")} required />
          <Field label={t("form.clinic")} value={f.clinic} onChange={upd("clinic")} />
          <Field label={t("form.specialty")} value={f.specialty} onChange={upd("specialty")} />
          <Field label={t("form.phone")} value={f.phone} onChange={upd("phone")} type="tel" required />
          <Field label={t("form.email")} value={f.email} onChange={upd("email")} type="email" required />
          <Field label={t("form.city")} value={f.city} onChange={upd("city")} />
          <Field label={t("form.practitioners")} value={f.practitioners} onChange={upd("practitioners")} type="number" />
          <div className="sm:col-span-2 space-y-2">
            <Label>{t("form.message")}</Label>
            <Textarea rows={3} value={f.message} onChange={upd("message")} />
          </div>
          <Button type="submit" className="sm:col-span-2 bg-gradient-primary text-primary-foreground h-11">
            {t("form.submit")}
          </Button>
        </form>
        <div className="mt-2 pt-4 border-t text-center space-y-3">
          <p className="text-sm text-muted-foreground">{t("form.orWhatsapp")}</p>
          <Button onClick={wa} variant="outline" className="w-full h-11 border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 gap-2">
            <MessageCircle className="size-5" />
            WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
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