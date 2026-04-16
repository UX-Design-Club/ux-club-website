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
    "CTEC x UXDC",
    "Come join us for our CTEC Alumni X UXDC Mixer! Come meet some Alumni as they speak about their experience! ",
    new Date("2026-04-16"),
    new Date("2024-04-02T18:30:00Z"),
    "",
    "",
    "Fine Arts Building Room 327A"
  ),
  new Event(
    "second-general-meeting",
    "Yoga in the Park",
    "Come join us for a a chill yoga social! Meet some of our officers and have fun!",
    new Date("2026-04-21"),
    new Date("2026-04-09T17:00:00Z"),
    "",
    "",
    "Architecture Courtyard - in between the ARCH and FA Buidling."
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
