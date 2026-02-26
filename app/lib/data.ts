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
    "The Art of Sampling",
    "Hands-on design workshop exploring how to develop strong visual taste and make more intentional design decisions.",
    new Date("2026-02-26"),
    new Date("2024-02-26T17:30:00Z"),
    "",
    "",
    "University Hall room 08"
  ),
  new Event(
    "second-general-meeting",
    "TBNR Agency Tour",
    "Pre scheduled Agency Tour with TBNR Productions. Applications Closed.",
    new Date("2026-03-02"),
    new Date("2024-03-02T09:30:00Z"),
    "",
    "",
    "TBNR Productions"
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
