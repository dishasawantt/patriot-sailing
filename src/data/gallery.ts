export type Shot = {
  src: string;
  alt: string;
  w: number;
  h: number;
  caption: string;
};

// Authentic Patriot Sailing photography. Sized honestly — we place each
// image where its real resolution reads sharp, never stretched past it.
export const gallery: Shot[] = [
  {
    src: "/images/hero-heeling.jpg",
    alt: "Patriot Sailing's Colgate 26 heeling into a fresh breeze on Lake Erie with the Buffalo grain elevators behind",
    w: 830,
    h: 622,
    caption: "Heeled over in a fresh breeze, grain elevators astern.",
  },
  {
    src: "/images/scene-102.jpg",
    alt: "Buffalo's downtown skyline seen low on the horizon from the open water of Lake Erie",
    w: 500,
    h: 500,
    caption: "Buffalo's skyline from the open lake.",
  },
  {
    src: "/images/scene-100.jpg",
    alt: "Dusk from the bow of the sailboat, calm water and a soft pink sky over the Buffalo waterfront",
    w: 500,
    h: 500,
    caption: "Dusk from the bow, the city going quiet.",
  },
  {
    src: "/images/boat-at-dock.jpg",
    alt: "The 2007 Colgate 26 at her berth in the Buffalo Outer Harbor under a dramatic sky",
    w: 2560,
    h: 2426,
    caption: "At her berth, Buffalo Outer Harbor.",
  },
];
