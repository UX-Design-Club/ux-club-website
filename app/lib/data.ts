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
    "first-general-meeting",
    "First General Meeting",
    "Join us for our first general meeting of Spring 2025 semester",
    new Date("2024-01-28"),
    new Date("2024-01-28T17:00:00Z"),
    "",
    "",
    "TBD"
  ),
  new Event(
    "second-general-meeting",
    "Second General Meeting",
    "Join us for our second general meeting of Spring 2025 semester",
    new Date("2024-02-25"),
    new Date("2024-02-25T17:00:00Z"),
    "",
    "",
    "TBD"
  ),
  new Event(
    "ux-design-challenge",
    "UX Design Challenge",
    "Details about the UX Design Challenge.",
    new Date("2024-12-15"),
    new Date("2024-12-15T18:00:00Z"),
    "",
    "",
    "TBD"
  ),
  new Event(
    "ux-banquet",
    "UX Banquet",
    "Details about the UX Banquet.",
    new Date("2025-01-20"),
    new Date("2025-01-20T19:00:00Z"),
    "",
    "",
    "TBD"
  ),
];
