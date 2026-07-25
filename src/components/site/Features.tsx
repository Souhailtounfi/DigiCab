import {
  Users, CalendarCheck, Calendar, FileText, Stethoscope, ClipboardList, Activity, CreditCard,
  AlertCircle, UserCog, UserRound, LayoutDashboard, BarChart3, Search, FileDown, DatabaseBackup,
  Lock, Moon, History, Bell, Mail, MessageSquare,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { useI18n } from "@/i18n/context";
import { FEATURES_I18N, FEATURES_KEYS } from "@/i18n/translations";
import { TiltCard } from "@/components/ui/TiltCard";

const ICONS: Record<(typeof FEATURES_KEYS)[number], React.ComponentType<{ className?: string }>> = {
  patients: Users, booking: CalendarCheck, calendar: Calendar, history: FileText,
  consult: Stethoscope, prescriptions: ClipboardList, treatments: Activity, payments: CreditCard,
  unpaid: AlertCircle, secretaries: UserCog, doctors: UserRound, dashboard: LayoutDashboard,
  stats: BarChart3, search: Search, pdf: FileDown, backups: DatabaseBackup, security: Lock,
  darkmode: Moon, audit: History, notifications: Bell, emails: Mail, sms: MessageSquare,
};

export function Features() {
  const { locale, t } = useI18n();
  const dict = FEATURES_I18N[locale];

  return (
    <Section id="features">
      <SectionHeader eyebrow={t("features.eyebrow")} title={t("features.title")} subtitle={t("features.subtitle")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES_KEYS.map((k, i) => {
          const Icon = ICONS[k];
          const item = dict[k];
          return (
            <TiltCard
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="p-6 cursor-pointer"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-white">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold tracking-tight">{item.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.d}</p>
            </TiltCard>
          );
        })}
      </div>
    </Section>
  );
}