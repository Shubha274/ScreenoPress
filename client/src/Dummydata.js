import logoSg from "./assets/logoSg.png";
import star_icon from "./assets/star_icon.svg";
import star_dull_icon from "./assets/star_dull_icon.svg";
import cupDesign from "./assets/cupDesign.jpg";
import weddingCard from "./assets/weddingCards.jpg";
import tshirt from "./assets/tshirt.jpg";
import flyers from "./assets/flyers.png";
import flex from "./assets/flexPrinting.png";
import books from "./assets/books.jpg";
import booklets from "./assets/booklets.jpg";
import businessCard from "./assets/businessCard.jpg";
import idCard from "./assets/idCard.jpg";
import hoardingBanners from "./assets/hoardingBanners.jpg";
export const assets = {
  logoSg,
  star_icon,
  star_dull_icon,
};
export const categories = [
  {
    text: "Mug Designing",
    path: "cupDesigning",
    image: cupDesign,
    bgColor: "#FEF6DA",
  },
  {
    text: "WeddingCard",
    path: "wedding-card",
    image: weddingCard,
    bgColor: "#FEE0E0",
  },
  {
    text: "T-Shirts",
    path: "tshirt",
    image: tshirt,
    bgColor: "#F0F5DE",
  },
  {
    text: "Plotter Printing",
    path: "plotter",
    image: flex,
    bgColor: "#E1F5EC",
  },
  {
    text: "Flyers ",
    path: "stationary",
    image: flyers,
    bgColor: "#FEE6CD",
  },
  {
    text: "Stationary",
    path: "stationary",
    image: books,
    bgColor: "#E1F5EC",
  },
];
export const dummyProducts = [
  {
    _id: "gd46g23h",
    name: "WeddingCard",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [weddingCard, weddingCard, weddingCard, weddingCard],
    description: [
      "Elegant and customizable design",
      "Premium quality paper",
      "Perfect for weddings and events",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd46g24h",
    name: "Business Cards",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [businessCard, businessCard, businessCard, businessCard],
    description: [
      "Elegant and customizable design",
      "Premium quality paper",
      "Perfect for weddings and events",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd46g25h",
    name: "Id Card",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [idCard, idCard, idCard, idCard],
    description: [
      "Elegant and customizable design",
      "Premium quality paper",
      "Perfect for weddings and events",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd46g23h",
    name: "Booklets",
    category: "Stationary",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [booklets, booklets, booklets, booklets],
    description: [
      "Elegant and customizable design",
      "Premium quality paper",
      "Perfect for weddings and events",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd46g23h",
    name: "Hoarding Banners",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [hoardingBanners, hoardingBanners, hoardingBanners, hoardingBanners],
    description: [
      "Elegant and customizable design",
      "Premium quality paper",
      "Perfect for weddings and events",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd46g23h",
    name: "WeddingCard",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [weddingCard, weddingCard, weddingCard, weddingCard],
    description: [
      "Elegant and customizable design",
      "Premium quality paper",
      "Perfect for weddings and events",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];
