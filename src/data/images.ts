export interface ImageAsset {
  src: string;
  alt: string;
  description: string;
}

export const images: Record<string, ImageAsset> = {
  'hero-homepage': {
    src: '/images/hero-homepage.webp',
    alt: 'Luxury modern living room with floor-to-ceiling curtains in an Abu Dhabi villa',
    description:
      'A stunning modern living room in an Abu Dhabi villa at golden hour, showcasing premium floor-to-ceiling curtains, luxurious sofa, and elegant home décor.',
  },
  'custom-curtains': {
    src: '/images/custom-curtains.webp',
    alt: 'Custom-made emerald green velvet curtains with gold tie-backs in a master bedroom',
    description:
      'Luxurious custom-made floor-to-ceiling velvet curtains in deep emerald green with gold tie-backs, hanging in a modern Abu Dhabi master bedroom.',
  },
  'roman-blinds': {
    src: '/images/roman-blinds.webp',
    alt: 'Elegant beige linen Roman blinds in a contemporary dining room',
    description:
      'Elegant Roman blinds in soft beige linen fabric, neatly folded at the top of a large window in a contemporary dining room.',
  },
  'roller-blinds': {
    src: '/images/roller-blinds.webp',
    alt: 'Sleek charcoal blackout roller blinds in a modern home office',
    description:
      'Sleek blackout roller blinds in matte charcoal grey, fully extended over a floor-to-ceiling window in a modern home office with Abu Dhabi skyline view.',
  },
  'venetian-blinds': {
    src: '/images/venetian-blinds.webp',
    alt: 'Premium oak wooden Venetian blinds with sunlight patterns in a living room',
    description:
      'Premium wooden Venetian blinds in natural oak finish, partially tilted to control sunlight in a bright living room with Scandinavian-meets-Arabic interior style.',
  },
  'curtain-tracks': {
    src: '/images/curtain-tracks.webp',
    alt: 'Modern recessed curtain track system with motorized gliders',
    description:
      'Close-up detail of a modern recessed curtain track system with motorized gliders, sleek white ceiling-mounted track with elegant curtains hanging perfectly straight.',
  },
  'motorized-curtains': {
    src: '/images/motorized-curtains.webp',
    alt: 'Smart motorized curtains opening with remote control at sunset',
    description:
      'A person using a sleek remote control while luxurious white curtains automatically glide open, revealing a panoramic balcony view at sunset.',
  },
  'sofa-upholstery': {
    src: '/images/sofa-upholstery.webp',
    alt: 'Beautifully reupholstered navy blue velvet sofa with gold accent pillows',
    description:
      'A beautifully reupholstered three-seater sofa in rich navy blue velvet with gold accent pillows, placed in a stylish living room.',
  },
  'wooden-flooring': {
    src: '/images/wooden-flooring.webp',
    alt: 'Wide-plank engineered oak wooden flooring in an open-plan living area',
    description:
      'Wide-plank engineered oak wooden flooring installed in a spacious open-plan living area, warm honey-toned wood grain visible with sunlight streaming across the polished surface.',
  },
  'carpets-rugs': {
    src: '/images/carpets-rugs.webp',
    alt: 'Plush ivory and gold geometric area rug in a formal living room',
    description:
      'A plush hand-tufted area rug in warm ivory and gold geometric pattern, laid over wooden flooring in a formal living room with Middle Eastern-inspired contemporary design.',
  },
  'wallpapers': {
    src: '/images/wallpapers.webp',
    alt: 'Premium textured damask wallpaper in champagne gold and cream',
    description:
      'An accent wall covered in premium textured wallpaper with subtle damask pattern in champagne gold and cream, complementing a modern bedroom with upholstered headboard.',
  },
  'arabic-majlis': {
    src: '/images/arabic-majlis.webp',
    alt: 'Traditional modern Arabic majlis seating area with burgundy and gold sofas',
    description:
      'A traditional yet modern Arabic majlis seating area with low-profile upholstered sofas in rich burgundy and gold fabric, ornate cushions, and brass coffee table.',
  },
  'blog-curtain-trends': {
    src: '/images/blog-curtain-trends.webp',
    alt: 'Trendy layered window curtains in warm sand colour with gold rods',
    description:
      'Trendy layered window treatment with sheer white under-curtains and heavy textured linen outer curtains in warm sand colour, gold curtain rods in a modern Abu Dhabi apartment.',
  },
};

export function getImage(key: string): ImageAsset {
  return (
    images[key] ?? {
      src: '/images/hero-homepage.webp',
      alt: 'K2 Curtains premium home décor in Abu Dhabi',
      description: 'Premium curtains, blinds, and home décor by K2 Curtains in Abu Dhabi.',
    }
  );
}
