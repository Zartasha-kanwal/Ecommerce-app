import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../Images/Logo.png";
import wishlist from "../Images/Wishlist.png";
import cart from "../Images/Cart1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40">
      <div className="bg-black text-white flex items-center justify-center py-2 px-2">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between w-full text-sm gap-y-2 md:w-[82%] lg:w-[64%] xl:w-[58%] 2xl:w-[42%]">
          <div className="flex items-center justify-center gap-2 text-center sm:text-left flex-wrap">
            <h5>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h5>
            <strong className="underline cursor-pointer">ShopNow</strong>
          </div>

          {/* Language Dropdown */}
          <div className="flex items-center justify-center gap-1 lg:mr-8">
            English
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>

      {/* Header*/}

      <header className="bg-white  py-5 flex items-center justify-center shadow-xl">
        {/* Only visible on md and up */}
        <div className="flex w-full lg:w-[82%]  2xl:w-[60%]  items-center justify-between lg:px-0 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-8 md:h-10 md:w-[170px] w-[100px]"
            />
          </div>

          {/* Navigation */}
          <div className="text-[14px] md:text-[16px] xl:text-[20px] hidden lg:flex md:gap-4 lg:gap-8 xl:gap-14 items-center">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline  " : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "underline  " : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "underline  " : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/SignUp"
              className={({ isActive }) => (isActive ? "underline  " : "")}
            >
              Signup
            </NavLink>
          </div>

          {/* Search & Icons */}
          <div className="flex items-center lg:gap-4 ">
            <div className="flex gap-1 md:gap-4 items-center ">
              <>
                {/* Large screen placeholder */}
                <input
                  placeholder="What are you looking for?"
                  className="hidden lg:block text-gray-500 md:text-[14px] outline-none lg:w-[12rem] w-full"
                />

                {/* Small screen placeholder */}
                <input
                  placeholder="Search..."
                  className="block lg:hidden text-gray-500 md:text-[14px] outline-none w-[6rem] "
                />
              </>

              <button className="lg:flex items-center hidden">
                <i className="fa-solid fa-magnifying-glass text-[18px]"></i>
              </button>

              {/* Hamburger button, visible only on small screens */}
              <button
                className="flex items-center lg:hidden text-2xl p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <i className="fa-solid fa-bars"></i>
              </button>

              {/* Sidebar overlay */}
              {isOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setIsOpen(false)}
                ></div>
              )}

              {/* Sidebar panel */}
              <div
                className={`pt-4  fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                 `}
              >
                <nav className="flex flex-col p-4 space-y-8 text-xl">
                  <div>
                    <img src={logo} />
                  </div>

                  <div className=" flex-col gap-3 ">
                    <div className="text-teal-500 font-bold text-xl border-l-8 border-teal-500 px-3 rounded-2xl">
                      Explore
                    </div>

                    <ul className="text-black font-normal text-[16px]">
                      <li>Woman’s Fashion </li>
                      <li>Men’s Fashion</li>
                      <li>Electronics</li>
                      <li>Home & Lifestyle</li>
                      <li>Medicine</li>
                      <li>Sports & Outdoor</li>
                      <li>Baby’s & Toys</li>
                      <li>Groceries & Pets</li>
                      <li>Health & Beauty</li>
                    </ul>
                  </div>

                  <div className="flex-col flex">
                    <div className="text-teal-500 font-bold text-xl border-l-8  border-teal-500 px-3 rounded-2xl mb-4">
                      Go to
                    </div>
                    <NavLink
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? " text-blue-600 flex flex-row gap-2 items-center"
                          : "text-gray-800 flex flex-row gap-2 items-center"
                      }
                    >
                      <i className="fa-solid fa-house text-[16px]"></i> Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? " text-blue-600 flex flex-row gap-2 items-center"
                          : "text-gray-800 flex flex-row gap-2 items-center"
                      }
                    >
                      <i className="fa-solid fa-circle-info text-[16px]"></i>{" "}
                      About
                    </NavLink>
                    <NavLink
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? " text-blue-600 flex flex-row gap-2 items-center"
                          : "text-gray-800 flex flex-row gap-2 items-center"
                      }
                    >
                      <i className="fa-solid fa-phone text-[16px]"></i> Contact
                    </NavLink>
                    <NavLink
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? " text-blue-600 flex flex-row gap-2 items-center"
                          : "text-gray-800 flex flex-row gap-2 items-center"
                      }
                    >
                      <i className="fa-solid fa-file-signature text-[16px]"></i>{" "}
                      Signup
                    </NavLink>
                  </div>
                </nav>
              </div>
            </div>

            <div className="hidden lg:flex lg:gap-3 cursor-pointer items-center">
              <Link to="/Wishlist" className="hover:scale-105 transition">
                <img src={wishlist} alt="Wishlist" />
              </Link>
              <Link to="/Cart" className="hover:scale-105 transition">
                <img src={cart} alt="Cart" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
