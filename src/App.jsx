import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle,
  Clock,
  Download,
  Euro,
  FileSpreadsheet,
  FileText,
  Home,
  Layers,
  LayoutList,
  Mail,
  MapPin,
  Menu,
  Package,
  PackageSearch,
  Phone,
  PhoneCall,
  Send,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Target,
  User,
  UserX,
  Users,
  Wifi,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const IMAGES = {
  hero: "https://media.base44.com/images/public/6a1a1b0e3bc696ff6b8633c1/48875a076_generated_5c487fec.png",
  phone: "https://media.base44.com/images/public/6a1a1b0e3bc696ff6b8633c1/2b5848f8e_generated_a40a94e7.png",
  process: "https://media.base44.com/images/public/6a1a1b0e3bc696ff6b8633c1/965ec6eca_generated_772b5a1a.png",
};

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-heading font-semibold transition-all duration-300 h-10 px-6 disabled:opacity-60 disabled:pointer-events-none";
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-blue-700 hover:-translate-y-0.5",
    outline: "bg-white text-foreground border border-border hover:border-primary/30 hover:bg-blue-50/40",
    ghost: "text-muted hover:text-foreground hover:bg-white/70",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function SectionLabel({ children }) {
  return <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">{children}</p>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    ["Accueil", "#accueil"],
    ["Secteurs", "#secteurs"],
    ["Processus", "#processus"],
    ["Tarifs", "#tarifs"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];

  const go = (href) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button onClick={() => go("#accueil")} className="font-heading font-bold text-xl tracking-tight text-foreground">
          Next<span className="text-primary">Leads</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(([label, href]) => (
            <button
              key={href}
              onClick={() => go(href)}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={() => go("#contact")} className="h-9 px-5">
            Demander un devis
          </Button>
        </div>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-soft">
          <div className="px-4 py-4 space-y-1">
            {navItems.map(([label, href]) => (
              <button key={href} onClick={() => go(href)} className="block w-full text-left px-4 py-3 rounded-lg text-muted hover:bg-background">
                {label}
              </button>
            ))}
            <Button onClick={() => go("#contact")} className="w-full mt-3">
              Demander un devis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const heroBadges = ["Contacts ciblés", "Données structurées", "Livraison CSV ou Excel", "Dès 6 € / lead ciblé"];

  return (
    <section id="accueil" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-blue-50/40" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Prospection B2C</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-foreground">
              Des leads <span className="text-primary">B2C ciblés</span>{" "}
              pour <span className="text-primary">accélérer</span> votre prospection
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              NextLeads fournit aux entreprises des contacts B2C ciblés, structurés et prêts à être exploités par leurs équipes commerciales.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 bg-white border border-border/70 rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm">
                  <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-4 bg-white border border-primary/15 shadow-md rounded-2xl px-6 py-4">
              <div>
                <p className="text-xs text-muted font-medium uppercase tracking-wide">À partir de</p>
                <p className="font-heading font-bold text-3xl text-primary leading-none">6 €</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <p className="text-sm font-semibold text-foreground">
                par lead ciblé<br />
                <span className="text-muted font-normal">livraison sous 24h à 72h</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollTo("#contact")} className="h-12 text-base px-8">
                Demander un devis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollTo("#contact")} className="h-12 text-base px-8">
                Demander un pack test
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-border/40">
              <img src={IMAGES.hero} alt="Équipe commerciale en réunion" className="w-full h-[420px] object-cover" />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-xl border border-border/60 p-5 w-[330px] max-w-[90%]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <p className="font-heading font-bold text-sm text-foreground">Leads prêts à contacter</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3"><MapPin className="w-4 h-4 text-primary shrink-0" /><span className="text-muted">Secteur :</span><strong>Énergie / Immobilier</strong></div>
                <div className="flex gap-3"><Shield className="w-4 h-4 text-primary shrink-0" /><span className="text-muted">Statut :</span><strong className="text-emerald-600 bg-emerald-50 px-2 rounded-md">Vérifié</strong></div>
                <div className="flex gap-3"><FileSpreadsheet className="w-4 h-4 text-primary shrink-0" /><span className="text-muted">Format :</span><strong>CSV ou Excel</strong></div>
                <div className="flex gap-3"><CheckCircle className="w-4 h-4 text-primary shrink-0" /><span className="text-muted">Prix :</span><strong className="text-primary">dès 6 € / lead</strong></div>
                <div className="flex gap-3"><PhoneCall className="w-4 h-4 text-primary shrink-0" /><span className="text-muted">Action :</span><strong>Appel commercial</strong></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="absolute top-8 -right-4 bg-white rounded-2xl shadow-lg border border-border/60 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center">
                <Package className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Pack test sur demande</p>
                <p className="text-xs text-muted">Petit volume pour tester la qualité des leads</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: Euro, value: "6 €", sub: "/ lead ciblé", label: "Tarif de départ transparent", color: "bg-primary/10 text-primary" },
    { icon: Clock, value: "24h – 72h", sub: "selon volume", label: "Délai de livraison estimé", color: "bg-blue-50 text-blue-600" },
    { icon: Layers, value: "Sur mesure", sub: "par secteur", label: "Packs adaptés à votre activité", color: "bg-indigo-50 text-indigo-600" },
    { icon: FileSpreadsheet, value: "CSV / Excel", sub: "prêt à utiliser", label: "Format structuré et exploitable", color: "bg-emerald-50 text-emerald-600" },
  ];

  return (
    <section className="py-14 bg-white border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-background rounded-xl border border-border/50 p-5 lg:p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <p className="font-heading font-bold text-2xl text-foreground">{stat.value}</p>
                <p className="text-xs text-muted font-medium">{stat.sub}</p>
              </div>
              <p className="mt-1 text-xs text-muted leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  const problems = [
    { icon: UserX, number: "01", title: "Contacts hors cible", desc: "Les fichiers généralistes contiennent trop souvent des prospects non pertinents pour votre activité." },
    { icon: Clock, number: "02", title: "Temps commercial perdu", desc: "Vos commerciaux passent trop de temps à chercher des contacts au lieu de vendre." },
    { icon: LayoutList, number: "03", title: "Manque de structure", desc: "Sans fichier propre, il devient difficile de suivre les appels, les relances et les résultats." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Le constat</SectionLabel>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Les freins de votre prospection commerciale</h2>
          <p className="mt-4 text-muted">Des obstacles récurrents qui ralentissent vos équipes et limitent votre croissance commerciale.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="group relative bg-white rounded-2xl border border-border/60 p-7 hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden">
              <span className="absolute top-4 right-5 font-heading font-extrabold text-6xl text-primary/5 select-none leading-none">{item.number}</span>
              <div className="w-11 h-11 rounded-xl bg-red-50 group-hover:bg-red-100 flex items-center justify-center mb-5 transition-colors">
                <item.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const cards = [
    { icon: Target, title: "Ciblage par secteur", desc: "Énergie, solaire, immobilier, assurance et plus." },
    { icon: MapPin, title: "Ciblage géographique", desc: "Département, région ou périmètre personnalisé." },
    { icon: FileText, title: "Fichier structuré", desc: "Données organisées, colonnes claires, prêt à importer." },
    { icon: ShieldCheck, title: "Vérification des informations", desc: "Processus de contrôle des données disponibles." },
    { icon: FileSpreadsheet, title: "Livraison CSV ou Excel", desc: "Format compatible avec votre CRM ou tableur." },
    { icon: Package, title: "Pack adapté à votre volume", desc: "De quelques contacts à des lots importants." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/20">
              <img src={IMAGES.phone} alt="Commercial professionnel au téléphone" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/5 border border-primary/10 -z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
            <SectionLabel>La solution</SectionLabel>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">NextLeads transforme vos critères en contacts exploitables</h2>
            <p className="text-muted leading-relaxed mb-8">
              Nous préparons des packs de leads selon votre secteur, votre zone géographique, votre volume et vos critères commerciaux. Chaque fichier est structuré pour être directement exploitable.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {cards.map((card, i) => (
                <motion.div key={card.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-background rounded-xl border border-border/50 p-4">
                  <card.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{card.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectorsSection() {
  const sectors = [
    { icon: Zap, name: "Énergie", desc: "Fournisseurs, contrats, transition énergétique" },
    { icon: Home, name: "Pompe à chaleur", desc: "Installation, remplacement, projets résidentiels" },
    { icon: Sun, name: "Solaire", desc: "Panneaux, autoconsommation, projets habitat" },
    { icon: Wrench, name: "Rénovation", desc: "Travaux, isolation, rénovation globale" },
    { icon: Building2, name: "Immobilier", desc: "Achat, vente, investissement, location" },
    { icon: Shield, name: "Assurance", desc: "Habitation, santé, prévoyance, auto" },
    { icon: Wifi, name: "Télécom", desc: "Box, fibre, mobile, offres entreprise" },
    { icon: Users, name: "Services B2C", desc: "Services à la personne, abonnements" },
  ];

  return (
    <section id="secteurs" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Secteurs couverts</SectionLabel>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Des leads ciblés pour les secteurs à forte demande</h2>
          <p className="mt-4 text-muted">Chaque secteur bénéficie d'un ciblage adapté à ses spécificités commerciales.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, i) => (
            <motion.div key={sector.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group bg-white rounded-xl border border-border/60 p-5 hover:shadow-lg hover:border-primary/25 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                  <sector.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground">{sector.name}</h3>
              </div>
              <p className="text-xs text-muted leading-snug">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { icon: SlidersHorizontal, step: "01", title: "Vous définissez vos critères", desc: "Secteur d'activité, zone géographique, volume souhaité et profil des contacts recherchés." },
    { icon: PackageSearch, step: "02", title: "Nous préparons votre pack", desc: "NextLeads constitue un fichier ciblé selon vos critères commerciaux validés ensemble." },
    { icon: Download, step: "03", title: "Vous recevez vos leads", desc: "Livraison en CSV ou Excel, structuré et prêt à être importé dans votre outil de travail." },
    { icon: PhoneCall, step: "04", title: "Votre équipe contacte les prospects", desc: "Vos commerciaux passent directement à l'action avec des contacts ciblés et organisés." },
  ];

  return (
    <section id="processus" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Processus</SectionLabel>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Comment ça fonctionne</h2>
          <p className="mt-4 text-muted">Un processus simple et structuré pour recevoir des leads ciblés rapidement.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {steps.map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative bg-background rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden">
              <span className="absolute right-5 top-4 font-heading font-extrabold text-5xl text-primary/5 leading-none">{step.step}</span>
              <div className="w-11 h-11 rounded-xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-6">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden border border-border/40 shadow-premium max-w-4xl mx-auto">
          <img src={IMAGES.process} alt="Processus de prospection commerciale" className="w-full h-auto object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

function QualitySection() {
  const tags = ["Téléphone vérifié", "Zone ciblée", "Statut clair", "Prêt à contacter"];
  const fields = [
    { icon: User, label: "Prospect", value: "Exemple" },
    { icon: Sun, label: "Secteur", value: "Solaire" },
    { icon: MapPin, label: "Ville", value: "Lyon" },
    { icon: Phone, label: "Téléphone", value: "Vérifié", green: true },
    { icon: CheckCircle, label: "Statut", value: "À appeler", green: true },
    { icon: Home, label: "Besoin potentiel", value: "Projet habitat / énergie" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Qualité des contacts</SectionLabel>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Aperçu d'un lead NextLeads</h2>
          <p className="mt-4 text-muted">Des données structurées pour un traitement commercial immédiat.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white rounded-2xl border border-border/60 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-blue-600 px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-semibold text-white text-sm">Fiche lead</p>
                  <p className="text-xs text-white/60">NextLeads — Exemple</p>
                </div>
                <div className="flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1">
                  <BadgeCheck className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-medium">Vérifié</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {fields.map((field) => (
                  <div key={field.label} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                      <field.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted">{field.label}</p>
                      <p className={`font-heading font-semibold text-sm ${field.green ? "text-emerald-600" : "text-foreground"}`}>{field.value}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t border-border/50">
                  <Button className="w-full" onClick={() => scrollTo("#contact")}>
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Action recommandée : appel commercial
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Des contacts préparés pour l'action commerciale</h3>
            <p className="text-muted leading-relaxed mb-6">
              Chaque lead doit être simple à comprendre, rapide à traiter et directement exploitable par votre équipe.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2 bg-white border border-primary/15 rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted bg-white border border-border/60 rounded-xl p-4">
              La qualité finale dépend du secteur, du volume demandé et des critères de ciblage validés avec le client.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Pack ciblé",
      price: "À partir de 6 €",
      per: "/ lead ciblé",
      badge: "Recommandé",
      desc: "L'essentiel pour démarrer votre prospection avec des contacts ciblés et un fichier structuré.",
      features: ["Sélection par secteur d'activité", "Ciblage géographique", "Fichier structuré et exploitable", "Livraison en CSV ou Excel"],
      cta: "Demander un pack",
      primary: true,
    },
    {
      name: "Offre personnalisée",
      price: "Sur devis",
      per: "",
      badge: null,
      desc: "Pour les volumes importants ou des critères spécifiques nécessitant un traitement sur mesure.",
      features: ["Cahier des charges personnalisé", "Segmentation avancée", "Livraison par lots planifiée", "Accompagnement dédié"],
      cta: "Demander un devis",
      primary: false,
    },
  ];

  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Tarifs</SectionLabel>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Une offre claire, sans engagement</h2>
          <p className="mt-4 text-muted">Choisissez la formule adaptée à votre volume et à vos critères commerciaux.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative rounded-2xl border p-8 ${plan.primary ? "bg-white border-primary/30 shadow-premium" : "bg-background border-border/60 shadow-soft"}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-8">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold rounded-full px-3 py-1">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="font-heading font-extrabold text-3xl text-foreground">{plan.price}</span>
                {plan.per && <span className="text-muted ml-1">{plan.per}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={plan.primary ? "primary" : "outline"} onClick={() => scrollTo("#contact")} className="w-full h-11">
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const cards = [
    { icon: ListChecksIcon, title: "Des contacts plus simples à traiter", desc: "Chaque fichier est structuré avec des colonnes claires, ce qui facilite le travail de vos commerciaux dès réception." },
    { icon: Target, title: "Une prospection mieux organisée", desc: "Avec des leads ciblés par secteur et par zone, vos équipes savent exactement qui appeler et dans quel ordre." },
    { icon: Package, title: "Des packs adaptés à votre volume", desc: "Nous adaptons le volume à votre capacité commerciale." },
  ];

  function ListChecksIcon(props) {
    return <CheckCircle {...props} />;
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Pourquoi NextLeads</SectionLabel>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Pourquoi les équipes commerciales utilisent NextLeads</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="group bg-background rounded-2xl border border-border/60 p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    ["Quel est le prix d'un lead ?", "Les leads ciblés sont disponibles à partir de 6 € par contact. Le prix final dépend du secteur, du volume commandé et des critères de ciblage définis avec vous."],
    ["Sous quel format sont livrés les leads ?", "Les fichiers sont livrés en CSV ou Excel, structurés et prêts à être importés dans votre CRM ou exploités directement par votre équipe commerciale."],
    ["Puis-je choisir ma zone géographique ?", "Oui. Le ciblage géographique est personnalisable : département, région, ville ou périmètre spécifique défini avec vous."],
    ["Les contacts sont-ils vérifiés ?", "Nous appliquons un processus de contrôle sur les données disponibles. La qualité finale dépend du secteur et des critères validés avec le client."],
    ["Puis-je commander un petit volume pour tester ?", "Oui. Le pack test permet de commander un petit volume de leads ciblés afin d'évaluer la qualité des contacts avant un volume plus important. Il est facturé à partir de 6 € par lead ciblé."],
    ["Proposez-vous un accompagnement sur mesure ?", "Pour les volumes importants ou les critères spécifiques, nous proposons une offre personnalisée avec cahier des charges, segmentation avancée et livraison par lots."],
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Questions fréquentes</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-white rounded-2xl border border-border/60 shadow-soft overflow-hidden">
          {faqs.map(([q, a], idx) => (
            <details key={q} className="group border-b border-border/50 last:border-0" open={idx === 0}>
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-heading font-semibold text-foreground list-none">
                {q}
                <span className="text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-primary/[0.06] via-blue-50/50 to-primary/[0.03] border border-primary/15 rounded-3xl px-8 py-16 lg:px-16 lg:py-20 text-center overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/5 pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-blue-100/40 pointer-events-none" />
          <div className="relative">
            <SectionLabel>Passez à l'action</SectionLabel>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-foreground max-w-3xl mx-auto leading-tight">Prêt à recevoir des leads ciblés pour vos équipes ?</h2>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Dites-nous votre secteur, votre zone et le volume souhaité. Nous vous préparons une proposition adaptée à votre objectif commercial.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollTo("#contact")} className="h-12 text-base px-8">
                Demander un devis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollTo("#contact")} className="h-12 text-base px-8 bg-white">
                Demander un pack test
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const sectors = ["Énergie", "Pompe à chaleur", "Solaire", "Rénovation", "Immobilier", "Assurance", "Télécom", "Services B2C", "Autre"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Demande de devis NextLeads");
    const body = encodeURIComponent(
      `Nom : ${form.get("nom") || ""}\n` +
      `Société : ${form.get("societe") || ""}\n` +
      `Téléphone : ${form.get("telephone") || ""}\n` +
      `Email : ${form.get("email") || ""}\n` +
      `Secteur : ${form.get("secteur") || ""}\n` +
      `Zone : ${form.get("zone") || ""}\n` +
      `Volume : ${form.get("volume") || ""}\n\n` +
      `Message :\n${form.get("message") || ""}`
    );

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.location.href = `mailto:contact@nextleads.fr?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">Demandez un devis ou un pack test</h2>
          <p className="mt-4 text-muted">Remplissez le formulaire ci-dessous et notre équipe vous recontacte rapidement.</p>
          <p className="mt-3 text-sm text-muted max-w-xl mx-auto">
            Le pack test permet de commander un petit volume de leads ciblés afin d'évaluer la qualité des contacts avant un volume plus important. Tarif : à partir de 6 € / lead ciblé.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-2xl border border-border/60 shadow-lg p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">Demande prête à envoyer</h3>
              <p className="text-muted">Votre client mail s’est ouvert avec le message pré-rempli pour contact@nextleads.fr.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border/60 shadow-lg p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Nom</span>
                  <input name="nom" className="input" placeholder="Votre nom" required />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Société</span>
                  <input name="societe" className="input" placeholder="Nom de votre entreprise" required />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Téléphone</span>
                  <input name="telephone" type="tel" className="input" placeholder="06 00 00 00 00" required />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Email</span>
                  <input name="email" type="email" className="input" placeholder="vous@entreprise.com" required />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Secteur recherché</span>
                  <select name="secteur" className="input" required defaultValue="">
                    <option value="" disabled>Sélectionnez un secteur</option>
                    {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">Zone géographique</span>
                  <input name="zone" className="input" placeholder="Ex: Île-de-France, national..." />
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground">Volume souhaité</span>
                <input name="volume" className="input" placeholder="Ex: 100, 500, 1000+ leads" />
              </label>

              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground">Message</span>
                <textarea name="message" rows={4} className="input min-h-[110px] py-3" placeholder="Décrivez votre besoin ou vos critères spécifiques..." />
              </label>

              <Button type="submit" className="w-full h-12 text-base" disabled={sending}>
                {sending ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send className="w-4 h-4 mr-2" />Envoyer ma demande</>}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    ["Mentions légales", "#"],
    ["Politique de confidentialité", "#"],
    ["Conditions générales", "#"],
    ["Contact", "#contact"],
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <button onClick={() => scrollTo("#accueil")} className="font-heading font-bold text-xl tracking-tight">
              Next<span className="text-primary">Leads</span>
            </button>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">Contacts ciblés pour équipes commerciales B2C.</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wide uppercase text-white/40 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-white/70"><Mail className="w-4 h-4 text-primary shrink-0" />contact@nextleads.fr</div>
              <div className="flex items-center gap-2.5 text-sm text-white/70"><MapPin className="w-4 h-4 text-primary shrink-0" />Paris, France</div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wide uppercase text-white/40 mb-4">Liens</h4>
            <div className="space-y-2.5">
              {links.map(([label, href]) => <a key={label} href={href} className="block text-sm text-white/60 hover:text-white transition-colors">{label}</a>)}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">{new Date().getFullYear()} NextLeads. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <ProblemsSection />
      <SolutionSection />
      <SectorsSection />
      <ProcessSection />
      <QualitySection />
      <PricingSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
