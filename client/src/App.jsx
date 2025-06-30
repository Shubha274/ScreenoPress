import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Homes from "./pages/Homes";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <About /> */}
      <Homes />
    </div>
  );
};

export default App;
