import teamImg from "@/app/images/team.png";
import Image from "next/image";
import { CiMobile3 } from "react-icons/ci";
import { FaCode, FaOpencart, FaWebflow } from "react-icons/fa6";
import { SiAntdesign, SiCodecademy } from "react-icons/si";
import WhatWeDoMiniCard from "./WhatWeDoMiniCard";

const WhatWeDo = () => {
  return (
    <section className=" bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-[5%] pt-10 pb-20">
        <h1 className="md:text-6xl text-3xl font-raleway font-semibold ">
          What We do
        </h1>
        <div className="md:grid grid-cols-4 gap-8 mt-16 grid-rows-2">
          <WhatWeDoMiniCard icon={<FaCode />} title="Web Design" />
          <WhatWeDoMiniCard icon={<SiAntdesign />} title="UI/UX Design" />
          <WhatWeDoMiniCard icon={<CiMobile3 />} title="Responsive Design" />
          <div className=" row-span-2 rounded-lg shadow-sm">
            <WhatWeDoMiniCard
              icon={<FaOpencart />}
              title="E-commerce Solutions:"
            />
            <figure className="p-8 bg-white">
              <Image src={teamImg} alt="hero-bg" width={800} height={800} />
            </figure>
          </div>
          <div className="col-span-2 md:grid grid-cols-2 gap-x-8 rounded-lg bg-white shadow-sm">
            <WhatWeDoMiniCard icon={<FaWebflow />} title="Webflow" />
            <figure className="bg-primary m-8 flex justify-center items-center text-white text-8xl rounded-lg">
              <FaWebflow />
            </figure>
          </div>
          <WhatWeDoMiniCard
            icon={<SiCodecademy />}
            title="Custom Development"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
