import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  Map,
  Users,
  Handshake,
  Leaf,
  Rocket,
  Flame,
  TreePine,
  Zap,
  Sprout,
  Building2,
  ArrowRight,
  Mail,
} from "lucide-react";

import heroForest from "@/assets/hero-forest.jpg";
import forestInterior from "@/assets/forest-interior.jpg";
import mappingTech from "@/assets/mapping-tech.jpg";
import forester from "@/assets/forester.jpg";

const logoUrl = "/img/bosco-attivo-logo.jpg";
const logoFullUrl = "/img/bosco-attivo-logo-full.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bosco Attivo Marche",
          description:
            "Progetto per mappare, aggregare e valorizzare il patrimonio forestale privato delle Marche.",
          founder: "Dott. For. Giacomo Storti",
          parentOrganization: {
            "@type": "Organization",
            name: "Atteggiamento Digitale SB srl — Società Benefit",
          },
        }),
      },
    ],
  }),
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <Problem />
        <Objectives />
        <Solution />
        <Benefits />
        <Quote />
        <BetaForm />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Bosco Attivo Marche"
            className="h-32 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-cream/90 md:flex">
          <a href="#problema" className="hover:text-gold transition-colors">Il problema</a>
          <a href="#obiettivi" className="hover:text-gold transition-colors">Obiettivi</a>
          <a href="#soluzione" className="hover:text-gold transition-colors">Soluzione</a>
          <a href="#benefici" className="hover:text-gold transition-colors">Benefici</a>
          <a
            href="#beta"
            className="rounded-full bg-gold px-5 py-2 text-forest-deep hover:bg-gold/90 transition-colors"
          >
            Aderisci alla beta
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroForest}
        alt="Foreste appenniniche delle Marche nella nebbia mattutina"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/50 to-forest-deep/85" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-forest-deep/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Progetto pilota · Regione Marche
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            Il bosco che torna
            <span className="block italic text-gold">a essere risorsa.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl">
            Mappiamo, aggreghiamo e valorizziamo il patrimonio forestale privato
            delle Marche. Un modello operativo per trasformare boschi frammentati
            in una risorsa attiva, sostenibile e strategica.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#beta"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-deep transition-all hover:bg-gold/90"
            >
              Aderisci alla beta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#problema"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Scopri il progetto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats band ---------------- */
function StatsBand() {
  const stats = [
    { value: "70%", unit: "", label: "del suolo montano è bosco" },
    { value: "315.250", unit: "ha", label: "Superficie forestale regionale (32%)" },
    { value: "12.000", unit: "ha", label: "Pianificati nelle Marche (RAF 2019)" },
    { value: "4%", unit: "", label: "Foresta pianificata sul totale" },
  ];
  return (
    <section className="border-y border-border bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="border-l-2 border-gold pl-5">
            <div className="font-display text-4xl text-forest-deep sm:text-5xl">
              {s.value}
              {s.unit && <span className="ml-1 text-2xl text-bark">{s.unit}</span>}
            </div>
            <p className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Problem ---------------- */
function Problem() {
  const points = [
    {
      icon: Sprout,
      title: "Risorsa strategica non valorizzata",
      body: "Un valore territoriale spesso invisibile, ma fondamentale per il futuro delle comunità marchigiane.",
    },
    {
      icon: Map,
      title: "Proprietà frammentate",
      body: "Confini poco chiari e proprietà minute rendono complessa ogni azione coordinata sul territorio.",
    },
    {
      icon: TreePine,
      title: "Scarsa gestione attiva",
      body: "Senza gestione, il patrimonio forestale privato perde valore, biodiversità e resilienza.",
    },
    {
      icon: Flame,
      title: "Rischi ambientali crescenti",
      body: "L'abbandono aumenta fragilità ambientale, dissesto idrogeologico e rischio incendi.",
    },
    {
      icon: Building2,
      title: "Enti in difficoltà",
      body: "Amministrazioni senza strumenti condivisi per coordinare interventi, monitoraggio e programmazione.",
    },
  ];
  return (
    <section id="problema" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="flex flex-col">
            <SectionEyebrow>Il problema</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              Un patrimonio <em className="text-forest">invisibile</em>, un potenziale inespresso.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Frammentazione, abbandono e mancanza di gestione coordinata impediscono
              al patrimonio forestale privato delle Marche di esprimere il proprio
              valore ambientale, economico e sociale.
            </p>
            <img
              src={forestInterior}
              alt="Interno di un bosco appenninico"
              width={1600}
              height={1200}
              loading="lazy"
              className="mt-10 aspect-[4/3] w-full rounded-sm object-cover shadow-xl lg:mt-10 lg:aspect-auto lg:h-0 lg:min-h-0 lg:flex-1 lg:basis-0"
            />
          </div>
          <ul className="space-y-4">
            {points.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="group flex gap-5 rounded-sm border border-border bg-card p-6 transition-colors hover:border-forest"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest-deep">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Objectives ---------------- */
function Objectives() {
  const items = [
    {
      n: "01",
      icon: Map,
      title: "Mappatura digitale delle proprietà",
      body: "Identificare, organizzare e valorizzare il patrimonio forestale privato con strumenti digitali e AI di supporto.",
    },
    {
      n: "02",
      icon: Users,
      title: "Aggregazione dei proprietari",
      body: "Dalla frammentazione a una gestione coordinata e condivisa tra proprietari, comuni e professionisti.",
    },
    {
      n: "03",
      icon: Handshake,
      title: "Supporto tecnico e contrattuale",
      body: "Accompagnare proprietari e territori verso una gestione sostenibile ed efficiente.",
    },
    {
      n: "04",
      icon: Leaf,
      title: "Gestione sostenibile e certificata",
      body: "Una gestione responsabile capace di generare benefici duraturi per ambiente e comunità.",
    },
    {
      n: "05",
      icon: Rocket,
      title: "Progetto pilota su 4–5 comuni",
      body: "Sperimentazione operativa per attivare un modello replicabile di gestione territoriale integrata.",
    },
  ];
  return (
    <section id="obiettivi" className="relative overflow-hidden bg-forest-deep py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionEyebrow variant="dark">Obiettivi del progetto</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">
            Cinque leve per <em className="text-gold">attivare il bosco.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Un modello innovativo per trasformare il patrimonio forestale privato
            in una risorsa attiva, sostenibile e strategica per il territorio.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ n, icon: Icon, title, body }) => (
            <article
              key={n}
              className="group relative flex flex-col gap-4 bg-forest-deep p-8 transition-colors hover:bg-forest"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-gold">{n}</span>
                <Icon className="h-6 w-6 text-cream/70" />
              </div>
              <h3 className="font-display text-2xl leading-tight text-cream">{title}</h3>
              <p className="text-sm leading-relaxed text-cream/75">{body}</p>
            </article>
          ))}
          <article className="flex items-center justify-center bg-white p-8">
            <img
              src={logoFullUrl}
              alt="Bosco Attivo Marche — Mappare, aggregare, valorizzare i boschi del territorio"
              className="max-h-64 w-auto object-contain"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Solution ---------------- */
function Solution() {
  const rows = [
    {
      title: "Coinvolgimento istituzionale",
      body: "Comuni, Unioni Montane e GAL insieme per una governance territoriale condivisa.",
    },
    {
      title: "Area pilota e mappatura",
      body: "Identificazione dell'area pilota e avvio della mappatura digitale del patrimonio forestale.",
    },
    {
      title: "Piattaforma digitale — Associazione Forestale",
      body: "Adesioni, dati territoriali e gestione operativa in un unico strumento condiviso.",
    },
    {
      title: "Rete di proprietari e professionisti",
      body: "Trasformiamo la frammentazione in collaborazione, con una rete locale attiva.",
    },
    {
      title: "Accesso a bandi e finanziamenti",
      body: "Supporto all'accesso a risorse pubbliche e opportunità di sviluppo territoriale.",
    },
    {
      title: "Collaborazione con filiere attive",
      body: "Connessioni con energia, ricerca e industria per nuove economie sostenibili.",
    },
  ];
  return (
    <section id="soluzione" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionEyebrow>La soluzione</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              Un modello <em className="text-forest">operativo</em> e collaborativo.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Progetto concreto, scalabile e replicabile, capace di adattarsi alle
              esigenze dei territori locali attivando il patrimonio forestale privato.
            </p>
            <ol className="mt-10 divide-y divide-border border-y border-border">
              {rows.map((r, i) => (
                <li key={r.title} className="grid grid-cols-[auto_1fr] gap-6 py-6">
                  <span className="font-display text-lg text-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-forest-deep">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {r.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="order-1 lg:order-2">
            <div className="sticky top-8 space-y-6">
              <img
                src={mappingTech}
                alt="Mappatura digitale del bosco"
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
              />
              <div className="rounded-sm border border-forest/20 bg-cream p-6">
                <p className="font-display text-2xl italic leading-snug text-forest-deep">
                  "Esempi virtuosi come la Toscana mostrano l'efficacia di
                  pianificazione partecipata e contratti di foresta."
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  Regione virtuosa — esempi di successo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */
function Benefits() {
  const items = [
    { icon: Building2, title: "Valore per enti e comunità", body: "Supporto concreto alla gestione sostenibile delle risorse locali." },
    { icon: Flame, title: "Prevenzione incendi", body: "La gestione attiva riduce rischio, degrado e vulnerabilità ambientale." },
    { icon: TreePine, title: "Filiera legno-energia", body: "Nuove filiere territoriali sostenibili: biomassa, pellet, biochar." },
    { icon: Zap, title: "Riduzione costi energetici", body: "Valorizzare il bosco per ridurre dipendenza energetica e costi pubblici." },
    { icon: Users, title: "Nuova occupazione", body: "Lavoro e sviluppo attraverso una gestione innovativa del territorio." },
    { icon: Sprout, title: "Comunità Energetiche", body: "Il bosco come risorsa strategica per la transizione energetica locale." },
  ];
  return (
    <section id="benefici" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Benefici territoriali</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest-deep sm:text-5xl">
              Il bosco diventa <em className="text-forest">risorsa attiva</em> e produttiva.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Un modello integrato capace di generare benefici duraturi per ambiente,
            economia e comunità locali.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-sm border border-forest/15 bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-forest-deep">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Quote ---------------- */
function Quote() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep py-28 text-cream lg:py-36">
      <img
        src={forester}
        alt=""
        aria-hidden
        width={1400}
        height={1000}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/85 to-forest-deep/60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="font-display text-3xl italic leading-snug text-cream sm:text-4xl lg:text-5xl">
          "Il futuro del territorio si costruisce
          <span className="block text-gold">nelle scelte di oggi."</span>
        </p>
        <p className="mt-8 text-sm uppercase tracking-[0.25em] text-cream/70">
          L'area pilota siete voi
        </p>
      </div>
    </section>
  );
}

/* ---------------- Beta form ---------------- */
function BetaForm() {
  const [loading, setLoading] = useState(false);
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formspreeEndpoint) {
      toast.error("Form non configurato", {
        description: "Manca la variabile VITE_FORMSPREE_ENDPOINT.",
      });
      return;
    }

    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      org: String(fd.get("org") ?? "").trim() || null,
      role: String(fd.get("role") ?? "").trim(),
      region: String(fd.get("region") ?? "").trim() || null,
      message: String(fd.get("message") ?? "").trim() || null,
      consent_gdpr: true,
      source: "landing",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    };

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      const message =
        result?.errors?.[0]?.message ??
        "Non siamo riusciti a inviare la richiesta. Riprova tra poco.";
      toast.error("Errore nell'invio", { description: message });
      setLoading(false);
      return;
    }
    toast.success("Grazie! Ti ricontatteremo a breve.", {
      description: "La tua adesione al progetto pilota è stata registrata.",
    });
    form.reset();
    setLoading(false);
  };

  return (
    <section id="beta" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-sm border border-forest/20 bg-card shadow-xl lg:grid-cols-[1fr_1.1fr]">
          <div className="bg-forest-deep p-10 text-cream lg:p-14">
            <SectionEyebrow variant="dark">Aderisci alla beta</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Attiva il tuo <em className="text-gold">bosco.</em>
            </h2>
            <p className="mt-6 text-cream/80">
              Se sei un proprietario forestale, un professionista, un ente locale o
              un partner interessato, entra nella lista dei primi aderenti al
              progetto pilota nelle Marche.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/80">
              <li className="flex gap-3">
                <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Priorità nell'accesso alla piattaforma di mappatura
              </li>
              <li className="flex gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Supporto tecnico dedicato durante la sperimentazione
              </li>
              <li className="flex gap-3">
                <Handshake className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Aggiornamenti su bandi, incontri e opportunità
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 p-10 lg:p-14">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome e cognome" name="name" required />
              <Field label="Email" name="email" type="email" required icon={Mail} />
            </div>
            <Field label="Ente / Organizzazione" name="org" />
            <Field label="Regione / Provincia (facoltativo)" name="region" />
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Ruolo
              </label>
              <select
                name="role"
                required
                defaultValue=""
                className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              >
                <option value="" disabled>Seleziona...</option>
                <option value="proprietario">Proprietario forestale</option>
                <option value="professionista">Professionista / Tecnico</option>
                <option value="ente">Ente pubblico / Comune</option>
                <option value="partner">Partner / Filiera</option>
                <option value="altro">Altro</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Messaggio (facoltativo)
              </label>
              <textarea
                name="message"
                rows={3}
                className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                placeholder="Raccontaci brevemente il tuo interesse..."
              />
            </div>
            <label className="flex gap-3 text-xs leading-relaxed text-muted-foreground">
              <input type="checkbox" required className="mt-0.5 accent-forest" />
              <span>
                Ho letto l'informativa privacy e acconsento al trattamento dei
                dati per essere ricontattato in merito al progetto Bosco Attivo
                Marche (Reg. UE 2016/679 - GDPR).
              </span>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-deep px-8 py-4 text-sm font-semibold text-cream transition-all hover:bg-forest disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Invio in corso..." : "Invia adesione"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  icon: Icon,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        )}
        <input
          type={type}
          name={name}
          required={required}
          className={`w-full rounded-sm border border-input bg-background py-3 text-sm text-foreground focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 ${
            Icon ? "pl-10 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-forest/20 bg-forest-deep py-14 text-cream/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={logoUrl} alt="Bosco Attivo Marche" className="h-16 w-auto" />
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              Un progetto di <strong className="text-cream">Atteggiamento Digitale SB srl</strong> —
              Società Benefit. Ideato dal Dott. For. Giacomo Storti.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Progetto
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#problema" className="hover:text-cream">Il problema</a></li>
              <li><a href="#obiettivi" className="hover:text-cream">Obiettivi</a></li>
              <li><a href="#soluzione" className="hover:text-cream">Soluzione</a></li>
              <li><a href="#benefici" className="hover:text-cream">Benefici</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Contatti
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Atteggiamento Digitale SB srl</li>
              <li>Società Benefit</li>
              <li><a href="#beta" className="hover:text-cream">Aderisci al progetto pilota →</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Bosco Attivo Marche · Tutti i diritti riservati.</p>
          <p>Privacy · Cookie · Note legali</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- helpers ---------------- */
function SectionEyebrow({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
        variant === "dark" ? "text-gold" : "text-forest"
      }`}
    >
      <span className={`h-px w-8 ${variant === "dark" ? "bg-gold" : "bg-forest"}`} />
      {children}
    </span>
  );
}
