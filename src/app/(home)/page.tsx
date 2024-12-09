import { HeroSection } from "./sections/hero";
import { FaqsSection } from "./sections/faqs";
import { AboutSection } from "./sections/about";
import { TestimonySection } from "./sections/testimony";
import { GallerySection } from "./sections/gallery";
import PartnerSection from "./sections/partners";
import Cta from "./sections/cta";
import VisitNairobi from "./sections/visitNairobi";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <VisitNairobi />
      <FaqsSection />
      <GallerySection />
      <TestimonySection />
      <Cta />
      <PartnerSection />
    </main>
  );
}
