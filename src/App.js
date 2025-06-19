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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
           <Route path="*" element={<NotFound />} /> {/*  This handles unmatched routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
