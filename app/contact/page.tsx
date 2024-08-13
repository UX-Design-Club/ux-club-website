import Image from "next/image";
import { WhoWeAre } from "../ui/whoweare";
import { OfficerCard } from "../ui/officercard";
import { OfficerHighlight } from "../ui/officers";
import { Hero } from "../ui/hero";
import { PrimaryButton } from "../ui/primarybutton";
import { GoButton } from "../ui/gobutton";
import { SplitBanner } from "../ui/spiltbanner";

export default function Home() {
  return (
    <main>
      <Hero imgUrl="/images/team-photo.jpg" alignRight bannerHeight></Hero>
      <SplitBanner
        imgUrl="/images/team-photo.jpg"
        altText="Leadership Team tabling at Student Organization Fair"
        heading="Who We Are"
      >
        <p className="mb-4">
          The UX Design Club is a local student-run organization that aims to
          cultivate a community of passionate individuals dedicated to learning,
          exploring, and advocating for excellence in the field of user
          experience design.
        </p>
        <p>
          The UX Design Club is a local student-run organization that aims to
          cultivate a community of passionate individuals dedicated to learning,
          exploring, and advocating for excellence in the field of user
          experience design.
        </p>
        <div className="flex flex-row mt-8 justify-center">
          <GoButton href="/about" text="Read more" dark />
        </div>
      </SplitBanner>
      <OfficerHighlight />
    </main>
  );
}
