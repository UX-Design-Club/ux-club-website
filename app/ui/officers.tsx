import { OfficerCard } from "./officercard";

export function OfficerHighlight() {
  return (
    <div className="w-full bg-slate-100">
      <div className="lg:max-w-5xl mx-auto py-32">
        <h2 className="text-slate-800 font-bold text-4xl uppercase m-auto text-center mb-8">
            Our Officers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center flex-wrap items-center">
        <OfficerCard
              name="Ivy Nguyen"
              role="President"
              bio=""
              pictureURL="/images/ivy-nguyen.png"
            />
            <OfficerCard
              name="Christina Castillo"
              role="Vice President"
              bio=""
              pictureURL="/images/christina-castillo.png"
            />
            <OfficerCard
              name="Keller Bowman"
              role="Treasurer"
              bio=""
              pictureURL="/images/keller-bowman.jpg"
            />
            <OfficerCard
              name="Alexandra Gonzales"
              role="Secretary"
              bio=""
              pictureURL="/images/alex-gonzales.jpg"
            />
            <OfficerCard
              name="Anh Ta"
              role="Webmaster"
              bio=""
              pictureURL="/images/anh-ta.jpg"
            />
            <OfficerCard
              name="Nathan Mazariego"
              role="Public Relation"
              bio=""
              pictureURL="/images/nathan-mazariego.jpg"
            />
        </div>
      </div>
    </div>
  );
}
