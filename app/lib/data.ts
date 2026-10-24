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
    "Second GBM with Guest Speaker Brian Sullivan: Visiting Assistant Professor of Design at UNT",
    "Getting Personal with Brand: Resume and Portfolio Workshop; Ready to cut through the digital noise and build a professional brand that actually gets noticed? This crash course workshop, Branding, Resumes, and Portfolios, is designed to help you transform your academic and creative projects into a powerful professional identity. In the current design market, pushing pixels isn't enough anymore—you need to stand out as a strategic thinker. Led by Brian Sullivan, this fast-paced session will teach you how to grab a recruiter's attention in the crucial first few seconds and intentionally design a career path you love.",
    new Date("2026-10-28"),
    new Date("2026-10-28T17:30:00Z"),
    "",
    "",
    "Social Work & Smart Hospital (SWSH) Room 423"
  ),
  new Event(
    "second-general-meeting",
    "Third GBM with Guest Speaker John Keese: VP of User Experience at Ryan",
    "5 D's of AI? Design, Develop, Delegate, Discern & Dodge; AI is powerful, but also hype. Through the lenses of an individual contributor, design manager, and design executive, John will explore what UXers should delegate to AI and which human skills remain essential. Part workshop and part Q&A, bring your favorite model and hottest Design Twitter opinions for a candid look at what AI should—and shouldn’t—take off your plate.",
    new Date("2026-11-11"),
    new Date("2026-11-11T17:30:00Z"),
    "",
    "",
    "Social Work & Smart Hospital (SWSH) Room 423"
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
