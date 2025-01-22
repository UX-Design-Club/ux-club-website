import { EventBanner, EventCard } from '../ui/event';


const events = [
  {
    id: 'first-general-meeting',
    title: 'First General Meeting',
    description: 'Join us for our first general meeting of Spring 2025 semester',
    date: new Date('2025-01-20'),
    time: new Date('2024-01-28T17:00:00Z'),
    room: 'TBD',
  },
  {
    id: 'second-general-meeting',
    title: 'Second General Meeting',
    description: 'Join us for our second general meeting of Spring 2025 semeste',
    date: new Date("2024-02-25"),
    time: new Date("2024-02-25T17:00:00Z"),
    room: 'TBD',
  },
];

export function UpcomingEvents() {
  return (
    <div className="w-full bg-slate-100">
      <div className="lg:max-w-7xl mx-auto py-16">
        <h1 className="text-slate-800 font-bold text-4xl mb-4 uppercase">
          Upcoming Events
        </h1>
        <p>
          Please stay tuned for any updates on information for upcoming events!
        </p>
        <div className="flex flex-col mx-4 md:flex-row gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              date
              time
              room
            />
          ))}
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
        <p>
          Please stay tuned for any updates on information for upcoming events!
        </p>
        <div className="flex flex-col mx-4 gap-4">
          {events.map((event) => (
            <EventBanner
              key={event.id}
              id={event.id}
              description
              date
              time
              room
            />
          ))}
        </div>
      </div>
    </div>
  );
}
