import { createFileRoute } from "@tanstack/react-router";

import {
  Header,
  Hero,
  QuickBar,
  About,
  Specialties,
  FireBanner,
  MenuSection,
  Ambience,
  Reservations,
  Reviews,
  Gallery,
  Info,
  Faq,
  FinalCta,
  Footer,
  FloatingWhatsapp,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Churrasco do Raimundo | Churrascaria em Santa Cruz da Serra - RJ" },
      {
        name: "description",
        content:
          "Carnes na brasa, porções, bebidas e ambiente familiar em Santa Cruz da Serra (RJ). 4,6 no Google. Reserve sua mesa pelo WhatsApp.",
      },
      { property: "og:title", content: "Churrasco do Raimundo" },
      {
        property: "og:description",
        content:
          "O sabor do churrasco que reúne a família. Carnes na brasa, porções e bebidas em Santa Cruz da Serra - RJ.",
      },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuickBar />
        <About />
        <Specialties />
        <FireBanner />
        <MenuSection />
        <Ambience />
        <Reservations />
        <Reviews />
        <Gallery />
        <Info />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
