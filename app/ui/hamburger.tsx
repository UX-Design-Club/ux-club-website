"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleMenu}>
        <FaBars className="text-4xl lg:hidden text-slate-700" />
      </button>

      <div
        className={`${
          isOpen
            ? ""
            : "hidden"
        } fixed h-dvh w-dvw top-0 left-0 bg-teal-400 dark:bg-teal-900 z-30 flex flex-col justify-center`}
      >
        <button onClick={toggleMenu}>
          <FaX className={`text-4xl fixed right-5 top-5 text-white ${isOpen ? "" : "hidden"}`} />
        </button>
        <ul className="">
          <li className="flex flex-col gap-8 justify-center items-center content-center font-bold text-white">
            <Link href={"/"} className="hover:text-white transition-all">
              Home
            </Link>
            <Link href={"/about"} className="hover:text-white transition-all">
              About
            </Link>
            <Link href={"/events"} className="hover:text-white transition-all">
              Upcoming Events
            </Link>
            <Link href={"/contact"} className="hover:text-white transition-all">
              Contact Us
            </Link>
            <Link href={"/members"} className="hover:text-white transition-all">
              Members
            </Link>
            <Link
              href={"page"}
              className="text-white bg-teal-600 hover:bg-teal-500 rounded-xl px-4 mx-4 hover:px-8 hover:mx-0 py-2 transition-all"
            >
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
