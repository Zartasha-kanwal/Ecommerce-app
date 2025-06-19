import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bag from "../Images/sellingproduct-bag-img.png";
import cpuCooler from "../Images/sellingproduct-cooler-img.png";
import Usbgamepad from "../Images/Exploreproduct-gamepad.png";
import jacket from "../Images/Exploreproduct-jacket.png";
import laptop from "../Images/Exploreproduct-laptop.png";
import monitor from "../Images/Cart (16).png";
import G92gamepad from "../Images/Cart (17).png";
import keyboard from "../Images/Cart (18).png";

export default function Wishlist() {
  return (
    <div id="wishlist">
      <Header />

      {/* Wishlist section*/}
      <div className="pt-11 px-11">
        <div className="flex justify-between items-center">
          <h6>Wishlist (4)</h6>
          <button className=" border border-black  px-7 py-2 rounded-sm hover:bg-[gray] hover:text-white transition duration-300   ">
            Move All To Bag
          </button>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 pt-[4rem] pb-[3rem]  px-10 border-b border-[gray]">
          <div className="flex items-center justify-center">
            <img src={bag} />
          </div>
          <div className="flex items-center justify-center">
            <img src={cpuCooler} />
          </div>
          <div className="flex items-center justify-center">
            <img src={Usbgamepad} />
          </div>
          <div className="flex items-center justify-center">
            <img src={jacket} />
          </div>
        </div>

        <div className="pb-[4rem] pt-[1rem]">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="px-[6px] py-[14px] bg-[#DB4444] rounded-sm"></div>
              <div className="text-md ">Just For You</div>
            </div>
            <button className=" border border-black  px-7 py-2 rounded-sm hover:bg-[gray] hover:text-white transition duration-300   ">
              See All
            </button>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 py-8  px-10">
            <div className="flex items-center justify-center">
              <img src={laptop} />
            </div>
            <div className="flex items-center justify-center">
              <img src={monitor} />
            </div>
            <div className="flex items-center justify-center">
              <img src={G92gamepad} />
            </div>
            <div className="flex items-center justify-center">
              <img src={keyboard} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
