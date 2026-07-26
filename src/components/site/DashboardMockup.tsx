import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, TrendingUp, Users, FileText, Bell, CheckCircle2, CreditCard } from "lucide-react";

export function DashboardMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Motion values for rotation (maximum 4 degrees for subtle premium movement on large container)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [4, -4]), { damping: 30, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-4, 4]), { damping: 30, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" aria-hidden />
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          x.set(0.5);
          y.set(0.5);
        }}
        style={{
          rotateX: hovered ? rotateX : 0,
          rotateY: hovered ? rotateY : 0,
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative rounded-2xl border border-border/60 bg-card shadow-glow overflow-hidden cursor-pointer"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-yellow-400" />
            <span className="size-2.5 rounded-full bg-green-400" />
          </div>
          <div className="mx-auto text-[10px] text-muted-foreground font-mono">CliniCab.ma / dashboard</div>
        </div>
        <div className="grid grid-cols-12 gap-3 p-4 bg-background/60" style={{ transform: "translateZ(10px)" }}>
          {/* sidebar */}
          <div className="col-span-2 space-y-1.5">
            {["Dashboard", "Patients", "Agenda", "Consultations", "Paiements", "Statistiques"].map((it, i) => (
              <div key={it} className={`text-[9px] px-2 py-1.5 rounded-md ${i === 0 ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground"}`}>
                {it}
              </div>
            ))}
          </div>
          {/* main */}
          <div className="col-span-10 space-y-3">
            <div className="grid grid-cols-4 gap-2">
              <StatCard icon={<Users className="size-3" />} label="Patients" value="1 248" trend="+12%" />
              <StatCard icon={<Calendar className="size-3" />} label="RDV aujourd'hui" value="24" trend="+3" />
              <StatCard icon={<CreditCard className="size-3" />} label="Revenus" value="48 200" trend="+18%" />
              <StatCard icon={<CheckCircle2 className="size-3" />} label="Terminés" value="187" trend="+9%" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 rounded-lg border border-border/60 bg-card p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] font-semibold">Consultations · 7 derniers jours</div>
                  <div className="text-[9px] text-accent flex items-center gap-1"><TrendingUp className="size-2.5" />+24%</div>
                </div>
                <MiniChart />
              </div>
              <div className="rounded-lg border border-border/60 bg-card p-3 space-y-1.5">
                <div className="text-[10px] font-semibold flex items-center gap-1"><Bell className="size-2.5" />Notifications</div>
                {["Nouveau RDV · Dr. Amine", "Paiement reçu · 850 MAD", "Ordonnance signée"].map((n) => (
                  <div key={n} className="text-[8px] text-muted-foreground rounded-md bg-muted/50 px-1.5 py-1">{n}</div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-border/60 bg-card p-3">
                <div className="text-[10px] font-semibold mb-2">Rendez-vous du jour</div>
                <div className="space-y-1.5">
                  {[
                    { t: "09:00", n: "Sara Bennani", s: "Consultation" },
                    { t: "10:30", n: "Youssef Idrissi", s: "Contrôle" },
                    { t: "14:15", n: "Nadia El Kabir", s: "Détartrage" },
                  ].map((r) => (
                    <div key={r.t} className="flex items-center gap-2 text-[9px]">
                      <span className="font-mono text-primary">{r.t}</span>
                      <span className="flex-1 font-medium truncate">{r.n}</span>
                      <span className="text-muted-foreground">{r.s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border/60 bg-card p-3">
                <div className="text-[10px] font-semibold flex items-center gap-1 mb-2"><FileText className="size-2.5" />Dossiers récents</div>
                <div className="space-y-1.5">
                  {["Ordonnance · Amoxicilline", "Bilan sanguin · S. Bennani", "Radiographie · Y. Idrissi"].map((r) => (
                    <div key={r} className="text-[9px] text-muted-foreground truncate">{r}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -left-4 md:-left-8 top-1/3 rounded-xl bg-card border border-border shadow-elegant p-3 hidden sm:block pointer-events-none select-none"
      >
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-accent/20 text-accent">
            <CheckCircle2 className="size-4" />
          </div>
          <div>
            <div className="text-[10px] font-semibold">Paiement confirmé</div>
            <div className="text-[9px] text-muted-foreground">850 MAD · Sara B.</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -right-4 md:-right-8 bottom-8 rounded-xl bg-card border border-border shadow-elegant p-3 hidden sm:block pointer-events-none select-none"
      >
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Bell className="size-4" />
          </div>
          <div>
            <div className="text-[10px] font-semibold">Rappel envoyé</div>
            <div className="text-[9px] text-muted-foreground">24 patients · aujourd'hui</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ icon, label, value, trend }: { icon: React.ReactNode; label: string; value: string; trend: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-card p-2.5">
      <div className="flex items-center gap-1 text-[8px] text-muted-foreground mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-sm font-bold tracking-tight">{value}</div>
      <div className="text-[8px] text-accent font-medium">{trend}</div>
    </div>
  );
}

function MiniChart() {
  const pts = [30, 42, 38, 55, 48, 68, 82];
  const max = Math.max(...pts);
  const w = 240, h = 60;
  const step = w / (pts.length - 1);
  const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (v / max) * h}`).join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-14">
      <defs>
        <linearGradient id="cf-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.56 0.2 262)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.56 0.2 262)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#cf-area)" />
      <path d={path} fill="none" stroke="oklch(0.56 0.2 262)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((v, i) => (
        <circle key={i} cx={i * step} cy={h - (v / max) * h} r="1.5" fill="oklch(0.56 0.2 262)" />
      ))}
    </svg>
  );
}