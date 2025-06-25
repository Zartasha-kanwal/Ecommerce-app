import React from "react";
import Dogfood from "../Images/Exploreproduct-dogfood.png";
import camera from "../Images/Exploreproduct-camera.png";
import electricCar from "../Images/Exploreproduct-Electriccar.png";
import cleats from "../Images/Exploreproduct-cleats.png";
import gamePad from "../Images/Exploreproduct-gamepad.png";
import jacket from "../Images/Exploreproduct-jacket.png";
import productSet from "../Images/Exploreproduct-productset.png";
import laptop from "../Images/Exploreproduct-laptop.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Exploreproduct() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-9 xl:px-[4rem]  px-4 ">
        <div className="flex gap-2 items-center">
          <div className="px-[6px] py-[14px] bg-[#DB4444] rounded-sm"></div>
          <div className="text-sm font-semibold text-[#DB4444]">
            Our Products
          </div>
        </div>

        <div className="pt-1 ">
          <div className="lg:text-[36px] font-semibold py-2 text-[20px]">
            Explore Our Products
          </div>
        </div>

        <div className="pt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3 max-sm:px-4 sm:px-2 cursor-pointer">
          <Link to="/product/13">
            {" "}
            <div className="flex items-center justify-center w-full">
              <img src={Dogfood} className="w-full" />
            </div>
          </Link>

          <Link to="/product/14">
            {" "}
            <div className="flex items-center justify-center  w-full">
              <img src={camera} className="w-full" />
            </div>
          </Link>

          <Link to="/product/15">
            <div className="flex items-center justify-center  w-full">
              <img src={laptop} className="w-full" />
            </div>
          </Link>

          <Link to="/product/16">
            <div className="flex items-center justify-center  w-full">
              <img src={productSet} className="w-full" />
            </div>
          </Link>

          <Link to="/product/17">
            {" "}
            <div className="flex items-center justify-center  w-full">
              <img src={electricCar} className="w-full" />
            </div>
          </Link>

          <Link to="/product/18">
            <div className="flex items-center justify-center w-full">
              <img src={cleats} className="w-full" />
            </div>
          </Link>
          <Link to="/product/19">
            <div className="flex items-center justify-center  w-full">
              <img src={gamePad} className="w-full" />
            </div>
          </Link>
          <Link to="/product/20">
            <div className="flex items-center justify-center  w-full">
              <img src={jacket} className="w-full" />
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center pt-14 pb-3">
          <button
            className="bg-[#DB4444] text-white px-7 py-3 rounded-sm hover:bg-[#f67272] transition duration-300  "
            onClick={() => navigate("/all-products")}
          >
            View all products
          </button>
        </div>
      </div>
    </div>
  );
}
