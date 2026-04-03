import { PortfolioItem, Branch, Service, GalleryItem } from './types';

// ─── REAL PORTFOLIO IMAGES (WedMeGood CDN) ───────────────────────────────────
const WMG = (id: string) => `https://image.wedmegood.com/resized/800X/uploads/member/226/${id}`;
const PRJ = (id: string, file: string) => `https://image.wedmegood.com/resized/800X/uploads/project/${id}/${file}`;

export const BRANCHES: Branch[] = [
  {
    city: 'Delhi',
    address: 'Lajpat Nagar 2, South Delhi',
    phone: '+91 85272 74260',
    mapUrl: 'https://maps.app.goo.gl/dipakstudiosdelhi',
  },
  {
    city: 'Gurgaon',
    address: 'Golf Course Road',
    phone: '+91 98100 54321',
    mapUrl: 'https://maps.app.goo.gl/dipakstudiosgurgaon',
  },
  {
    city: 'Faridabad',
    address: 'Neelam Chowk',
    phone: '+91 129 4022666',
    mapUrl: 'https://g.page/dipakstudiosdelhi',
    isHeadOffice: true,
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Pranav & Mahi',
    category: 'Destination',
    imageUrl: PRJ('323518', '1774250895_image4782.jpg'),
  },
  {
    id: '2',
    title: 'Ritesh & Swati',
    category: 'Wedding',
    imageUrl: PRJ('292285', '1718610659_image6971.jpg'),
  },
  {
    id: '3',
    title: 'Keshav & Anulika',
    category: 'Destination',
    imageUrl: PRJ('292730', '1719128143_image5449.jpg'),
  },
  {
    id: '4',
    title: 'Muskan & Dhruv',
    category: 'Cinematic',
    imageUrl: PRJ('290792', '1716624036_image5406.jpg'),
  },
  {
    id: '5',
    title: 'Karan & Shubha',
    category: 'Celebrity',
    imageUrl: PRJ('285213', '1712055922_image2807.jpg'),
    isCelebrity: true,
  },
  {
    id: '6',
    title: 'Candid Heritage',
    category: 'Portrait',
    imageUrl: WMG('1770793876_image9615.jpg'),
  },
  {
    id: '7',
    title: 'Golden Hour',
    category: 'Cinematic',
    imageUrl: WMG('1771327653_image4343.jpg'),
  },
  {
    id: '8',
    title: 'The Sacred Rites',
    category: 'Wedding',
    imageUrl: WMG('1748694573_image8102.jpg'),
  },
  {
    id: '9',
    title: 'Eternal Elegance',
    category: 'Portrait',
    imageUrl: WMG('1774255025_image2071.jpg'),
  },
];

export const GALLERY: GalleryItem[] = PORTFOLIO.map((item) => ({
  id: parseInt(item.id),
  url: item.imageUrl,
  category: item.category as any,
  title: item.title,
}));

export const SERVICES: Service[] = [
  {
    id: 'wed-01',
    title: 'The Heritage Collection',
    description: 'Full-day candid & traditional photography capturing every ritual with cinematic precision.',
    price: 'Starting from ₹4,00,000',
    image: PRJ('292285', '1718610659_image6971.jpg'),
    features: [
      'Lead Photographer + Assistant',
      'High-res Edited Digital Photos',
      'Cinematic Highlight Film',
      'Premium Wedding Album',
    ],
  },
  {
    id: 'cin-01',
    title: 'Cinematic Videography',
    description: 'Hollywood-grade cinematic films with drone aerials, color grading, and full narrative editing.',
    price: 'Starting from ₹2,50,000',
    image: PRJ('290792', '1716624036_image5406.jpg'),
    features: [
      '4K Multi-Camera Setup',
      'Aerial Drone Footage',
      'Feature-Length Film + Teaser',
      'Same-Day Edit (on request)',
    ],
  },
  {
    id: 'pre-01',
    title: 'Pre-Wedding Films',
    description: 'Bespoke cinematic pre-wedding shoots at curated locations across India and abroad.',
    price: 'Starting from ₹1,50,000',
    image: WMG('1773826222_image4839.jpg'),
    features: [
      'Location Scouting',
      'Creative Direction',
      'Styled Shoot Support',
      '2–4 Minute Cinematic Film',
    ],
  },
  {
    id: 'por-01',
    title: 'The Royal Portraiture',
    description: 'Bespoke corporate headshots, maternity sessions, and fashion portfolios.',
    price: 'Starting from ₹50,000',
    image: WMG('1770114691_image5413.jpg'),
    features: [
      'Studio or Outdoor Location',
      'Pro Lighting Setup',
      '3 Wardrobe Changes',
      'Digital Retouching',
    ],
  },
  {
    id: 'alb-01',
    title: 'Heirloom Albums',
    description: 'Hand-bound Italian leather albums and traditional photo albums crafted for legacy.',
    price: 'Starting from ₹75,000',
    image: WMG('1748694766_image5148.jpg'),
    features: [
      'Italian Leather Binding',
      'Archival-Grade Paper',
      'Custom Layout Design',
      'Protective Display Case',
    ],
  },
  {
    id: 'pho-01',
    title: 'Photobooth & Events',
    description: 'Branded photobooths and event photography for corporate galas, birthdays, and sangeets.',
    price: 'Starting from ₹80,000',
    image: WMG('1772882489_image8740.jpg'),
    features: [
      'Custom Branded Booth',
      'Instant Prints',
      'Digital Gallery Access',
      'Props & Backdrops',
    ],
  },
];

// ─── REAL REVIEWS (from WedMeGood, 4.8★ / 203 reviews) ─────────────────────
export const REAL_REVIEWS = [
  {
    name: 'Payal Khemchandani',
    location: 'Delhi NCR',
    rating: 5,
    quote:
      'The teasers, reels, and our wedding film were beautifully edited and perfectly captured the emotions and energy of each event. Our album has turned out absolutely stunning.',
    date: 'Mar 2026',
  },
  {
    name: 'Shivangi',
    location: 'Delhi',
    rating: 5,
    quote:
      'They have given us videos and pictures that we will look at when we are 80 and laugh. No one could have done a better job. Very passionate people I must say.',
    date: 'Feb 2026',
  },
  {
    name: 'Anisha Srivastava',
    location: 'Delhi NCR',
    rating: 5,
    quote:
      'Every photo and reel they delivered is nothing short of stunning. The storytelling, the way they captured every emotion — it is all just wow. Cinematic, vibrant, and crafted with so much love.',
    date: 'Jan 2026',
  },
  {
    name: 'Mansi Saini',
    location: 'Delhi',
    rating: 5,
    quote:
      'From the reels to the pictures to the album — everything was just wow. Abhishek managed everything so smoothly and made the whole experience stress-free. Truly the best team.',
    date: 'Aug 2025',
  },
  {
    name: 'Deepanshi',
    location: 'Delhi NCR',
    rating: 5,
    quote:
      'From pre-wedding to the last reception day you were so into it — every photo, every drama. You understood the project so well. I don\'t even remember having to pose. You just did it.',
    date: 'Dec 2025',
  },
  {
    name: 'The Kapoor Family',
    location: 'Udaipur City Palace',
    rating: 5,
    quote:
      'A legacy of 60 years shows in every frame. Their ability to handle high-profile ceremonies with such grace and cinematic precision is why they are the only choice for our family.',
    date: 'Nov 2025',
  },
];

// ─── SOCIAL LINKS (all verified) ────────────────────────────────────────────
export const SOCIAL = {
  instagram: 'https://www.instagram.com/dipak_studios',
  youtube: 'https://www.youtube.com/@DipakStudiosdelhi',
  facebook: 'https://www.facebook.com/Dipak.Studio',
  google: 'https://g.page/dipakstudiosdelhi',
  whatsapp: '918527274260',
  email: 'wedding.dipak@gmail.com',
  supportEmail: 'info@dipakstudios.com',
};

// ─── CONTACT (WhatsApp message helper) ──────────────────────────────────────
export const buildWhatsAppURL = (msg: string) =>
  `https://wa.me/${SOCIAL.whatsapp}?text=${encodeURIComponent(msg)}`;

export const buildMailto = (
  subject: string,
  body: Record<string, string>
) => {
  const rows = Object.entries(body)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  return `mailto:${SOCIAL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows)}`;
};
