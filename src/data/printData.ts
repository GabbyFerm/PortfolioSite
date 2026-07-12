import type { PrintProject } from '../types';

// Glob picks up everything under assets/images/print/
const printImages = import.meta.glob<{ default: string }>(
  '../assets/images/print/**/*.{jpg,jpeg,png,svg,webp}',
  { eager: true }
);

// Get a single image by path relative to print/
const img = (path: string): string => {
  const key = `../assets/images/print/${path}`;
  return printImages[key]?.default ?? '';
};

// Get all images from a subfolder, sorted alphabetically.
// Numbered prefixes (01-, 02- etc.) control display order.
const fromFolder = (folderPath: string): string[] =>
  Object.entries(printImages)
    .filter(([key]) => {
      const prefix = `../assets/images/print/${folderPath}/`;
      const rest = key.slice(prefix.length);
      return key.startsWith(prefix) && !rest.includes('/');
    })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);

export const printProjects: PrintProject[] = [
  {
    id: 'engel-threnody',
    title: 'Engel — Threnody',
    cardImage: img('engel/eu-edition/01-threnody.webp'),
    imageAlt: 'Engel Threnody album artwork',
    shortDescription:
      "Full CD artwork, booklet design, and merchandise for Swedish metal band Engel's second album, released internationally through Season of Mist.",
    year: '2010–2011',
    intro:
      "Threnody is the second studio album by Swedish metal band Engel, released in Japan in April 2010 and in Europe and North America later that year through Season of Mist. I was responsible for the complete layout and print design — the CD booklet, inlay, back cover, and digipack artwork for both the European and Japanese editions, as well as the band's merchandise including t-shirt and poster designs.\n\nThe front cover concept was initiated by Niklas Sundin, known for his work with Dark Tranquillity, and I developed it further into a complete visual package — building out the full booklet, typography system, and print-ready files for both releases. Both Niklas and I are credited on the layout and cover in the album's liner notes.\n\nBeyond the album artwork I also designed the band's website and worked closely with the members during this period — a genuinely creative collaboration with people I knew personally.",
    sections: [
      {
        title: 'European Edition',
        description:
          "The European edition released through Season of Mist on 8 November 2010. Includes the front cover, full booklet inlay, and back cover. The design carries a dark, textural aesthetic built around the album's themes.",
        images: fromFolder('engel/eu-edition'),
      },
      {
        title: 'Japanese Edition',
        description:
          'The Japanese edition released through Trooper Entertainment on 7 April 2010 — the first international release of the album. Japanese editions typically include bonus tracks and adapted packaging to meet regional market standards.',
        images: fromFolder('engel/japan-edition'),
      },
      {
        title: 'Merchandise',
        description:
          'T-shirt and poster designs created alongside the album release, as well as physical product shots of the finished CD.',
        images: fromFolder('engel/merch'),
      },
    ],
  },
];
