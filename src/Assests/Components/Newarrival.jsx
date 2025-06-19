import React from "react";
import playstation from "../Images/Frame 684.png";
import womencollection from "../Images/Frame 685.png";
import speaker from "../Images/Frame 686.png";
import perfume from "../Images/Frame 687.png";
import fastDelivery from "../Images/Frame 701.png";
import customerservice from "../Images/Frame 702.png";
import moneyBackgauranttee from "../Images/Frame 704.png";

export default function Newarrival() {
  return (
    <div>
      <div className="py-9 xl:px-[4rem]  px-4 ">
        <div className="flex gap-2 items-center">
          <div className="px-[6px] py-[14px] bg-[#DB4444] rounded-sm"></div>
          <div className="text-sm font-semibold text-[#DB4444]">Featured</div>
        </div>

        <div className="pt-1 ">
          <div className="lg:text-[36px] font-semibold py-2 text-[20px]">
            New Arrival
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-8 cursor-pointer">
          <div className="w-full">
            <img src={playstation} className="w-full" />
          </div>

          <div className="grid grid-rows-2 w-full gap-4">
            <div className="w-full">
              <img src={womencollection} className="w-full" />
            </div>

            <div className="grid grid-cols-2 w-full gap-4">
              <img src={speaker} className="w-full" />
              <img src={perfume} className="w-full" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center cursor-pointer w-2/4 gap-6 mx-auto md:py-[6rem] py-[4rem] 2xl:py-[10rem] sm:w-1/4 max-sm:w-2/5 md:w-2/4 max-sm:flex-wrap sm:flex-wrap md:flex-nowrap">
          <div className="w-full">
            <img src={fastDelivery} className="w-full" />
          </div>

          <div className="w-full">
            <img src={customerservice} className="w-full" />
          </div>

          <div className="w-full">
            <img src={moneyBackgauranttee} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
