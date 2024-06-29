import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Hamburger } from "./hamburger";
import { GoButton } from "./gobutton";
import { PrimaryButton } from "./primarybutton";

export function Hero() {
  return (
    <div className="w-full h-svh overflow-hidden">
      <div className="absolute min-h-full overflow-hidden from-transparent to-gunmetal-600 bg-gradient-radial -z-10">
        <Image
          height={1080}
          width={1920}
          src={"images/grid-bg.svg"}
          alt="Background"
          className="min-h-lvh min-w-full -z-20 object-cover"
        />
      </div>
      <div className="lg:max-w-5xl h-full w-full flex flex-row items-center m-auto justify-center md:justify-start">
        <div className="mx-4 max-w-96 flex flex-col gap-4">
          <h1 className="font-extrabold text-3xl uppercase">Transforming ideas into intuitive design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
            ullamcorper diam, et faucibus leo. Ut a sagittis neque, ac
            pellentesque quam. Aliquam erat volutpat.
          </p>
          <div className="flex flex-col  m-auto md:flex-row gap-4">
            <PrimaryButton href="/" text="Who We Are" />
            <GoButton href="/" text="See Events" />
          </div>
        </div>
      </div>
    </div>
  );
}
