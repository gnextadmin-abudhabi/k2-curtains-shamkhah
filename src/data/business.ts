export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  legalName: string;
  owner: string;
  phone: string;
  phoneHref: string;
  phoneSecondary: string;
  phoneSecondaryHref: string;
  whatsapp: string;
  whatsappHref: string;
  email: string;
  website: string;
  address: Address;
  coordinates: Coordinates;
  hours: BusinessHours[];
  license: string;
  yearEstablished: number;
  serviceRadius: string;
  schemaType: string;
  additionalType: string;
  description: string;
  tagline: string;
}

export const business: Business = {
  name: 'K2 Curtains and Trading',
  legalName: 'K2 Curtains and Trading',
  owner: '',
  phone: '+971 55 225 5639',
  phoneHref: 'tel:+971552255639',
  phoneSecondary: '+971 50 532 9485',
  phoneSecondaryHref: 'tel:+971505329485',
  whatsapp: '+971 55 225 5639',
  whatsappHref: 'https://wa.me/971552255639',
  email: 'info@curtainshopabudhabi.com',
  website: 'https://www.curtainshopabudhabi.com',
  address: {
    street: 'Hamdan Street, Ziyani Area',
    city: 'Abu Dhabi',
    state: 'Abu Dhabi',
    zip: '',
  },
  coordinates: { lat: 24.4577756, lng: 54.529953 },
  hours: [
    { days: 'Monday – Saturday', hours: '10:00 AM – 6:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  license: '',
  yearEstablished: 2010,
  serviceRadius: 'Abu Dhabi – Al Shamkha, Baniyas, Khalifa City, Yas Island, MBZ City, Masdar City, Al Reef, Al Raha, Musaffah and surrounding areas',
  schemaType: 'LocalBusiness',
  additionalType: 'HomeGoodsStore',
  description:
    'K2 Curtains and Trading is Abu Dhabi\'s trusted curtain shop specializing in custom curtains, Roman and roller blinds, Venetian blinds, motorized curtains, sofa upholstery, wooden flooring, carpets, wallpapers, and Arabic majlis seating. Serving homes and villas across Al Shamkha, Baniyas, Khalifa City, Yas Island, and surrounding communities with free home consultation and measurement.',
  tagline: 'Dress Your Windows. Elevate Your Home.',
};

export function yearsInBusiness(): number {
  return new Date().getFullYear() - business.yearEstablished;
}
