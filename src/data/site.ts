export type NavItem = { label: string; href: string };

export const site = {
  name: "Patriot Sailing",
  legalName: "Patriot Sailing LLC",
  tagline: "Find your wind.",
  blurb:
    "Private sailing and lessons on Lake Erie, out of Buffalo. One captain, one boat, the whole harbor to yourselves.",

  phone: "716-324-1156",
  phoneHref: "tel:+17163241156",
  email: "patriotsailing01@gmail.com",
  emailHref: "mailto:patriotsailing01@gmail.com",

  location: {
    region: "Buffalo · Lake Erie",
    dock: "The Courtesy Dock, Buffalo Harbor",
    address: "1111 Fuhrmann Blvd, Buffalo, NY 14203",
    note: "We sail from the Courtesy Dock at the Buffalo Harbor. You'll get exact directions and parking details when you book.",
    mailing: "305 Wimbledon Court, West Seneca, NY 14224",
  },

  season: {
    label: "Mid-May – mid-October",
    long: "Weather permitting, we sail from the second week of May through the middle of October.",
  },

  // USCG-licensed captain; small groups; the trust markers that matter
  proof: [
    { value: "USCG", label: "Licensed 50-ton master" },
    { value: "3", label: "Students max on the water" },
    { value: "2007", label: "Colgate 26 keelboat" },
    { value: "1", label: "Boat — reserved only for you" },
  ],
} as const;

export const primaryNav: NavItem[] = [
  { label: "Private Sailing", href: "/cruises" },
  { label: "Lessons", href: "/lessons" },
  { label: "The Captain", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Private Sailing", href: "/cruises" },
  { label: "Learn to Sail", href: "/lessons" },
  { label: "Fundamentals", href: "/fundamentals" },
  { label: "Military Discounts", href: "/discounts" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Gift Certificates", href: "/gift" },
  { label: "The Captain & Boat", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
