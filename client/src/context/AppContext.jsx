import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { allServices, dummyProducts } from "../Dummydata";
import toast from "react-hot-toast";
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true; //to send cookies
// Create context
export const AppContext = createContext();
// Provider component
export const AppContextProvider = ({ children }) => {
  const currencySymbol = import.meta.env.VITE_CURRENCY_SYMBOL;
  const currencyCode = import.meta.env.VITE_CURRENCY_CODE;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  //fetch seller status
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState({ front: false, back: false });
  const [customDesc, setCustomDesc] = useState("");
  const [designFile, setDesignFile] = useState(null);
  // const [cartItems, setCartItems] = useState({});

  //Add product tocart
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false);
    }
  };
  //fetch user auth status & cart items
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems);
      }
    } catch (error) {
      setUser(null);
    }
  };
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += quantity;
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };
  const fetchProduct = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
        console.log("Fetched products:", data.products); // ✅ debug log
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Failed to fetch products");
      console.error("Fetch Product Error:", err); // ✅ detailed debug
    }
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
  //get cart item count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };
  //get cart total amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItems[items] > 0) {
        totalAmount += itemInfo.price * cartItems[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchUser();
    fetchSeller();
    fetchProduct();
  }, []);

  useEffect(() => {
    const updateCart = async () => {
      try {
        const { data } = await axios.post("/api/cart/update", {
          cartItems,
        });
        if (!data.success) {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    if (user) {
      updateCart();
    }
  }, [cartItems, user]);
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
    fetchUser,
    setShowUserLogin,
    services,
    setServices,
    addToCart,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    updateCartItem,

    cartItems,
    setCartItems,
    getCartAmount,
    getCartCount,
    quantity,
    setQuantity,
    location,
    setLocation,
    customDesc,
    setCustomDesc,
    designFile,
    setDesignFile,
    fetchSeller,
    fetchProduct,
    axios,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// // Custom hook for easier usage
export const useAppContext = () => useContext(AppContext);
