import logo from "@/app/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
const Footer = () => {
  return (
    <footer className="bg-custom-gradient">
      <div className="container mx-auto px-[5%]  py-20">
        <div className="footer-bg md:grid grid-cols-2 py-20 md:px-12 px-4">
          <aside>
            <Image src={logo} alt="logo" width={136} height={136} />
            <p className="text-text mt-8">
              Ready to elevate your online presence? <br /> Contact us today to
              discuss your project and <br /> discover how we can bring your
              vision to life.
            </p>
            <p className="text-text flex items-center gap-x-2 mt-16">
              <GiSelfLove /> Made with love powered by inkyy.com
            </p>
          </aside>
          <aside className="flex flex-col items-end justify-between">
            <div className="flex gap-x-8 mt-12 flex-wrap">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/services">Services</Link>
            </div>
            <div className="flex gap-x-4">
              <Link
                href={""}
                className="size-12 bg-slate-100 rounded-full flex justify-center items-center"
              >
                <FaInstagram />
              </Link>
              <Link
                href={""}
                className="size-12 bg-slate-100 rounded-full flex justify-center items-center"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={""}
                className="size-12 bg-slate-100 rounded-full flex justify-center items-center"
              >
                <FaTwitter />
              </Link>
              <Link
                href={""}
                className="size-12 bg-slate-100 rounded-full flex justify-center items-center"
              >
                <FaTiktok />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
