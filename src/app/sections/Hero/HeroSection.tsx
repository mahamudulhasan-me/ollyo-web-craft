import Image from "next/image";
import heroBg from "../../images/hero-bg.png";
import Header from "../Header/Header";
const HeroSection = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat relative">
      <Image
        src={heroBg}
        alt="hero-bg"
        width={800}
        height={800}
        className="absolute top-0  h-screen object-fill"
      />
      <div className="container mx-auto px-[5%] absolute w-full h-full">
        <Header />
        <div className="w-full h-3/5 mt-5 flex flex-col items-center justify-center">
          <h1 className="text-7xl font-semibold font-raleway text-center space-y-2">
            Awesome UI Dark <br /> Template for <br /> Webflow Agency
          </h1>
          <button className="bg-text text-white font-semibold px-10 py-3 rounded-md mt-8">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
