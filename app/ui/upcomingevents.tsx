import { EventBanner, EventCard } from "./event";


const events = {

}

export function UpcomingEvents() {
  return (
    <div className="w-full bg-slate-100">
      <div className="lg:max-w-7xl mx-auto py-16">
        <h1 className="text-slate-800 font-bold text-4xl mb-4 uppercase">
          Upcoming Events
        </h1>
        <p>
          Come join us for one of our upcoming events!
        </p>
        <div className="flex flex-col mx-4 md:flex-row gap-4">
          <EventCard id="first-general-meeting" date time />
          <EventCard id="second-general-meeting" date time />
          <EventCard id="ux-design-challenge" date time />
          {/* <EventCard id="ux-banquet" date time/> */}
        </div>
      </div>
    </div>
  );
}


export function UpcomingEventsVertical() {
  return (
    <div className="w-full bg-slate-100">
      <div className="lg:max-w-7xl mx-auto py-16">
        <h1 className="text-slate-800 font-bold text-4xl mb-4 uppercase">
          Upcoming Events
        </h1>
        <div className="flex flex-col mx-4 gap-4">
          <EventBanner id="first-general-meeting" description date time />
          <EventBanner id="second-general-meeting" description date time />
          <EventBanner id="ux-design-challenge" description date time />
          {/*<EventBanner id="ux-banquet" description date time />*/}
        </div>
      </div>
    </div>
  );
}