import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../Dummydata";

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
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };
  useEffect(() => {
    fetchProducts();
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
    setShowUserLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// // Custom hook for easier usage
export const useAppContext = () => useContext(AppContext);
