import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Problems />
        <Solution />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}