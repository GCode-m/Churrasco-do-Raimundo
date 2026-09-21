import { useEffect, useState } from "react";
import {
  Flame,
  UtensilsCrossed,
  Beer,
  Users,
  MapPin,
  Clock,
  Star,
  MessageCircle,
  Instagram,
  Menu as MenuIcon,
  X,
  Cake,
  Beef,
  CreditCard,
  Check,
} from "lucide-react";

import f1 from "@/assets/foto-1.jpg.asset.json";
import f2 from "@/assets/foto-2.jpg.asset.json";
import f3 from "@/assets/foto-3.jpg.asset.json";
import f4 from "@/assets/foto-4.jpg.asset.json";
import f5 from "@/assets/foto-5.jpg.asset.json";
import f10 from "@/assets/foto-10.jpg.asset.json";
import f13 from "@/assets/foto-13.jpg.asset.json";
import f14 from "@/assets/foto-14.jpg.asset.json";
import f22 from "@/assets/foto-22.jpg.asset.json";
import f24 from "@/assets/foto-24.jpg.asset.json";
import { REVIEWS } from "@/components/site/reviewsData";

export const WHATSAPP =
  "https://wa.me/5521969475262?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20Churrasco%20do%20Raimundo.";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Automóvel+Clube+547+Santa+Cruz+da+Serra+RJ";
export const INSTAGRAM = "https://instagram.com/churrascodoraimundo_";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-charcoal/95 backdrop-blur" : "bg-gradient-to-b from-charcoal/80 to-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:py-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-2">
          <Flame className="size-7 shrink-0 text-fire" />
          <span className="font-display truncate text-xl leading-none text-cream md:text-2xl">
            Churrasco do Raimundo
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-cream/80 transition-colors hover:text-fire"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-accent sm:inline-flex"
          >
            <MessageCircle className="size-4" /> Reservar
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 p-2 text-cream lg:hidden"
          >
            {open ? <X className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-cream/10 bg-charcoal/98 px-5 py-4 lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-base font-medium text-cream/90"
            >
              {n.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-bold uppercase text-primary-foreground"
          >
            <MessageCircle className="size-4" /> Reservar pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-4 fill-fire text-fire" />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={f13.url}
        alt="Churrasco na brasa servido com arroz, farofa e vinagrete"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pb-16 pt-32 text-center md:pb-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-fire">
          Santa Cruz da Serra — RJ
        </p>
        <h1 className="font-display text-5xl leading-[0.95] text-cream sm:text-7xl md:text-8xl">
          Churrasco do Raimundo
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-cream/95 md:text-2xl">
          O sabor do churrasco que reúne a família.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-cream/75 md:text-base">
          Carnes na brasa, porções, bebidas e aquele ambiente perfeito para aproveitar um bom almoço
          ou jantar.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent sm:w-auto"
          >
            Reserve sua mesa
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 border border-cream/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:border-fire hover:text-fire sm:w-auto"
          >
            <MessageCircle className="size-4" /> Falar no WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1">
          <Stars />
          <p className="text-sm font-semibold text-cream">4,6 no Google</p>
          <p className="text-xs uppercase tracking-widest text-cream/60">+1.700 avaliações</p>
        </div>
      </div>
    </section>
  );
}

export function QuickBar() {
  const items = [
    { icon: Flame, label: "Churrasco na brasa" },
    { icon: UtensilsCrossed, label: "Almoço e jantar" },
    { icon: Beer, label: "Bar completo" },
    { icon: Users, label: "Famílias e grupos" },
    { icon: MapPin, label: "Santa Cruz da Serra" },
  ];
  return (
    <section className="bg-charcoal py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-2">
            <it.icon className="size-5 shrink-0 text-fire" />
            <span className="text-sm font-medium text-cream/90">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Nossa história
          </p>
          <h2 className="font-display text-4xl leading-tight text-charcoal md:text-6xl">
            Mais que churrasco. Uma experiência para compartilhar.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>No Churrasco do Raimundo, o protagonista é o sabor.</p>
            <p>
              Um lugar para reunir a família, encontrar os amigos, aproveitar uma boa refeição e,
              claro, comer aquele churrasco preparado na brasa.
            </p>
            <p>
              Seja para um almoço tranquilo, um jantar com os amigos ou uma ocasião especial, o
              Churrasco do Raimundo espera por você em Santa Cruz da Serra.
            </p>
          </div>
          <a
            href="#cardapio"
            className="mt-8 inline-block bg-charcoal px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-primary"
          >
            Conhecer o cardápio
          </a>
        </div>
        <div className="relative">
          <img
            src={f24.url}
            alt="Prato de churrasco com fritas, arroz, farofa e feijão"
            className="aspect-4/5 w-full object-cover shadow-2xl"
          />
          <div className="absolute -bottom-5 -left-5 hidden bg-primary px-6 py-5 text-primary-foreground sm:block">
            <p className="font-display text-3xl leading-none">4,6</p>
            <p className="text-xs uppercase tracking-widest">no Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Specialties() {
  const cards = [
    {
      icon: Beef,
      title: "Carnes na brasa",
      text: "Carnes preparadas na brasa para preservar sabor, suculência e aquele aroma irresistível de churrasco.",
      img: f13.url,
    },
    {
      icon: UtensilsCrossed,
      title: "Porções",
      text: "Opções para compartilhar com a família e os amigos.",
      img: f22.url,
    },
    {
      icon: Beer,
      title: "Bebidas",
      text: "Cervejas, drinks, vinhos e outras opções para acompanhar sua refeição.",
      img: f14.url,
    },
    {
      icon: Cake,
      title: "Acompanhamentos",
      text: "Arroz, farofa, vinagrete e tudo que deixa o churrasco completo.",
      img: f10.url,
    },
  ];
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-cream md:text-6xl">Do fogo para a sua mesa</h2>
          <p className="mt-4 text-cream/70">
            Carnes, porções e acompanhamentos para deixar seu churrasco ainda melhor.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="group overflow-hidden bg-cream/5">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <c.icon className="size-6 text-fire" />
                <h3 className="mt-3 text-2xl text-cream">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FireBanner() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <img
        src={f24.url}
        alt="Carnes na brasa servidas na mesa"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-display text-4xl text-cream md:text-7xl">O segredo está no fogo.</h2>
        <p className="mt-5 text-lg text-cream/80">
          Carne no ponto, cheiro de brasa e aquele sabor que faz você querer voltar.
        </p>
        <a
          href="#cardapio"
          className="mt-8 inline-block bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Quero conhecer
        </a>
      </div>
    </section>
  );
}

export function MenuSection() {
  const pages = [
    { url: f3.url, label: "Grelhados, vinhos, drinks e caipirinhas" },
    { url: f4.url, label: "Porções" },
    { url: f1.url, label: "Cardápio — pratos e bebidas" },
    { url: f2.url, label: "Cardápio — destaques da casa" },
    { url: f5.url, label: "Cardápio — sobremesas e mais" },
  ];
  return (
    <section id="cardapio" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Cardápio
          </p>
          <h2 className="font-display text-4xl text-charcoal md:text-6xl">
            Veja o nosso cardápio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Toque nas fotos para ampliar. Para dúvidas sobre pratos e preços, fale com a gente no
            WhatsApp.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-border bg-card shadow-sm"
            >
              <img
                src={p.url}
                alt={p.label}
                className="aspect-3/4 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="px-4 py-3 text-sm font-medium text-charcoal">{p.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ambience() {
  const perks = [
    "Ambiente familiar",
    "Espaço para grupos",
    "Acessibilidade",
    "Cadeirinhas para crianças",
    "Banheiros",
    "Bar no local",
    "Estacionamento gratuito na rua",
  ];
  return (
    <section id="ambiente" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-4">
          <img src={f14.url} alt="Mesa com fritas, farofa e chope" className="aspect-square w-full object-cover" />
          <img src={f22.url} alt="Porção frita servida com limão" className="mt-8 aspect-square w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl leading-tight text-charcoal md:text-6xl">
            Um lugar para reunir quem você gosta
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Um ambiente casual e tranquilo para aproveitar bons momentos com a família, amigos ou em
            grupo.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm font-medium text-charcoal">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-l-2 border-accent pl-4 text-sm text-muted-foreground">
            O estacionamento na rua pode ter disponibilidade limitada.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Reservations() {
  return (
    <section className="bg-charcoal py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-display text-4xl text-cream md:text-6xl">Vai reunir a galera?</h2>
        <p className="mt-4 text-lg font-semibold text-fire">Reserve sua mesa pelo WhatsApp.</p>
        <p className="mt-3 text-cream/70">
          Fale com nossa equipe e consulte a disponibilidade para sua próxima visita.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
        >
          <MessageCircle className="size-4" /> Reservar pelo WhatsApp
        </a>
        <p className="mt-4 text-sm text-cream/60">(21) 96947-5262</p>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-charcoal md:text-6xl">
            Quem conhece, recomenda.
          </h2>
          <div className="mx-auto mt-8 inline-flex flex-col items-center border border-border bg-card px-10 py-6 shadow-sm">
            <p className="font-display text-5xl leading-none text-primary">4,6</p>
            <Stars className="mt-2 justify-center" />
            <p className="mt-2 text-sm font-medium text-charcoal">+1.700 avaliações no Google</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col border border-border bg-card p-6 shadow-sm"
            >
              <Stars className="justify-start" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-charcoal">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-charcoal">{r.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {r.meta} · {r.when}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-cream md:text-6xl">Galeria</h2>
          <p className="mt-4 text-cream/70">Um gostinho do que espera por você.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
          <img
            src={f13.url}
            alt="Churrasco completo servido na mesa"
            className="col-span-2 row-span-2 h-64 w-full object-cover md:h-full"
          />
          <img src={f24.url} alt="Prato de carnes com feijão" className="h-40 w-full object-cover md:h-full" />
          <img src={f14.url} alt="Chope, fritas e farofa" className="h-40 w-full object-cover md:h-full" />
          <img src={f22.url} alt="Porção de frango frito com limão" className="h-40 w-full object-cover md:h-full" />
          <img src={f10.url} alt="Farofa especial da casa" className="h-40 w-full object-cover md:h-full" />
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl text-cream">Siga o Churrasco do Raimundo</h3>
          <p className="mt-2 text-cream/70">@churrascodoraimundo_</p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-cream/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:border-fire hover:text-fire"
          >
            <Instagram className="size-4" /> Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export function Info() {
  return (
    <section id="localizacao" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-4xl text-charcoal md:text-6xl">
          Visite o Churrasco do Raimundo
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="size-5" />
              <h3 className="text-2xl text-charcoal">Endereço</h3>
            </div>
            <p className="mt-3 text-muted-foreground">
              Automóvel Clube, 547
              <br />
              Santa Cruz da Serra — Rio de Janeiro/RJ
              <br />
              CEP 25255-030
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-primary">
              <Clock className="size-5" />
              <h3 className="text-2xl text-charcoal">Horário</h3>
            </div>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              <li>Terça a sábado — 11h às 23h</li>
              <li>Domingo — 11h às 18h</li>
              <li className="font-semibold text-primary">Segunda-feira — Fechado</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-primary">
              <CreditCard className="size-5" />
              <h3 className="text-2xl text-charcoal">Serviços e pagamento</h3>
            </div>
            <p className="mt-3 text-muted-foreground">
              Refeição no local, para viagem, entrega e reservas.
            </p>
            <p className="mt-2 text-muted-foreground">
              Cartão de crédito, cartão de débito, NFC, Pluxee, Ticket Restaurante e vale-refeição.
            </p>
          </div>
        </div>

        <h3 className="mt-16 font-display text-3xl text-charcoal md:text-4xl">Como chegar</h3>
        <div className="mt-6 overflow-hidden border border-border">
          <iframe
            title="Mapa do Churrasco do Raimundo"
            src="https://www.google.com/maps?q=Autom%C3%B3vel%20Clube%2C%20547%20Santa%20Cruz%20da%20Serra%20RJ&output=embed"
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-primary"
          >
            Abrir no Google Maps
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-charcoal px-8 py-4 text-sm font-bold uppercase tracking-wider text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
          >
            <MessageCircle className="size-4" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Qual o horário de funcionamento?",
    a: "De terça a sábado, das 11h às 23h. Aos domingos, das 11h às 18h. Às segundas-feiras, o restaurante está fechado.",
  },
  {
    q: "O restaurante aceita reservas?",
    a: "Sim. Entre em contato pelo WhatsApp para consultar a disponibilidade.",
  },
  {
    q: "O restaurante aceita vale-refeição?",
    a: "Sim. O estabelecimento informa aceitar vale-refeição, incluindo Pluxee e Ticket Restaurante.",
  },
  { q: "Tem delivery?", a: "Sim. O restaurante informa oferecer serviço de entrega." },
  {
    q: "Posso ir com crianças?",
    a: "Sim. O estabelecimento é indicado para famílias e possui cadeirinhas altas para crianças.",
  },
  {
    q: "O local possui acessibilidade?",
    a: "Sim. Há entrada, assentos e banheiro com acessibilidade para pessoas em cadeira de rodas.",
  },
];

export function Faq() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-display text-4xl text-charcoal md:text-6xl">Perguntas frequentes</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-charcoal marker:content-none">
                {f.q}
                <span className="shrink-0 text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <img
        src={f14.url}
        alt="Mesa servida com porções e chope"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-display text-4xl text-cream md:text-7xl">
          Hoje combina com churrasco.
        </h2>
        <p className="mt-5 text-lg text-cream/80">
          Reúna quem você gosta e venha viver essa experiência no Churrasco do Raimundo.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent"
        >
          <MessageCircle className="size-4" /> Reserve pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="size-7 text-fire" />
            <p className="font-display text-2xl leading-none text-cream">
              Churrasco
              <br />
              do Raimundo
            </p>
          </div>
          <p className="mt-4 text-sm text-cream/65">O sabor do churrasco que reúne a família.</p>
        </div>

        <div className="text-sm text-cream/70">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-fire" />
            Automóvel Clube, 547
            <br />
            Santa Cruz da Serra - RJ
          </p>
          <p className="mt-4 flex items-start gap-2">
            <Clock className="mt-0.5 size-4 shrink-0 text-fire" />
            <span>
              Ter-Sáb: 11h às 23h
              <br />
              Dom: 11h às 18h
              <br />
              Seg: Fechado
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm font-medium">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-fire">
            WhatsApp
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-fire">
            Instagram
          </a>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-fire">
            Google Maps
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-cream/40">
        © {new Date().getFullYear()} Churrasco do Raimundo. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-primary px-5 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-2xl transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping bg-primary/50" />
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
