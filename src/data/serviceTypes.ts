export interface ProcessStep {
  title: string;
  description: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ServiceType {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceRange: PriceRange;
  emergency: boolean;
  icon: string;
  image: string;
  processSteps: ProcessStep[];
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'custom-curtains',
    name: 'Custom Curtains & Drapes',
    shortDescription:
      'Hand-stitched custom curtains in sheer, blackout, linen, velvet, and luxury fabrics tailored to your windows.',
    description:
      'Our custom curtain service delivers perfectly fitted window treatments for every room in your home. Choose from sheer, blackout, linen, velvet, and textured fabrics in hundreds of colours and patterns. We measure, stitch, and install curtains for villas, apartments, and townhouses across Abu Dhabi with a flawless finish every time.',
    priceRange: { min: 500, max: 15000 },
    emergency: false,
    icon: 'lucide:blinds',
    image: '/images/custom-curtains.webp',
    processSteps: [
      {
        title: 'Free Home Measurement',
        description:
          'Our consultant visits your home with fabric samples, measures every window precisely, and discusses your style preferences, light control needs, and budget.',
      },
      {
        title: 'Fabric Selection & Design',
        description:
          'Choose from sheer, blackout, linen, velvet, and textured fabrics. We help you select colours, patterns, heading styles, and lining options to match your interior.',
      },
      {
        title: 'Precision Tailoring',
        description:
          'Our experienced tailors cut and stitch each curtain to exact measurements with reinforced hems, perfect pleats, and quality linings for a premium drape.',
      },
      {
        title: 'Professional Installation',
        description:
          'We return to install your curtains on tracks or rods, ensuring smooth operation, perfect alignment, and a polished look that transforms your room.',
      },
    ],
  },
  {
    slug: 'roman-blinds',
    name: 'Roman Blinds',
    shortDescription:
      'Elegant folded Roman blinds in linen, cotton, and blackout fabrics for a clean, tailored window look.',
    description:
      'Roman blinds add sophistication to any room with their neat folded panels that stack evenly when raised. We offer a wide range of fabrics including linen, cotton, silk, and blackout materials, with optional thermal lining for energy efficiency. Ideal for living rooms, bedrooms, and dining areas in Abu Dhabi homes.',
    priceRange: { min: 400, max: 8000 },
    emergency: false,
    icon: 'lucide:panel-top',
    image: '/images/roman-blinds.webp',
    processSteps: [
      {
        title: 'Window Assessment',
        description:
          'We measure your window recess or exact blind size and advise on inside-mount vs outside-mount options for the best light control and aesthetic.',
      },
      {
        title: 'Fabric & Style Choice',
        description:
          'Browse our collection of linen, cotton, and blackout fabrics. Select fold style — classic flat, relaxed, or hobbled — and optional cordless or motorized operation.',
      },
      {
        title: 'Custom Fabrication',
        description:
          'Each blind is handcrafted with precision stitching, rigid back battens for clean folds, and quality cord locks or motorized mechanisms.',
      },
      {
        title: 'Fitting & Demonstration',
        description:
          'We install the blind securely, level it perfectly, and demonstrate raising, lowering, and any motorized features before we leave.',
      },
    ],
  },
  {
    slug: 'roller-blinds',
    name: 'Roller Blinds',
    shortDescription:
      'Sleek roller blinds in blackout, sunscreen, and translucent fabrics for modern homes and offices.',
    description:
      'Roller blinds offer a minimalist, contemporary window solution that suits modern Abu Dhabi interiors. Choose from blackout fabrics for complete privacy, sunscreen mesh for heat and glare reduction, or translucent options for filtered natural light. Available in manual chain, spring-loaded, or motorized operation.',
    priceRange: { min: 350, max: 6000 },
    emergency: false,
    icon: 'lucide:scroll',
    image: '/images/roller-blinds.webp',
    processSteps: [
      {
        title: 'Consultation & Measurement',
        description:
          'We assess your window dimensions and discuss your priorities — privacy, light control, UV protection, or heat reduction — to recommend the right fabric.',
      },
      {
        title: 'Fabric & Operation Selection',
        description:
          'Choose from blackout, sunscreen, or translucent fabrics in over 200 colours. Decide between chain-operated, spring-loaded, or motorized control.',
      },
      {
        title: 'Precision Manufacturing',
        description:
          'Your blind is cut to exact width, fitted with a durable aluminium tube, quality side brackets, and a smooth-operating chain or motor mechanism.',
      },
      {
        title: 'Clean Installation',
        description:
          'We mount brackets securely, fit the blind with perfect tension, and test smooth rolling action. Optional side channels for complete blackout are available.',
      },
    ],
  },
  {
    slug: 'venetian-blinds',
    name: 'Venetian Blinds',
    shortDescription:
      'Classic wooden and aluminium Venetian blinds with adjustable slats for precise light control.',
    description:
      'Venetian blinds give you complete control over light and privacy with adjustable horizontal slats. We supply premium wooden Venetian blinds in oak, walnut, and white finishes, as well as durable aluminium options in a wide colour range. Perfect for offices, kitchens, and contemporary living spaces across Abu Dhabi.',
    priceRange: { min: 400, max: 7000 },
    emergency: false,
    icon: 'lucide:columns-3',
    image: '/images/venetian-blinds.webp',
    processSteps: [
      {
        title: 'Window Survey',
        description:
          'We measure width, drop, and recess depth, then advise on slat width (25mm or 50mm), material choice, and colour to complement your interior.',
      },
      {
        title: 'Material & Colour Selection',
        description:
          'Choose from real wood, faux wood, or aluminium slats in dozens of finishes. We match samples to your flooring, furniture, and wall colours.',
      },
      {
        title: 'Made-to-Order Build',
        description:
          'Each blind is built with precision-cut slats, durable ladder cords, a smooth tilt wand or cord mechanism, and a matching headrail.',
      },
      {
        title: 'Expert Fitting',
        description:
          'We install brackets, hang the blind, level the slats, and demonstrate tilt and raise/lower controls for effortless daily use.',
      },
    ],
  },
  {
    slug: 'motorized-curtains',
    name: 'Motorized & Smart Curtains',
    shortDescription:
      'Remote-controlled and app-enabled motorized curtain tracks for luxury living and convenience.',
    description:
      'Upgrade your home with motorized curtains that open and close at the touch of a button, on a schedule, or via voice command. Our silent motor tracks integrate with Alexa, Google Home, and smart home systems. Ideal for hard-to-reach windows, home cinemas, and luxury villas throughout Abu Dhabi.',
    priceRange: { min: 2000, max: 25000 },
    emergency: false,
    icon: 'lucide:cpu',
    image: '/images/motorized-curtains.webp',
    processSteps: [
      {
        title: 'Smart Home Consultation',
        description:
          'We assess your windows, existing smart home ecosystem, and control preferences — remote, wall switch, app, or voice — to design the right solution.',
      },
      {
        title: 'Track & Motor Selection',
        description:
          'Choose from straight, curved, or double tracks with silent DC motors. We specify power options — mains, battery, or solar — and integration protocols.',
      },
      {
        title: 'Precision Installation',
        description:
          'Our technicians mount the track, wire or configure wireless power, pair the motor to your control system, and program opening/closing limits.',
      },
      {
        title: 'Programming & Handover',
        description:
          'We demonstrate remote, app, and voice control, set up schedules and scenes, and provide a full walkthrough so you enjoy effortless curtain control.',
      },
    ],
  },
  {
    slug: 'curtain-tracks-rods',
    name: 'Curtain Tracks & Rods',
    shortDescription:
      'Professional installation of ceiling tracks, curtain rods, pelmets, and decorative hardware.',
    description:
      'A curtain is only as good as its track or rod. We supply and install heavy-duty ceiling tracks, wall-mounted rods, double tracks for sheer and blackout layering, and decorative finials in brass, chrome, and matte black. Every fitting is level, secure, and built to last in Abu Dhabi\'s climate.',
    priceRange: { min: 300, max: 5000 },
    emergency: false,
    icon: 'lucide:minus',
    image: '/images/curtain-tracks.webp',
    processSteps: [
      {
        title: 'Hardware Assessment',
        description:
          'We inspect your ceiling or wall structure, window configuration, and curtain weight to recommend the right track or rod system.',
      },
      {
        title: 'Style & Finish Selection',
        description:
          'Choose from recessed ceiling tracks, exposed rods, or decorative poles in chrome, brass, matte black, or wood-effect finishes with matching finials.',
      },
      {
        title: 'Professional Installation',
        description:
          'Our installers mark, drill, and fix brackets or tracks with appropriate wall anchors, ensuring perfect level and load-bearing strength.',
      },
      {
        title: 'Curtain Hanging & Adjustment',
        description:
          'We hang your curtains, adjust fullness, test glide action, and make final tweaks for a flawless, professional finish.',
      },
    ],
  },
  {
    slug: 'sofa-upholstery',
    name: 'Sofa Upholstery',
    shortDescription:
      'Premium sofa reupholstery, cushion refilling, and custom seating for villas and apartments.',
    description:
      'Breathe new life into your sofas with our professional upholstery service. We re-cover existing frames in velvet, leather, linen, or performance fabrics, replace worn foam and springs, and add decorative piping or tufting. Serving living rooms, majlis seating, dining chairs, and outdoor furniture across Abu Dhabi.',
    priceRange: { min: 1500, max: 20000 },
    emergency: false,
    icon: 'lucide:sofa',
    image: '/images/sofa-upholstery.webp',
    processSteps: [
      {
        title: 'On-Site Evaluation',
        description:
          'We inspect your sofa frame, foam condition, and fabric wear at your home, then recommend fabric options and repair scope with a clear quote.',
      },
      {
        title: 'Fabric & Design Selection',
        description:
          'Choose from hundreds of upholstery fabrics — velvet, leather, linen, chenille, and outdoor grades. Select colour, pattern, piping, and cushion style.',
      },
      {
        title: 'Stripping & Rebuilding',
        description:
          'We strip old fabric, repair or replace webbing and springs, install new high-density foam, and cut and stitch the new cover to exact pattern.',
      },
      {
        title: 'Delivery & Placement',
        description:
          'Your reupholstered sofa is delivered, positioned, and inspected at your home. We check fit, comfort, and finish before final handover.',
      },
    ],
  },
  {
    slug: 'wooden-flooring',
    name: 'Wooden Flooring',
    shortDescription:
      'Engineered wood, laminate, SPC, and parquet flooring supply and installation for homes and offices.',
    description:
      'We supply and install premium wooden flooring including engineered oak, laminate, SPC rigid core, and parquet patterns. Our team handles subfloor preparation, moisture barrier installation, precise plank laying, and skirting finishing. Durable, beautiful flooring for villas, apartments, and commercial spaces in Abu Dhabi.',
    priceRange: { min: 80, max: 500 },
    emergency: false,
    icon: 'lucide:layout-grid',
    image: '/images/wooden-flooring.webp',
    processSteps: [
      {
        title: 'Floor Survey & Measurement',
        description:
          'We measure your space, assess subfloor condition, check moisture levels, and recommend the best flooring type for your lifestyle and budget.',
      },
      {
        title: 'Material Selection',
        description:
          'Choose from engineered oak, laminate, SPC, or parquet in various plank widths, colours, and textures. We provide samples to view in your own lighting.',
      },
      {
        title: 'Subfloor Preparation & Installation',
        description:
          'We level, clean, and moisture-proof the subfloor, then install underlay and planks with precise cutting around door frames and built-in fixtures.',
      },
      {
        title: 'Finishing & Protection',
        description:
          'Skirting boards are refitted or replaced, expansion gaps are concealed, and the floor is cleaned and protected with manufacturer-recommended finish.',
      },
    ],
  },
  {
    slug: 'carpets-rugs',
    name: 'Carpets & Rugs',
    shortDescription:
      'Wall-to-wall carpets, area rugs, prayer mats, and custom-sized rugs for every room.',
    description:
      'Our carpet and rug collection includes wall-to-wall carpeting for bedrooms and offices, hand-tufted area rugs, Persian-style designs, modern geometric patterns, and custom-sized pieces. We offer professional installation with gripper rods, underlay, and precise cutting for stairs, landings, and irregular room shapes.',
    priceRange: { min: 500, max: 15000 },
    emergency: false,
    icon: 'lucide:footprints',
    image: '/images/carpets-rugs.webp',
    processSteps: [
      {
        title: 'Room Assessment',
        description:
          'We measure your room, discuss traffic levels, pet and child considerations, and style preferences to recommend the right pile, material, and backing.',
      },
      {
        title: 'Carpet & Rug Selection',
        description:
          'Browse wall-to-wall carpets, ready-made rugs, and custom options in wool, synthetic, and blended fibres. View samples in your home lighting.',
      },
      {
        title: 'Professional Installation',
        description:
          'For wall-to-wall, we install gripper rods, underlay, and stretch the carpet with a power stretcher for a drum-tight finish. Rugs are delivered with non-slip backing.',
      },
      {
        title: 'Final Grooming & Care Advice',
        description:
          'We trim, groom, and vacuum the finished installation, then provide cleaning and maintenance advice to keep your carpet looking new for years.',
      },
    ],
  },
  {
    slug: 'wallpapers',
    name: 'Wallpapers',
    shortDescription:
      'Designer wallpaper supply and installation including 3D, vinyl, textured, and custom prints.',
    description:
      'Transform your walls with our designer wallpaper collection. We supply and install 3D effect wallpapers, vinyl washable finishes, textured grasscloth, metallic accents, and custom digital prints. Our installers ensure perfect pattern matching, seamless joins, and clean cuts around switches and sockets for a flawless finish.',
    priceRange: { min: 300, max: 8000 },
    emergency: false,
    icon: 'lucide:wallpaper',
    image: '/images/wallpapers.webp',
    processSteps: [
      {
        title: 'Wall Inspection',
        description:
          'We inspect wall condition, measure surface area, and check for damp or cracks that need treatment before wallpaper application.',
      },
      {
        title: 'Design & Material Choice',
        description:
          'Select from 3D, vinyl, textured, metallic, or custom-print wallpapers. We advise on pattern scale, colour psychology, and durability for each room.',
      },
      {
        title: 'Surface Preparation & Pasting',
        description:
          'Walls are sanded, primed, and sized. We paste and hang each drop with precise pattern matching, trimming around windows, doors, and fixtures.',
      },
      {
        title: 'Quality Inspection & Cleanup',
        description:
          'We check every seam, remove air bubbles, clean paste residue, and leave your room spotless with beautifully transformed walls.',
      },
    ],
  },
  {
    slug: 'arabic-majlis',
    name: 'Arabic Majlis',
    shortDescription:
      'Traditional and modern Arabic majlis seating, cushions, and floor seating for homes and villas.',
    description:
      'We design and build Arabic majlis seating that honours tradition while fitting modern Abu Dhabi homes. Choose from floor seating with plush cushions, raised-platform designs, or contemporary low-profile sofas in rich fabrics like brocade, velvet, and silk. Custom sizes, colours, and embroidery available for men\'s and women\'s majlis rooms.',
    priceRange: { min: 3000, max: 50000 },
    emergency: false,
    icon: 'lucide:armchair',
    image: '/images/arabic-majlis.webp',
    processSteps: [
      {
        title: 'Majlis Consultation',
        description:
          'We discuss your room size, guest capacity, traditional vs modern style preference, and colour scheme to design the perfect majlis layout.',
      },
      {
        title: 'Fabric & Cushion Design',
        description:
          'Select from brocade, velvet, silk, and performance fabrics in traditional or contemporary colours. Choose cushion shapes, embroidery, and trim details.',
      },
      {
        title: 'Carpentry & Upholstery',
        description:
          'Our craftsmen build wooden platforms or frames, apply high-density foam, and upholster every cushion and backrest with precision stitching and detailing.',
      },
      {
        title: 'Delivery & Arrangement',
        description:
          'We deliver and arrange the complete majlis set in your home, position cushions and throws, and ensure everything is perfectly presented for your first gathering.',
      },
    ],
  },
  {
    slug: 'free-home-consultation',
    name: 'Free Home Consultation',
    shortDescription:
      'Complimentary in-home measurement, fabric sampling, and interior advice anywhere in our service area.',
    description:
      'Not sure what curtains or blinds suit your home? Our free consultation brings the showroom to you. We bring fabric samples, measure every window, discuss your lifestyle needs, and provide a detailed no-obligation quote. Available across Al Shamkha, Baniyas, Khalifa City, Yas Island, MBZ City, and all surrounding Abu Dhabi communities.',
    priceRange: { min: 0, max: 0 },
    emergency: false,
    icon: 'lucide:home',
    image: '/images/hero-homepage.webp',
    processSteps: [
      {
        title: 'Book Your Appointment',
        description:
          'Call or WhatsApp us to schedule a convenient time. We confirm your location and any specific products you are interested in exploring.',
      },
      {
        title: 'In-Home Visit',
        description:
          'Our consultant arrives with a full range of fabric samples, catalogues, and measuring tools. We assess your windows, lighting, and existing décor.',
      },
      {
        title: 'Recommendations & Quote',
        description:
          'We recommend fabrics, styles, and colours that complement your home, then provide a detailed written quote with no pressure or obligation.',
      },
      {
        title: 'Order & Schedule Installation',
        description:
          'When you are ready to proceed, we confirm your order, provide a production timeline, and schedule installation at your convenience.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((s) => s.slug === slug);
}

export function getServiceName(slug: string): string {
  return getServiceBySlug(slug)?.name ?? slug;
}

export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((s) => s.emergency);
}
