import { HeroSection } from "./sections/hero";
import { FaqsSection } from "./sections/faqs";
import { AboutSection } from "./sections/about";
import { TestimonySection } from "./sections/testimony";
import { GallerySection } from "./sections/gallery";
import PartnerSection from "./sections/partners";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <FaqsSection />
      <GallerySection />
      <PartnerSection />
      <TestimonySection />
    </main>
  );
}
