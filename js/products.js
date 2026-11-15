/**
 * AROMA HOUSE - Official Product & Price Master Record
 * Source: Authoritative Price List Aroma House.pdf
 * All prices strictly in Pakistani Rupees (PKR)
 */

const AROMA_PRODUCTS = [
  {
    id: "white-oud-elevation",
    name: "WHITE OUD ELEVATION",
    category: "Elevation Series",
    featured: true,
    visual: "./assets/abstract-white-oud.svg",
    visualAlt: "Abstract visual impression for White Oud Elevation",
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
    featured: false,
    visual: "./assets/abstract-oud-supreme.svg",
    visualAlt: "Abstract visual impression for Oud Supreme Elevation",
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
    featured: true,
    visual: "./assets/abstract-ghilaf-e-kaba.svg",
    visualAlt: "Abstract visual impression for Ghilaf-E-Kaba Elevation",
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
    featured: true,
    visual: "./assets/abstract-oud-ispahan.svg",
    visualAlt: "Abstract visual impression for Oud Ispahan Elevation",
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
    featured: false,
    visual: "./assets/abstract-silver-oud.svg",
    visualAlt: "Abstract visual impression for Silver Oud Elevation V-2025",
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
