import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Hamburger } from "./hamburger";
import { GoButton } from "./gobutton";

export function Navbar() {
  return (
    <div className="w-full h-16 absolute">
      <div className="lg:max-w-5xl flex flex-row h-full justify-between mx-auto items-center content-center px-4">
        <Link href={"/"} className="h-2/3">
          <Image
            className="h-full"
            src="/images/uxclublogo.svg"
            alt="UX Design Club Logo"
            width={90}
            height={50}
            priority
          />
        </Link>
        <div className="md:hidden">
          <Hamburger />
        </div>
        <ul className="hidden md:block">
          <li className="flex flex-row gap-8 justify-center items-center content-center font-bold text-slate-300">
            <Link href={"/"} className="hover:text-white transition-all">
              Home
            </Link>
            <Link href={"about"} className="hover:text-white transition-all">
              About
            </Link>
            <Link href={"/"} className="hover:text-white transition-all">
              Events
            </Link>
            <Link href={"/"} className="hover:text-white transition-all">
              Sponsorship
            </Link>
            <GoButton href="/" text="Join Us" />
          </li>
        </ul>
      </div>
    </div>
  );
}
