import Image from "next/image";
import Link from "next/link";
import { GoButton } from "./gobutton";
import { FaFigma } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { TbBrandPepsi } from "react-icons/tb";

export function SponsorReel() {
  return (
    <div className="w-full bg-gunmetal-700">
      <div className="lg:max-w-5xl mx-auto py-32">
        <div className="flex flex-row flex-nowrap gap-4 md:gap-32 justify-center text-slate-600 text-5xl items-center">
          <FaFigma />
          <SiAdobe />
          <TbBrandPepsi />
          <SiAdobe />
          <TbBrandPepsi />
        </div>
      </div>
    </div>
  );
}
