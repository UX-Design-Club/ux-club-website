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
              name="Nairobi Canchola"
              role="President"
              bio=""
              pictureURL="/images/officers-photos/Nairobi-Canchola.jpg"
              linkedin=""
              email="uxdesignclub.uta@gmail.com"
            />
            <OfficerCard
              name="Heeva Movaghar"
              role="Vice President"
              bio=""
              pictureURL="/images/officers-photos/Heeva-Movaghar.png"
              linkedin=""
              email="uxdesignclub.uta@gmail.com"
            />
            <OfficerCard
              name="Moiz Khan"
              role="Treasurer"
              bio=""
              pictureURL="/images/officers-photos/Moiz-Khan.jpg"
              linkedin=""
              github=""
              twitter=""
              email="uxdesignclub.uta@gmail.com"
              
            />
            <OfficerCard
              name="Nadia Nester"
              role="Secretary"
              bio=""
              pictureURL="/images/officers-photos/Nadia-Nester.jpg"
              email="uxdesignclub.uta@gmail.com"
              linkedin=""
              github=""
            />
            <OfficerCard
              name="Victoria Wegsheider"
              role="Public Relation"
              bio=""
              pictureURL="/images/officers-photos/Victoria-Wegsheider.jpg"
              linkedin=""
              email="uxdesignclub.uta@gmail.com"
            />
            <OfficerCard
                name="Calena Barnes"
                role="Public Relation"
                bio=""
                pictureURL="/images/officers-photos/Calena.jpg"
                linkedin=""
                email="uxdesignclub.uta@gmail.com"
              />
            <OfficerCard
              name="Kathy Le"
              role="Public Relation"
              bio=""
              pictureURL="/images/officers-photos/Kathy-Le.jpg"
              linkedin=""
              email="uxdesignclub.uta@gmail.com"
            />
            <OfficerCard
              name="Alex Perez"
              role="Corporate relations"
              bio=""
              pictureURL="/images/officers-photos/Alex-Perez.jpg"
              linkedin=""
              github=""
              email="uxdesignclub.uta@gmail.com"
            />
        </div>
      </div>
    </div>
  );
}
