import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { TrustedBy } from "./sections/TrustedBy";
import { FeatureShowcase } from "./sections/FeatureShowcase";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <FeatureShowcase />
      </main>
    </>
  );
}
