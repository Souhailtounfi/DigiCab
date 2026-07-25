import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as cn, b as useTheme, c as Label, d as Textarea, g as WORKFLOW_I18N, h as WHY_KEYS, i as FEATURES_KEYS, l as PRICING_FEATURES, m as WHY_I18N, n as FAQ_I18N, o as Input, r as FEATURES_I18N, s as LOCALES, t as Button, u as TESTIMONIALS_I18N, v as useI18n, x as useTrialModal, y as useT } from "./textarea-AbT1Lx8u.mjs";
import { A as Clock, B as CalendarPlus, C as History, D as DoorOpen, E as FileDown, F as ChevronRight, G as ArrowRight, H as Bell, I as ChevronDown, K as Archive, L as Check, M as Circle, N as CircleCheck, O as DatabaseBackup, P as CircleAlert, R as ChartColumn, S as LayoutDashboard, T as FileText, U as BellRing, V as CalendarCheck, _ as MessageCircle, a as UserCog, b as Mail, c as Stethoscope, d as ShieldCheck, f as Search, g as MessageSquare, h as Moon, i as UserPlus, j as ClipboardList, k as CreditCard, l as Star, m as MousePointerClick, n as Users, o as TrendingUp, p as Phone, q as Activity, r as UserRound, s as Sun, t as X, u as Sparkles, v as Menu, w as Globe, x as Lock, y as MapPin, z as Calendar } from "../_libs/lucide-react.mjs";
import { a as motion, i as useScroll, n as useTransform, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
import { a as Label2, c as Root2$1, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2$1, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-aWWXDx8C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DropdownMenu = Root2$1;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function LanguageSwitcher() {
	const { locale, setLocale } = useI18n();
	const current = LOCALES.find((l) => l.code === locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			size: "sm",
			className: "gap-1.5 rounded-full font-medium",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-wide",
				children: current.code
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		align: "end",
		className: "min-w-[180px]",
		children: LOCALES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onClick: () => setLocale(l.code),
			className: locale === l.code ? "bg-accent/40" : "",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mr-2",
				children: l.flag
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label })]
		}, l.code))
	})] });
}
function ThemeToggle() {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggle,
		"aria-label": "Toggle theme",
		className: "rounded-full",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
	});
}
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-2.5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-sm border border-primary/20 dark:border-primary/40 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/logo.png",
				alt: "DigiCab Logo",
				className: "size-full object-cover rounded-lg",
				onError: (e) => {
					e.target.src = "/favicon.ico";
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xl font-bold tracking-tight text-foreground",
			children: ["Digi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "Cab"
			})]
		})]
	});
}
var NAV_ITEMS = [
	{
		key: "nav.home",
		href: "#home"
	},
	{
		key: "nav.features",
		href: "#features"
	},
	{
		key: "nav.solutions",
		href: "#why"
	},
	{
		key: "nav.pricing",
		href: "#pricing"
	},
	{
		key: "nav.testimonials",
		href: "#testimonials"
	},
	{
		key: "nav.faq",
		href: "#faq"
	},
	{
		key: "nav.contact",
		href: "#contact"
	}
];
function Navbar() {
	const t = useT();
	const { setOpen } = useTrialModal();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 8);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .4 },
		className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: t(item.key)
					}, item.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setOpen(true),
							className: "hidden md:inline-flex bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-95",
							children: t("cta.demo")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							onClick: () => setMobileOpen((v) => !v),
							"aria-label": "Menu",
							children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1",
				children: [NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setMobileOpen(false),
					className: "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground",
					children: t(item.key)
				}, item.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setMobileOpen(false);
						setOpen(true);
					},
					className: "mt-2 bg-gradient-primary text-primary-foreground",
					children: t("cta.demo")
				})]
			})
		})]
	});
}
function DashboardMockup() {
	const ref = (0, import_react.useRef)(null);
	const [hovered, setHovered] = (0, import_react.useState)(false);
	const x = useMotionValue(.5);
	const y = useMotionValue(.5);
	const rotateX = useSpring(useTransform(y, [0, 1], [4, -4]), {
		damping: 30,
		stiffness: 150
	});
	const rotateY = useSpring(useTransform(x, [0, 1], [-4, 4]), {
		damping: 30,
		stiffness: 150
	});
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -inset-6 rounded-3xl bg-gradient-primary opacity-20 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				ref,
				onMouseMove: handleMouseMove,
				onMouseEnter: () => setHovered(true),
				onMouseLeave: () => {
					setHovered(false);
					x.set(.5);
					y.set(.5);
				},
				style: {
					rotateX: hovered ? rotateX : 0,
					rotateY: hovered ? rotateY : 0,
					transformStyle: "preserve-3d",
					perspective: 1200
				},
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					delay: .2
				},
				className: "relative rounded-2xl border border-border/60 bg-card shadow-glow overflow-hidden cursor-pointer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-red-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-yellow-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-green-400" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto text-[10px] text-muted-foreground font-mono",
						children: "digicab.ma / dashboard"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-12 gap-3 p-4 bg-background/60",
					style: { transform: "translateZ(10px)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2 space-y-1.5",
						children: [
							"Dashboard",
							"Patients",
							"Agenda",
							"Consultations",
							"Paiements",
							"Statistiques"
						].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `text-[9px] px-2 py-1.5 rounded-md ${i === 0 ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground"}`,
							children: it
						}, it))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-10 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-4 gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3" }),
										label: "Patients",
										value: "1 248",
										trend: "+12%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3" }),
										label: "RDV aujourd'hui",
										value: "24",
										trend: "+3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-3" }),
										label: "Revenus",
										value: "48 200",
										trend: "+18%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }),
										label: "Terminés",
										value: "187",
										trend: "+9%"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2 rounded-lg border border-border/60 bg-card p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-semibold",
											children: "Consultations · 7 derniers jours"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[9px] text-accent flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-2.5" }), "+24%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniChart, {})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border/60 bg-card p-3 space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] font-semibold flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-2.5" }), "Notifications"]
									}), [
										"Nouveau RDV · Dr. Amine",
										"Paiement reçu · 850 MAD",
										"Ordonnance signée"
									].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[8px] text-muted-foreground rounded-md bg-muted/50 px-1.5 py-1",
										children: n
									}, n))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border/60 bg-card p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-semibold mb-2",
										children: "Rendez-vous du jour"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-1.5",
										children: [
											{
												t: "09:00",
												n: "Sara Bennani",
												s: "Consultation"
											},
											{
												t: "10:30",
												n: "Youssef Idrissi",
												s: "Contrôle"
											},
											{
												t: "14:15",
												n: "Nadia El Kabir",
												s: "Détartrage"
											}
										].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-[9px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-primary",
													children: r.t
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex-1 font-medium truncate",
													children: r.n
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: r.s
												})
											]
										}, r.t))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border/60 bg-card p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] font-semibold flex items-center gap-1 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-2.5" }), "Dossiers récents"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-1.5",
										children: [
											"Ordonnance · Amoxicilline",
											"Bilan sanguin · S. Bennani",
											"Radiographie · Y. Idrissi"
										].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9px] text-muted-foreground truncate",
											children: r
										}, r))
									})]
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: -20,
					y: 20
				},
				animate: {
					opacity: 1,
					x: 0,
					y: 0
				},
				transition: { delay: .6 },
				className: "absolute -left-4 md:-left-8 top-1/3 rounded-xl bg-card border border-border shadow-elegant p-3 hidden sm:block pointer-events-none select-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-8 items-center justify-center rounded-lg bg-accent/20 text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-semibold",
						children: "Paiement confirmé"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[9px] text-muted-foreground",
						children: "850 MAD · Sara B."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: 20,
					y: -20
				},
				animate: {
					opacity: 1,
					x: 0,
					y: 0
				},
				transition: { delay: .8 },
				className: "absolute -right-4 md:-right-8 bottom-8 rounded-xl bg-card border border-border shadow-elegant p-3 hidden sm:block pointer-events-none select-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-semibold",
						children: "Rappel envoyé"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[9px] text-muted-foreground",
						children: "24 patients · aujourd'hui"
					})] })]
				})
			})
		]
	});
}
function StatCard({ icon, label, value, trend }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border/60 bg-card p-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 text-[8px] text-muted-foreground mb-1",
				children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-bold tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[8px] text-accent font-medium",
				children: trend
			})
		]
	});
}
function MiniChart() {
	const pts = [
		30,
		42,
		38,
		55,
		48,
		68,
		82
	];
	const max = Math.max(...pts);
	const w = 240, h = 60;
	const step = w / (pts.length - 1);
	const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - v / max * h}`).join(" ");
	const area = `${path} L ${w} ${h} L 0 ${h} Z`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "w-full h-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "cf-area",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.56 0.2 262)",
					stopOpacity: "0.35"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.56 0.2 262)",
					stopOpacity: "0"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: area,
				fill: "url(#cf-area)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path,
				fill: "none",
				stroke: "oklch(0.56 0.2 262)",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			pts.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: i * step,
				cy: h - v / max * h,
				r: "1.5",
				fill: "oklch(0.56 0.2 262)"
			}, i))
		]
	});
}
function Hero() {
	const t = useT();
	const { setOpen } = useTrialModal();
	const wa = () => window.open(`https://wa.me/212639286401?text=${encodeURIComponent("Bonjour DigiCab")}`, "_blank");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-hero",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 h-[600px] -z-10",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 [background-image:linear-gradient(to_right,oklch(0.56_0.2_262/0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.56_0.2_262/0.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-1.5 rounded-full bg-primary animate-pulse" }), t("hero.badge")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]",
							children: [
								t("hero.title").split(",")[0],
								",",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: t("hero.title").split(",").slice(1).join(",").trim()
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base md:text-lg text-muted-foreground max-w-xl",
							children: t("hero.subtitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col sm:flex-row gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								onClick: () => setOpen(true),
								className: "bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-95 h-12 px-6 group",
								children: [t("cta.trial"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 ms-1 transition-transform group-hover:translate-x-0.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "outline",
								onClick: wa,
								className: "h-12 px-6 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4 text-[#25D366]" }), t("cta.whatsapp")]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-accent" }), "RGPD · ISO 27001 · Hébergement souverain"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMockup, {})
				})]
			})
		]
	});
}
var LOGOS = [
	"Clinique Atlas",
	"Centre Médical Anfa",
	"Dental Studio",
	"Vita Health",
	"MedCare+",
	"PolyClinic"
];
function Trust() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border/60 bg-muted/30 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: t("trust.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("trust.subtitle")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-4",
				children: LOGOS.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .05 },
					className: "flex items-center justify-center h-12 text-sm font-semibold text-muted-foreground/70 hover:text-foreground transition-colors tracking-tight",
					children: name
				}, name))
			})]
		})
	});
}
function Reveal({ children, delay = 0, direction = "up", className = "" }) {
	const dir = {
		up: {
			y: 32,
			x: 0
		},
		down: {
			y: -32,
			x: 0
		},
		left: {
			x: 40,
			y: 0
		},
		right: {
			x: -40,
			y: 0
		},
		none: {
			x: 0,
			y: 0
		}
	}[direction];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			...dir
		},
		whileInView: {
			opacity: 1,
			x: 0,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function SectionHeader({ eyebrow, title, subtitle, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: `${center ? "text-center mx-auto" : ""} max-w-2xl mb-12 md:mb-16`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-primary mb-3",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-5xl font-bold tracking-tight",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base md:text-lg text-muted-foreground",
				children: subtitle
			})
		]
	});
}
function Section({ id, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `relative py-20 md:py-28 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children
		})
	});
}
function TiltCard({ children, className = "", popular = false, ...props }) {
	const ref = (0, import_react.useRef)(null);
	const [hovered, setHovered] = (0, import_react.useState)(false);
	const x = useMotionValue(.5);
	const y = useMotionValue(.5);
	const rotateX = useSpring(useTransform(y, [0, 1], [4, -4]), {
		damping: 30,
		stiffness: 180
	});
	const rotateY = useSpring(useTransform(x, [0, 1], [-4, 4]), {
		damping: 30,
		stiffness: 180
	});
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
		ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
		ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		onMouseMove: handleMouseMove,
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => {
			setHovered(false);
			x.set(.5);
			y.set(.5);
		},
		style: {
			rotateX: hovered ? rotateX : 0,
			rotateY: hovered ? rotateY : 0,
			transformStyle: "preserve-3d",
			willChange: "transform"
		},
		viewport: {
			once: true,
			margin: "-50px"
		},
		className: `group relative rounded-2xl border bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-elegant ${popular ? "border-primary/50" : "border-border"} ${className}`,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden",
			style: { background: `radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), oklch(0.56 0.2 262 / 0.08), transparent 70%)` },
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				transform: "translateZ(8px)",
				transformStyle: "preserve-3d"
			},
			children
		})]
	});
}
var ICONS$2 = {
	patients: Users,
	booking: CalendarCheck,
	calendar: Calendar,
	history: FileText,
	consult: Stethoscope,
	prescriptions: ClipboardList,
	treatments: Activity,
	payments: CreditCard,
	unpaid: CircleAlert,
	secretaries: UserCog,
	doctors: UserRound,
	dashboard: LayoutDashboard,
	stats: ChartColumn,
	search: Search,
	pdf: FileDown,
	backups: DatabaseBackup,
	security: Lock,
	darkmode: Moon,
	audit: History,
	notifications: Bell,
	emails: Mail,
	sms: MessageSquare
};
function Features() {
	const { locale, t } = useI18n();
	const dict = FEATURES_I18N[locale];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "features",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("features.eyebrow"),
			title: t("features.title"),
			subtitle: t("features.subtitle")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
			children: FEATURES_KEYS.map((k, i) => {
				const Icon = ICONS$2[k];
				const item = dict[k];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .4,
						delay: i % 6 * .05
					},
					className: "p-6 cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-semibold tracking-tight",
							children: item.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: item.d
						})
					]
				}, k);
			})
		})]
	});
}
var ICONS$1 = {
	time: Clock,
	noshows: BellRing,
	org: Sparkles,
	history: FileText,
	secure: ShieldCheck,
	ux: MousePointerClick
};
function WhyChoose() {
	const { locale, t } = useI18n();
	const dict = WHY_I18N[locale];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "why",
		className: "bg-muted/30 border-y border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("why.eyebrow"),
			title: t("why.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: WHY_KEYS.map((k, i) => {
				const Icon = ICONS$1[k];
				const item = dict[k];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .4,
						delay: i * .06
					},
					className: "relative overflow-hidden cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-8 -end-8 size-32 rounded-full bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold",
								children: item.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: item.d
							})
						]
					})]
				}, k);
			})
		})]
	});
}
var ICONS = [
	UserPlus,
	CalendarPlus,
	DoorOpen,
	Stethoscope,
	ClipboardList,
	CreditCard,
	Archive
];
function Workflow() {
	const { locale, t } = useI18n();
	const steps = WORKFLOW_I18N[locale];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
		eyebrow: t("workflow.eyebrow"),
		title: t("workflow.title"),
		subtitle: t("workflow.subtitle")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4",
			children: steps.map((label, i) => {
				const Icon = ICONS[i] ?? UserPlus;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .07,
					direction: "up",
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:border-primary/30 transition-all duration-300 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-primary group-hover:scale-110 transition-transform duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-2 -end-2 flex size-6 items-center justify-center rounded-full bg-gradient-primary text-[10px] font-bold text-white shadow-elegant",
							children: i + 1
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-sm font-medium",
						children: label
					})]
				}, label);
			})
		})]
	})] });
}
var FEATURES = [
	{
		id: "agenda",
		src: "/img-agenda.png",
		label: "Agenda intelligent",
		desc: "Planifiez, confirmez et gérez tous vos rendez-vous depuis un seul endroit. Vue jour, semaine ou mois — multi-praticiens, glisser-déposer.",
		Icon: CalendarCheck,
		align: "right",
		bgGradient: "bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-950/50 dark:via-indigo-950/30 dark:to-background",
		accent: "oklch(0.56 0.2 262)"
	},
	{
		id: "patient",
		src: "/img-patient.png",
		label: "Dossier patient complet",
		desc: "Chaque patient a son propre dossier numérique — consultations, ordonnances, traitements, historique, tout est là, toujours à portée de clic.",
		Icon: UserRound,
		align: "left",
		bgGradient: "bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent dark:from-purple-950/50 dark:via-violet-950/30 dark:to-background",
		accent: "oklch(0.62 0.2 295)"
	},
	{
		id: "stats",
		src: "/img-stats.png",
		label: "Statistiques & revenus",
		desc: "Suivez vos performances en temps réel. Graphiques clairs, indicateurs financiers, taux de présence — tout ce qu'il vous faut pour piloter votre cabinet.",
		Icon: ChartColumn,
		align: "right",
		bgGradient: "bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-950/50 dark:via-teal-950/30 dark:to-background",
		accent: "oklch(0.66 0.18 165)"
	},
	{
		id: "prescription",
		src: "/img-prescription.png",
		label: "Ordonnances en un clic",
		desc: "Générez des ordonnances PDF en quelques secondes. Modèles personnalisables, signature numérique, prêt à imprimer ou à envoyer par email.",
		Icon: FileDown,
		align: "left",
		bgGradient: "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent dark:from-amber-950/50 dark:via-orange-950/30 dark:to-background",
		accent: "oklch(0.72 0.18 55)"
	}
];
function FeaturePanel({ feature, index }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const isRight = feature.align === "right";
	const { Icon } = feature;
	const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
	const clipReveal = useTransform(scrollYProgress, [.05, .35], [isRight ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)", "inset(0 0% 0 0%)"]);
	const textX = useTransform(scrollYProgress, [.05, .35], [isRight ? -50 : 50, 0]);
	const textOpacity = useTransform(scrollYProgress, [.05, .3], [0, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: `relative min-h-[500px] md:min-h-[580px] flex items-center overflow-hidden border-b border-border/40 py-16 md:py-24 ${feature.bgGradient}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute pointer-events-none rounded-full blur-[130px] opacity-25 dark:opacity-20",
			style: {
				background: feature.accent,
				width: 480,
				height: 480,
				top: "50%",
				[isRight ? "left" : "right"]: "-10%",
				transform: "translateY(-50%)"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-col gap-10 lg:gap-16 items-center ${isRight ? "lg:flex-row" : "lg:flex-row-reverse"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full lg:w-1/2 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						style: { clipPath: clipReveal },
						className: "relative rounded-2xl overflow-hidden shadow-xl border border-border/60 bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: imageY },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: feature.src,
								alt: feature.label,
								className: "w-full object-cover",
								style: {
									height: 350,
									objectPosition: "top",
									display: "block"
								},
								draggable: false
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 inset-x-0 h-16 pointer-events-none bg-gradient-to-t from-card to-transparent opacity-80" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						x: textX,
						opacity: textOpacity
					},
					className: "w-full lg:w-1/2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] mb-4",
							style: { color: feature.accent },
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center justify-center size-12 rounded-2xl mb-5 shadow-sm",
							style: {
								background: `${feature.accent}18`,
								border: `1px solid ${feature.accent}33`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								style: { color: feature.accent }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4",
							children: feature.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-muted-foreground leading-relaxed max-w-md",
							children: feature.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity group",
							children: ["En savoir plus", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						})
					]
				})]
			})
		})]
	});
}
function FloatingGallery() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-16 md:py-20 text-center px-4 bg-muted/30 border-y border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .55,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-primary mb-3",
					children: "Aperçu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto text-foreground",
					children: t("screens.title")
				})]
			})
		}), FEATURES.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturePanel, {
			feature,
			index: i
		}, feature.id))]
	});
}
function Pricing() {
	const { locale, t } = useI18n();
	const { setOpen } = useTrialModal();
	const feats = PRICING_FEATURES[locale];
	const plans = [
		{
			id: "starter",
			name: t("pricing.starter"),
			desc: t("pricing.starterDesc"),
			price: "500",
			suffix: t("pricing.monthly"),
			features: feats.starter,
			popular: false
		},
		{
			id: "pro",
			name: t("pricing.pro"),
			desc: t("pricing.proDesc"),
			price: "950",
			suffix: t("pricing.monthly"),
			features: feats.pro,
			popular: true
		},
		{
			id: "enterprise",
			name: t("pricing.enterprise"),
			desc: t("pricing.enterpriseDesc"),
			price: t("pricing.custom"),
			suffix: "",
			features: feats.enterprise,
			popular: false
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "pricing",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("pricing.eyebrow"),
			title: t("pricing.title"),
			subtitle: t("pricing.subtitle")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto",
			children: plans.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .08 },
				popular: p.popular,
				className: `relative rounded-3xl p-8 cursor-pointer ${p.popular ? "md:scale-105" : ""}`,
				children: [
					p.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-elegant",
						children: t("pricing.popular")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-semibold",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-muted-foreground min-h-[2.5rem]",
						children: p.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-baseline gap-1.5",
						children: p.suffix ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-4xl font-bold tracking-tight",
							children: p.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: p.suffix
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl font-bold tracking-tight",
							children: p.price
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: (e) => {
							e.stopPropagation();
							setOpen(true);
						},
						className: `mt-6 w-full h-11 ${p.popular ? "bg-gradient-primary text-primary-foreground" : ""}`,
						variant: p.popular ? "default" : "outline",
						children: t("cta.trial")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2.5",
						children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-accent shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
						}, f))
					})
				]
			}, p.id))
		})]
	});
}
function Testimonials() {
	const { locale, t } = useI18n();
	const items = TESTIMONIALS_I18N[locale];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "testimonials",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("testimonials.eyebrow"),
			title: t("testimonials.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-5",
			children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .08 },
				className: "p-7 cursor-pointer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-0.5 text-amber-400 mb-4",
						children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-current" }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed",
						children: [
							"“",
							it.quote,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-10 items-center justify-center rounded-full bg-gradient-primary text-white font-semibold text-sm",
							children: it.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: it.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: it.role
						})] })]
					})
				]
			}, it.name))
		})]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FAQ() {
	const { locale, t } = useI18n();
	const items = FAQ_I18N[locale];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "faq",
		className: "bg-muted/30 border-y border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("faq.eyebrow"),
			title: t("faq.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-3xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "space-y-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: "rounded-2xl border border-border bg-card px-5 shadow-soft hover:border-primary/20 transition-colors duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-semibold hover:no-underline",
							children: it.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground",
							children: it.a
						})]
					})
				}, i))
			})
		})]
	});
}
function Contact() {
	const t = useT();
	const [f, setF] = (0, import_react.useState)({
		name: "",
		clinic: "",
		phone: "",
		email: "",
		message: ""
	});
	const upd = (k) => (e) => setF((p) => ({
		...p,
		[k]: e.target.value
	}));
	const submit = (e) => {
		e.preventDefault();
		const body = encodeURIComponent(`Nom: ${f.name}\nCabinet: ${f.clinic}\nTéléphone: ${f.phone}\nEmail: ${f.email}\n\n${f.message}`);
		window.location.href = `mailto:contact@digicab.ma?subject=${encodeURIComponent("Contact — DigiCab")}&body=${body}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "contact",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("contact.eyebrow"),
			title: t("contact.title"),
			subtitle: t("contact.subtitle")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				direction: "left",
				className: "lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("form.lastName"),
									value: f.name,
									onChange: upd("name"),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("form.clinic"),
									value: f.clinic,
									onChange: upd("clinic")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("form.phone"),
									value: f.phone,
									onChange: upd("phone"),
									type: "tel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("form.email"),
									value: f.email,
									onChange: upd("email"),
									type: "email",
									required: true
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t("form.message") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 5,
								value: f.message,
								onChange: upd("message"),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full sm:w-auto bg-gradient-primary text-primary-foreground h-11 px-8",
							children: t("contact.send")
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				direction: "right",
				delay: .1,
				className: "lg:col-span-2 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }),
						label: "WhatsApp",
						value: "+212 6 39 28 64 01",
						href: "https://wa.me/212639286401"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
						label: t("form.phone"),
						value: "+212 6 39 28 64 01",
						href: "tel:+212639286401"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" }),
						label: t("form.email"),
						value: "contact@digicab.ma",
						href: "mailto:contact@digicab.ma"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" }),
						label: "Adresse",
						value: t("contact.address")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5" }),
						label: "Horaires",
						value: t("contact.hours")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl overflow-hidden border border-border bg-muted h-40 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(135deg,oklch(0.56_0.2_262/0.15),oklch(0.72_0.16_165/0.15))]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex items-center justify-center text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 me-2" }), " Casablanca · Maroc"]
						})]
					})
				]
			})]
		})]
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...props })]
	});
}
function ContactCard({ icon, label, value, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-elegant transition-shadow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-semibold",
			children: value
		})] })]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noopener",
		children: inner
	}) : inner;
}
var SOCIALS = [
	{
		label: "X",
		path: "M18.244 2H21l-6.52 7.45L22 22h-6.828l-4.77-6.44L4.8 22H2.045l6.98-7.98L2 2h6.914l4.31 5.86L18.244 2Zm-1.19 18h1.83L7.02 4H5.05l12.005 16Z"
	},
	{
		label: "LinkedIn",
		path: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8h4.53v14H.24V8Zm7.5 0h4.34v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V22h-4.52v-6.14c0-1.46-.02-3.34-2.04-3.34-2.04 0-2.36 1.6-2.36 3.24V22H7.74V8Z"
	},
	{
		label: "Instagram",
		path: "M12 2.2c3.2 0 3.58.012 4.85.07 1.17.054 1.8.25 2.22.415.56.217.96.477 1.38.9.42.42.68.82.9 1.38.164.42.36 1.05.414 2.22.058 1.27.07 1.65.07 4.85s-.012 3.58-.07 4.85c-.054 1.17-.25 1.8-.415 2.22-.217.56-.477.96-.9 1.38-.42.42-.82.68-1.38.9-.42.164-1.05.36-2.22.414-1.27.058-1.65.07-4.85.07s-3.58-.012-4.85-.07c-1.17-.054-1.8-.25-2.22-.415-.56-.217-.96-.477-1.38-.9-.42-.42-.68-.82-.9-1.38-.164-.42-.36-1.05-.414-2.22C2.212 15.58 2.2 15.2 2.2 12s.012-3.58.07-4.85c.054-1.17.25-1.8.415-2.22.217-.56.477-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.164 1.05-.36 2.22-.414C8.42 2.212 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.75.068-1.03.047-1.59.22-1.96.365-.49.19-.84.42-1.21.78-.36.37-.59.72-.78 1.21-.145.37-.318.93-.365 1.96C3.01 8.5 3 8.85 3 12s.01 3.5.068 4.75c.047 1.03.22 1.59.365 1.96.19.49.42.84.78 1.21.37.36.72.59 1.21.78.37.145.93.318 1.96.365C8.5 20.99 8.85 21 12 21s3.5-.01 4.75-.068c1.03-.047 1.59-.22 1.96-.365.49-.19.84-.42 1.21-.78.36-.37.59-.72.78-1.21.145-.37.318-.93.365-1.96C20.99 15.5 21 15.15 21 12s-.01-3.5-.068-4.75c-.047-1.03-.22-1.59-.365-1.96-.19-.49-.42-.84-.78-1.21-.37-.36-.72-.59-1.21-.78-.37-.145-.93-.318-1.96-.365C15.5 3.01 15.15 3 12 3Zm0 3.3a5.7 5.7 0 1 1 0 11.4 5.7 5.7 0 0 1 0-11.4Zm0 9.4a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4Zm5.9-9.6a1.33 1.33 0 1 1-2.66 0 1.33 1.33 0 0 1 2.66 0Z"
	},
	{
		label: "Facebook",
		path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94Z"
	}
];
function Footer() {
	const t = useT();
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const cols = [
		{
			title: t("footer.product"),
			links: [
				{
					l: t("footer.features"),
					h: "#features"
				},
				{
					l: t("footer.pricing"),
					h: "#pricing"
				},
				{
					l: t("nav.testimonials"),
					h: "#testimonials"
				}
			]
		},
		{
			title: t("footer.support"),
			links: [
				{
					l: "FAQ",
					h: "#faq"
				},
				{
					l: t("footer.contact"),
					h: "#contact"
				},
				{
					l: "WhatsApp",
					h: "https://wa.me/212639286401"
				}
			]
		},
		{
			title: t("footer.legal"),
			links: [{
				l: t("footer.privacy"),
				h: "#"
			}, {
				l: t("footer.terms"),
				h: "#"
			}]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-muted/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-5 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground max-w-xs",
							children: t("footer.tagline")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-2",
							children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": s.label,
								className: "flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "size-4",
									fill: "currentColor",
									"aria-hidden": true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: s.path })
								})
							}, s.label))
						})
					]
				}), cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold",
					children: c.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.h,
						className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: l.l
					}) }, l.l))
				})] }, c.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						year,
						" DigiCab. ",
						t("footer.rights")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased [font-family:Inter,system-ui,sans-serif]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingGallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
