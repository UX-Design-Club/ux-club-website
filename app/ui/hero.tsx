import Image from "next/image";
import { ReactNode } from "react";

export function Hero({
  imgUrl,
  heading,
  desc,
  children,
  alignRight,
  bannerHeight,
}: {
  imgUrl: string;
  heading?: string;
  desc?: string;
  children?: ReactNode;
  alignRight?: boolean;
  bannerHeight?: boolean;
}) {
  return (
    <div
      className={`w-full ${bannerHeight ? "h-80" : "h-svh"} overflow-hidden`}
    >
      <div className="absolute min-h-full min-w-full overflow-hidden ">
        <Image
          height={1080}
          width={1920}
          src={imgUrl}
          alt="Background"
          className="min-h-lvh min-w-full absolute brightness-75 -z-30 object-cover"
        />
      </div>
      <div
        className={`lg:max-w-7xl h-full w-full flex flex-row items-center m-auto justify-center ${
          alignRight ? "md:justify-end" : "md:justify-start"
        } text-white`}
      >
        <div className="mx-4 max-w-lg flex flex-col gap-4">
          {heading ? (
            <h1 className="font-extrabold text-3xl uppercase">{heading}</h1>
          ) : null}
          {desc ? (
            <p>{desc}</p>
          ) : null}
          <div className="flex flex-col md:flex-row max-w-48 md:max-w-full m-auto md:m-0  gap-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
