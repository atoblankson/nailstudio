/**
 * Nue Studio - Luxury Nail Salon
 * Data Schemas & Typed Data Arrays
 */

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  durationMinutes: number;
  price: number;
  formattedPrice: string;
  category: "manicure" | "pedicure" | "nail-art" | "treatment" | "combo";
  isFeatured?: boolean;
  image?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  eyebrow?: string;
  description: string;
  services: ServiceItem[];
}

export interface ServiceRow {
  id: string;
  eyebrow: string;
  titlePrimary: string;
  titleSecondary: string;
  titleInline?: boolean; // true: "Pedicure Gel" on 1 line; false: "Builder/Hard Gel" \n "Manicure"
  description: string;
  duration: string;
  badgeSubtext: string;
  badgePosition: "top-left" | "top-right";
  imageUrl: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
  artist?: string;
  aspectRatio?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role?: string;
  source?: string;
  rating?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  specialty?: string;
  bio?: string;
  imageUrl: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  icon: "sparkles" | "heart" | "clock";
  bg: "white" | "cream" | "bronze";
  description: string;
}

export interface GiftCardOption {
  id: string;
  title: string;
  amount: number;
  formattedAmount: string;
  description: string;
  isPopular?: boolean;
}

export interface SalonOpeningHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface SalonLocationInfo {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
  instagram: string;
  bookingUrl: string;
  hours: SalonOpeningHours[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// ---------------------------------------------------------------------------
// Populated & Staged Typed Arrays
// ---------------------------------------------------------------------------

export const serviceRows: ServiceRow[] = [
  {
    id: "builder-hard-gel",
    eyebrow: "CHIP-RESISTANT DURABILITY",
    titlePrimary: "Builder/Hard Gel",
    titleSecondary: "Manicure",
    titleInline: false,
    description:
      "Includes shaping and hard gel application that is resistant to chipping and breaking for up to 4 weeks. Perfect for long nails.",
    duration: "1h 40min",
    badgeSubtext: "Maintenance",
    badgePosition: "top-left",
    imageUrl:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Glossy deep blue almond nails on neutral backdrop",
    buttonText: "BOOK NOW",
    buttonHref: "#book",
  },
  {
    id: "pedicure-gel",
    eyebrow: "DURABLE FINISH",
    titlePrimary: "Pedicure",
    titleSecondary: "Gel",
    titleInline: true,
    description:
      "Signature Gel Manicure offers shaping and gel application, ideal for short to medium-length nails.",
    duration: "1h 00min",
    badgeSubtext: "Duration",
    badgePosition: "top-right",
    imageUrl:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Dark burgundy and black glossy nails on elegant hand",
    buttonText: "BOOK NOW",
    buttonHref: "#book",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "lily",
    name: "Lily",
    role: "NAIL ARTIST",
    description: "Precision, Creativity, and Flawless Nail Art",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "maryanne",
    name: "Maryanne",
    role: "NAIL ARTIST",
    description: "Top nail artist, founder of the beauty space",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
  },
];

export const salonFeatures: FeatureCard[] = [
  {
    id: "quality",
    title: "QUALITY",
    icon: "sparkles",
    bg: "white",
    description:
      "QUALITY MANICURE ENSURES CLEAN, WELL-SHAPED NAILS, HEALTHY CUTICLES, AND A POLISHED, LONG-LASTING FINISH.",
  },
  {
    id: "friendly",
    title: "FRIENDLY",
    icon: "heart",
    bg: "cream",
    description:
      "RELAXING, FRIENDLY ATMOSPHERE WHERE YOU CAN UNWIND AND ENJOY PERSONALIZED CARE IN A WELCOMING SETTING.",
  },
  {
    id: "fast",
    title: "FAST",
    icon: "clock",
    bg: "bronze",
    description:
      "A QUICK MANICURE DELIVERS BEST, POLISHED NAILS IN MINIMAL TIME WITHOUT COMPROMISING QUALITY.",
  },
];

export const navigationLinks: NavigationItem[] = [];

export const serviceCategories: ServiceCategory[] = [];

export const featuredServices: ServiceItem[] = [];

export const lookbookGallery: GalleryItem[] = [];

export const clientTestimonials: TestimonialItem[] = [
  {
    id: "andrea",
    author: "Andrea",
    quote:
      "My nails have come out flawless both times I've been here, and the first manicure lasted over a month. I'm also particular about my cuticles and Margo has such good attention to detail and care. I've done gel, powder and acrylic before and my nails definitely feel stronger with the Russian mani. Will be coming back!",
  },
  {
    id: "nicole-taddonio",
    author: "Nicole Taddonio",
    quote:
      "Margo is the best!!! her salon is new, super clean, inviting and she's always playing good music. She has a wide selection of colors and will match whatever you show her. She is talented and works very quickly. My hard gel nails last 5 weeks!",
  },
  {
    id: "sophia-laurent",
    author: "Sophia Laurent",
    quote:
      "The level of cleanliness, precision, and artistry at Nue Studio is unmatched. The Russian manicure technique completely transformed my nail beds and my polish never lifts or chips. Truly a five-star experience in FiDi.",
  },
  {
    id: "camille-bennett",
    author: "Camille Bennett",
    quote:
      "Such a chic and calming space. The attention to detail is remarkable—my cuticles look airbrushed and the builder gel provides the exact natural strength I've been looking for. Highly recommend booking early!",
  },
];

export const giftCardOptions: GiftCardOption[] = [];

export const salonFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What Is A Manicure?",
    answer:
      "A specialized manicure at Nue Studio is a comprehensive cosmetic and health treatment for the hands and nails. We meticulously shape the nail plate, perform precision cuticle work, gently exfoliate the skin, and apply premium strengthening treatments or long-lasting polishes tailored to your lifestyle.",
  },
  {
    id: "faq-2",
    question: "How Does A Russian Pedicure Differ From A Regular Pedicure?",
    answer:
      "Unlike traditional wet pedicures that soak the skin in water, a Russian pedicure is an advanced dry, electronic-file technique. It allows for unmatched precision around the cuticles and heels without expanding the nail plate, resulting in a cleaner finish and polish that lasts significantly longer.",
  },
  {
    id: "faq-3",
    question: "How Long Do Hard Gel Nails Last?",
    answer:
      "With proper aftercare, our hard gel and builder gel manicures last up to 4 to 5 weeks without chipping, lifting, or dulling. Because your natural nails continue to grow, we recommend scheduling an infill or maintenance appointment around the 3 to 4 week mark.",
  },
  {
    id: "faq-4",
    question: "How Should I Prepare For My Appointment?",
    answer:
      "We recommend arriving with clean, dry hands and avoiding cuticle oils or heavy hand creams right before your visit, as natural oils can affect polish adhesion. If you currently have extensions or product from another salon, please let us know in advance so we can reserve time for safe removal.",
  },
];

export const salonLocation: SalonLocationInfo = {
  name: "Nue Studio",
  address: "Financial District, New York, NY",
  city: "New York",
  postalCode: "10005",
  phone: "(212) 555-0199",
  email: "atelier@nuestudio.com",
  instagram: "@nue.nailstudio",
  bookingUrl: "#book",
  hours: [],
};
