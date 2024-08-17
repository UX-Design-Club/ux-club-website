export class Event {
  title: string;
  shortDesc: string;
  date?: Date;
  time?: Date;
  id: string;
  location?: string;
  href?: string;

  constructor(
    id: string,
    title: string,
    shortDesc: string,
    date?: Date,
    time?: Date,
    location?: string,
    href?: string
  ) {
    this.id = id;
    this.title = title;
    this.shortDesc = shortDesc;
    if (date) this.date = date;
    if (time) this.time = time;
    if (location) this.location = location;
    if (href) this.href = href;
  }
}

export const eventDatabase: Event[] = [
  new Event(
    "ux-design-challenge",
    "UX Design Challenge",
    "Join us for our annual UX Design challenge! Proudly sponsored by COMPANY.",
    new Date("03-08-2025"),
    new Date("0000-01-01T17:00z"),
    "",
    ""
  ),
  new Event(
    "general-meeting",
    "General Meeting",
    "Join us for one of our general meetings every third Tuesday night",
    new Date("09-10-2024"),
    new Date("0000-01-01T18:00z"),
    "",
    ""
  ),
  new Event(
    "ux-banquet",
    "UX Banquet",
    "",
    new Date("05-08-2025"),
    new Date("0000-01-01T19:30z"),
    "",
    ""
  ),
];
