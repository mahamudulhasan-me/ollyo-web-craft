import Image from "next/image"; // Ensure Image is imported correctly
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import portfolio1 from "@/app/images/portfolio/portfolio-1.png";
import portfolio2 from "@/app/images/portfolio/portfolio-2.png";
import portfolio3 from "@/app/images/portfolio/portfolio-3.png";

const Portfolio = () => {
  return (
    <section className="bg-slate-100 h-fit bg-no-repeat bg-center py-20">
      <div className="w-full z-0 h-[18rem] flex justify-center items-center relative">
        <Image
          src="/images/checkWorkTitleBg.png"
          alt="hero-bg"
          width={700}
          height={800}
          className="absolute top-0"
        />
        <div className="absolute top-20 md:w-[60%] flex justify-around items-center">
          <button className="size-20 bg-white rounded-full text-xl text-text flex justify-center items-center">
            <FaLongArrowAltLeft />
          </button>
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="md:text-6xl text-4xl font-raleway font-semibold">
              Check our Work
            </h1>
            <p className="mt-5">
              Take a look at some of our recent projects to see how we&apos;ve
              helped
              <br />
              businesses like yours succeed online.
            </p>
          </div>
          <button className="size-20 bg-white rounded-full text-xl text-text flex justify-center items-center">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      <div className="container relative mx-auto md:grid grid-cols-12 gap-x-8">
        <figure className="col-span-2 bg-white rounded-r-lg py-8 pr-8  h-[36rem]">
          <Image
            src={portfolio1}
            alt="portfolio-1"
            width={800}
            height={400}
            className="h-full w-full"
          />
        </figure>
        <figure className="col-span-8  overflow-hidden h-[36rem] rounded-lg">
          <div className="w-full h-8 bg-white/50"></div>
          <div className="bg-white px-8 pb-8 w-full h-full">
            <Image
              src={portfolio2}
              alt="portfolio-2"
              width={1000}
              height={400}
              className="h-full w-full pb-8"
            />
          </div>
        </figure>
        <figure className="col-span-2 bg-white overflow-hidden h-[36rem] py-8 pl-8 rounded-lg">
          <Image
            src={portfolio3}
            alt="portfolio-3"
            width={800}
            height={400}
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default Portfolio;
