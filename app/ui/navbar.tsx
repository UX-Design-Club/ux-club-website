import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Hamburger } from "./hamburger";
import { GoButton } from "./gobutton";

export function Navbar() {
  return (
    <div className={`w-full h-16 absolute z-20 bg-white drop-shadow-xl`}>
      <div className="lg:max-w-7xl flex flex-row h-full justify-between mx-auto items-center content-center px-4">
        <Link href={"/"} className="h-2/3">
          <Image
            className="h-full"
            src="/images/uxclublogo_d.svg"
            alt="UX Design Club Logo"
            width={90}
            height={50}
            priority
          />
        </Link>
        <div className="md:hidden">
          <Hamburger />
        </div>
        <ul className="hidden md:flex flex-row gap-8 justify-center items-center content-center font-bold text-slate-800">
          <li className="border-2 border-transparent hover:border-b-slate-800 transition-colors duration-100">
            <Link href={"/"} className="transition-all">
              Home
            </Link>
          </li>
          <li className="border-2 border-transparent hover:border-b-slate-800 transition-colors duration-100">
            <Link href={"about"} className="transition-all">
              About
            </Link>
          </li>
          <li className="border-2 border-transparent hover:border-b-slate-800 transition-colors duration-100">
            <Link href={"events"} className="transition-all">
              Upcoming Events
            </Link>
          </li>
          <li className="border-2 border-transparent hover:border-b-slate-800 transition-colors duration-100">
            <Link href={"contact"} className="transition-all">
              Contact Us
            </Link>
          </li>
          <li className="flex flex-row">
            <GoButton href="https://forms.gle/W5A4eWQbsXsuRurt8" text="Join Us" dark />
          </li>
        </ul>
      </div>
    </div>
  );
}
