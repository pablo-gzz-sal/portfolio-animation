import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/portfolio/Header";
import { Hero, HeroStats } from "@/components/portfolio/Hero";
import { WhoIWorkWith } from "@/components/portfolio/WhoIWorkWith";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Process } from "@/components/portfolio/Process";
import { Stack } from "@/components/portfolio/Stack";
import { SocialProof } from "@/components/portfolio/SocialProof";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SceneCanvas } from "@/components/portfolio/SceneCanvas";
import { Atmosphere } from "@/components/portfolio/Atmosphere";
import { Preloader } from "@/components/portfolio/Preloader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pablo Salcido | Senior Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Full-stack engineer in Munich building web apps, APIs and deployments for SaaS founders and small businesses.",
      },
      {
        property: "og:title",
        content: "Pablo Salcido | Senior Full-Stack Engineer",
      },
      {
        property: "og:description",
        content: "Web apps, Node.js APIs and deployments for SaaS founders and small businesses.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative min-h-screen text-foreground">
      <Preloader />
      <Atmosphere />
      <SceneCanvas />
      <Header />
      <Hero />
      <HeroStats />
      <WhoIWorkWith />
      <SelectedWork />
      <Process />
      <Stack />
      <Testimonials />
      {/* <SocialProof /> */}
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
