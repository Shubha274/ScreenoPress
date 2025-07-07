import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Homes from "./pages/Homes"; // Fix: this should be 'Homes', not 'Home'
import { useAppContext } from "./context/AppContext";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import AllServices from "./components/Categories/AllServices";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import AddAddress from "./components/AddAddress";
import MyOrders from "./components/MyOrders";
import SellerLayout from "./pages/seller/SellerLayout";
import Cart from "./components/Categories/Cart";
import Orders from "./pages/seller/Orders";
import ServiceList from "./pages/seller/ServiceList";
import AddServices from "./pages/seller/AddServices";
import SellerLogin from "./components/seller/SellerLogin";
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();
  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      {/* {showUserLogin ? <Login /> : null} */}
      <Toaster />
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/about" element={<About />} />

          <Route path="/products" element={<AllServices />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={<AddServices />} />
            <Route path="service-list" element={<ServiceList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
