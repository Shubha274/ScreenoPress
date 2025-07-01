import logoSg from "./assets/logoSg.png";
import star_icon from "./assets/star_icon.svg";
import search_icon from "./assets/search_icon.svg";
import star_dull_icon from "./assets/star_dull_icon.svg";
import cupDesign from "./assets/cupDesign.jpg";
import calendar from "./assets/claendarsDiaries.jpg";
import awards from "./assets/awards.jfif";

import weddingCard from "./assets/weddingCards.jpg";
import tshirt from "./assets/tshirt.jpg";
import flyers from "./assets/flyers.png";
import flex from "./assets/flexPrinting.png";
import books from "./assets/books.jpg";
import booklets from "./assets/booklets.jpg";
import businessCard from "./assets/businessCard.jpg";
import idCard from "./assets/idCard.jpg";
import hoardingBanners from "./assets/hoardingBanners.jpg";
import nav_cart_icon from "./assets/nav_cart_icon.svg";
import cart_icon from "./assets/cart_icon.svg";
import menu_icon from "./assets/menu_icon.svg";
import profile_icon from "./assets/profile_icon.png";
import reliable from "./assets/reliable.png";
import coin_icon from "./assets/affordable.png";
import trust_icon from "./assets/trusts.png";
export const assets = {
  logoSg,
  menu_icon,
  star_icon,
  star_dull_icon,
  search_icon,
  nav_cart_icon,
  profile_icon,
  cart_icon,
};
export const categories = [
  {
    text: "Mug Designing",
    path: "cups",
    image: cupDesign,
    bgColor: "#FEF6DA",
  },
  {
    text: "Cards",
    path: "Cards",
    image: weddingCard,
    bgColor: "#FEE0E0",
  },
  {
    text: "Apparels",
    path: "Apparels",
    image: tshirt,
    bgColor: "#F0F5DE",
  },
  {
    text: "Banners",
    path: "Banners",
    image: flex,
    bgColor: "#E1F5EC",
  },

  {
    text: "Stationary",
    path: "Stationary",
    image: books,
    bgColor: "#E1F5EC",
  },
];
export const dummyProducts = [
  {
    _id: "gd46g23h",
    name: "Wedding Card",
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
    name: "Banners",
    category: "Banners",
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
    _id: "gd46g26h",
    name: "T-shirt",
    category: "Apparels",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [tshirt, tshirt, tshirt, tshirt],
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
    _id: "gd46g27h",
    name: "Mug Designing",
    category: "cups",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [cupDesign, cupDesign, cupDesign, cupDesign],
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
    _id: "gd46g28h",
    name: "Awards and Trophies",
    category: "Stationary",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [awards, awards, awards, awards],
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
    _id: "gd46g29h",
    name: "Calendar and Diaries",
    category: "Stationary",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [calendar, calendar, calendar, calendar],
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
export const allServices = [
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
    name: "Banners",
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
    _id: "gd46g26h",
    name: "Apparels",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [tshirt, tshirt, tshirt, tshirt],
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
    name: "Mug Designing",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [cupDesign, cupDesign, cupDesign, cupDesign],
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
    name: "Awards and Trophies",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [awards, awards, awards, awards],
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
    name: "Calendar and Diaries",
    category: "Cards",
    price: 125,
    offerPrice: 99, // Assuming discounted price
    image: [calendar, calendar, calendar, calendar],
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
    name: "",
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
];
export const features = [
  {
    icon: reliable,
    title: "Reliable Always",
    description: "From design to doorstep-smooth printing experience.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality design at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 5,000+ happy customers.",
  },
];
export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "/" },
      { text: "Best Sellers", url: "/" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Get in touch",
    links: [{ text: "+91-9470022527" }, { text: "apanuppandey5@gmail.com" }],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },

      { text: "Facebook", url: "#" },
    ],
  },
];
