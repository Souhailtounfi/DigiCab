export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-sm border border-primary/20 dark:border-primary/40 overflow-hidden">
        <img
          src="/logo.png"
          alt="CliniCab Logo"
          className="size-full object-cover rounded-lg"
          onError={(e) => {
            // fallback to favicon if logo fails to load
            (e.target as HTMLImageElement).src = "/favicon-v2.ico";
          }}
        />
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Clini<span className="text-gradient">Cab</span>
      </span>
    </div>
  );
}