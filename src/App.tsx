import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { TrustedBy } from "./sections/TrustedBy";
import { FeatureShowcase } from "./sections/FeatureShowcase";
import { PlatformCapabilities } from "./sections/PlatformCapabilities";
import { Pricing } from "./sections/Pricing";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <FeatureShowcase />
        <PlatformCapabilities />
        <Pricing />
      </main>
    </>
  );
}
