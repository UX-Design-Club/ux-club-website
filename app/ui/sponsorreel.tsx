import Image from "next/image";
import Link from "next/link";
import { GoButton } from "./gobutton";
import { FaFigma } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { TbBrandPepsi } from "react-icons/tb";

export function SponsorReel() {
  return (
    <div className="w-full bg-slate-200">
      <div className="mx-auto py-32 flex flex-col">
        <h1 className="uppercase font-bold text-2xl px-8 md:text-4xl text-center mb-12">Thank you to our sponsors</h1>
        <div className="flex flex-row flex-nowrap gap-4 md:gap-32 justify-center text-slate-600 text-5xl items-center">
          {/* <FaFigma className="text-teal-600" />
          <SiAdobe className="text-teal-600" />
          <TbBrandPepsi className="text-teal-600" />
          <SiAdobe  className="text-teal-600"/>
          <TbBrandPepsi className="text-teal-600" /> */}
        </div>
      </div>
    </div>
  );
}
