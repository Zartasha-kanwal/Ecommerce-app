import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content*/}
      <div className="flex-grow">
        <div className="px-11 pt-11">
          <span className="text-[gray]">Home /</span>
          <span className="text-black font-medium">404 Error</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-16 h-full">
          <h1 className="lg:text-6xl text-4xl font-bold">404 Not Found</h1>
          <p className="text-2xl mt-4 text-gray-700">
            Your visited page not found. You may go home page.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-[#DB4444] text-white px-7 py-3 rounded-sm hover:bg-[#f67272] transition duration-300"
          >
            Go back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
