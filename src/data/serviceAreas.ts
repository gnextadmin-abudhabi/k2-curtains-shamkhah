export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  population: number;
  priority: 'primary' | 'secondary' | 'tertiary';
  lat: number;
  lng: number;
  nearby: string[];
  description: string;
  zipCodes: string[];
  responseTime: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'al-shamkha',
    name: 'Al Shamkha',
    county: 'Abu Dhabi',
    population: 80000,
    priority: 'primary',
    lat: 24.6124,
    lng: 54.7146,
    nearby: ['shakbut-city', 'madinat-al-riyadh', 'baniyas', 'al-rahba'],
    description:
      'Al Shamkha is a fast-growing residential community on the outskirts of Abu Dhabi, where new villas and townhouses are constantly being fitted with custom curtains, blinds, and flooring by K2 Curtains.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'shakbut-city',
    name: 'Shakbut City',
    county: 'Abu Dhabi',
    population: 25000,
    priority: 'secondary',
    lat: 24.5833,
    lng: 54.6833,
    nearby: ['al-shamkha', 'madinat-al-riyadh', 'baniyas'],
    description:
      'Shakbut City is an emerging residential development where homeowners trust K2 Curtains for complete window treatments, upholstery, and flooring solutions.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'madinat-al-riyadh',
    name: 'Madinat Al Riyadh',
    county: 'Abu Dhabi',
    population: 35000,
    priority: 'secondary',
    lat: 24.6000,
    lng: 54.7000,
    nearby: ['al-shamkha', 'shakbut-city', 'baniyas', 'al-rahba'],
    description:
      'Madinat Al Riyadh offers spacious family villas that benefit from K2 Curtains\' custom curtain stitching, blackout blinds, and wooden flooring services.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'baniyas',
    name: 'Baniyas',
    county: 'Abu Dhabi',
    population: 60000,
    priority: 'primary',
    lat: 24.2833,
    lng: 54.6833,
    nearby: ['baniyas-east', 'baniyas-west', 'al-shamkha', 'mohammed-bin-zayed-city'],
    description:
      'Baniyas is an established Abu Dhabi neighbourhood with a strong demand for affordable yet premium curtain and blind installations for both villas and apartments.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'baniyas-east',
    name: 'Baniyas East',
    county: 'Abu Dhabi',
    population: 30000,
    priority: 'secondary',
    lat: 24.3000,
    lng: 54.7000,
    nearby: ['baniyas', 'baniyas-west', 'mohammed-bin-zayed-city'],
    description:
      'Baniyas East residents rely on K2 Curtains for quick turnaround on custom curtains, roller blinds, and sofa upholstery for their family homes.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'baniyas-west',
    name: 'Baniyas West',
    county: 'Abu Dhabi',
    population: 25000,
    priority: 'secondary',
    lat: 24.2700,
    lng: 54.6700,
    nearby: ['baniyas', 'baniyas-east', 'musaffah'],
    description:
      'Baniyas West homeowners choose K2 Curtains for made-to-measure window treatments and free in-home consultation throughout the area.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'khalifa-city',
    name: 'Khalifa City',
    county: 'Abu Dhabi',
    population: 150000,
    priority: 'secondary',
    lat: 24.4194,
    lng: 54.6000,
    nearby: ['al-raha', 'yas-island', 'masdar-city', 'mohammed-bin-zayed-city'],
    description:
      'Khalifa City hosts a mix of villas and apartments where K2 Curtains provides premium curtains, motorized blinds, and wooden flooring for modern interiors.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'masdar-city',
    name: 'Masdar City',
    county: 'Abu Dhabi',
    population: 10000,
    priority: 'tertiary',
    lat: 24.4267,
    lng: 54.6167,
    nearby: ['khalifa-city', 'mohammed-bin-zayed-city', 'al-raha'],
    description:
      'Masdar City\'s eco-conscious residents appreciate K2 Curtains\' energy-efficient blackout blinds, thermal curtains, and sustainable flooring options.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'al-reef',
    name: 'Al Reef',
    county: 'Abu Dhabi',
    population: 50000,
    priority: 'secondary',
    lat: 24.3833,
    lng: 54.5833,
    nearby: ['khalifa-city', 'al-raha', 'mohammed-bin-zayed-city'],
    description:
      'Al Reef\'s villa communities regularly call K2 Curtains for full-home curtain packages, Arabic majlis seating, and luxury flooring installations.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'al-raha',
    name: 'Al Raha',
    county: 'Abu Dhabi',
    population: 35000,
    priority: 'secondary',
    lat: 24.4667,
    lng: 54.6167,
    nearby: ['yas-island', 'khalifa-city', 'al-reef'],
    description:
      'Al Raha\'s waterfront apartments and townhouses are fitted with elegant sheer curtains, Roman blinds, and contemporary upholstery by K2 Curtains.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'yas-island',
    name: 'Yas Island',
    county: 'Abu Dhabi',
    population: 25000,
    priority: 'tertiary',
    lat: 24.4922,
    lng: 54.6030,
    nearby: ['al-raha', 'khalifa-city'],
    description:
      'Yas Island residents and holiday-home owners choose K2 Curtains for stylish, low-maintenance window treatments that suit modern island living.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
  {
    slug: 'mohammed-bin-zayed-city',
    name: 'Mohammed Bin Zayed City',
    county: 'Abu Dhabi',
    population: 300000,
    priority: 'secondary',
    lat: 24.3198,
    lng: 54.5960,
    nearby: ['baniyas', 'khalifa-city', 'masdar-city', 'musaffah'],
    description:
      'MBZ City is one of Abu Dhabi\'s largest residential districts, where K2 Curtains serves hundreds of families with custom curtains, blinds, and flooring every year.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'musaffah',
    name: 'Musaffah',
    county: 'Abu Dhabi',
    population: 200000,
    priority: 'primary',
    lat: 24.3683,
    lng: 54.5369,
    nearby: ['mohammed-bin-zayed-city', 'baniyas-west', 'al-rahba'],
    description:
      'Musaffah\'s mix of industrial and residential areas relies on K2 Curtains for durable, affordable window treatments and quick installation services.',
    zipCodes: [],
    responseTime: '30–45 minutes',
  },
  {
    slug: 'al-rahba',
    name: 'Al Rahba',
    county: 'Abu Dhabi',
    population: 20000,
    priority: 'tertiary',
    lat: 24.6500,
    lng: 54.7500,
    nearby: ['al-shamkha', 'madinat-al-riyadh', 'shakbut-city'],
    description:
      'Al Rahba\'s growing villa community turns to K2 Curtains for complete home décor packages including curtains, blinds, upholstery, and flooring.',
    zipCodes: [],
    responseTime: '45–60 minutes',
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  return getAreaBySlug(slug)?.name ?? slug;
}
