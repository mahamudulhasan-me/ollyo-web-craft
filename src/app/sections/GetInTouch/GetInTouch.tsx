import shape from "@/app/images/contactShape.png";
import footerShape from "@/app/images/footerShape.png";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <section className="container mx-auto px-[5%] py-20 flex flex-col items-center relative border-t border-slate-300">
      <Image
        src={shape}
        width={300}
        height={300}
        alt="GetInTouch"
        className="absolute right-0 -top-12"
      />
      <Image
        src={footerShape}
        width={300}
        height={300}
        alt="GetInTouch"
        className="absolute left-0 -bottom-10"
      />
      <h1 className="md:text-6xl text-4xl font-raleway font-semibold">
        Let&apos;s Get in Touch
      </h1>
      <form action="" className="md:w-[40%] space-y-4 mt-16">
        <div>
          <label htmlFor="" className="ml-1 font-semibold text-text">
            email
          </label>{" "}
          <br />
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full focus:outline-none border border-slate-300 rounded-md px-4 py-3 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="" className="ml-1 font-semibold text-text">
            name
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="example@email.com"
            className="w-full focus:outline-none border border-slate-300 rounded-md px-4 py-3 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="" className="ml-1 font-semibold text-text">
            message
          </label>{" "}
          <br />
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            className="w-full focus:outline-none border border-slate-300 rounded-md px-4 py-3 shadow-sm"
          ></textarea>
        </div>
        <button className="w-full bg-primary text-white font-semibold px-10 py-3 rounded-md">
          Get in Touch
        </button>
      </form>
    </section>
  );
};

export default GetInTouch;
