import Image from "next/image";
import Link from "next/link";
import { GoButton } from "./gobutton";
import { eventDatabase } from "../lib/data";

export function EventCard({
  id,
  className,
  subtitle,
  tags,
  shortDesc,
  pageLink,
  price,
}: {
  id: string;
  className?: string;
  subtitle?: boolean;
  tags?: boolean;
  shortDesc?: boolean;
  pageLink?: boolean;
  price?: boolean;
}) {
  const asset = eventDatabase.find((item) => item.id === id);

  if (!asset) return (<div></div>);

  return (
    <div className={`${className} py-4 sm:px-4 flex flex-col group`}>
      <div className="rounded-xl overflow-hidden mb-2 aspect-square">
        <Image
          src={`/images/${asset.id}.jpg`}
          alt={asset.title}
          width={1200}
          height={800}
          className="min-w-full min-h-full object-fill group-hover:min-w-120 group-hover:min-h-120 transition-all"
        />
      </div>
      <h2 className="mt-2 text-2xl capitalize font-bold text-slate-100">{asset.title}</h2>
      <h4 className="mt-2 text-lg capitalize text-slate-400">{asset.date}</h4>
      {shortDesc && <p className="my-2">{asset.shortDesc}</p>}
      {pageLink && (
        <div className="flex mt-4">
          <GoButton href={asset.href} text="See More" />
        </div>
      )}
    </div>
  );
}
