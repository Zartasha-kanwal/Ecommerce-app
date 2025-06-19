import React from "react";
import coat from "../Images/sellingproduct-coat-img.png";
import bag from "../Images/sellingproduct-bag-img.png";
import cpucooler from "../Images/sellingproduct-cooler-img.png";
import bookshelf from "../Images/sellingproduct-bookshelf-img.png";
import musicexperience from '../Images/Frame 600.png';

export default function Sellingproduct() {
  return (
    <div>
      <div className="w-[80%] mx-auto border-t border-gray-300 my-8"></div>
      <div className="py-9 xl:px-[4rem]  px-4">
        <div className="flex gap-2 items-center">
          <div className="px-[6px] py-[14px] bg-[#DB4444] rounded-sm"></div>
          <div className="text-sm font-semibold text-[#DB4444]">This Month</div>
        </div>

        <div className="pt-1 flex items-center justify-between max-sm:flex-col max-sm:items-start">
          <div className="lg:text-[36px] font-semibold py-2 text-[20px]">
            Best Selling Products
          </div>
          <button className=" bg-[#DB4444] text-white md:px-6 md:py-2 px-3 py-1 md:text-lg text-sm rounded-sm hover:bg-[#f67272] transition duration-300">
            View All
          </button>
        </div>

        <div className="pt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-7 cursor-pointer  2xl:px-14">
          <div className=" flex items-center justify-center">
            <img src={coat} />
          </div>

          <div className=" flex items-center justify-center">
            <img src={bag} className="2xl:w-[45%]" />
          </div>

          <div className=" flex items-center justify-center">
            <img src={cpucooler} className="2xl:w-[45%]" />
          </div>

          <div className=" flex items-center justify-center">
            <img src={bookshelf} className="2xl:w-[45%]" />
          </div>
        </div>


        <div className="w-full pt-8 2xl:pt-20 max-sm:h-[200px]  2xl:h-[800px] 2xl:w-[100%] cursor-pointer">
          <img src={musicexperience} className="max-sm:h-[200px] 2xl:h-[800px] 2xl:w-[100%]"/>

        </div>
      </div>
    </div>
  );
}
