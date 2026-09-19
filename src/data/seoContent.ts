import { business } from './business';
import { serviceTypes } from './serviceTypes';
import { serviceAreas } from './serviceAreas';

export interface Testimonial {
  author: string;
  location: string;
  rating: number;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface SeoPageContent {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  faqs: Faq[];
  testimonials: Testimonial[];
}

function djb2(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}

function pickByHash<T>(arr: T[], hash: number): T {
  return arr[hash % arr.length];
}

const titleFormats = [
  '{service} in {area} | {business} — Free Quote',
  '{business} — {service} {area} | Custom Fitted',
  '{service} {area} | {business} — Home Consultation',
  '{area} {service} | {business} — Measure & Install',
];

const eyebrowPhrases = [
  'Local service, premium finish',
  'Made-to-measure for {area} homes',
  'Trusted by {area} families',
  'Custom fitted in {area}',
];

const introHooks = [
  (service: string, area: string) =>
    `Looking for ${service.toLowerCase()} in ${area}? ${business.name} has been fitting custom window treatments and home décor for ${area} homeowners since ${business.yearEstablished}. We bring fabric samples to your door, measure every window precisely, and install everything for a flawless finish.`,
  (service: string, area: string) =>
    `${area} homeowners trust ${business.name} for ${service.toLowerCase()} that combine style, privacy, and durability. Our free in-home consultation includes professional measurement, fabric selection, and a no-obligation quote tailored to your space.`,
  (service: string, area: string) =>
    `Transform your ${area} home with ${service.toLowerCase()} from ${business.name}. With over ${new Date().getFullYear() - business.yearEstablished} years of experience, we stitch, fit, and install curtains, blinds, and flooring to exact specifications — all backed by our satisfaction guarantee.`,
];

export const faqPool: Faq[] = [
  {
    question: 'Do you offer free home measurement in {area}?',
    answer:
      'Yes, we offer completely free home consultation and measurement throughout {area} and surrounding areas. Our consultant brings fabric samples, measures your windows precisely, and provides a detailed quote with no obligation. Call {phone} to book your appointment.',
  },
  {
    question: 'How long does it take to make custom curtains?',
    answer:
      'Most custom curtain orders are ready within 7–14 days depending on fabric availability and complexity. For urgent requests, we offer an express service. Contact {business} on {phone} and we will confirm your timeline before you place the order.',
  },
  {
    question: 'What types of blinds do you supply in {area}?',
    answer:
      'We supply and install Roman blinds, roller blinds, Venetian blinds, and motorized smart blinds across {area}. Each blind is made to your exact window size with a choice of blackout, sunscreen, or translucent fabrics. Book a free consultation to see samples in your own home.',
  },
  {
    question: 'Can you install motorized curtains?',
    answer:
      'Absolutely. Our motorized curtain tracks integrate with Alexa, Google Home, and most smart home systems. We install silent motors, set up remote and voice control, and program schedules to suit your lifestyle. Call {phone} for a smart home curtain consultation.',
  },
  {
    question: 'Do you provide sofa upholstery services in {area}?',
    answer:
      'Yes, we offer professional sofa reupholstery in {area}. We strip old fabric, repair frames and foam, and recover your sofa in velvet, leather, linen, or performance fabric of your choice. We can also reupholster dining chairs, headboards, and Arabic majlis seating.',
  },
  {
    question: 'What flooring options do you offer?',
    answer:
      'We supply and install engineered oak, laminate, SPC rigid core, and parquet flooring. Every installation includes subfloor preparation, underlay, precise plank laying, and skirting finishing. Contact {business} on {phone} to arrange a free flooring survey in {area}.',
  },
  {
    question: 'How much do curtains cost in {area}?',
    answer:
      'Curtain prices depend on window size, fabric choice, lining, and heading style. A standard bedroom window typically starts from AED 500–800, while full villa packages range from AED 5,000–15,000. We provide a clear written quote after free measurement so there are no surprises.',
  },
  {
    question: 'Do you sell ready-made curtains or only custom?',
    answer:
      'We specialize in made-to-measure curtains stitched to your exact window dimensions for a perfect fit. Unlike ready-made curtains that often hang too short or too narrow, our custom curtains are tailored for your home with professional finishing and installation.',
  },
  {
    question: 'What areas do you serve besides {area}?',
    answer:
      'In addition to {area}, we serve Al Shamkha, Baniyas, Khalifa City, Yas Island, MBZ City, Masdar City, Al Reef, Al Raha, Musaffah, and surrounding Abu Dhabi communities. Call {phone} to check if we cover your specific location.',
  },
  {
    question: 'Can I see fabric samples before ordering?',
    answer:
      'Yes, our free home consultation includes a full range of fabric samples — sheer, blackout, linen, velvet, and textured options in dozens of colours. Seeing samples in your own lighting and against your walls is the best way to choose the perfect fabric.',
  },
];

export const testimonialPool: Testimonial[] = [
  {
    author: 'Fatima A.',
    location: 'Al Shamkha',
    rating: 5,
    text: 'K2 Curtains made beautiful blackout curtains for our entire villa. The team measured every window perfectly, and the stitching quality is excellent. Highly recommended for anyone in Al Shamkha.',
  },
  {
    author: 'Mohammed R.',
    location: 'Baniyas',
    rating: 5,
    text: 'We got Roman blinds and wooden flooring installed by K2 Curtains. Professional service from start to finish, and the price was very reasonable compared to other quotes we received.',
  },
  {
    author: 'Aisha K.',
    location: 'Khalifa City',
    rating: 5,
    text: 'The motorized curtains are a game changer. I can open and close all the curtains from my phone. K2 Curtains installed everything neatly and showed me how to use the app.',
  },
  {
    author: 'Omar H.',
    location: 'Yas Island',
    rating: 4,
    text: 'Great selection of fabrics and very knowledgeable staff. They helped us choose the right curtains for our apartment and installed them within a week. Good value for money.',
  },
  {
    author: 'Sarah L.',
    location: 'MBZ City',
    rating: 5,
    text: 'K2 Curtains reupholstered our old sofa and it looks brand new. The navy velvet fabric they recommended is stunning. Very happy with the craftsmanship and service.',
  },
  {
    author: 'Hassan T.',
    location: 'Musaffah',
    rating: 5,
    text: 'Fast, reliable, and affordable. We needed roller blinds for our office and K2 Curtains delivered exactly what we wanted. Measurement, fabrication, and installation were all handled professionally.',
  },
  {
    author: 'Noor S.',
    location: 'Al Raha',
    rating: 5,
    text: 'The Arabic majlis seating K2 Curtains built for us is absolutely beautiful. The cushions are plush, the fabric is high quality, and it perfectly matches our home.',
  },
  {
    author: 'Khalid M.',
    location: 'Al Reef',
    rating: 4,
    text: 'We had wallpaper and wooden flooring installed in our new villa. The team was punctual, clean, and detail-oriented. The finished rooms look amazing.',
  },
];

function formatTemplate(template: string, service: string, area: string): string {
  return template
    .replace(/\{service\}/g, service)
    .replace(/\{area\}/g, area)
    .replace(/\{business\}/g, business.name)
    .replace(/\{phone\}/g, business.phone);
}

export function generateSeoContent(serviceSlug: string, areaSlug: string): SeoPageContent {
  const service = serviceTypes.find((s) => s.slug === serviceSlug);
  const area = serviceAreas.find((a) => a.slug === areaSlug);

  if (!service || !area) {
    return {
      title: `${business.name} — Curtains & Blinds Abu Dhabi`,
      metaDescription: business.description,
      h1: 'Custom Curtains & Blinds in Abu Dhabi',
      intro: business.description,
      faqs: [],
      testimonials: [],
    };
  }

  const hash = djb2(`${serviceSlug}-${areaSlug}`);

  const titleFormat = pickByHash(titleFormats, hash);
  const title = formatTemplate(titleFormat, service.name, area.name);

  const metaDescription = formatTemplate(
    `${service.name} in ${area.name} by ${business.name}. Free home consultation, professional measurement, and expert installation. Call ${business.phone} for a quote.`,
    service.name,
    area.name
  );

  const h1 = `${service.name} in ${area.name}`;

  const introHook = pickByHash(introHooks, hash);
  const intro = introHook(service.name, area.name);

  const shuffledFaqs = [...faqPool].sort(() => (hash % 2 === 0 ? 1 : -1));
  const selectedFaqs = shuffledFaqs.slice(0, 5).map((faq) => ({
    question: formatTemplate(faq.question, service.name, area.name),
    answer: formatTemplate(faq.answer, service.name, area.name),
  }));

  const shuffledTestimonials = [...testimonialPool].sort(() => (hash % 3 === 0 ? 1 : -1));
  const selectedTestimonials = shuffledTestimonials.slice(0, 3);

  return {
    title,
    metaDescription,
    h1,
    intro,
    faqs: selectedFaqs,
    testimonials: selectedTestimonials,
  };
}

export function generateServiceSeoContent(serviceSlug: string): SeoPageContent {
  const service = serviceTypes.find((s) => s.slug === serviceSlug);
  if (!service) {
    return {
      title: `${business.name} — Curtains & Blinds Abu Dhabi`,
      metaDescription: business.description,
      h1: 'Custom Curtains & Blinds in Abu Dhabi',
      intro: business.description,
      faqs: [],
      testimonials: [],
    };
  }

  const hash = djb2(serviceSlug);

  const title = `${service.name} Abu Dhabi | ${business.name} — Custom Fitted`;
  const metaDescription = `${service.name} by ${business.name} in Abu Dhabi. Free home consultation, expert measurement, and professional installation. Call ${business.phone} for a quote.`;
  const h1 = `${service.name} in Abu Dhabi`;

  const intro =
    `Looking for ${service.name.toLowerCase()} in Abu Dhabi? ${business.name} has over ${new Date().getFullYear() - business.yearEstablished} years of experience fitting custom curtains, blinds, and home décor across the emirate. We bring fabric samples to your home, measure every window precisely, and install everything for a flawless finish.`;

  const shuffledFaqs = [...faqPool].sort(() => (hash % 2 === 0 ? 1 : -1));
  const selectedFaqs = shuffledFaqs.slice(0, 5).map((faq) => ({
    question: faq.question.replace(/\{area\}/g, 'Abu Dhabi').replace(/\{service\}/g, service.name).replace(/\{business\}/g, business.name).replace(/\{phone\}/g, business.phone),
    answer: faq.answer.replace(/\{area\}/g, 'Abu Dhabi').replace(/\{service\}/g, service.name).replace(/\{business\}/g, business.name).replace(/\{phone\}/g, business.phone),
  }));

  const shuffledTestimonials = [...testimonialPool].sort(() => (hash % 3 === 0 ? 1 : -1));
  const selectedTestimonials = shuffledTestimonials.slice(0, 3);

  return {
    title,
    metaDescription,
    h1,
    intro,
    faqs: selectedFaqs,
    testimonials: selectedTestimonials,
  };
}

export function generateAreaSeoContent(areaSlug: string): SeoPageContent {
  const area = serviceAreas.find((a) => a.slug === areaSlug);
  if (!area) {
    return {
      title: `${business.name} — Curtains & Blinds Abu Dhabi`,
      metaDescription: business.description,
      h1: 'Custom Curtains & Blinds in Abu Dhabi',
      intro: business.description,
      faqs: [],
      testimonials: [],
    };
  }

  const hash = djb2(areaSlug);

  const title = `Curtains & Blinds ${area.name} | ${business.name} — Free Quote`;
  const metaDescription = `Custom curtains, blinds, flooring, and upholstery in ${area.name} by ${business.name}. Free home consultation and professional installation. Call ${business.phone}.`;
  const h1 = `Curtains & Blinds in ${area.name}`;

  const intro =
    `${area.name} homeowners trust ${business.name} for made-to-measure curtains, stylish blinds, wooden flooring, and sofa upholstery. With over ${new Date().getFullYear() - business.yearEstablished} years of experience, we bring fabric samples to your door, measure precisely, and install everything for a perfect finish.`;

  const shuffledFaqs = [...faqPool].sort(() => (hash % 2 === 0 ? 1 : -1));
  const selectedFaqs = shuffledFaqs.slice(0, 5).map((faq) => ({
    question: faq.question.replace(/\{area\}/g, area.name).replace(/\{business\}/g, business.name).replace(/\{phone\}/g, business.phone),
    answer: faq.answer.replace(/\{area\}/g, area.name).replace(/\{business\}/g, business.name).replace(/\{phone\}/g, business.phone),
  }));

  const shuffledTestimonials = [...testimonialPool].sort(() => (hash % 3 === 0 ? 1 : -1));
  const selectedTestimonials = shuffledTestimonials.slice(0, 3);

  return {
    title,
    metaDescription,
    h1,
    intro,
    faqs: selectedFaqs,
    testimonials: selectedTestimonials,
  };
}
