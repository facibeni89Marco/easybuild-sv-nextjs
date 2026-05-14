import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Gallery } from "@/components/landing/Gallery";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { About } from "@/components/landing/About";
import { Faq } from "@/components/landing/Faq";
import { RequestForm } from "@/components/landing/RequestForm";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <HowItWorks />
      <About />
      <Faq />
      <RequestForm />
      <Footer />
    </main>
  );
}
