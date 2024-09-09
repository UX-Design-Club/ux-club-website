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
              linkedin="https://www.linkedin.com/in/ivy-nguyen-aa5758253/"
              email="uxdesignclub.uta@gmail.com"
            />
            <OfficerCard
              name="Christina Castillo"
              role="Vice President"
              bio=""
              pictureURL="/images/christina-castillo.png"
              linkedin="https://www.linkedin.com/in/christina-castillo-88b42a291"
              email="uxdesignclub.uta@gmail.com"
            />
            <OfficerCard
              name="Keller Bowman"
              role="Treasurer"
              bio=""
              pictureURL="/images/keller-bowman.jpg"
              linkedin="https://www.linkedin.com/in/grayson-bowman/"
              github="https://github.com/DistantLandsProductions"
              twitter="https://x.com/DistantLands_"
              email="uxdesignclub.uta@gmail.com"
              
            />
            <OfficerCard
              name="Alexandra Gonzales"
              role="Secretary"
              bio=""
              pictureURL="/images/alex-gonzales.jpg"
              email="uxdesignclub.uta@gmail.com"
              linkedin="https://www.linkedin.com/in/alexandra-gonzales-743932301/"
              github="https://github.com/alexgonzale35"
            />
            <OfficerCard
              name="Nathan Mazariego"
              role="Public Relation"
              bio=""
              pictureURL="/images/nathan-mazariego.jpg"
              linkedin="https://www.linkedin.com/in/nathan-mazariego-5aab0527a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              email="uxdesignclub.uta@gmail.com"
            />
            <OfficerCard
              name="Anh Ta"
              role="Webmaster"
              bio=""
              pictureURL="/images/anh-ta.jpg"
              linkedin="https://www.linkedin.com/in/anh-taa/"
              github="https://github.com/anhhtaa"
              email="uxdesignclub.uta@gmail.com"
            />
        </div>
      </div>
    </div>
  );
}
