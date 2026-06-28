import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { WhoIWorkWith } from "@/components/portfolio/WhoIWorkWith";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Process } from "@/components/portfolio/Process";
import { Stack } from "@/components/portfolio/Stack";
import { SocialProof } from "@/components/portfolio/SocialProof";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { SceneCanvas } from "@/components/portfolio/SceneCanvas";
import { Atmosphere } from "@/components/portfolio/Atmosphere";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pablo Salcido — Senior Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Pablo Salcido — senior full-stack engineer building polished SaaS products and production systems for founders and small-to-medium businesses.",
      },
      {
        property: "og:title",
        content: "Pablo Salcido — Senior Full-Stack Engineer",
      },
      {
        property: "og:description",
        content:
          "Polished frontends, Node.js APIs, and production systems for SaaS founders and growing businesses.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative min-h-screen text-foreground">
      <SmoothScroll />
      <Atmosphere />
      <SceneCanvas />
      <Header />
      <Hero />
      <WhoIWorkWith />
      <SelectedWork />
      <Process />
      <Stack />
      {/* <SocialProof /> */}
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}

