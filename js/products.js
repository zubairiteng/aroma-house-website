/**
 * AROMA HOUSE - Official Product & Price Master Record
 * Authoritative Source: Price List Aroma House.pdf
 * All prices strictly in Pakistani Rupees (PKR)
 */

const AROMA_PRODUCTS = [
  {
    id: "white-oud-elevation",
    name: "WHITE OUD ELEVATION",
    category: "Elevation Series",
    badge: "BEST SELLER",
    concentration: "Concentrated Perfume Oil / Attar",
    featured: true,
    visual: "./assets/white-oud-elevation.jpg",
    visualAlt: "AROMA HOUSE White Oud Elevation Luxury Perfume Bottle",
    prices: {
      "3ml": 416,
      "6ml": 702,
      "12ml": 1283
    },
    formattedPrices: {
      "3ml": "PKR 416",
      "6ml": "PKR 702",
      "12ml": "PKR 1,283"
    }
  },
  {
    id: "oud-supreme-elevation",
    name: "OUD SUPREME ELEVATION",
    category: "Elevation Series",
    badge: "ROYAL RESERVE",
    concentration: "Concentrated Perfume Oil / Attar",
    featured: true,
    visual: "./assets/oud-supreme-elevation.jpg",
    visualAlt: "AROMA HOUSE Oud Supreme Elevation Luxury Perfume Bottle",
    prices: {
      "3ml": 251,
      "6ml": 371,
      "12ml": 621
    },
    formattedPrices: {
      "3ml": "PKR 251",
      "6ml": "PKR 371",
      "12ml": "PKR 621"
    }
  },
  {
    id: "ghilaf-e-kaba-elevation",
    name: "GHILAF-E-KABA ELEVATION",
    category: "Elevation Series",
    badge: "SACRED HERITAGE",
    concentration: "Concentrated Perfume Oil / Attar",
    featured: true,
    visual: "./assets/ghilaf-e-kaba-elevation.jpg",
    visualAlt: "AROMA HOUSE Ghilaf-E-Kaba Elevation Luxury Perfume Bottle",
    prices: {
      "3ml": 335,
      "6ml": 540,
      "12ml": 959
    },
    formattedPrices: {
      "3ml": "PKR 335",
      "6ml": "PKR 540",
      "12ml": "PKR 959"
    }
  },
  {
    id: "oud-ispahan-elevation",
    name: "OUD ISPAHAN ELEVATION",
    category: "Elevation Series",
    badge: "SIGNATURE BLEND",
    concentration: "Concentrated Perfume Oil / Attar",
    featured: true,
    visual: "./assets/oud-ispahan-elevation.jpg",
    visualAlt: "AROMA HOUSE Oud Ispahan Elevation Luxury Perfume Bottle",
    prices: {
      "3ml": 504,
      "6ml": 878,
      "12ml": 1634
    },
    formattedPrices: {
      "3ml": "PKR 504",
      "6ml": "PKR 878",
      "12ml": "PKR 1,634"
    }
  },
  {
    id: "silver-oud-elevation-v-2025",
    name: "SILVER OUD ELEVATION V-2025",
    category: "Elevation Series",
    badge: "MILLÉSIME 2025",
    concentration: "Concentrated Perfume Oil / Attar",
    featured: true,
    visual: "./assets/silver-oud-elevation.jpg",
    visualAlt: "AROMA HOUSE Silver Oud Elevation V-2025 Luxury Perfume Bottle",
    prices: {
      "3ml": 281,
      "6ml": 432,
      "12ml": 743
    },
    formattedPrices: {
      "3ml": "PKR 281",
      "6ml": "PKR 432",
      "12ml": "PKR 743"
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { AROMA_PRODUCTS };
}
