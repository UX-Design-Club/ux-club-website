import Image from "next/image";
import Link from "next/link";
import { GoButton } from "./gobutton";
import { FaFigma } from "react-icons/fa6";
import { EventCard } from "./event";

export function UpcomingEvents() {
  return (
    <div className="w-full bg-gunmetal-600">
      <div className="lg:max-w-5xl mx-auto py-16">
        <h1 className="text-center text-slate-200 font-bold text-4xl mb-16 uppercase">
          Upcoming Events
        </h1>
        <div className="flex flex-col mx-4 md:flex-row gap-4">
          <EventCard id="banquet" />
          <EventCard id="banquet" />
          <EventCard id="banquet" />
        </div>
      </div>
    </div>
  );
}
