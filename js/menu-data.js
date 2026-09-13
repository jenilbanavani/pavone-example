/**
 * PAVONE THICK SHAKE — CENTRALIZED MENU PRODUCT DATA
 * Structured catalog of products. Additional batches can be added directly here.
 */
const PAVONE_MENU_PRODUCTS = [
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
  }
];

if (typeof window !== 'undefined') {
  window.PAVONE_MENU_PRODUCTS = PAVONE_MENU_PRODUCTS;
}
