export class Event {
  title: string;
  shortDesc: string;
  date?: Date;
  time?: Date;
  id: string;
  location?: string;
  href?: string;
  room?: string;

  constructor(
    id: string,
    title: string,
    shortDesc: string,
    date?: Date,
    time?: Date,
    location?: string,
    href?: string,
    room?: string
  ) {
    this.id = id;
    this.title = title;
    this.shortDesc = shortDesc;
    if (date) this.date = date;
    if (time) this.time = time;
    if (location) this.location = location;
    if (href) this.href = href;
    if (room) this.room = room;
  }
}

// Array of Event objects
export const eventDatabase = [
  new Event(
    "fundraiser",
    "Valentine Fundraiser",
    "Join us for our Valetine Fundraiser!",
    new Date("2026-02-11"),
    new Date("2024-02-11T11:00:00Z - T14:00:00Z "),
    "",
    "",
    "UC West"
  ),
  new Event(
    "workshop",
    "Figma: Foundational & Future",
    "Join us for our Figma: Foundational & Future — Using Figma to communicate your solution, from the basics to AI-assisted",
    "Guest Speaker: John Keese",
    "Bring your laptop and have a Figma account already set up!",
    new Date("2026-02-12"),
    new Date("2024-02-12T17:30:00Z"),
    "TBD"
  ),
  new Event(
    "ux-design-challenge",
    "UX Design Challenge",
    "Details about the UX Design Challenge.",
    new Date("2026-12-15"),
    new Date("2026-12-15T18:00:00Z"),
    "",
    "",
    "TBD"
  ),
  new Event(
    "ux-banquet",
    "UX Banquet",
    "Details about the UX Banquet.",
    new Date("2026-01-20"),
    new Date("2026-01-20T19:00:00Z"),
    "",
    "",
    "TBD"
  ),
];
