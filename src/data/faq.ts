export type Faq = { q: string; a: string; group: string };

export const faqGroups = ["Before you book", "On the water", "Safety & rules"] as const;

export const faqs: Faq[] = [
  {
    group: "Before you book",
    q: "What kind of boat will we be on?",
    a: "A 2007 Colgate 26 — a keelboat designed specifically for teaching. It's stable and responsive, with a large cockpit and plenty of room for students or cruising guests.",
  },
  {
    group: "Before you book",
    q: "When is the sailing season in Buffalo?",
    a: "Weather permitting, we sail from the second week of May through the middle of October.",
  },
  {
    group: "Before you book",
    q: "Do you offer gift certificates?",
    a: "Yes — for lessons or private cruises, any time of year. There's no need to pick a date when you buy; the recipient just contacts us to schedule whenever it suits them. They make great birthday and holiday gifts.",
  },
  {
    group: "Before you book",
    q: "How many students are on the boat?",
    a: "Never more than three during a lesson, so everyone stays engaged and always has a job. The only exception is a family or group of up to five who want to learn together.",
  },
  {
    group: "On the water",
    q: "Where and when should I arrive?",
    a: "Plan to be at the marina 15 minutes before your class or cruise — enough time to park, use the restroom, and hear a short safety briefing so we don't cut into your time on the water. We send exact directions when you reserve.",
  },
  {
    group: "On the water",
    q: "What should I wear and bring?",
    a: "Dress for the weather, and remember it's usually cooler out on the lake — pack an extra layer, which you can stow in the cabin. Sneakers or boat shoes with non-marking soles are best. A hat, sunglasses, and sunscreen are good ideas.",
  },
  {
    group: "On the water",
    q: "Can I bring food, drinks, or alcohol?",
    a: "On a private cruise, yes — bring a bottle of wine, a few beers, and a snack (no red wine, unfortunately, as it stains fiberglass). During lessons we keep it to water and non-alcoholic drinks, and skip the meal, so everyone stays sharp.",
  },
  {
    group: "On the water",
    q: "Is there a bathroom aboard?",
    a: "There's a small head on the boat, but it's tight. There are restrooms at the marina building just south of the Courtesy Dock — we recommend using those before you come aboard.",
  },
  {
    group: "Safety & rules",
    q: "What happens if the weather turns?",
    a: "We don't cancel for rain alone, but your captain will call it for lightning, unsafe wind, or other conditions. If we cancel a cruise or intro lesson, we'll rebook you — or refund you in full if you can't reschedule. Cancelled Learn-to-Sail lessons are simply extended to another day.",
  },
  {
    group: "Safety & rules",
    q: "Will I have to wear a life jacket?",
    a: "Students wear a PFD during lessons, since you're moving around the boat — we provide them, or bring your own. Cruise guests aren't required to unless they can't swim or the captain calls for it, and young children always wear one under New York law.",
  },
  {
    group: "Safety & rules",
    q: "Are you regulated by the Coast Guard?",
    a: "Yes. Because you're paying for time on the boat, both lessons and cruises fall under U.S. Coast Guard rules — your captain is USCG-licensed, and the required safety equipment is aboard: PFDs, distress flares, fire extinguishers, and more.",
  },
  {
    group: "Safety & rules",
    q: "Are the private cruises really private?",
    a: "Really private. Unlike some Buffalo cruises, we will never put strangers on your sail. The only way anyone else is aboard your Cruise for Two is if you invite them.",
  },
];
