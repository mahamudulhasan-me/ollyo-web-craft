import logo from "@/app/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex items-center justify-between py-7">
      <figure>
        <Image src={logo} alt="faster ui logo" width={140} height={80} />
      </figure>
      <nav className="nav-bg py-4 px-8 flex items-center gap-x-10 ">
        <Link href="/" className="font-semibold text-primary">
          Home
        </Link>
        <Link href="" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="" className="hover:text-primary transition-colors">
          How It Works
        </Link>
        <Link href="" className="hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>
      <aside className="flex items-center gap-x-5">
        <button>Sign In</button>
        <button className="bg-primary text-white font-semibold px-5 py-2 rounded-md">
          Sign Up
        </button>
      </aside>
    </div>
  );
};

export default Header;
