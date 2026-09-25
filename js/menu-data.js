/**
 * PAVONE THICK SHAKE — CENTRALIZED MENU CATALOG & STORE CONFIGURATION
 * 
 * Single source of truth for the entire Pavone menu catalog and ordering configuration.
 * All prices, categories, product descriptions, and WhatsApp order settings are managed here.
 */

// ==========================================================================
// 1. STORE & ORDERING CONFIGURATION
// ==========================================================================
const PAVONE_CONFIG = {
  // ORDER_METHOD: "WHATSAPP" | "API"
  ORDER_METHOD: "WHATSAPP",
  
  // Official Store WhatsApp Number (international format without + or spaces)
  WHATSAPP_NUMBER: "919537570515",
  
  // Store Details
  STORE_NAME: "Pavone Thick Shake",
  STORE_TAGLINE: "Luxury Thickshakes & Desserts",
  OUTLET_NAME: "Mota Varachha Outlet",
  ADDRESS: "Lajamni Chowk, Dwarkesh Nagari, Mota Varachha, Surat, Gujarat 394101",
  PHONE_DISPLAY: "+91 95375 70515",
  OPENING_HOURS: "11:00 AM – 11:30 PM (All 7 Days)",
  
  // Currency & Ordering Defaults
  CURRENCY_SYMBOL: "₹",
  DELIVERY_ENABLED: true,
  MIN_ORDER_DELIVERY: 100,
  PACKAGING_CHARGE: 0
};

// ==========================================================================
// 2. MENU CATEGORIES METADATA
// ==========================================================================
const PAVONE_CATEGORIES = [
  {
    id: "thick-shakes",
    name: "Thick Shakes",
    specs: "250 ML",
    subtitle: "Ultra-thick, dense pure whole dairy cream • Zero ice dilution",
    icon: "🥤",
    badge: "52 Artisan Flavors"
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    specs: "Rich Scoops",
    subtitle: "Velvety gourmet scoops made with pure cream and premium crunches",
    icon: "🍨",
    badge: "11 Classic Flavors"
  },
  {
    id: "kulfi",
    name: "Kulfi",
    specs: "Desi Cuts",
    subtitle: "Authentic slow-reduced rabdi kulfi with rich dry fruits and saffron",
    icon: "🍢",
    badge: "Royal Desi"
  },
  {
    id: "cone",
    name: "Cone",
    specs: "Waffle Swirls",
    subtitle: "Crispy waffle cones loaded with creamy swirls and crunchy toppings",
    icon: "🍦",
    badge: "Crispy Crunch"
  },
  {
    id: "candy",
    name: "Candy",
    specs: "Chocobars & Sticks",
    subtitle: "Crispy chocolate dipped bars and refreshing real fruit dollies",
    icon: "🍭",
    badge: "Grab & Go"
  },
  {
    id: "fresh-juice",
    name: "Fresh Juice",
    specs: "Cold Pressed",
    subtitle: "100% natural, freshly pressed seasonal citrus and tropical fruits",
    icon: "🍊",
    badge: "100% Natural"
  },
  {
    id: "coco",
    name: "Coco",
    specs: "Surat Special",
    subtitle: "Surat's iconic thick, velvety dark chocolate drink crafted fresh daily",
    icon: "🍫",
    badge: "Surat Icon"
  },
  {
    id: "hot-brownie",
    name: "Hot Brownie",
    specs: "Warm Sizzling",
    subtitle: "Freshly baked Belgian chocolate brownies served warm with gooey centers",
    icon: "🍰",
    badge: "Baked Fresh"
  }
];

// ==========================================================================
// 3. COMPLETE PAVONE MENU CATALOG (90+ PRODUCTS)
// ==========================================================================
const PAVONE_MENU_PRODUCTS = [
  // =========================================================================
  // CATEGORY 1: THICK SHAKES (250 ML)
  // =========================================================================
  {
    id: "vanilla",
    name: "Vanilla",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 140,
    priceDisplay: "₹140",
    description: "Classic rich Madagascan vanilla infused into velvety whole-dairy thick cream with delicate crumble topping.",
    image: "images/menu/thick-shakes/vanilla.webp",
    tag: "Classic Specialty",
    isFeatured: true
  },
  {
    id: "vanilla-chips",
    name: "Vanilla Chips",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 150,
    priceDisplay: "₹150",
    description: "Silky Madagascar vanilla thickshake crowned with decadent gourmet chocolate chips and crispy wafer cone.",
    image: "images/menu/thick-shakes/vanilla-chips.webp",
    tag: "Crowd Favorite"
  },
  {
    id: "butterscotch",
    name: "Butterscotch",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 150,
    priceDisplay: "₹150",
    description: "Golden toffee ripples and buttery caramel praline crunch blended in pure dairy thick cream.",
    image: "images/menu/thick-shakes/butterscotch.webp",
    tag: "Praline Crunch",
    isFeatured: true
  },
  {
    id: "butterscotch-kaju",
    name: "Butterscotch Kaju",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Slow-roasted cashew praline and caramel toffee swirl whipped with thick cream into an indulgent delight.",
    image: "images/menu/thick-shakes/butterscotch-kaju.webp",
    tag: "Royal Crunch",
    isFeatured: true
  },
  {
    id: "chocolate",
    name: "Chocolate",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 160,
    priceDisplay: "₹160",
    description: "Intense molten chocolate glaze, crunchy choco chips and cocoa essence in ultra-thick creamy texture.",
    image: "images/menu/thick-shakes/chocolate.webp",
    tag: "Rich Cocoa",
    isFeatured: true
  },
  {
    id: "chocolate-chips",
    name: "Chocolate Chips",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Decadent chocolate thickshake loaded with crunchy dark choco chips, chocolate syrup drizzle & wafer roll.",
    image: "images/menu/thick-shakes/chocolate-chips.webp",
    tag: "Choco Loaded"
  },
  {
    id: "chocolate-kaju",
    name: "Chocolate Kaju",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Velvety cocoa thickshake generously studded with whole slow-roasted cashews, chocolate chunks & Belgian fudge.",
    image: "images/menu/thick-shakes/chocolate-kaju.webp",
    tag: "Royal Chocolate",
    isFeatured: true
  },
  {
    id: "oreo-cookies",
    name: "Oreo Cookies",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Classic cookies and whole crushed Oreos whipped into rich vanilla cream with chocolate fudge drizzles.",
    image: "images/menu/thick-shakes/oreo-cookies.webp",
    tag: "Surat's #1 Craving",
    isFeatured: true
  },
  {
    id: "oreo-cookies-biscoff",
    name: "Oreo Cookies Biscoff",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 200,
    priceDisplay: "₹200",
    description: "The ultimate fusion of crunchy Oreo cookies, caramelized Belgian Lotus Biscoff spread, and thick dairy cream.",
    image: "images/menu/thick-shakes/oreo-cookies-biscoff.webp",
    tag: "Ultimate Fusion",
    isFeatured: true
  },
  {
    id: "kitkat-thickshake",
    name: "KitKat Thickshake",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 180,
    priceDisplay: "₹180",
    description: "Crispy KitKat wafer bars crushed and blended into rich chocolate cream topped with chocolate wafer cubes.",
    image: "images/menu/thick-shakes/kitkat-thickshake.webp",
    tag: "Crispy Indulgence",
    isFeatured: true
  },
  {
    id: "biscoff-crunch",
    name: "Biscoff Crunch",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Pure Belgian Lotus Biscoff spread whipped with whole dairy cream and topped with spiced caramelized cookie crumbs.",
    image: "assets/images/shake-biscoff.png",
    tag: "Caramel Spice",
    isFeatured: true
  },
  {
    id: "ferrero-rocher",
    name: "Ferrero Rocher",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 220,
    priceDisplay: "₹220",
    description: "Authentic Ferrero Rocher pralines, roasted hazelnut cream and crisp wafer crumble in dense cocoa base.",
    tag: "Luxury Praline"
  },
  {
    id: "nutella",
    name: "Nutella",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 200,
    priceDisplay: "₹200",
    description: "Generous swirls of genuine hazelnut cocoa Nutella whipped with rich thick cream.",
    tag: "Pure Nutella"
  },
  {
    id: "nutty-nutella",
    name: "Nutty Nutella",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 220,
    priceDisplay: "₹220",
    description: "Creamy Nutella thickshake studded with roasted almonds, cashews, and crispy wafer bits.",
    tag: "Nutty Decadence"
  },
  {
    id: "nutella-brownies",
    name: "Nutella Brownies",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 210,
    priceDisplay: "₹210",
    description: "Fudgy Belgian brownie chunks whipped right into luscious Nutella cream.",
    tag: "Gooey Brownie"
  },
  {
    id: "walnut-brownies",
    name: "Walnut Brownies",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 210,
    priceDisplay: "₹210",
    description: "Toasted crunchy California walnuts folded with dark cocoa brownie bites in velvety shake.",
    tag: "Nutty Fudgy"
  },
  {
    id: "belgian-waffle-crisps",
    name: "Belgian Waffle Crisps",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Warm caramelized Belgian waffle crisps crushed in sweet cream and chocolate drizzle.",
    tag: "Waffle Crunch"
  },
  {
    id: "cadbury-gems",
    name: "Cadbury Gems",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Crispy colorful chocolate Gems blended into smooth chocolate cream for playful chocolate bursts.",
    tag: "Childhood Joy"
  },
  {
    id: "strawberry",
    name: "Strawberry",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 160,
    priceDisplay: "₹160",
    description: "Fresh strawberry compote blended into thick velvety cream for a smooth, refreshing berry crave.",
    image: "assets/images/shake-strawberry.png",
    tag: "Fresh Berry",
    isFeatured: true
  },
  {
    id: "strawberry-oreo",
    name: "Strawberry Oreo",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 180,
    priceDisplay: "₹180",
    description: "The sweet tang of real strawberries combined with crunchy dark cocoa Oreo cookie bits.",
    image: "assets/images/shake-oreo-straw.png",
    tag: "Berry & Cookie"
  },
  {
    id: "blueberry",
    name: "Blueberry",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 180,
    priceDisplay: "₹180",
    description: "Tart and sweet wild blueberry coulis infused with dense dairy cream.",
    tag: "Wild Berry"
  },
  {
    id: "chickoo",
    name: "Chickoo",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 150,
    priceDisplay: "₹150",
    description: "Sweet, malty sapodilla (chickoo) fruit blended to creamy perfection.",
    tag: "Fresh Sapota"
  },
  {
    id: "chickoo-kaju",
    name: "Chickoo Kaju",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 180,
    priceDisplay: "₹180",
    description: "Natural chickoo sweetness enhanced with crisp roasted cashews.",
    tag: "Nutty Fruit"
  },
  {
    id: "chickoo-chocolate",
    name: "Chickoo Chocolate",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Earthy sweet chickoo paired seamlessly with dark Belgian chocolate drizzle.",
    tag: "Cocoa Fruit"
  },
  {
    id: "jamun",
    name: "Jamun",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 160,
    priceDisplay: "₹160",
    description: "Authentic seasonal Indian black plum (jamun) pulp with a vibrant berry finish.",
    tag: "Seasonal Special"
  },
  {
    id: "mango",
    name: "Mango",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 160,
    priceDisplay: "₹160",
    description: "Golden Alphonso mango pulp churned into dense whole dairy cream.",
    tag: "Alphonso Gold"
  },
  {
    id: "mango-kaju",
    name: "Mango Kaju",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Rich Alphonso mango thickshake loaded with whole roasted cashew pieces.",
    tag: "Royal Mango"
  },
  {
    id: "banana",
    name: "Banana",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 140,
    priceDisplay: "₹140",
    description: "Creamy wholesome bananas whipped into sweet, thick cream.",
    tag: "Naturally Sweet"
  },
  {
    id: "sitafal",
    name: "Sitafal",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Aromatic custard apple (sitafal) fruit pulp blended into delicate velvet cream.",
    tag: "Custard Apple"
  },
  {
    id: "pineapple",
    name: "Pineapple",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 150,
    priceDisplay: "₹150",
    description: "Zesty tropical pineapple compote harmonized with rich dairy cream.",
    tag: "Tropical Punch"
  },
  {
    id: "rose",
    name: "Rose",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 140,
    priceDisplay: "₹140",
    description: "Fragrant Damask rose petal extract with delicate floral aroma and cream base.",
    tag: "Floral Essence"
  },
  {
    id: "coconut",
    name: "Coconut",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 150,
    priceDisplay: "₹150",
    description: "Tender coconut malai churned into an ultra-smooth tropical thickshake.",
    tag: "Tender Malai"
  },
  {
    id: "coconut-kaju",
    name: "Coconut Kaju",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 180,
    priceDisplay: "₹180",
    description: "Tender coconut meat blended with buttery roasted cashews.",
    tag: "Nutty Tropical"
  },
  {
    id: "kaju",
    name: "Kaju",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 180,
    priceDisplay: "₹180",
    description: "100% slow-roasted premium cashews blended into an opulent nutty cream shake.",
    image: "assets/images/shake-kaju.png",
    tag: "Royal Cashew",
    isFeatured: true
  },
  {
    id: "kaju-gulkand",
    name: "Kaju Gulkand",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Traditional sun-cooked rose petal preserve (gulkand) blended with roasted cashews.",
    tag: "Desi Heritage"
  },
  {
    id: "kaju-badam",
    name: "Kaju Badam",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 200,
    priceDisplay: "₹200",
    description: "The royal duo of roasted cashews and California almonds in rich cream.",
    tag: "Double Nut"
  },
  {
    id: "kaju-anjeer",
    name: "Kaju Anjeer",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 200,
    priceDisplay: "₹200",
    description: "Chewy organic dry figs (anjeer) paired with slow-roasted cashews.",
    tag: "Fig & Cashew"
  },
  {
    id: "kaju-akhrot",
    name: "Kaju Akhrot",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 200,
    priceDisplay: "₹200",
    description: "Golden roasted cashews combined with earthy California walnuts.",
    tag: "Nut Harmony"
  },
  {
    id: "kaju-draksh",
    name: "Kaju Draksh",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Plump black raisins and sweet golden draksh balanced with crunchy cashews.",
    tag: "Raisin & Nut"
  },
  {
    id: "kaju-badam-pista",
    name: "Kaju Badam Pista",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 210,
    priceDisplay: "₹210",
    description: "The grand dry fruit trio: Cashews, almonds, and emerald Iranian pistachios.",
    tag: "Triple Dryfruit"
  },
  {
    id: "badam-anjeer",
    name: "Badam Anjeer",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 200,
    priceDisplay: "₹200",
    description: "Nutritious roasted almonds combined with sun-dried chewy figs.",
    tag: "Almond & Fig"
  },
  {
    id: "akhrot",
    name: "Akhrot",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Pure rich California walnuts ground fine with velvet whole milk cream.",
    tag: "Pure Walnut"
  },
  {
    id: "akhrot-anjeer",
    name: "Akhrot Anjeer",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 210,
    priceDisplay: "₹210",
    description: "Earthy roasted walnuts paired with rich honeyed dry figs.",
    tag: "Walnut & Fig"
  },
  {
    id: "roasted-badam",
    name: "Roasted Badam",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Golden slow-toasted almonds blended to a silky, aromatic thick consistency.",
    tag: "Toasted Almond"
  },
  {
    id: "roasted-badam-chocolate",
    name: "Roasted Badam Chocolate",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 200,
    priceDisplay: "₹200",
    description: "Roasted almonds draped in dark Belgian chocolate fudge and thick cream.",
    tag: "Choco Almond"
  },
  {
    id: "royal-dryfruit",
    name: "Royal Dryfruit",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 220,
    priceDisplay: "₹220",
    description: "Pavone's master blend of cashews, almonds, pistachios, figs, and saffron.",
    tag: "Shahi Heritage"
  },
  {
    id: "rajbhog-shake",
    name: "Rajbhog",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 180,
    priceDisplay: "₹180",
    description: "Infused with Kashmiri saffron, fragrant green cardamom, and crunchy dry fruits.",
    tag: "Saffron Kesar"
  },
  {
    id: "pan",
    name: "Pan",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 150,
    priceDisplay: "₹150",
    description: "Calcutta meetha paan essence with fennel, gulkand, and refreshing mint notes.",
    tag: "Meetha Paan"
  },
  {
    id: "thandai",
    name: "Thandai",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 160,
    priceDisplay: "₹160",
    description: "Spiced royal cooler with poppy seeds, fennel, melon seeds, black pepper, and saffron.",
    tag: "Royal Spices"
  },
  {
    id: "variyali",
    name: "Variyali",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 140,
    priceDisplay: "₹140",
    description: "Cooling sweet fennel seeds ground fine in creamy dessert base.",
    tag: "Fennel Cooler"
  },
  {
    id: "pistachio-kunafa",
    name: "Pistachio Kunafa",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 230,
    priceDisplay: "₹230",
    description: "Crispy buttered kataifi pastry, rich Iranian pistachios, and sweet cream syrup.",
    tag: "Middle Eastern Trend"
  },
  {
    id: "chocolate-kunafa",
    name: "Chocolate Kunafa",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 230,
    priceDisplay: "₹230",
    description: "Golden toasted kunafa strands smothered in molten Belgian chocolate and thick shake.",
    tag: "Gourmet Kunafa"
  },

  // =========================================================================
  // CATEGORY 2: ICE CREAM
  // =========================================================================
  {
    id: "ice-cream-vanilla",
    name: "Vanilla",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 60,
    priceDisplay: "₹60",
    description: "Pure Madagascar bourbon vanilla bean scoop with rich full-cream texture.",
    tag: "Classic Scoop"
  },
  {
    id: "ice-cream-butterscotch",
    name: "Butterscotch",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 70,
    priceDisplay: "₹70",
    description: "Buttery golden caramel ice cream studded with crispy caramelized sugar pralines.",
    tag: "Praline Scoop"
  },
  {
    id: "ice-cream-strawberry",
    name: "Strawberry",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 70,
    priceDisplay: "₹70",
    description: "Sweet and creamy strawberry scoop made with real fruit swirls.",
    tag: "Berry Scoop"
  },
  {
    id: "ice-cream-american-nuts",
    name: "American Nuts",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 90,
    priceDisplay: "₹90",
    description: "Loaded with blackcurrant jelly, roasted cashews, almonds, and fruity gems.",
    tag: "Crowd Favorite"
  },
  {
    id: "ice-cream-almond-caramel",
    name: "Almond Caramel",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 90,
    priceDisplay: "₹90",
    description: "Roasted sliced almonds folded through ribbons of slow-cooked butter caramel.",
    tag: "Nutty Caramel"
  },
  {
    id: "ice-cream-kaju-draksh",
    name: "Kaju Draksh",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 90,
    priceDisplay: "₹90",
    description: "Traditional Gujarati favorite with roasted cashews and juicy sweet raisins.",
    tag: "Desi Classic"
  },
  {
    id: "ice-cream-choco-chips",
    name: "Choco Chips",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 80,
    priceDisplay: "₹80",
    description: "Rich dark cocoa base studded with bittersweet crunchy chocolate chips.",
    tag: "Choco Crunch"
  },
  {
    id: "ice-cream-swiss-cake",
    name: "Swiss Cake",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 90,
    priceDisplay: "₹90",
    description: "Decadent Swiss chocolate cake crumbs infused into chocolate cream.",
    tag: "Cake Batter"
  },
  {
    id: "ice-cream-shahi-begum",
    name: "Shahi Begum",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 100,
    priceDisplay: "₹100",
    description: "Royal blend of pistachio, saffron, fig, and cashew chunks in mava cream.",
    tag: "Royal Treat"
  },
  {
    id: "ice-cream-rajbhog",
    name: "Rajbhog",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 90,
    priceDisplay: "₹90",
    description: "Kashmiri saffron and cardamom infused ice cream with rich nut slivers.",
    tag: "Kesar Shahi"
  },
  {
    id: "ice-cream-mava-badam",
    name: "Mava Badam",
    category: "ice-cream",
    categoryLabel: "Ice Cream",
    size: "Scoop",
    price: 90,
    priceDisplay: "₹90",
    description: "Slow-caramelized milk khoya base with slivered California almonds.",
    tag: "Khoya Almond"
  },

  // =========================================================================
  // CATEGORY 3: KULFI
  // =========================================================================
  {
    id: "kulfi-shahi",
    name: "Shahi Kulfi",
    category: "kulfi",
    categoryLabel: "Kulfi",
    size: "Stick / Cut",
    price: 60,
    priceDisplay: "₹60",
    description: "Dense, slow-cooked whole rabdi kulfi packed with cashews, pistachios, and saffron.",
    tag: "Royal Kulfi"
  },
  {
    id: "kulfi-rajbhog",
    name: "Rajbhog",
    category: "kulfi",
    categoryLabel: "Kulfi",
    size: "Stick / Cut",
    price: 60,
    priceDisplay: "₹60",
    description: "Rich kesar badam kulfi with authentic cardamom and saffron aromatics.",
    tag: "Kesar Kulfi"
  },
  {
    id: "kulfi-chowpatty",
    name: "Chowpatty Kulfi",
    category: "kulfi",
    categoryLabel: "Kulfi",
    size: "Slice",
    price: 50,
    priceDisplay: "₹50",
    description: "Classic Mumbai Chowpatty-style malai kulfi slice with silky caramelized dairy texture.",
    tag: "Malai Chowpatty"
  },
  {
    id: "kulfi-mava-tillewali",
    name: "Mava Tillewali Kulfi",
    category: "kulfi",
    categoryLabel: "Kulfi",
    size: "Stick",
    price: 50,
    priceDisplay: "₹50",
    description: "Traditional on-the-stick mava kulfi with thick concentrated khoya flavor.",
    tag: "Tillewali Stick"
  },

  // =========================================================================
  // CATEGORY 4: CONE
  // =========================================================================
  {
    id: "cone-chocolate",
    name: "Chocolate",
    category: "cone",
    categoryLabel: "Cone",
    size: "Waffle Cone",
    price: 50,
    priceDisplay: "₹50",
    description: "Crispy waffle cone filled with rich chocolate ice cream and topped with chocolate disc.",
    tag: "Crispy Cone"
  },
  {
    id: "cone-kesar-pista",
    name: "Kesar Pista",
    category: "cone",
    categoryLabel: "Cone",
    size: "Waffle Cone",
    price: 60,
    priceDisplay: "₹60",
    description: "Aromatic saffron and roasted pistachio swirl in crunchy sugar waffle cone.",
    tag: "Kesar Pista"
  },
  {
    id: "cone-strawberry-cheesecake",
    name: "Strawberry Cheesecake",
    category: "cone",
    categoryLabel: "Cone",
    size: "Waffle Cone",
    price: 60,
    priceDisplay: "₹60",
    description: "Creamy cheesecake ice cream with strawberry ribbon in baked waffle cone.",
    tag: "Cheesecake"
  },
  {
    id: "cone-butterscotch",
    name: "Butterscotch",
    category: "cone",
    categoryLabel: "Cone",
    size: "Waffle Cone",
    price: 50,
    priceDisplay: "₹50",
    description: "Golden praline crunch cone with sweet caramel cream.",
    tag: "Crunchy Toffee"
  },

  // =========================================================================
  // CATEGORY 5: CANDY
  // =========================================================================
  {
    id: "candy-raspberry-dolly",
    name: "Raspberry Dolly",
    category: "candy",
    categoryLabel: "Candy",
    size: "Ice Candy",
    price: 30,
    priceDisplay: "₹30",
    description: "Zesty sweet raspberry ice candy coated over a rich vanilla cream core.",
    tag: "Fruit Dolly"
  },
  {
    id: "candy-mango-dolly",
    name: "Mango Dolly",
    category: "candy",
    categoryLabel: "Candy",
    size: "Ice Candy",
    price: 30,
    priceDisplay: "₹30",
    description: "Juicy mango fruit ice coating over creamy vanilla center.",
    tag: "Mango Dolly"
  },
  {
    id: "candy-jumbo-chocobar",
    name: "Jumbo Chocobar",
    category: "candy",
    categoryLabel: "Candy",
    size: "Bar",
    price: 40,
    priceDisplay: "₹40",
    description: "Creamy vanilla bar dipped in thick cracking dark chocolate shell.",
    tag: "Classic Chocobar"
  },
  {
    id: "candy-crunchy-chocobar",
    name: "Crunchy Chocobar",
    category: "candy",
    categoryLabel: "Candy",
    size: "Bar",
    price: 50,
    priceDisplay: "₹50",
    description: "Chocolate bar coated with crispy wafer crunches and roasted nut crisps.",
    tag: "Crunchy Shell"
  },
  {
    id: "candy-chocoboom-bar",
    name: "Chocoboom Bar",
    category: "candy",
    categoryLabel: "Candy",
    size: "Bar",
    price: 50,
    priceDisplay: "₹50",
    description: "Double chocolate explosion with chocolate ice cream inside and thick fudge coat.",
    tag: "Double Choco"
  },
  {
    id: "candy-choco-truffle",
    name: "Choco Truffle",
    category: "candy",
    categoryLabel: "Candy",
    size: "Bar",
    price: 60,
    priceDisplay: "₹60",
    description: "Velvety chocolate truffle ganache center coated in premium dark chocolate.",
    tag: "Dark Truffle"
  },

  // =========================================================================
  // CATEGORY 6: FRESH JUICE
  // =========================================================================
  {
    id: "juice-mosambi",
    name: "Mosambi",
    category: "fresh-juice",
    categoryLabel: "Fresh Juice",
    size: "Glass",
    price: 80,
    priceDisplay: "₹80",
    description: "100% freshly pressed sweet lime (mosambi) with pure natural citrus refreshment.",
    tag: "100% Pure"
  },
  {
    id: "juice-pineapple",
    name: "Pineapple",
    category: "fresh-juice",
    categoryLabel: "Fresh Juice",
    size: "Glass",
    price: 80,
    priceDisplay: "₹80",
    description: "Sweet, tangy ripe golden pineapple juice cold-pressed on order.",
    tag: "Fresh Cut"
  },
  {
    id: "juice-mosambi-pineapple",
    name: "Mosambi-Pineapple",
    category: "fresh-juice",
    categoryLabel: "Fresh Juice",
    size: "Glass",
    price: 90,
    priceDisplay: "₹90",
    description: "The ideal tropical balance of sweet lime citrus and tangy ripe pineapple.",
    tag: "Tropical Duo"
  },

  // =========================================================================
  // CATEGORY 7: COCO
  // =========================================================================
  {
    id: "coco-cold",
    name: "Cold Coco",
    category: "coco",
    categoryLabel: "Coco",
    size: "Glass",
    price: 80,
    priceDisplay: "₹80",
    description: "Surat's original thick, decadent cold cocoa recipe crafted with rich melted dark chocolate.",
    tag: "Surat Legend"
  },
  {
    id: "coco-choco-chips",
    name: "Coco with Chocolate Chips",
    category: "coco",
    categoryLabel: "Coco",
    size: "Glass",
    price: 90,
    priceDisplay: "₹90",
    description: "Classic Surati thick coco topped generously with crunchy dark chocolate chips.",
    tag: "Chips Loaded"
  },
  {
    id: "coco-ice-cream",
    name: "Cold Coco with Ice Cream",
    category: "coco",
    categoryLabel: "Coco",
    size: "Glass",
    price: 100,
    priceDisplay: "₹100",
    description: "Thick Cold Coco topped with a luscious scoop of creamy Madagascar vanilla ice cream.",
    tag: "Float Indulgence"
  },
  {
    id: "coco-kitkat",
    name: "KitKat Coco",
    category: "coco",
    categoryLabel: "Coco",
    size: "Glass",
    price: 110,
    priceDisplay: "₹110",
    description: "Thick dark coco layered with crispy crushed KitKat wafer bars.",
    tag: "KitKat Crunch"
  },
  {
    id: "coco-kaju",
    name: "Kaju Coco",
    category: "coco",
    categoryLabel: "Coco",
    size: "Glass",
    price: 120,
    priceDisplay: "₹120",
    description: "Thick Cold Coco studded with whole slow-roasted buttery cashews.",
    tag: "Royal Nutty"
  },
  {
    id: "coco-kaju-ice-cream",
    name: "Kaju Coco Ice Cream",
    category: "coco",
    categoryLabel: "Coco",
    size: "Glass",
    price: 130,
    priceDisplay: "₹130",
    description: "The ultimate Cold Coco loaded with whole cashews and a rich scoop of vanilla ice cream.",
    tag: "Supreme Coco"
  },
  {
    id: "coco-1-litre",
    name: "1 Litre Coco",
    category: "coco",
    categoryLabel: "Coco",
    size: "1000 ML (Family Bottle)",
    price: 260,
    priceDisplay: "₹260",
    description: "Family pack bottle of Surat's favorite thick cold coco. Serves 4–5.",
    tag: "Family Pack"
  },

  // =========================================================================
  // CATEGORY 8: HOT BROWNIE
  // =========================================================================
  {
    id: "brownie-choco-chips",
    name: "Chocolate Chips Brownie",
    category: "hot-brownie",
    categoryLabel: "Hot Brownie",
    size: "Warm Plate",
    price: 120,
    priceDisplay: "₹120",
    description: "Freshly warmed fudgy Belgian brownie loaded with molten chocolate chips.",
    tag: "Gooey Dark"
  },
  {
    id: "brownie-nutella",
    name: "Nutella Brownie",
    category: "hot-brownie",
    categoryLabel: "Hot Brownie",
    size: "Warm Plate",
    price: 150,
    priceDisplay: "₹150",
    description: "Sizzling warm dark brownie smothered in hot melted hazelnut Nutella spread.",
    tag: "Nutella Drizzle"
  },
  {
    id: "brownie-lotus-biscoff",
    name: "Lotus Biscoff Brownie",
    category: "hot-brownie",
    categoryLabel: "Hot Brownie",
    size: "Warm Plate",
    price: 160,
    priceDisplay: "₹160",
    description: "Warm brownie drenched in caramelized Belgian Biscoff spread and spiced cookie crumbs.",
    tag: "Caramel Biscoff"
  },
  {
    id: "brownie-belgian",
    name: "Belgian Brownie",
    category: "hot-brownie",
    categoryLabel: "Hot Brownie",
    size: "Warm Plate",
    price: 140,
    priceDisplay: "₹140",
    description: "Authentic dense 70% dark Belgian cocoa brownie with a molten fudge core.",
    tag: "Belgian 70%"
  },
  {
    id: "brownie-milkybar",
    name: "Milkybar Brownie",
    category: "hot-brownie",
    categoryLabel: "Hot Brownie",
    size: "Warm Plate",
    price: 140,
    priceDisplay: "₹140",
    description: "Dark chocolate brownie smothered in silky melted Nestlé Milkybar white chocolate glaze.",
    tag: "White Choco"
  },
  {
    id: "brownie-dark-and-white",
    name: "Dark and White Brownie",
    category: "hot-brownie",
    categoryLabel: "Hot Brownie",
    size: "Warm Plate",
    price: 140,
    priceDisplay: "₹140",
    description: "The classic black & white swirl of dark Belgian ganache and creamy white chocolate.",
    tag: "Duo Ganache"
  },
  {
    id: "brownie-triple-chocolate",
    name: "Triple Chocolate Brownie",
    category: "hot-brownie",
    categoryLabel: "Hot Brownie",
    size: "Warm Plate",
    price: 160,
    priceDisplay: "₹160",
    description: "The ultimate indulgence: Dark cocoa brownie, molten milk chocolate, and white truffle drizzles.",
    tag: "Triple Choco"
  }
];

// Export to window for browser script compatibility
if (typeof window !== 'undefined') {
  window.PAVONE_CONFIG = PAVONE_CONFIG;
  window.PAVONE_CATEGORIES = PAVONE_CATEGORIES;
  window.PAVONE_MENU_PRODUCTS = PAVONE_MENU_PRODUCTS;
}
