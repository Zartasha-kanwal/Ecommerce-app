import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Assests/Components/Header";
import Home from "./Assests/Components/Home";
import About from "./Assests/Components/About";
import Contact from "./Assests/Components/Contact";
import Signup from "./Assests/Components/Signup";
import Login from "./Assests/Components/Login";
import Wishlist from "./Assests/Components/Wishlist";
import Cart from "./Assests/Components/Cart";
import ScrollToTop from "./Assests/Components/ScrollToTop";
import NotFound from "./Assests/Components/NotFound";
import ProductDetail from "./Assests/Components/ProductDetail";
import Allproducts from "./Assests/Components/Allproducts";
import Checkout from "./Assests/Components/Checkout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import WishlistProvider from "./Assests/Components/WishlistContext";

function App() {
  const [marginTop, setMarginTop] = useState("200px");

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint and above
        setMarginTop("100px");
      } else {
        // mobile and tablet
        setMarginTop("180px");
      }
    };

    updateMargin(); // set initially
    window.addEventListener("resize", updateMargin); // update on resize

    return () => window.removeEventListener("resize", updateMargin);
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <WishlistProvider>
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            style={{ marginTop }}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/all-products" element={<Allproducts />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
             <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />{" "}
            {/*  This handles unmatched routes */}
          </Routes>
        </div>
      </WishlistProvider>
    </Router>
  );
}

export default App;
