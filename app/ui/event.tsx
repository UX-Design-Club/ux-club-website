import Image from "next/image";
import Link from "next/link";
import { GoButton } from "./gobutton";
import { eventDatabase } from "../lib/data";
import { ReactNode } from "react";

export function EventCard({
  id,
  className,
  date,
  time,
  shortDesc,
  pageLink,
}: {
  id: string;
  className?: string;
  description?: boolean;
  date?: boolean;
  time?: boolean;
  shortDesc?: boolean;
  pageLink?: boolean;
}) {
  const asset = eventDatabase.find((item) => item.id === id);

  if (!asset) return <div></div>;

  return (
    <div className={`${className} py-4 sm:px-4 flex flex-col group`}>
      <div className="rounded-xl overflow-hidden mb-2 aspect-square drop-shadow group-hover:drop-shadow-xl transition-all shadow-black duration-200">
        <Image
          src={`/images/${asset.id}.jpg`}
          alt={asset.title}
          width={1200}
          height={800}
          className="min-w-full min-h-full object-center transition-all"
        />
      </div>
      <h2 className="mt-2 text-2xl capitalize font-bold text-slate-800">
        {asset.title}
      </h2>
      <div className="flex flex-row gap-4">
        {date && asset.date && (
          <h4 className="mt-2 text-lg capitalize text-slate-700">{`${asset.date.toLocaleString(
            "en-us",
            { timeZone: "UTC", month: "long", day: "numeric", year: "numeric" }
          )}`}</h4>
        )}
        {date && time && (
          <p className="mt-2 text-lg capitalize text-slate-700">·</p>
        )}
        {time && asset.time && (
          <h4 className="mt-2 text-lg capitalize text-slate-700">{`${asset.time.toLocaleString(
            "en-us",
            { timeZone: "UTC", hour: "numeric", minute: "2-digit" }
          )}`}</h4>
        )}
      </div>

      {shortDesc && <p className="my-2">{asset.shortDesc}</p>}
      {pageLink && (
        <div className="flex mt-4">
          <GoButton href={asset.href ? asset.href : ""} text="See More" />
        </div>
      )}
    </div>
  );
}
