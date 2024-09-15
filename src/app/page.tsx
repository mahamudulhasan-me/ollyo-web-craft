import FAQs from "./sections/FAQs/FAQs";
import Footer from "./sections/Footer/Footer";
import GetInTouch from "./sections/GetInTouch/GetInTouch";
import HeroSection from "./sections/Hero/HeroSection";
import Portfolio from "./sections/Portfolio/Portfolio";
import Pricing from "./sections/Pricing/Pricing";
import Reviews from "./sections/Reviews/Reviews";
import WhatWeDo from "./sections/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <Portfolio />
      <Reviews />
      <Pricing />
      <FAQs />
      <GetInTouch />
      <Footer />
    </div>
  );
}
