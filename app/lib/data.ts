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
    "Join us for our first general meeting of Spring 2026 semester!",
    new Date("2026-02-05"),
    new Date("2024-02-05T17:00:00Z"),
    "",
    "",
    "TBD"
  ),
  new Event(
    "second-general-meeting",
    "Valentine-Fundraiser",
    "Join us for our Valentine Fundraiser!",
    new Date("2026-02-11"),
    new Date("2024-02-11T11:00:00Z"),
    "",
    "",
    "Outside of UC"
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
