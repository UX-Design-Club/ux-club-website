import Image from "next/image";
import { GoButton } from "./gobutton";

export function WhoWeAre() {
  return (
    <div className="w-full bg-gunmetal-800">
      <div className="lg:max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="aspect-square overflow-hidden">
          <Image
            src={"/images/banquet.jpg"}
            alt="Meeting room"
            width={500}
            height={500}
            className="object-cover min-w-full min-h-full"
          />
        </div>
        <div className="aspect-square m-16">
          <h1 className="text-left text-slate-200 font-extrabold text-4xl mb-4 uppercase">
            Who We Are
          </h1>
          <p className="mb-4">
            The UX Design Club is a local student-run organization that aims to
            cultivate a community of passionate individuals dedicated to
            learning, exploring, and advocating for excellence in the field of
            user experience design.
          </p>
          <p>
            The UX Design Club is a local student-run organization that aims to
            cultivate a community of passionate individuals dedicated to
            learning, exploring, and advocating for excellence in the field of
            user experience design.
          </p>
          <div className="flex flex-row mt-8 justify-center">
            <GoButton href="/about" text="Read more" />
          </div>
        </div>
      </div>
    </div>
  );
}
