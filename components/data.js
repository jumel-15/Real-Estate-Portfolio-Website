/* ---------------------------------------------------------------------------
   data.js
   All fictional site content in one place so components stay presentation-only
   and can be edited without touching markup.
--------------------------------------------------------------------------- */

export const site = {
  name: "Emilia Estates",
  developer: "Jumel Fernandez",
  tagline: "Luxury Living, Redefined",
  description:
    "A private collection of residences crafted for those who expect more — where architecture, light, and location come together in perfect harmony.",
  phone: "(555) 012-3456",
  phoneHref: "tel:+15550123456",
  email: "hello@emiliaestates.com",
  address: "120 Golden Mile, Marina District",
};

/* Options used by the hero search widget (demo only — no backend) */
export const searchOptions = {
  locations: [
    "Any Location",
    "Central Business District",
    "Riverside Heights",
    "Marina Bayfront",
    "Old Town Quarter",
  ],
  types: ["All Types", "Penthouse", "Villa", "Apartment", "Townhouse"],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Agent", href: "#agent" },
  { label: "Contact", href: "#contact" },
];

export const properties = [
  {
    id: "skyline-penthouse",
    name: "Skyline Penthouse",
    price: "$2,450,000",
    location: "Central Business District",
    beds: 3,
    baths: 2,
    sqm: 214,
    image: "/images/property-penthouse.svg",
    alt: "Modern glass skyscraper at dusk with warm lit windows",
  },
  {
    id: "maplewood-villa",
    name: "Maplewood Villa",
    price: "$3,200,000",
    location: "Riverside Heights",
    beds: 5,
    baths: 4,
    sqm: 410,
    image: "/images/property-villa.svg",
    alt: "Modern villa home glowing at evening with a landscaped lawn",
  },
  {
    id: "azure-bay-condo",
    name: "Azure Bay Condo",
    price: "$1,150,000",
    location: "Marina Bayfront",
    beds: 2,
    baths: 2,
    sqm: 128,
    image: "/images/property-condo.svg",
    alt: "Beachfront condominium beside the ocean with palm trees",
  },
];

export const amenities = [
  { label: "Swimming Pool", description: "Infinity pool with city views", icon: "pool" },
  { label: "Fitness Gym", description: "State-of-the-art equipment", icon: "gym" },
  { label: "24/7 Security", description: "Round-the-clock gated access", icon: "security" },
  { label: "Valet Parking", description: "Reserved, secure parking", icon: "parking" },
  { label: "Private Garden", description: "Landscaped green courtyards", icon: "garden" },
  { label: "Clubhouse", description: "Lounge, cinema & concierge", icon: "clubhouse" },
];

export const landmarks = [
  { label: "Marina Promenade", detail: "2 min walk" },
  { label: "City Center Mall", detail: "5 min drive" },
  { label: "Grand Botanical Park", detail: "8 min drive" },
  { label: "International Airport", detail: "15 min drive" },
  { label: "Riverside School District", detail: "6 min drive" },
];

export const aboutFeatures = [
  "Signature architecture",
  "Smart home automation",
  "Chef's kitchen & butler's pantry",
  "Panoramic floor-to-ceiling windows",
  "Private balcony terrace",
  "Energy-efficient design",
];

export const testimonials = [
  {
    name: "Rebeka Dawson",
    role: "First-Time Buyer",
    initials: "RD",
    quote:
      "From the first viewing to the final signature, Emilia made the whole process feel effortless. Our penthouse is everything we dreamed of — and more.",
  },
  {
    name: "Marc Kenneth",
    role: "Founder & CEO",
    initials: "MK",
    quote:
      "The team's attention to detail is unmatched. They understood exactly what we needed, negotiated brilliantly, and delivered a villa beyond our expectations.",
  },
  {
    name: "Owen Lester",
    role: "Investment Investor",
    initials: "OL",
    quote:
      "I've bought property with several agencies, and none compare. Sharp market insight, honest advice, and a genuinely personal touch from start to finish.",
  },
];

export const whyChooseUs = [
  {
    title: "Excellent Reputation",
    description:
      "Trusted by hundreds of families across the region for honest, transparent guidance on every transaction.",
    icon: "star",
    color: "star",
  },
  {
    title: "Best Local Agents",
    description:
      "Market specialists who know every street, school, and neighborhood — so you always buy with confidence.",
    icon: "user",
    color: "primary",
  },
  {
    title: "Personalized Service",
    description:
      "White-glove attention from the first visit to the final signature, tailored around your lifestyle.",
    icon: "heart",
    color: "sale",
  },
];

export const whyChooseStats = [
  ["15+", "Years of Experience"],
  ["420+", "Homes Sold"],
  ["98%", "Client Satisfaction"],
  ["50+", "Industry Awards"],
];

export const agents = [
  {
    name: "Eleanor Vance",
    role: "Senior Real Estate Advisor",
    phone: "(555) 012-3456",
    phoneHref: "tel:+15550123456",
    email: "eleanor@emiliaestates.com",
    image: "/images/agent.svg",
    alt: "Portrait of Eleanor Vance, senior real estate advisor",
  },
  {
    name: "Marcus Reid",
    role: "Luxury Property Specialist",
    phone: "(555) 012-7890",
    phoneHref: "tel:+15550127890",
    email: "marcus@emiliaestates.com",
    image: "/images/agent-2.svg",
    alt: "Portrait of Marcus Reid, luxury property specialist",
  },
  {
    name: "Sofia Marchetti",
    role: "Investment Consultant",
    phone: "(555) 012-3451",
    phoneHref: "tel:+15550123451",
    email: "sofia@emiliaestates.com",
    image: "/images/agent-3.svg",
    alt: "Portrait of Sofia Marchetti, investment consultant",
  },
  {
    name: "David Okafor",
    role: "Waterfront & Villa Expert",
    phone: "(555) 012-4571",
    phoneHref: "tel:+15550124571",
    email: "david@emiliaestates.com",
    image: "/images/agent-4.svg",
    alt: "Portrait of David Okafor, waterfront and villa expert",
  },
];
