import Image from "next/image";
import { WhoWeAre } from "../ui/whoweare";
import { OfficerCard } from "../ui/officercard";
import { OfficerHighlight } from "../ui/officers";

export default function Home() {
  return (
    <main>
      <div className="pt-20 bg-gunmetal-800"></div>
      <WhoWeAre />
      <OfficerHighlight/>
    </main>
  );
}
