import Image from "next/image";
import { OfficerCard } from "./ui/officercard";
import { Navbar } from "./ui/navbar";
import { Hero } from "./ui/hero";
import { SponsorReel } from "./ui/sponsorreel";
import { UpcomingEvents } from "./ui/upcomingevents";
import { WhoWeAre } from "./ui/whoweare";

export default function Home() {
  return (
    <main>
      <Hero />
      <SponsorReel />
      <UpcomingEvents />
    </main>
  );
}
