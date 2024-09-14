import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  return (
    <section className="container mx-auto px-[5%] grid grid-cols-12 pt-20 gap-x-8">
      <aside className="col-span-4 flex flex-col justify-between pt-8">
        <div className="space-y-8">
          <h1 className="text-6xl font-raleway font-semibold ">Pricing</h1>
          <p>
            Take a look at some of our recent projects <br /> to see how
            we&apos;ve helped businesses like <br /> yours succeed online.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg space-y-4">
          <h2 className="text-3xl font-semibold">
            Let’s Schedule <br /> a Meeting
          </h2>
          <button className="bg-primary w-full py-4 rounded-lg text-white font-semibold">
            Schedule Meeting
          </button>
        </div>
      </aside>
      <aside className="col-span-8 bg-white rounded-lg             p-8 space-y-8">
        <h2 className="text-2xl font-semibold ml-4">Unlimited Services</h2>
        <p className="ml-4">
          Take a look at some of our recent projects to see how <br />{" "}
          we&apos;ve helped businesses like yours succeed online.
        </p>
        <div className="grid grid-cols-2 ml-4 gap-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <p key={i} className="flex items-center gap-x-2 text-slate-700">
              <IoIosCheckmarkCircleOutline className="text-xl" /> Unlimited
              requests
            </p>
          ))}
        </div>
        <div className="bg-slate-100 p-8 rounded-lg flex items-center justify-between">
          <h1 className="text-5xl font-semibold">
            $3,250 <span className="text-slate-500 text-base">/mo</span>
          </h1>
          <Link href={"#"}>
            {" "}
            <FaLongArrowAltRight size={24} />
          </Link>
        </div>
      </aside>
    </section>
  );
};

export default Pricing;
