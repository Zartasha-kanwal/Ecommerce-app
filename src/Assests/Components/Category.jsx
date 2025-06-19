import React from "react";
import cellphone from "../Images/Category-CellPhone.png";
import computer from "../Images/Category-Computer.png";
import smartwatch from "../Images/Category-SmartWatch.png";
import camera from "../Images/Category-Camera.png";
import headphones from "../Images/Category-Headphone.png";
import gaming from "../Images/Category-Gamepad.png";

export default function Category() {
  return (
    <div>
      <div className="w-[80%] mx-auto border-t border-gray-300 my-8"></div>

      <div className="py-9 xl:px-[4rem]  px-4 ">
        <div className="flex gap-2 items-center">
          <div className="px-[6px] py-[14px] bg-[#DB4444] rounded-sm"></div>
          <div className="text-sm font-semibold text-[#DB4444]">Categories</div>
        </div>

        <div className="pt-1 ">
          <div className="lg:text-[36px] font-semibold py-2 text-[20px]">
            Browse By Category
          </div>

          <div className="flex  lg:items-center lg:justify-center pt-8 pb-5  relative overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-3 lg:gap-[18px] 2xl:gap-[60px] w-max py-6">
              {/* Invisible spacing element to create initial 5px gap */}
              <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>

              <div className="shrink-0 snap-start flex gap-2 items-center justify-center 2xl:w-[16.5%] 2xl:h-[250px] shadow-all-sides hover:bg-[#DB4444] group transition duration-300 ">
                <div className=" flex-col  lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-11  cursor-pointer group-hover:text-white">
                  <img
                    src={cellphone}
                    className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200 transition duration-100 2xl:h-[100px] "
                  />
                  <h5 className="lg:pt-5 pt-3 2xl:text-xl text-center max-sm:text-sm">
                    Phones
                  </h5>
                </div>
              </div>

              <div className="shrink-0 snap-start flex gap-2 items-center justify-center 2xl:w-[16.5%] 2xl:h-[250px] shadow-all-sides hover:bg-[#DB4444] group transition duration-300 ">
                <div className=" flex-col  lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-8  cursor-pointer group-hover:text-white">
                  <img
                    src={computer}
                    className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200 transition duration-100 2xl:h-[100px] pl-2 "
                  />
                  <h5 className="lg:pt-5 pt-3 2xl:text-xl text-center max-sm:text-sm">
                    Computer
                  </h5>
                </div>
              </div>

              <div className="shrink-0 snap-start flex gap-2 items-center justify-center 2xl:w-[16.5%] 2xl:h-[250px] shadow-all-sides hover:bg-[#DB4444] group  transition duration-300">
                <div className=" flex-col  lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-8  cursor-pointer group-hover:text-white">
                  <img
                    src={smartwatch}
                    className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200 transition duration-100 2xl:h-[100px] pl-3 "
                  />
                  <h5 className="lg:pt-5 pt-3 2xl:text-xl text-center max-sm:text-sm">
                    SmartWatch
                  </h5>
                </div>
              </div>

              <div className="shrink-0 snap-start flex gap-2 items-center justify-center 2xl:w-[16.5%] 2xl:h-[250px] shadow-all-sides hover:bg-[#DB4444] group transition duration-300">
                <div className=" flex-col  lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-11  cursor-pointer group-hover:text-white">
                  <img
                    src={camera}
                    className="  group-hover:contrast-200 transition duration-100 2xl:h-[100px] filter brightness-0 group-hover:brightness-200 "
                  />
                  <h5 className="lg:pt-5 pt-3 2xl:text-xl text-center max-sm:text-sm">
                    Camera
                  </h5>
                </div>
              </div>

              <div className="shrink-0 snap-start flex gap-2 items-center justify-center 2xl:w-[16.5%] 2xl:h-[250px] shadow-all-sides hover:bg-[#DB4444] group transition duration-300 ">
                <div className=" flex-col  lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-8  cursor-pointer group-hover:text-white">
                  <img
                    src={headphones}
                    className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200 transition duration-100 2xl:h-[100px] pl-3"
                  />
                  <h5 className="lg:pt-5 pt-3 2xl:text-xl text-center max-sm:text-sm">
                    Headphones
                  </h5>
                </div>
              </div>

              <div className="shrink-0 snap-start flex gap-2 items-center justify-center 2xl:w-[16.5%] 2xl:h-[250px] shadow-all-sides hover:bg-[#DB4444] group transition duration-300 ">
                <div className=" flex-col  lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-11  cursor-pointer group-hover:text-white">
                  <img
                    src={gaming}
                    className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200 transition duration-100 2xl:h-[100px] "
                  />
                  <h5 className="lg:pt-5 pt-3 2xl:text-xl text-center max-sm:text-sm">
                    Gaming
                  </h5>
                </div>
              </div>

              {/* Invisible spacing element to create initial 5px gap */}
              <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
