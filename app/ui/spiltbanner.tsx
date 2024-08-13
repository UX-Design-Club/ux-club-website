import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function SplitBanner({
  imgUrl,
  altText,
  heading,
  children,
  leftAlign,
}: {
  imgUrl: string;
  altText: string;
  heading?: string;
  children?: ReactNode;
  leftAlign?: boolean;
}) {
  return (
    <div className="w-full bg-slate-50">
      <div
        className={`mx-auto flex ${
          leftAlign ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse md:flex-row"
        } items-center`}
      >
        <div className="md:w-1/2">
          <div className="overflow-hidden">
            <Image
              src={imgUrl}
              alt={altText}
              width={1920}
              height={1080}
              className="min-h-full min-w-full"
            />
          </div>
        </div>
        <div
          className={`md:w-1/2 px-8 flex my-4 ${
            leftAlign ? "flex-row-reverse" : "flex-row"
          } `}
        >
          <div>
            <h2 className="uppercase font-bold text-xl md:text-4xl mb-4 w-lg ">
              {heading}
            </h2>
            <div className="leading-loose max-w-lg">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
