export type Product = {
  slug: string;
  name: string;
  dimensions?: string;
  startingPrice?: number;
  priceLabel: string;
  image: { src: string; alt: string };
  variants?: string[];
  description?: string;
  imageFit?: "cover" | "contain";
};

export type Category = {
  slug: string;
  title: string;
  kicker: string;
  intro: string;
  productCountLabel: string;
  products: Product[];
  imageFit?: "cover" | "contain";
  helperNote?: string;
  seoTitle: string;
  seoDescription: string;
  seoBlurb: string;
  relatedCategories: string[];
};

const inventoryCatalog: Category[] = [
  {
    slug: "bounce-house-combos",
    title: "Bounce House Combos",
    kicker: "Featured Attractions",
    intro:
      "Combo units with slides and basketball hoops, in themed and standard styles. Wet or dry options available on most.",
    productCountLabel: "17 combo options",
    seoTitle: "Bounce House Combos in Victorville, Apple Valley & Hesperia",
    seoDescription:
      "17 bounce house combo rentals from A Party Paradise - High Desert. Wet or dry options, themed and standard styles. Free delivery to Apple Valley, Hesperia & Victorville.",
    seoBlurb:
      "A Party Paradise - High Desert delivers bounce house combo rentals across Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley, and Barstow. Every combo is cleaned and sanitized before setup, with delivery, installation, and pickup included.",
    helperNote:
      "Not sure which combo fits your yard? Send your event date, city, and setup surface — we'll match the right unit.",
    imageFit: "cover",
    relatedCategories: ["water-slides", "obstacle-courses", "games"],
    products: [
      { slug: "tropical-jumper", name: "Tropical Jumper", dimensions: "15L × 15W × 15H", startingPrice: 150, priceLabel: "Starting at $150", image: { src: "/images/inventory/combo-tropical-jumper.jpg", alt: "Tropical Jumper bounce house combo" }, variants: ["Dry"] },
      { slug: "princess-castle", name: "Princess Castle Bounce House", dimensions: "13L × 13W", startingPrice: 150, priceLabel: "Starting at $150", image: { src: "/images/inventory/combo-princess-castle.jpeg", alt: "Princess Castle bounce house" }, variants: ["Dry"] },
      { slug: "freedom", name: "Freedom Bounce House", dimensions: "13L × 13W", startingPrice: 170, priceLabel: "Starting at $170", image: { src: "/images/inventory/combo-freedom.jpeg", alt: "Freedom bounce house" }, variants: ["Dry"] },
      { slug: "galaxy-voyager", name: "Galaxy Voyager Bounce House", dimensions: "13L × 13W", startingPrice: 180, priceLabel: "Starting at $180", image: { src: "/images/inventory/combo-galaxy-voyager.jpeg", alt: "Galaxy Voyager bounce house" }, variants: ["Dry"] },
      { slug: "sky-unicorn", name: "Sky Unicorn Bounce House", dimensions: "13L × 13W", startingPrice: 180, priceLabel: "Starting at $180", image: { src: "/images/inventory/combo-sky-unicorn.jpeg", alt: "Sky Unicorn bounce house" }, variants: ["Dry"] },
      { slug: "princess-combo", name: "Princess Combo", dimensions: "28L × 15W × 14H", startingPrice: 220, priceLabel: "Starting at $220", image: { src: "/images/inventory/combo-princess.jpeg", alt: "Princess Combo bounce house with slide" }, variants: ["Wet or Dry"] },
      { slug: "spider-man-combo", name: "Spider Man Combo", dimensions: "28L × 15W × 14H", startingPrice: 230, priceLabel: "Starting at $230", image: { src: "/images/inventory/combo-spider-man.jpg", alt: "Spider Man themed combo" }, variants: ["Wet or Dry"] },
      { slug: "ez-castle", name: "EZ Castle", dimensions: "22L × 13W × 14H", startingPrice: 245, priceLabel: "Starting at $245", image: { src: "/images/inventory/combo-ez-castle.jpg", alt: "EZ Castle combo" }, variants: ["Wet or Dry"] },
      { slug: "combo-jumper-2-lane", name: "Combo Jumper 2 Lane", dimensions: "29L × 15W × 15H", startingPrice: 255, priceLabel: "Starting at $255", image: { src: "/images/inventory/combo-jumper-2-lane.jpg", alt: "2-lane combo jumper" }, variants: ["Wet or Dry", "Dual Lane"] },
      { slug: "purple-combo", name: "Purple Combo", dimensions: "20L × 18W × 15H", startingPrice: 260, priceLabel: "Starting at $260", image: { src: "/images/inventory/combo-purple.jpg", alt: "Purple combo bounce house" }, variants: ["Wet or Dry"] },
      { slug: "5-1-colorful-castle", name: "5-1 Colorful Castle", dimensions: "20L × 18W × 15H", startingPrice: 265, priceLabel: "Starting at $265", image: { src: "/images/inventory/combo-5-1-colorful-castle.jpg", alt: "5-in-1 Colorful Castle combo" }, variants: ["Wet or Dry"] },
      { slug: "unicorn-combo", name: "Unicorn Combo", dimensions: "27L × 17W × 14H", startingPrice: 275, priceLabel: "Starting at $275", image: { src: "/images/inventory/combo-unicorn.jpg", alt: "Unicorn themed combo" }, variants: ["Wet or Dry"] },
      { slug: "lego-combo", name: "Lego Combo", dimensions: "30L × 16W × 16H", startingPrice: 280, priceLabel: "Starting at $280", image: { src: "/images/inventory/combo-lego.jpg", alt: "Lego themed combo" }, variants: ["Wet or Dry"] },
      { slug: "red-biohazard", name: "Red Biohazard Combo", dimensions: "27L × 11W × 14H", startingPrice: 285, priceLabel: "Starting at $285", image: { src: "/images/inventory/combo-red-biohazard.jpg", alt: "Red Biohazard combo" }, variants: ["Wet or Dry"] },
      { slug: "vibrant-tropical", name: "Giant Vibrant Tropical Combo", dimensions: "27L × 16W × 14H", startingPrice: 290, priceLabel: "Starting at $290", image: { src: "/images/inventory/combo-vibrant-tropical.jpg", alt: "Vibrant Tropical combo" }, variants: ["Wet or Dry"] },
      { slug: "3d-pirate", name: "3D Pirate Combo", dimensions: "35L × 17W × 16H", startingPrice: 300, priceLabel: "Starting at $300", image: { src: "/images/inventory/combo-3d-pirate.jpg", alt: "3D Pirate combo" }, variants: ["Wet or Dry", "Dual Lane"] },
      { slug: "day-of-the-dead", name: "Day of the Dead Combo", dimensions: "30L × 16W × 16H", startingPrice: 300, priceLabel: "Starting at $300", image: { src: "/images/inventory/combo-day-of-dead.jpeg", alt: "Day of the Dead themed combo" }, variants: ["Wet or Dry"] },
    ],
  },
  {
    slug: "water-slides",
    title: "Water Slides",
    kicker: "Featured Attractions",
    intro:
      "Full-size water slides for summer parties and High Desert heat. Impact mats included; cleaned and sanitized between rentals.",
    productCountLabel: "11 water slide options",
    seoTitle: "Water Slide Rentals in Victorville, Apple Valley & Hesperia",
    seoDescription:
      "11 water slide rentals from A Party Paradise - High Desert. 14ft to 22ft slides for backyard parties and summer events. Free delivery in core High Desert cities.",
    seoBlurb:
      "We deliver water slide rentals across Victorville, Hesperia, Apple Valley, and the surrounding High Desert. Slides include impact mats and are cleaned and sanitized between rentals.",
    helperNote:
      "Ask about setup space, water access, and age range when requesting a quote.",
    imageFit: "cover",
    relatedCategories: ["bounce-house-combos", "obstacle-courses", "tents-canopies"],
    products: [
      { slug: "14-blue-crush", name: "14′ Blue Crush", dimensions: "27L × 11W × 14H", startingPrice: 230, priceLabel: "Starting at $230", image: { src: "/images/inventory/water-slide-14-blue-crush.jpg", alt: "14ft Blue Crush water slide rental" } },
      { slug: "14-red-elite", name: "14′ Red Elite", dimensions: "27L × 11W × 14H", startingPrice: 230, priceLabel: "Starting at $230", image: { src: "/images/inventory/water-slide-14-red-elite.jpg", alt: "14ft Red Elite water slide rental" } },
      { slug: "15-light-gray-marble", name: "15′ Light Gray Marble", dimensions: "30L × 15W × 15H", startingPrice: 250, priceLabel: "Starting at $250", image: { src: "/images/inventory/water-slide-15-light-gray-marble.jpg", alt: "15ft Light Gray Marble water slide rental" } },
      { slug: "15-dark-blue-marble", name: "15′ Dark Blue Marble", dimensions: "30L × 15W × 15H", startingPrice: 250, priceLabel: "Starting at $250", image: { src: "/images/inventory/water-slide-15-dark-blue-marble.jpg", alt: "15ft Dark Blue Marble water slide rental" } },
      { slug: "15-cascade-crush", name: "15′ Cascade Crush", dimensions: "25L × 9W × 15H", startingPrice: 260, priceLabel: "Starting at $260", image: { src: "/images/inventory/water-slide-15-cascade-crush.jpg", alt: "15ft Cascade Crush water slide rental" } },
      { slug: "15-tropical-oasis", name: "15′ Tropical Oasis", dimensions: "30L × 13W × 15H", startingPrice: 260, priceLabel: "Starting at $260", image: { src: "/images/inventory/water-slide-15-tropical-oasis.jpg", alt: "15ft Tropical Oasis water slide rental" } },
      { slug: "15-red-hot-tropical", name: "15′ Red Hot Tropical", dimensions: "30L × 12W × 15H", startingPrice: 260, priceLabel: "Starting at $260", image: { src: "/images/inventory/water-slide-15-red-hot-tropical.jpg", alt: "15ft Red Hot Tropical water slide rental" } },
      { slug: "18-laguna-waves", name: "18′ Laguna Waves Single Lane", dimensions: "32L × 11W × 18H", startingPrice: 310, priceLabel: "Starting at $310", image: { src: "/images/inventory/water-slide-18-laguna-waves.jpg", alt: "18ft Laguna Waves water slide rental" } },
      { slug: "18-giant-lava", name: "18′ Giant Lava 2 Lane Curves", dimensions: "25L × 17W × 18H", startingPrice: 340, priceLabel: "Starting at $340", image: { src: "/images/inventory/water-slide-18-giant-lava.jpeg", alt: "18ft Giant Lava water slide rental" }, variants: ["Dual Lane"] },
      { slug: "22-volcano", name: "22′ Volcano", dimensions: "40L × 21W × 22H", startingPrice: 445, priceLabel: "Starting at $445", image: { src: "/images/inventory/water-slide-22-volcano.jpg", alt: "22ft Volcano water slide rental" } },
      { slug: "22-blue-marble-orange", name: "22′ Giant Blue Marble & Orange", dimensions: "40L × 17W × 22H", startingPrice: 445, priceLabel: "Starting at $445", image: { src: "/images/inventory/water-slide-22-blue-marble-orange.jpg", alt: "22ft Giant Blue Marble & Orange water slide rental" } },
    ],
  },
  {
    slug: "obstacle-courses",
    title: "Obstacle Courses",
    kicker: "Featured Attractions",
    intro:
      "Inflatable obstacle courses for school events, church gatherings, and larger backyard parties. Wet or dry options on most.",
    productCountLabel: "12 obstacle course options",
    seoTitle: "Inflatable Obstacle Course Rentals — Victorville & High Desert",
    seoDescription:
      "12 inflatable obstacle course rentals for school events, church gatherings, and large backyard parties in the High Desert. Wet or dry options.",
    seoBlurb:
      "A Party Paradise - High Desert rents inflatable obstacle courses for events across Victorville, Hesperia, Apple Valley, and surrounding cities. Wet or dry options available on most courses.",
    helperNote:
      "Tell us your event size and age range — courses range from toddler-friendly to large multi-section.",
    imageFit: "cover",
    relatedCategories: ["bounce-house-combos", "water-slides", "rock-climbing-wall"],
    products: [
      { slug: "mickey-toddler", name: "Mickey & Friends Toddler Obstacle", dimensions: "24L × 24W × 15H", startingPrice: 260, priceLabel: "Starting at $260", image: { src: "/images/inventory/obstacle-mickey-toddler.jpg", alt: "Mickey toddler obstacle course rental" }, variants: ["Dry"] },
      { slug: "180-u", name: "180 U Obstacle Course", dimensions: "28L × 12W × 16H", startingPrice: 290, priceLabel: "Starting at $290", image: { src: "/images/inventory/obstacle-180-u.jpg", alt: "180 U obstacle course rental" } },
      { slug: "38ft-golden-road", name: "38ft Golden Road", startingPrice: 335, priceLabel: "Starting at $335", image: { src: "/images/inventory/obstacle-38ft-golden-road.jpg", alt: "38ft Golden Road obstacle course rental" } },
      { slug: "45-bounce-house-obstacle", name: "45 Bounce House Obstacle", dimensions: "48L × 12W × 16H", startingPrice: 350, priceLabel: "Starting at $350", image: { src: "/images/inventory/obstacle-45-bounce-house.jpg", alt: "45ft bounce house obstacle course rental" } },
      { slug: "45-h2obstacle", name: "45′ H2Obstacle Course", dimensions: "45L × 11W × 15H", startingPrice: 385, priceLabel: "Starting at $385", image: { src: "/images/inventory/obstacle-45ft-h2obstacle.jpg", alt: "45ft H2Obstacle wet/dry course rental" }, variants: ["Wet or Dry"] },
      { slug: "danger-zone", name: "Danger Zone", dimensions: "48L × 10.5W × 14H", startingPrice: 400, priceLabel: "Starting at $400", image: { src: "/images/inventory/obstacle-danger-zone.jpg", alt: "Danger Zone obstacle course rental" }, variants: ["Wet or Dry"] },
      { slug: "unicorn", name: "Unicorn Obstacle Course", dimensions: "55L × 17W × 14H", startingPrice: 430, priceLabel: "Starting at $430", image: { src: "/images/inventory/obstacle-unicorn.jpg", alt: "Unicorn obstacle course rental" }, variants: ["Wet or Dry"] },
      { slug: "lego", name: "Lego Obstacle Course", dimensions: "53L × 11W × 16H", startingPrice: 455, priceLabel: "Starting at $455", image: { src: "/images/inventory/obstacle-lego.jpg", alt: "Lego obstacle course rental" }, variants: ["Wet or Dry"] },
      { slug: "pirate", name: "Pirate Obstacle Course", dimensions: "55L × 17W × 16H", startingPrice: 460, priceLabel: "Starting at $460", image: { src: "/images/inventory/obstacle-pirate.jpg", alt: "Pirate obstacle course rental" }, variants: ["Wet or Dry"] },
      { slug: "day-of-the-dead", name: "Day of the Dead Obstacle", dimensions: "53L × 11W × 16H", startingPrice: 600, priceLabel: "Starting at $600", image: { src: "/images/inventory/obstacle-day-of-dead.jpeg", alt: "Day of the Dead obstacle course rental" }, variants: ["Wet or Dry"] },
      { slug: "golden", name: "Golden Obstacle Course", dimensions: "69L × 13W × 18H", startingPrice: 620, priceLabel: "Starting at $620", image: { src: "/images/inventory/obstacle-golden.jpg", alt: "Golden obstacle course rental" }, variants: ["Wet or Dry"] },
      { slug: "hazardous", name: "Hazardous Obstacle", dimensions: "73L × 13W × 18H", startingPrice: 655, priceLabel: "Starting at $655", image: { src: "/images/inventory/obstacle-hazardous.jpg", alt: "Hazardous obstacle course rental" }, variants: ["Wet or Dry"] },
    ],
  },
  {
    slug: "games",
    title: "Games & Interactive",
    kicker: "Specialty",
    intro:
      "Interactive party games for backyard birthdays, school events, and team building. From classic ring toss to inflatable axe throwing.",
    productCountLabel: "15 game options",
    seoTitle: "Inflatable Games & Interactive Rentals — Victorville & High Desert",
    seoDescription:
      "15 inflatable games and interactive rentals from A Party Paradise - High Desert. Axe throwing, hoop mania, ring toss, and more for parties and corporate events.",
    seoBlurb:
      "Our games and interactive rentals deliver to Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley, and Barstow. Cleaned and sanitized between events.",
    helperNote:
      "Ask about age range, supervision, and event type — we'll suggest the right mix.",
    imageFit: "cover",
    relatedCategories: ["mechanical-bull", "gellyball", "rock-climbing-wall"],
    products: [
      { slug: "skee-ball", name: "Skee Ball", dimensions: "13L × 11W × 11H", startingPrice: 160, priceLabel: "Starting at $160", image: { src: "/images/inventory/game-skee-ball.jpg", alt: "Inflatable Skee Ball game rental" } },
      { slug: "axe-throwing", name: "Axe Throwing", dimensions: "10L × 9W × 8H", startingPrice: 160, priceLabel: "Starting at $160", image: { src: "/images/inventory/game-axe-throwing.jpg", alt: "Inflatable axe throwing game rental" } },
      { slug: "homerun-derby", name: "Homerun Derby", dimensions: "11L × 12W × 11H", startingPrice: 180, priceLabel: "Starting at $180", image: { src: "/images/inventory/game-homerun-derby.jpg", alt: "Homerun Derby inflatable game rental" } },
      { slug: "frisbee-fun", name: "Frisbee Fun", dimensions: "14L × 9W × 12H", startingPrice: 190, priceLabel: "Starting at $190", image: { src: "/images/inventory/game-frisbee-fun.jpeg", alt: "Frisbee Fun inflatable game rental" } },
      { slug: "giant-bowling", name: "Giant Bowling Game", dimensions: "24L × 12W × 12H", startingPrice: 190, priceLabel: "Starting at $190", image: { src: "/images/inventory/game-giant-bowling.jpg", alt: "Giant Bowling inflatable game rental" } },
      { slug: "ring-toss", name: "Ring Toss", dimensions: "15L × 12W × 8H", startingPrice: 190, priceLabel: "Starting at $190", image: { src: "/images/inventory/game-ring-toss.jpg", alt: "Ring Toss inflatable game rental" } },
      { slug: "axe-throw", name: "Axe Throw", dimensions: "12L × 11W × 11H", startingPrice: 200, priceLabel: "Starting at $200", image: { src: "/images/inventory/game-axe-throw.jpg", alt: "Axe Throw inflatable game rental" } },
      { slug: "soccer-darts", name: "Soccer Darts (Black & Red)", dimensions: "3L × 11W × 11H", startingPrice: 200, priceLabel: "Starting at $200", image: { src: "/images/inventory/game-soccer-darts.jpg", alt: "Soccer Darts inflatable game rental" } },
      { slug: "hoop-mania", name: "Hoop Mania", dimensions: "13L × 6.6W × 15H", startingPrice: 200, priceLabel: "Starting at $200", image: { src: "/images/inventory/game-hoop-mania.jpg", alt: "Hoop Mania basketball game rental" } },
      { slug: "sports-zone", name: "Sports Zone", dimensions: "20L × 7W × 11H", startingPrice: 220, priceLabel: "Starting at $220", image: { src: "/images/inventory/game-sports-zone.jpg", alt: "Sports Zone inflatable rental" } },
      { slug: "joust-tug-of-war", name: "Joust & Tug of War Combo", dimensions: "23L × 23W × 5H", startingPrice: 250, priceLabel: "Starting at $250", image: { src: "/images/inventory/game-joust-tug-of-war.jpg", alt: "Joust and Tug of War combo game rental" } },
      { slug: "triple-threat-sports", name: "Triple Threat Sports Game", dimensions: "30L × 10W × 14H", startingPrice: 280, priceLabel: "Starting at $280", image: { src: "/images/inventory/game-triple-threat-sports.jpg", alt: "Triple Threat Sports game rental" } },
      { slug: "4-in-1-game", name: "4 in 1 Game", startingPrice: 280, priceLabel: "Starting at $280", image: { src: "/images/inventory/game-4-in-1.jpg", alt: "4 in 1 inflatable game rental" } },
      { slug: "wrecking-ball", name: "Wrecking Ball", dimensions: "25L × 15W × 16H", startingPrice: 300, priceLabel: "Starting at $300", image: { src: "/images/inventory/game-wrecking-ball.jpg", alt: "Wrecking Ball inflatable game rental" } },
      { slug: "toxic-melt-down", name: "Toxic Melt Down", startingPrice: 420, priceLabel: "Starting at $420", image: { src: "/images/inventory/game-toxic-melt-down.jpg", alt: "Toxic Melt Down inflatable game rental" } },
    ],
  },
  {
    slug: "mechanical-bull",
    title: "Mechanical Bull",
    kicker: "Featured Attractions",
    intro:
      "Mechanical bull rental for parties, school events, corporate events, and community gatherings.",
    productCountLabel: "1 mechanical bull rental",
    seoTitle: "Mechanical Bull Rental — Victorville & High Desert",
    seoDescription:
      "Mechanical bull rental from A Party Paradise - High Desert for parties, school events, corporate events, and community gatherings. Availability may vary by date and setup location.",
    seoBlurb:
      "Mechanical bull rentals delivered across Victorville, Hesperia, Apple Valley, and the High Desert. A standout marquee attraction for milestone parties, fundraisers, school events, and corporate gatherings. Availability may vary by date and setup location.",
    helperNote:
      "Tell us your event date, setup space, and approximate number of riders when requesting a quote.",
    imageFit: "cover",
    relatedCategories: ["gellyball", "rock-climbing-wall", "games"],
    products: [
      {
        slug: "mechanical-bull",
        name: "Mechanical Bull",
        priceLabel: "Contact for availability",
        image: {
          src: "/images/yelp/mechanical-bull-3.png",
          alt: "Mechanical bull rental for parties and events",
        },
        description:
          "Mechanical bull rental for parties, school events, corporate events, and community gatherings. Availability may vary by date and setup location.",
      },
    ],
  },
  {
    slug: "stages",
    title: "Black Top Aluminum Stages",
    kicker: "Event Essentials",
    intro:
      "Modular black aluminum stages — sturdy, low-profile platforms for performances, ceremonies, and announcements.",
    productCountLabel: "4 stage sizes",
    seoTitle: "Stage Rentals in Victorville & the High Desert",
    seoDescription:
      "Black top aluminum stage rentals from A Party Paradise - High Desert. 8x12, 8x16, 8x20, and 12x12 sizes for performances, ceremonies, and announcements.",
    seoBlurb:
      "We rent black top aluminum stages to event hosts across Victorville, Hesperia, Apple Valley, and surrounding High Desert communities.",
    helperNote: "Tell us your performance type and desired stage size.",
    imageFit: "contain",
    relatedCategories: ["generators-pa-speakers", "tents-canopies", "tables-chairs"],
    products: [
      { slug: "8x12-black", name: "8x12 ft Black Stage", dimensions: "8 × 12 ft", startingPrice: 450, priceLabel: "Starting at $450", image: { src: "/images/inventory/stage-8x12-black.jpeg", alt: "8x12 ft black aluminum stage rental" } },
      { slug: "8x16-black", name: "8x16 ft Black Stage", dimensions: "8 × 16 ft", startingPrice: 600, priceLabel: "Starting at $600", image: { src: "/images/inventory/stage-8x16-black.jpeg", alt: "8x16 ft black aluminum stage rental" } },
      { slug: "12x12-black", name: "12x12 ft Black Stage", dimensions: "12 × 12 ft", startingPrice: 675, priceLabel: "Starting at $675", image: { src: "/images/inventory/stage-12x12-black.jpeg", alt: "12x12 ft black aluminum stage rental" } },
      { slug: "8x20-black", name: "8x20 ft Black Stage", dimensions: "8 × 20 ft", startingPrice: 750, priceLabel: "Starting at $750", image: { src: "/images/inventory/stage-8x20-black.jpeg", alt: "8x20 ft black aluminum stage rental" } },
    ],
  },
  {
    slug: "tables-chairs",
    title: "Tables & Chairs",
    kicker: "Event Essentials",
    intro:
      "Tables and chairs for food service, sign-ins, gifts, and seating — multiple sizes and styles.",
    productCountLabel: "8 table & chair options",
    seoTitle: "Table & Chair Rentals in the High Desert",
    seoDescription:
      "Plastic and resin table and chair rentals for events in Victorville, Hesperia, and Apple Valley. Multiple table sizes and chair styles available.",
    seoBlurb:
      "A Party Paradise - High Desert delivers tables and chairs to events across Victorville, Hesperia, Apple Valley, Oak Hills, Lucerne Valley, and Barstow.",
    helperNote: "Tell us your guest count and layout needs.",
    imageFit: "contain",
    relatedCategories: ["tents-canopies", "stages", "heaters-coolers"],
    products: [
      { slug: "white-plastic-chair", name: "White Plastic Chair", startingPrice: 2.25, priceLabel: "Starting at $2.25", image: { src: "/images/inventory/chair-white-plastic.jpeg", alt: "White plastic stacking chair rental" } },
      { slug: "white-resin-chair", name: "White Resin Folding Chair", startingPrice: 4, priceLabel: "Starting at $4", image: { src: "/images/inventory/chair-white-resin.jpeg", alt: "White resin folding chair rental" } },
      { slug: "black-resin-chair", name: "Black Resin Folding Chair", startingPrice: 4, priceLabel: "Starting at $4", image: { src: "/images/inventory/chair-black-resin.jpeg", alt: "Black resin folding chair rental" } },
      { slug: "6ft-rectangular-table", name: "6′ Plastic Rectangular Table", dimensions: "6 ft", startingPrice: 11, priceLabel: "Starting at $11", image: { src: "/images/inventory/table-6ft-rectangular.jpeg", alt: "6 foot rectangular plastic table rental" } },
      { slug: "cocktail-table", name: "Cocktail Tables", startingPrice: 12, priceLabel: "Starting at $12", image: { src: "/images/inventory/table-cocktail.jpeg", alt: "Cocktail-height table rental" } },
      { slug: "round-60in-table", name: "Round Table 60in (5ft)", dimensions: "60 in / 5 ft", startingPrice: 12, priceLabel: "Starting at $12", image: { src: "/images/inventory/table-round-60in.jpeg", alt: "60-inch round table rental" } },
      { slug: "8ft-rectangular-table", name: "8′ Plastic Rectangular Table", dimensions: "8 ft", startingPrice: 15, priceLabel: "Starting at $15", image: { src: "/images/inventory/table-8ft-rectangular.jpeg", alt: "8 foot rectangular plastic table rental" } },
      { slug: "round-72in-table", name: "Round Table 72in", dimensions: "72 in", startingPrice: 19, priceLabel: "Starting at $19", image: { src: "/images/inventory/table-round-72in.jpeg", alt: "72-inch round table rental" } },
    ],
  },
  {
    slug: "tents-canopies",
    title: "Tents & Canopies",
    kicker: "Event Essentials",
    intro:
      "Tents for shade, seating areas, and outdoor event setups. Three sizes available.",
    productCountLabel: "3 tent sizes",
    seoTitle: "Tent & Canopy Rentals in Victorville & the High Desert",
    seoDescription:
      "10x20, 20x20, and 20x40 tent rentals from A Party Paradise - High Desert. Shade and shelter for outdoor events across Victorville, Hesperia, and Apple Valley.",
    seoBlurb:
      "We rent tents and canopies for outdoor events across the High Desert. Sizes from 10x20 to 20x40 to fit your guest count and event space.",
    helperNote: "Confirm your setup space and surface type when requesting a quote.",
    imageFit: "cover",
    relatedCategories: ["tables-chairs", "stages", "heaters-coolers"],
    products: [
      { slug: "tent-10x20", name: "Tent 10×20", dimensions: "10 × 20 ft", startingPrice: 200, priceLabel: "Starting at $200", image: { src: "/images/inventory/tent-10x20.jpeg", alt: "10x20 event tent rental" } },
      { slug: "tent-20x20", name: "Tent 20×20", dimensions: "20 × 20 ft", startingPrice: 320, priceLabel: "Starting at $320", image: { src: "/images/inventory/tent-20x20.jpeg", alt: "20x20 event tent rental" } },
      { slug: "tent-20x40", name: "Tent 20×40", dimensions: "20 × 40 ft", startingPrice: 680, priceLabel: "Starting at $680", image: { src: "/images/inventory/tent-20x40.jpeg", alt: "20x40 event tent rental" } },
    ],
  },
  {
    slug: "photo-booth",
    title: "Photo Booth",
    kicker: "Specialty",
    intro:
      "Photo booth options for birthdays, quinceañeras, weddings, corporate events, and private parties.",
    productCountLabel: "2 booth options",
    seoTitle: "Photo Booth Rentals — Victorville, Apple Valley & High Desert",
    seoDescription:
      "360° and white LED photo booth rentals from A Party Paradise - High Desert for birthdays, quinceañeras, weddings, and corporate events.",
    seoBlurb:
      "Photo booth rentals delivered across Victorville, Hesperia, Apple Valley, and the High Desert. Choose between a 360° booth and a white LED enclosed booth.",
    helperNote: "Booth choice depends on event style and guest count — ask us for a recommendation.",
    imageFit: "cover",
    relatedCategories: ["seasonal", "games", "bounce-house-combos"],
    products: [
      { slug: "white-led-booth", name: "Photo Booth — White LED", startingPrice: 360, priceLabel: "Starting at $360", image: { src: "/images/inventory/photo-booth-white-led.jpg", alt: "White LED photo booth rental" } },
      { slug: "360-booth", name: "360° Photo Booth", startingPrice: 550, priceLabel: "Starting at $550", image: { src: "/images/inventory/photo-booth-360.jpg", alt: "360-degree photo booth rental" } },
    ],
  },
  {
    slug: "seasonal",
    title: "Seasonal & Holiday",
    kicker: "Specialty",
    intro:
      "Christmas combos, Santa bounce houses, snow globe photo ops, and artificial snow for seasonal events.",
    productCountLabel: "5 seasonal options",
    seoTitle: "Holiday Bounce House & Seasonal Rentals — High Desert",
    seoDescription:
      "Christmas combos, Santa bounce houses, snow globe photo ops, and artificial snow rentals in Victorville, Hesperia, Apple Valley, and the High Desert.",
    seoBlurb:
      "Holiday rentals book quickly during the season. We deliver across Victorville, Hesperia, Apple Valley, and surrounding High Desert communities.",
    helperNote: "Holiday rentals book quickly — contact us early for December dates.",
    imageFit: "cover",
    relatedCategories: ["bounce-house-combos", "photo-booth", "games"],
    products: [
      { slug: "santa-bounce", name: "Santa Bounce House", dimensions: "15L × 15W × 14H", startingPrice: 310, priceLabel: "Starting at $310", image: { src: "/images/inventory/holiday-santa-bounce.jpg", alt: "Santa-themed bounce house rental" } },
      { slug: "snow-globe-photo-op", name: "Snow Globe Photo Op", dimensions: "21L × 12W × 10H", startingPrice: 340, priceLabel: "Starting at $340", image: { src: "/images/inventory/holiday-snow-globe.jpg", alt: "Snow globe photo op inflatable rental" } },
      { slug: "artificial-snow", name: "Artificial Snow", startingPrice: 360, priceLabel: "Starting at $360", image: { src: "/images/inventory/holiday-artificial-snow.jpg", alt: "Artificial snow effect rental for events" } },
      { slug: "christmas-combo", name: "Christmas Bounce House Combo", dimensions: "22L × 13W × 17H", startingPrice: 360, priceLabel: "Starting at $360", image: { src: "/images/inventory/holiday-christmas-combo.jpg", alt: "Christmas-themed bounce house combo rental" } },
      { slug: "gingerbread-combo", name: "Gingerbread Combo", dimensions: "22L × 13W × 18H", startingPrice: 360, priceLabel: "Starting at $360", image: { src: "/images/inventory/holiday-gingerbread-combo.jpg", alt: "Gingerbread-themed combo rental" } },
    ],
  },
  {
    slug: "generators-pa-speakers",
    title: "Generators & PA Speakers",
    kicker: "Event Essentials",
    intro:
      "Portable power for inflatables and event electronics, plus speakers for announcements and music.",
    productCountLabel: "4 power & sound options",
    seoTitle: "Generator & PA Speaker Rentals — High Desert",
    seoDescription:
      "Portable generator and Bluetooth PA speaker rentals from A Party Paradise - High Desert. Power and sound for events in Victorville, Hesperia, and Apple Valley.",
    seoBlurb:
      "Generator and PA speaker rentals for events across Victorville, Hesperia, Apple Valley, and the High Desert. Tell us how many inflatables you'll run plus any sound needs.",
    helperNote: "Tell us how many inflatables you'll run, plus any sound needs.",
    imageFit: "contain",
    relatedCategories: ["stages", "photo-booth", "tents-canopies"],
    products: [
      { slug: "pa-speakers-600w", name: "600W Bluetooth PA Speakers (Pair)", startingPrice: 85, priceLabel: "Starting at $85", image: { src: "/images/inventory/pa-speakers-600w-bluetooth.jpg", alt: "600W Bluetooth PA speaker rental" } },
      { slug: "generator-standard", name: "Generator (Full Tank)", startingPrice: 160, priceLabel: "Starting at $160", image: { src: "/images/inventory/generator-with-tank.jpeg", alt: "Portable generator rental with full tank" } },
      { slug: "generator-4000w", name: "4000W Generator (Full Tank)", startingPrice: 180, priceLabel: "Starting at $180", image: { src: "/images/inventory/generator-4000w.png", alt: "4000W portable generator rental" } },
      { slug: "generator-large", name: "Generator — Large (Full Tank)", startingPrice: 220, priceLabel: "Starting at $220", image: { src: "/images/inventory/generator-with-tank-large.jpeg", alt: "Large portable generator rental with full tank" } },
    ],
  },
  {
    slug: "heaters-coolers",
    title: "Heaters & Coolers",
    kicker: "Event Essentials",
    intro:
      "Heaters for chilly High Desert evenings and coolers for outdoor events in summer heat.",
    productCountLabel: "2 climate options",
    seoTitle: "Heater & Cooler Rentals for Outdoor Events — High Desert",
    seoDescription:
      "Patio heater and Portacool evaporative cooler rentals for outdoor events in Victorville, Hesperia, Apple Valley, and the High Desert.",
    seoBlurb:
      "Heaters and coolers for outdoor events across the High Desert. Tell us your event date and outdoor space — quantity depends on guest count.",
    helperNote: "Confirm your event date and outdoor space — quantity depends on guest count.",
    imageFit: "contain",
    relatedCategories: ["tents-canopies", "generators-pa-speakers", "tables-chairs"],
    products: [
      { slug: "patio-heater", name: "Patio Heater", startingPrice: 90, priceLabel: "Starting at $90", image: { src: "/images/inventory/heater-patio.jpg", alt: "Patio heater rental for outdoor events" } },
      { slug: "portacool-cooler", name: "Portacool Evaporative Cooler", startingPrice: 140, priceLabel: "Starting at $140", image: { src: "/images/inventory/cooler-portacool.jpg", alt: "Portacool evaporative cooler rental" } },
    ],
  },
  {
    slug: "rock-climbing-wall",
    title: "Rock Climbing Wall",
    kicker: "Featured Attractions",
    intro:
      "Mobile rock climbing wall for older kids and community events. Trained staffing available at $40/hour per worker.",
    productCountLabel: "1 climbing wall option",
    seoTitle: "Mobile Rock Climbing Wall Rental — Victorville & High Desert",
    seoDescription:
      "Mobile inflatable rock climbing wall rental from A Party Paradise - High Desert. Trained staffing available at $40/hour per worker.",
    seoBlurb:
      "Our mobile rock climbing wall delivers to community events, school days, and corporate gatherings across the High Desert.",
    helperNote: "Staffed at $40/hour per worker. Tell us your event hours when requesting a quote.",
    imageFit: "cover",
    relatedCategories: ["mechanical-bull", "gellyball", "games"],
    products: [
      { slug: "20x20-wall", name: "Rock Wall Climbing", dimensions: "20L × 20W × 16H", startingPrice: 360, priceLabel: "Starting at $360", image: { src: "/images/inventory/rock-climbing-wall.jpeg", alt: "Mobile rock climbing wall rental" }, description: "Inflatable rock climbing wall for climbers of all skill levels. Staff operation available at $40/hour per worker." },
    ],
  },
  {
    slug: "gellyball",
    title: "Gellyball",
    kicker: "Featured Attractions",
    intro:
      "Low-impact, water-bead alternative to paintball. Bunkers and gear for kids' parties, youth groups, and team gatherings.",
    productCountLabel: "1 Gellyball setup",
    seoTitle: "Gellyball Rental — Low-Impact Paintball Alternative for Kids",
    seoDescription:
      "Gellyball setup rental from A Party Paradise - High Desert. Water-bead alternative to paintball — bunkers, gear, and waiver included.",
    seoBlurb:
      "Gellyball delivered to backyard parties, youth groups, and team events across Victorville, Hesperia, Apple Valley, and the High Desert.",
    helperNote: "Players need eye protection (provided). Waiver required before play. Tell us how many participants.",
    imageFit: "cover",
    relatedCategories: ["mechanical-bull", "rock-climbing-wall", "games"],
    products: [
      { slug: "7v7-setup", name: "Gellyball — 7 vs 7", startingPrice: 460, priceLabel: "Starting at $460", image: { src: "/images/inventory/gellyball-7v7.jpg", alt: "Gellyball 7v7 setup with inflatable bunkers" }, description: "7 vs 7 player setup. Mandatory eye protection and a referee on the field. Gelly Ball waiver required before play." },
    ],
  },
];

export default inventoryCatalog;

export const categorySlugs = inventoryCatalog.map((c) => c.slug);

export function getCategory(slug: string): Category | undefined {
  return inventoryCatalog.find((c) => c.slug === slug);
}

export function getProductByCategoryAndSlug(
  categorySlug: string,
  productSlug: string
): Product | undefined {
  return getCategory(categorySlug)?.products.find((p) => p.slug === productSlug);
}

export const categoryToInterest: Record<string, string> = {
  "bounce-house-combos": "Bounce House Combo",
  "water-slides": "Water Slide",
  "obstacle-courses": "Obstacle Course",
  games: "Games",
  stages: "Black Top Stage",
  "tables-chairs": "Tables & Chairs",
  "tents-canopies": "Tent / Canopy",
  "photo-booth": "Photo Booth",
  seasonal: "Holiday / Artificial Snow",
  "generators-pa-speakers": "Generator / PA Speaker",
  "heaters-coolers": "Heater",
  "rock-climbing-wall": "Rock Climbing Wall",
  gellyball: "Gellyball",
  "mechanical-bull": "Mechanical Bull",
};

export function getInterestForItem(
  categorySlug: string,
  productSlug?: string | null
): string | null {
  if (categorySlug === "heaters-coolers") {
    if (productSlug?.startsWith("portacool") || productSlug?.includes("cooler")) {
      return "Cooler";
    }
    return "Heater";
  }
  return categoryToInterest[categorySlug] ?? null;
}
