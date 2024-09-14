import HeroSection from "./sections/Hero/HeroSection";
import Portfolio from "./sections/Portfolio/Portfolio";
import WhatWeDo from "./sections/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <Portfolio />
    </div>
  );
}
