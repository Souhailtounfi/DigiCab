import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as cn, a as I18nProvider, c as Label, d as Textarea, f as ThemeProvider, o as Input, p as TrialModalProvider, t as Button, x as useTrialModal, y as useT } from "./textarea-AbT1Lx8u.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { W as ArrowUp, _ as MessageCircle, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as motion, o as AnimatePresence, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C6lYBDdz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BhCg_lfJ.css";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var WHATSAPP = "212639286401";
var EMAIL_TO = "contact@digicab.ma";
function TrialModal() {
	const t = useT();
	const { open, setOpen } = useTrialModal();
	const [f, setF] = (0, import_react.useState)({
		firstName: "",
		lastName: "",
		clinic: "",
		specialty: "",
		phone: "",
		email: "",
		city: "",
		practitioners: "",
		message: ""
	});
	const upd = (k) => (e) => setF((prev) => ({
		...prev,
		[k]: e.target.value
	}));
	const submit = (e) => {
		e.preventDefault();
		const body = encodeURIComponent(`Prénom: ${f.firstName}\nNom: ${f.lastName}\nCabinet: ${f.clinic}\nSpécialité: ${f.specialty}\nTéléphone: ${f.phone}\nEmail: ${f.email}\nVille: ${f.city}\nPraticiens: ${f.practitioners}\n\n${f.message}`);
		window.location.href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent("Essai gratuit — DigiCab")}&body=${body}`;
	};
	const wa = () => {
		const msg = encodeURIComponent("Bonjour DigiCab, je souhaite démarrer un essai gratuit.");
		window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-2xl max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-2xl",
					children: t("form.trialTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t("form.trialSubtitle") })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.firstName"),
							value: f.firstName,
							onChange: upd("firstName"),
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.lastName"),
							value: f.lastName,
							onChange: upd("lastName"),
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.clinic"),
							value: f.clinic,
							onChange: upd("clinic")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.specialty"),
							value: f.specialty,
							onChange: upd("specialty")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.phone"),
							value: f.phone,
							onChange: upd("phone"),
							type: "tel",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.email"),
							value: f.email,
							onChange: upd("email"),
							type: "email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.city"),
							value: f.city,
							onChange: upd("city")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.practitioners"),
							value: f.practitioners,
							onChange: upd("practitioners"),
							type: "number"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t("form.message") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 3,
								value: f.message,
								onChange: upd("message")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "sm:col-span-2 bg-gradient-primary text-primary-foreground h-11",
							children: t("form.submit")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 pt-4 border-t text-center space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t("form.orWhatsapp")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: wa,
						variant: "outline",
						className: "w-full h-11 border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), "WhatsApp"]
					})]
				})
			]
		})
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...props })]
	});
}
function WhatsAppFloat() {
	const href = `https://wa.me/212639286401?text=${encodeURIComponent("Bonjour DigiCab")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		initial: {
			scale: 0,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		transition: {
			delay: 1,
			type: "spring"
		},
		whileHover: { scale: 1.08 },
		className: "fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow hover:bg-[#20BD5A] transition-colors",
		"aria-label": "WhatsApp",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6 relative" })]
	});
}
function BackToTop() {
	const t = useT();
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 500);
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: {
			scale: 0,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		exit: {
			scale: 0,
			opacity: 0
		},
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": t("backToTop"),
		className: "fixed bottom-24 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-foreground text-background shadow-elegant hover:opacity-90 transition",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
	}) });
}
function CookieBanner() {
	const t = useT();
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!localStorage.getItem("cf-cookies")) setTimeout(() => setVisible(true), 1200);
	}, []);
	const close = (choice) => {
		localStorage.setItem("cf-cookies", choice);
		setVisible(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			y: 100,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: 100,
			opacity: 0
		},
		className: "fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-4 shadow-glow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: t("cookies.text")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				onClick: () => close("accept"),
				className: "bg-gradient-primary text-primary-foreground",
				children: t("cookies.accept")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "ghost",
				onClick: () => close("decline"),
				children: t("cookies.decline")
			})]
		})]
	}) });
}
/**
* Ambient glow that softly follows the mouse — purely decorative, layered
* under the real cursor. Feels alive without being distracting.
*/
function MagneticCursor() {
	const mx = useMotionValue(-200);
	const my = useMotionValue(-200);
	const sx = useSpring(mx, {
		damping: 28,
		stiffness: 120
	});
	const sy = useSpring(my, {
		damping: 28,
		stiffness: 120
	});
	(0, import_react.useEffect)(() => {
		const move = (e) => {
			mx.set(e.clientX);
			my.set(e.clientY);
		};
		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, [mx, my]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "pointer-events-none fixed top-0 left-0 z-[9990]",
		style: {
			x: sx,
			y: sy,
			translateX: "-50%",
			translateY: "-50%",
			width: 320,
			height: 320,
			borderRadius: "50%",
			background: "radial-gradient(circle, oklch(0.66 0.2 262 / 0.08) 0%, transparent 70%)"
		}
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page non trouvée"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "La page que vous cherchez n'existe pas ou a été déplacée."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Retour à l'accueil"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Impossible de charger la page"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Une erreur est survenue. Veuillez réessayer ou retourner à l'accueil."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Réessayer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Retour à l'accueil"
					})]
				})
			]
		})
	});
}
var jsonLdSchema = {
	"@context": "https://schema.org",
	"@graph": [{
		"@type": "SoftwareApplication",
		"name": "DigiCab",
		"alternateName": "DigiCab Maroc",
		"applicationCategory": "HealthApplication",
		"operatingSystem": "Web, iOS, Android, Windows, macOS",
		"url": "https://digicab.ma",
		"description": "DigiCab est la plateforme N°1 au Maroc pour la gestion de cabinets médicaux et dentaires: dossiers patients, agenda intelligent, ordonnances PDF, consultations, facturation et statistiques.",
		"offers": {
			"@type": "Offer",
			"price": "500",
			"priceCurrency": "MAD"
		}
	}, {
		"@type": "Organization",
		"name": "DigiCab",
		"url": "https://digicab.ma",
		"logo": "https://digicab.ma/logo.png",
		"sameAs": [],
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+212639286401",
			"contactType": "sales",
			"areaServed": "MA",
			"availableLanguage": [
				"French",
				"Arabic",
				"English"
			]
		}
	}]
};
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DigiCab — Logiciel de Gestion de Cabinet Médical au Maroc" },
			{
				name: "description",
				content: "DigiCab est le logiciel N°1 au Maroc pour la gestion intégrée des cabinets médicaux et dentaires: gestion des patients, agenda intelligent, ordonnances PDF, consultations et facturation."
			},
			{
				name: "keywords",
				content: "DigiCab, DigiCab Maroc, logiciel cabinet médical Maroc, gestion cabinet dentaire, logiciel médecin Maroc, dossier patient électronique, ordonnance médicale PDF, agenda médical Casablanca, gestion consultation médicale"
			},
			{
				name: "author",
				content: "DigiCab"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "theme-color",
				content: "#4f46e5"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "DigiCab"
			},
			{
				property: "og:title",
				content: "DigiCab — Logiciel de Gestion de Cabinet Médical au Maroc"
			},
			{
				property: "og:description",
				content: "Centralisez vos patients, rendez-vous, consultations, ordonnances et paiements avec DigiCab. Essai gratuit disponible."
			},
			{
				property: "og:image",
				content: "https://digicab.ma/logo.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@DigiCab"
			},
			{
				name: "twitter:title",
				content: "DigiCab — Logiciel de Gestion de Cabinet Médical au Maroc"
			},
			{
				name: "twitter:description",
				content: "Centralisez vos patients, rendez-vous, consultations et ordonnances avec DigiCab. Essai gratuit disponible."
			},
			{
				name: "twitter:image",
				content: "https://digicab.ma/logo.png"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://digicab.ma/"
			},
			{
				rel: "icon",
				href: "/favicon.ico"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLdSchema) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrialModalProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrialModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticCursor, {})
		] }) }) })
	});
}
var $$splitComponentImporter = () => import("./routes-aWWXDx8C.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
