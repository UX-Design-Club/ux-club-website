import Image from "next/image";
import { WhoWeAre } from "../ui/whoweare";
import { OfficerCard } from "../ui/officercard";
import { OfficerHighlight } from "../ui/officers";
import { Hero } from "../ui/hero";
import { UpcomingEventsVertical } from "../ui/upcomingevents";

export default function Home() {
  return (
    <main>
      <Hero
        imgUrl="/images/uta-building.jpg"
        heading="Come join us for an event"
        desc="We host a variety of events to help students at UTA learn and grow in their UX Design skills"
        alignRight
      ></Hero>
      <UpcomingEventsVertical/>
    </main>
  );
}
