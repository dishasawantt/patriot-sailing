export type Course = {
  id: string;
  name: string;
  price: number;
  priceNote?: string;
  duration: string;
  tag: string;
  summary: string;
  points: string[];
  featured?: boolean;
};

export const courses: Course[] = [
  {
    id: "intro",
    name: "Introduction to Sailing",
    price: 135,
    duration: "One 2.5-hour sail",
    tag: "Never sailed",
    summary: "A single evening on the water to find out if sailing's for you. No experience, no commitment.",
    points: [
      "Steer the boat and hold a course",
      "Feel how a sail turns wind into motion",
      "Learn to tack and jibe",
      "Bring a friend or two for $25 each",
    ],
  },
  {
    id: "semi-private",
    name: "Learn to Sail — Semi-Private",
    price: 450,
    duration: "19 hours · classroom, dock & water",
    tag: "Most popular",
    featured: true,
    summary:
      "The full course. Start from zero and finish able to take a 20–27-ft boat out in a light-to-moderate breeze.",
    points: [
      "Never more than three students aboard",
      "Points of sail, trim, tacking, docking",
      "Knots, rules of the road & charts",
      "$100 off per friend who joins",
    ],
  },
  {
    id: "private",
    name: "Learn to Sail — Private",
    price: 675,
    priceNote: "$1,000 for two",
    duration: "19 hours · one-on-one",
    tag: "Your own pace",
    summary: "The same course, one-on-one. Set the pace and focus where you want. Bring one person for $1,000.",
    points: [
      "You and the captain — no other students",
      "Focus on the skills you care about",
      "Same curriculum, your schedule",
      "Two scheduling options",
    ],
  },
  {
    id: "refresher",
    name: "Individual Private Lessons",
    price: 60,
    priceNote: "per hour · 3-hr minimum",
    duration: "By the hour",
    tag: "Already sail",
    summary: "Refresher time for sailors who've done this before — built around you, on our boat or yours.",
    points: [
      "Structured around your goals",
      "Three-hour minimum per session",
      "On our Colgate 26, or your boat*",
      "*A few requirements apply — just ask",
    ],
  },
];

export const curriculum = [
  "Reading the wind",
  "Points of sail",
  "Steering by tiller",
  "Trimming the sails",
  "Tacking & jibing",
  "Sailing knots",
  "Docking under power",
  "Rules of the road",
  "Navigation & charts",
  "Handling emergencies",
];

export const scheduleOptions = [
  {
    title: "Learn in a weekend",
    detail: "Friday 5–9pm, then Saturday and Sunday 9am–5pm. Done in three days.",
  },
  {
    title: "At your own pace",
    detail: "A four-hour classroom session, then five-plus on-water lessons scheduled around your life.",
  },
];
