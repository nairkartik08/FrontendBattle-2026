import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { TrustedBy } from "./sections/TrustedBy";
import { FeatureShowcase } from "./sections/FeatureShowcase";
import { PlatformCapabilities } from "./sections/PlatformCapabilities";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <FeatureShowcase />
        <PlatformCapabilities />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
