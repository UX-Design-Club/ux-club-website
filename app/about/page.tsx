import { GoButton } from "../ui/gobutton";
import { OfficerHighlight } from "../ui/officers";
import { SplitBanner } from "../ui/spiltbanner";

export default function About() {
  return (
    <main className="pt-16">
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
