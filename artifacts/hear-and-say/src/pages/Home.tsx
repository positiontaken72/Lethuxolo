import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Locations } from "@/components/sections/Locations";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Locations />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
