export const siteContent = {
  business: {
    name: "A Party Paradise - High Desert",
    primaryCity: "High Desert, CA",
    phoneDisplay: "(760) 265-8652",
    phoneHref: "tel:+17602658652",
    email: "Rent@apartyparadise.com",
    emailHref: "mailto:Rent@apartyparadise.com",
    websiteUrl: "https://www.apartyparadise.com",
    logoSrc: "/images/logo-hires.png",
    social: {
      instagram:
        "https://www.instagram.com/apartyparadise/profilecard/?igsh=MzRlODBiNWFlZA",
      tiktok:
        "https://www.tiktok.com/@apartyparadise.com?_t=8rBEnQXUjxC&_r=1",
      facebook:
        "https://www.facebook.com/profile.php?id=100045449422409&mibextid=ZbWKwL",
    },
  },
  serviceAreas: [
    "Victorville",
    "Hesperia",
    "Apple Valley",
    "Oak Hills",
    "Lucerne Valley",
    "Barstow",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Rentals", href: "/rentals" },
    { label: "Cleaning", href: "/cleaning" },
    { label: "FAQ", href: "/faq" },
    { label: "Service Area", href: "/service-area" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    kicker: "Family-Owned · High Desert",
    h1: "Bounce House & Party Rentals in Apple Valley and the High Desert",
    subhead:
      "Rent bounce house combos, water slides, obstacle courses, tables, chairs, and tents for birthdays, backyard parties, school events, and family gatherings across Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley, and Barstow.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Call Now",
    badges: [
      "Family-Owned",
      "Cleaned & Sanitized",
      "Delivery, Setup & Pickup",
    ],
    image: {
      src: "/images/bounce-combos.jpg",
      alt: "A Party Paradise bounce house combo rental in the High Desert",
    },
  },
  trustStrip: [
    {
      title: "Delivery, Setup & Pickup",
      body: "We bring it, set it up, and return for pickup after your event.",
      icon: "truck",
    },
    {
      title: "Cleaned & Sanitized",
      body: "Every rental cleaned with commercial vinyl cleaners between bookings.",
      icon: "spray",
    },
    {
      title: "Family-Owned",
      body: "Locally operated by a High Desert family.",
      icon: "heart",
    },
    {
      title: "Free Local Delivery",
      body: "Apple Valley, Hesperia & Victorville. First 10 miles free elsewhere.",
      icon: "pin",
    },
  ],
  rentals: {
    kicker: "Featured Rentals",
    h2: "Bounce Houses, Water Slides, Mechanical Bull, Games & Photo Booths",
    intro:
      "Browse our full inventory by category. Real photos, real dimensions, and starting prices.",
    groups: [
      {
        id: "featured-attractions",
        title: "Featured Attractions",
        blurb: "Big-impact attractions that anchor a party.",
        items: [
          {
            slug: "bounce-house-combos",
            title: "Bounce House Combos",
            body: "Browse 17 combo options — themed and standard, wet or dry.",
            categoryPath: "/rentals/bounce-house-combos",
            image: {
              src: "/images/bounce-combos.jpg",
              alt: "Bounce house combo unit rental from A Party Paradise",
              position: "center",
            },
          },
          {
            slug: "water-slides",
            title: "Water Slides",
            body: "View 11 water slide sizes and starting prices.",
            categoryPath: "/rentals/water-slides",
            image: {
              src: "/images/water-slides.jpg",
              alt: "Inflatable water slide rental for a High Desert backyard event",
              position: "center",
            },
          },
          {
            slug: "obstacle-courses",
            title: "Obstacle Courses",
            body: "See 12 obstacle course options for school and church events.",
            categoryPath: "/rentals/obstacle-courses",
            image: {
              src: "/images/obstacle-courses.jpg",
              alt: "Inflatable obstacle course rental setup",
              position: "center",
            },
          },
          {
            slug: "rock-climbing-wall",
            title: "Rock Climbing Wall",
            body: "Mobile rock climbing wall — staffing available.",
            categoryPath: "/rentals/rock-climbing-wall",
            image: {
              src: "/images/rock-climbing.jpg",
              alt: "Mobile rock climbing wall rental",
              position: "center top",
            },
          },
          {
            slug: "gellyball",
            title: "Gellyball",
            body: "Low-impact paintball alternative for kids and youth events.",
            categoryPath: "/rentals/gellyball",
            image: {
              src: "/images/gellyball.jpg",
              alt: "Gellyball bunker setup for a kids' party",
              position: "center",
            },
          },
          {
            slug: "mechanical-bull",
            title: "Mechanical Bull",
            body: "Marquee attraction for parties, school events, and corporate gatherings.",
            categoryPath: "/rentals/mechanical-bull",
            image: {
              src: "/images/yelp/mechanical-bull-3.png",
              alt: "Mechanical bull rental for parties and events",
              position: "center",
            },
          },
        ],
      },
      {
        id: "event-essentials",
        title: "Event Essentials",
        blurb: "The functional gear that keeps an event running smoothly.",
        items: [
          {
            slug: "tables-chairs",
            title: "Tables & Chairs",
            body: "Browse 8 table and chair options.",
            categoryPath: "/rentals/tables-chairs",
            image: {
              src: "/images/tables-chairs.jpg",
              alt: "Stacked tables and chairs ready for delivery",
              position: "center",
            },
          },
          {
            slug: "tents-canopies",
            title: "Tents & Canopies",
            body: "10×20, 20×20, and 20×40 sizes available.",
            categoryPath: "/rentals/tents-canopies",
            image: {
              src: "/images/tents.jpg",
              alt: "Outdoor tent canopy rental setup",
              position: "center",
            },
          },
          {
            slug: "stages",
            title: "Black Top Aluminum Stages",
            body: "See 4 stage sizes and starting prices.",
            categoryPath: "/rentals/stages",
            image: {
              src: "/images/stages.jpg",
              alt: "Black top aluminum stage rental",
              position: "center",
            },
          },
          {
            slug: "generators",
            title: "Generators",
            body: "Portable power for inflatables and event electronics.",
            categoryPath: "/rentals/generators-pa-speakers",
            image: {
              src: "/images/yelp/generators.jpg",
              alt: "Portable generator rental for events",
              position: "center",
            },
          },
          {
            slug: "pa-speakers",
            title: "PA Speakers",
            body: "600W Bluetooth speakers for announcements and music.",
            categoryPath: "/rentals/generators-pa-speakers",
            image: {
              src: "/images/yelp/pa-speakers.jpg",
              alt: "PA speaker rental for events",
              position: "center",
            },
          },
          {
            slug: "heaters",
            title: "Heaters",
            body: "Patio heaters for chilly High Desert evenings.",
            categoryPath: "/rentals/heaters-coolers",
            image: {
              src: "/images/yelp/heater.jpg",
              alt: "Heater rental for outdoor events",
              position: "center",
            },
          },
          {
            slug: "coolers",
            title: "Coolers",
            body: "Portacool evaporative coolers for desert heat.",
            categoryPath: "/rentals/heaters-coolers",
            image: {
              src: "/images/yelp/cooler-2.jpg",
              alt: "Cooler rental for outdoor events",
              position: "center",
            },
          },
        ],
      },
      {
        id: "specialty-seasonal",
        title: "Specialty & Seasonal",
        blurb: "Adds for themed, seasonal, and one-off events.",
        items: [
          {
            slug: "photo-booth",
            title: "Photo Booth",
            body: "360° booth and white LED enclosed booth options.",
            categoryPath: "/rentals/photo-booth",
            image: {
              src: "/images/photo-booth.png",
              alt: "Photo booth backdrop and setup",
              position: "center",
            },
          },
          {
            slug: "party-games",
            title: "Games & Interactive",
            body: "Browse 15 games — axe throwing, hoop mania, ring toss, and more.",
            categoryPath: "/rentals/games",
            image: {
              src: "/images/games.jpg",
              alt: "Party games available for rent",
              position: "center",
            },
          },
          {
            slug: "holiday-rentals",
            title: "Holiday Rentals",
            body: "Christmas combos, Santa bounce, and snow globe photo ops.",
            categoryPath: "/rentals/seasonal",
            image: {
              src: "/images/holidays.jpg",
              alt: "Holiday-themed bounce house and seasonal rentals",
              position: "center",
            },
          },
          {
            slug: "artificial-snow",
            title: "Artificial Snow",
            body: "Snow effect for winter parties and seasonal photo setups.",
            categoryPath: "/rentals/seasonal",
            image: {
              src: "/images/artificial-snow.jpg",
              alt: "Artificial snow effect for a winter event",
              position: "center",
            },
          },
          {
            slug: "seasonal-decor",
            title: "Seasonal Decor",
            body: "Themed decor pieces to round out a seasonal event.",
            categoryPath: "/rentals/seasonal",
            image: {
              src: "/images/holidays.jpg",
              alt: "Seasonal holiday decor available for rent",
              position: "center",
            },
          },
        ],
      },
    ],
    homeFeaturedSlugs: [
      "bounce-house-combos",
      "water-slides",
      "obstacle-courses",
      "rock-climbing-wall",
      "gellyball",
      "mechanical-bull",
    ],
    ctaText:
      "Not sure what you need? Send the event details and we'll help you figure out the right setup.",
    ctaButton: "Get a Free Quote",
  },
  cleaning: {
    kicker: "Our 3-Step Cleaning Protocol",
    h2: "Cleaned, Sanitized & Ready for Fun",
    intro:
      "Every rental goes through a full cleaning before it arrives at your event.",
    steps: [
      {
        num: 1,
        title: "Sweep",
        body: "Sweep dust, dirt, and debris from every surface.",
      },
      {
        num: 2,
        title: "Deep Clean",
        body:
          "Deep clean with commercial vinyl cleaner and sanitizer on touch-points.",
      },
      {
        num: 3,
        title: "Inspect",
        body:
          "Final inspection so rentals arrive clean, sanitized, and ready.",
      },
    ],
    closingNote:
      "All inflatables are 100% lead-free vinyl. Safety isn't optional — it's a requirement.",
  },
  gellyball: {
    kicker: "Featured Attraction",
    h2: "Add Gellyball to Your Party",
    body:
      "Gellyball is a low-impact, water-bead alternative to paintball. Bunkers and gear set up at your event for kids' parties, youth groups, and team gatherings.",
    bullets: [
      "Mandatory eye protection and a referee on the field",
      "Great for birthdays, school events, and team-building",
      "Gelly Ball waiver required before play",
    ],
    ctaText: "Get a Gellyball Quote",
    image: {
      src: "/images/gellyball.jpg",
      alt: "Gellyball bunker field set up for a party",
    },
  },
  promo: {
    kicker: "Current Deal",
    h2: "Rent one day, get the second day half off.",
    body:
      "Add a second rental day to your weekend party for half price. Ask about this when requesting your quote.",
    ctaText: "Get a Quote",
  },
  faq: {
    kicker: "Booking",
    h2: "FAQ & Policies",
    intro: "Quick answers to common booking questions.",
    groups: [
      {
        title: "Cleaning & Safety",
        items: [
          {
            q: "Are your rentals cleaned?",
            a: "Yes. Every unit is cleaned with commercial vinyl cleaners, disinfected, and sanitized between rentals. Anywhere a person can touch, we sanitize.",
          },
          {
            q: "Are the inflatables safe and lead-free?",
            a: "All units are made from 100% lead-free vinyl. Safety isn't optional for us — it's a requirement, especially around kids.",
          },
          {
            q: "Do waivers need to be signed?",
            a: "Yes. Inflatable and Gelly Ball waivers must be completed before set-up or your event. We send digital waiver links along with your booking confirmation.",
          },
        ],
      },
      {
        title: "Setup",
        items: [
          {
            q: "What surfaces can you set up on?",
            a: "We set up on grass, dirt, cement, concrete, asphalt, or indoors. Let us know your surface when reserving — a $20 fee applies for dirt or other potentially hazardous surfaces.",
          },
          {
            q: "Can I use water on any bounce house?",
            a: "Only on inflatables designed for water use. We have wet/dry combos when water play is part of the plan — let us know up front.",
          },
        ],
      },
      {
        title: "Booking & Delivery",
        items: [
          {
            q: "What areas do you serve?",
            a: "Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley, Barstow, and nearby High Desert communities.",
          },
          {
            q: "Are there delivery fees?",
            a: "Delivery is free to Apple Valley, Hesperia, and Victorville. The first 10 miles are complimentary, then $4 per mile beyond that.",
          },
        ],
      },
      {
        title: "Events",
        items: [
          {
            q: "What types of events do you serve?",
            a: "Birthday parties, church festivals, corporate events, family reunions, school events, community gatherings, and more — anywhere a rental can help bring a celebration together.",
          },
        ],
      },
    ],
    waiverNote: {
      title: "Waivers & Safety",
      body:
        "Inflatable and Gelly Ball waivers must be completed before set-up or your event. We send digital waiver links along with your booking confirmation.",
    },
  },
  serviceArea: {
    kicker: "Coverage",
    h2: "Serving the High Desert",
    body: "We deliver to customers across the High Desert.",
    freeArea: {
      title: "Core Free Delivery Area",
      badge: "Free Delivery",
      note: "No delivery fee within these cities.",
      cities: ["Apple Valley", "Hesperia", "Victorville"],
    },
    extendedArea: {
      title: "Extended High Desert Delivery",
      badge: "Mileage-Based",
      note: "First 10 miles complimentary, then $4 per mile.",
      cities: ["Oak Hills", "Lucerne Valley", "Barstow"],
    },
    deliveryDetails: [
      {
        title: "Free Local Delivery",
        body:
          "Free delivery within Apple Valley, Hesperia, and Victorville.",
      },
      {
        title: "Mileage Beyond",
        body:
          "Outside the core area, the first 10 miles are complimentary; $4 per mile beyond that.",
      },
      {
        title: "Setup Surfaces",
        body:
          "We set up on grass, dirt, cement, concrete, asphalt, or indoors.",
      },
      {
        title: "Surface Fee",
        body:
          "A $20 fee applies for dirt or other potentially hazardous surfaces.",
      },
    ],
    outsideAreaNote:
      "Outside the listed area? Contact us with your event city or zip code and we'll let you know if delivery is available.",
    ctaText: "Check Availability for My City",
  },
  about: {
    kicker: "About",
    h2: "Local Party Rentals for High Desert Events",
    paragraphs: [
      "A Party Paradise - High Desert is a family-owned party rental company serving Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley, Barstow, and nearby High Desert communities.",
      "We rent bounce house combos, water slides, obstacle courses, rock climbing walls, Gellyball setups, tables and chairs, tents, photo booths, generators, speakers, stages, and seasonal decor for birthdays, school events, church events, community gatherings, and backyard parties.",
      "Our team handles delivery, setup, and pickup, and every rental is cleaned and sanitized before use so customers can focus on the event instead of the equipment.",
    ],
  },
  contact: {
    kicker: "Get in Touch",
    h2: "Get a Free Party Rental Quote",
    intro:
      "Send your event details and we'll respond with availability and pricing. No pressure — just tell us what you're planning and what you need.",
    aboutBlurb:
      "A Party Paradise - High Desert is family-owned and locally operated. We handle delivery, setup, and pickup so your day is easier from start to finish.",
    submitLabel: "Send My Quote Request",
    phoneFallback: "Prefer to talk? Call us directly:",
    responseTimeNote: "",
    interestOptions: [
      "Bounce House Combo",
      "Water Slide",
      "Obstacle Course",
      "Rock Climbing Wall",
      "Gellyball",
      "Tables & Chairs",
      "Tent / Canopy",
      "Photo Booth",
      "Black Top Stage",
      "Heater",
      "Cooler",
      "Generator / PA Speaker",
      "Holiday / Artificial Snow",
      "Games",
      "Mechanical Bull",
      "Other / Not Sure Yet",
    ],
  },
  ctaBlocks: {
    home: {
      kicker: "Ready to Book?",
      h2: "Tell us about your event.",
      body:
        "We'll confirm availability, share pricing, and handle delivery, setup, and pickup.",
      ctaText: "Get a Free Quote",
    },
    rentals: {
      kicker: "Don't see what you need?",
      h2: "Tell us what you're planning.",
      body:
        "We carry more than what's listed here. Send your event details and we'll point you to the right setup.",
      ctaText: "Get a Free Quote",
    },
    cleaning: {
      kicker: "Ready to Book?",
      h2: "Clean, sanitized, ready for your event.",
      body: "Send your event details and we'll handle the rest.",
      ctaText: "Get a Free Quote",
    },
    faq: {
      kicker: "Still have questions?",
      h2: "We're happy to walk you through it.",
      body: "Call or send a quick quote request — we'll get back to you.",
      ctaText: "Get a Free Quote",
    },
    serviceArea: {
      kicker: "Ready to Book?",
      h2: "We'll bring the party to your city.",
      body:
        "Send your event date, city, and rental items and we'll confirm availability and pricing.",
      ctaText: "Get a Free Quote",
    },
  },
  footer: {
    blurb:
      "Family-owned party rentals serving Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley, and Barstow.",
    privacyLabel: "",
  },
  slugToInterest: {
    "bounce-house-combos": "Bounce House Combo",
    "water-slides": "Water Slide",
    "obstacle-courses": "Obstacle Course",
    "rock-climbing-wall": "Rock Climbing Wall",
    gellyball: "Gellyball",
    "tables-chairs": "Tables & Chairs",
    "tents-canopies": "Tent / Canopy",
    "photo-booth": "Photo Booth",
    stages: "Black Top Stage",
    generators: "Generator / PA Speaker",
    "pa-speakers": "Generator / PA Speaker",
    heaters: "Heater",
    coolers: "Cooler",
    "holiday-rentals": "Holiday / Artificial Snow",
    "artificial-snow": "Holiday / Artificial Snow",
    "seasonal-decor": "Holiday / Artificial Snow",
    "party-games": "Games",
    "mechanical-bull": "Mechanical Bull",
  } as Record<string, string>,
} as const;

export type RentalItem = (typeof siteContent.rentals.groups)[number]["items"][number];
