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
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext();
  return (
    <div>
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

          <Route path="/product" element={<AllServices />} />
          <Route path="/products/:category" element={<ProductCategory />} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
