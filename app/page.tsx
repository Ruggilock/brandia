import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Features from "./components/Features";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import About from "./components/About";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <Manifesto /> */}
        <Features />
        <Process />
        <Pricing />
        <About />
        <CTA />
      </main>
    </>
  );
}
