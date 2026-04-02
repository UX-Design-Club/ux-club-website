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
    "Portfolio & Resume Review",
    "Personal one-on-one review of resume and portfolio with Guest Speaker Maurice Cruz. ONLY 10 SPOTS AVAILABLE.",
    new Date("2026-04-02"),
    new Date("2024-04-02T18:00:00Z"),
    "",
    "",
    "Fine Arts Building Room 327A"
  ),
  new Event(
    "second-general-meeting",
    "Picnic in the Park",
    "Come join us for a potluck at UTA! All majors welcome - Bringing food is required! It's a potluck people.",
    new Date("2026-04-09"),
    new Date("2024-04-09T17:00:00Z"),
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
