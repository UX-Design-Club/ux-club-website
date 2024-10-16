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

export const eventDatabase: Event[] = [

  new Event(
    "bake-sale",
    "Bake Sale",
    "Support and join us for our bake sale!",
    new Date("2024-10-16"),
    new Date("2024-10-16T10:00:00Z"),
    "",
    "",
    "In front of the University Center (UC)"
  ),

  new Event(
    "social-event",
    "Pickle Ball",
    "Join us for some fun at Chicken N Pickle!",
    new Date("2024-10-22"),
    new Date("2024-10-22T10:00:00Z"),
    "",
    "",
    "Chicken N Pickle"
  ),


  new Event(
    "third-general-meeting",
    "Third General Meeting",
    "Join us for our third general meeting.",
    new Date("2024-11-12"),
    new Date("2024-11-07T18:00:00Z"),
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
