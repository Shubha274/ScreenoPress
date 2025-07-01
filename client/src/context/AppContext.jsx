import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allServices, dummyProducts } from "../Dummydata";
import toast from "react-hot-toast";
// Create context
export const AppContext = createContext();

// Provider component
export const AppContextProvider = ({ children }) => {
  const currencySymbol = import.meta.env.VITE_CURRENCY_SYMBOL;
  const currencyCode = import.meta.env.VITE_CURRENCY_CODE;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});
  // const [cartItems, setCartItems] = useState({});
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };
  const fetchServices = async () => {
    setServices(allServices);
  };
  //Add product tocart
  const addToCart = () => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartDtata[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };
  //update CartItem Quantity
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;

      if (cartData[itemId] == 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Removed From Cart");
    setCartItems(cartData);
  };
  //remove product from cart
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("cart Updated");
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchServices();
  }, []);
  const value = {
    navigate,
    products,

    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    currencySymbol,
    currencyCode,
    setShowUserLogin,
    services,
    setServices,
    addToCart,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    updateCartItem,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// // Custom hook for easier usage
export const useAppContext = () => useContext(AppContext);
