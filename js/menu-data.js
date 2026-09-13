/**
 * PAVONE THICK SHAKE — CENTRALIZED MENU PRODUCT DATA
 * Structured catalog of products. Additional batches can be added directly here.
 */
const PAVONE_MENU_PRODUCTS = [
  /* ================= BATCH 1 ================= */
  {
    id: "vanilla-thick-shake",
    name: "Vanilla",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 140,
    priceDisplay: "₹140",
    description: "Classic rich Madagascan vanilla infused into velvety whole-dairy thick cream with delicate crumble topping.",
    image: "images/menu/thick-shakes/vanilla.webp",
    tag: "Classic Specialty",
    specs: "✨ 250 ML"
  },
  {
    id: "vanilla-chips-thick-shake",
    name: "Vanilla Chips",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 150,
    priceDisplay: "₹150",
    description: "Silky Madagascar vanilla thickshake crowned with decadent gourmet chocolate chips and crispy wafer cone.",
    image: "images/menu/thick-shakes/vanilla-chips.webp",
    tag: "Crowd Favorite",
    specs: "✨ 250 ML"
  },
  {
    id: "butterscotch-thick-shake",
    name: "Butterscotch",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 150,
    priceDisplay: "₹150",
    description: "Golden toffee ripples and buttery caramel praline crunch blended in pure dairy thick cream.",
    image: "images/menu/thick-shakes/butterscotch.webp",
    tag: "Praline Crunch",
    specs: "✨ 250 ML"
  },
  {
    id: "butterscotch-kaju-thick-shake",
    name: "Butterscotch Kaju",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Slow-roasted cashew praline and caramel toffee swirl whipped with thick cream into an indulgent delight.",
    image: "images/menu/thick-shakes/butterscotch-kaju.webp",
    tag: "Royal Crunch",
    specs: "✨ 250 ML"
  },
  {
    id: "chocolate-thick-shake",
    name: "Chocolate",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 160,
    priceDisplay: "₹160",
    description: "Intense molten chocolate glaze, crunchy choco chips and cocoa essence in ultra-thick creamy texture.",
    image: "images/menu/thick-shakes/chocolate.webp",
    tag: "Rich Cocoa",
    specs: "✨ 250 ML"
  },

  /* ================= BATCH 2 ================= */
  {
    id: "chocolate-chips-thick-shake",
    name: "Chocolate Chips",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Decadent chocolate thickshake loaded with crunchy dark choco chips, chocolate syrup drizzle & wafer roll.",
    image: "images/menu/thick-shakes/chocolate-chips.webp",
    tag: "Choco Loaded",
    specs: "✨ 250 ML"
  },
  {
    id: "chocolate-kaju-thick-shake",
    name: "Chocolate Kaju",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 190,
    priceDisplay: "₹190",
    description: "Velvety cocoa thickshake generously studded with whole slow-roasted cashews, chocolate chunks & Belgian fudge.",
    image: "images/menu/thick-shakes/chocolate-kaju.webp",
    tag: "Royal Chocolate",
    specs: "✨ 250 ML"
  },
  {
    id: "oreo-cookies-thick-shake",
    name: "Oreo Cookies",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 170,
    priceDisplay: "₹170",
    description: "Classic cookies and whole crushed Oreos whipped into rich vanilla cream with chocolate fudge drizzles.",
    image: "images/menu/thick-shakes/oreo-cookies.webp",
    tag: "Surat's #1 Craving",
    specs: "✨ 250 ML"
  },
  {
    id: "oreo-cookies-biscoff-thick-shake",
    name: "Oreo Cookies Biscoff",
    category: "thick-shakes",
    categoryLabel: "Thick Shakes",
    size: "250 ml",
    price: 200,
    priceDisplay: "₹200",
    description: "The ultimate fusion of crunchy Oreo cookies, caramelized Belgian Lotus Biscoff spread, and thick dairy cream.",
    image: "images/menu/thick-shakes/oreo-cookies-biscoff.webp",
    tag: "Ultimate Fusion",
    specs: "✨ 250 ML"
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
    specs: "✨ 250 ML"
  }
];

if (typeof window !== 'undefined') {
  window.PAVONE_MENU_PRODUCTS = PAVONE_MENU_PRODUCTS;
}
