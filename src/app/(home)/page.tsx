import { HeroSection } from "./sections/hero";
import { FaqsSection } from "./sections/faqs";
import { AboutSection } from "./sections/about";
import { TestimonySection } from "./sections/testimony";
import { GallerySection } from "./sections/gallery";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      {/* <GallerySection /> */}
      <FaqsSection />
      <TestimonySection />
    </main>
  );
}
