import { GoButton } from "./ui/gobutton";
import { Hero } from "./ui/hero";
import { PrimaryButton } from "./ui/primarybutton";
import { SplitBanner } from "./ui/spiltbanner";
import { SponsorReel } from "./ui/sponsorreel";
import { UpcomingEvents } from "./ui/upcomingevents";

export default function Home() {
  return (
    <main>
      <Hero
        imgUrl="/images/uta-building.jpg"
        heading="Designs that Click"
        desc="The UX Design Club is a student-run organization that aims to
            cultivate a community of passionate individuals dedicated to
            exploring and learning user experience design."
      >
        <PrimaryButton href="/" text="Who We Are" />
        <GoButton href="/" text="See Events" />
      </Hero>
      <SponsorReel />
      <SplitBanner
        imgUrl="\events-gallery\fair-day-two.jpg"
        altText="Fair Day Activity Photo"
        heading="What is UX Design?"
      >
        User experience design (UX design) is the process of creating products
        that provide meaningful and relevant experiences to users. It involves
        the careful consideration of how users interact with a product, focusing
        on usability, accessibility, and the overall satisfaction of the user.
        UX design encompasses various elements, including information
        architecture, visual design, interaction design, and user research, to
        ensure the product is intuitive and enjoyable.
      </SplitBanner>
      <SplitBanner
        imgUrl="\events-gallery\fair-day-three.jpg"
        altText="Fair Day Activity Photo"
        leftAlign
      >
        The <span className="font-bold text-teal-800">UX Design Club</span> aims
        to instill principles of intuitive design in the next generation of
        students at the University of Texas at Arlington. We promote UX by
        hosting workshops, guest lectures, and hands-on projects that help you
        learn user-centered design practices. Through collaboration and
        real-world problem-solving, students learn how to create products that
        prioritize user needs and provide seamless experiences.
      </SplitBanner>
      <UpcomingEvents />
    </main>
  );
}
