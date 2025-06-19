import React from "react";
import Heroimg from "../Images/Frame 560.png";
export default function Herosection() {
  return (
    <div>
      <div className="grid lg:grid-cols-[30%_70%] grid-cols-1 w-fit h-fit  mx-auto lg:px-0 xl:px-20 px-4 pt-5 pb-5 max-sm:pt-0 md:pt-5 ">
        <div>
          <ul className="text-black  font-normal text-[16px] xl:text-xl hidden lg:flex flex-col   items-start justify-center xl:px-14 cursor-pointer">
            <li className="hover:underline  whitespace-nowrap">
              Woman’s Fashion{" "}
            </li>
            <li className="hover:underline  whitespace-nowrap">
              Men’s Fashion
            </li>
            <li className="hover:underline  whitespace-nowrap">Electronics</li>
            <li className="hover:underline  whitespace-nowrap">
              Home & Lifestyle
            </li>
            <li className="hover:underline  whitespace-nowrap">Medicine</li>
            <li className="hover:underline  whitespace-nowrap">
              Sports & Outdoor
            </li>
            <li className="hover:underline  whitespace-nowrap">
              Baby’s & Toys
            </li>
            <li className="hover:underline  whitespace-nowrap">
              Groceries & Pets
            </li>
            <li className="hover:underline  whitespace-nowrap">
              Health & Beauty
            </li>
          </ul>
        </div>

        <div>
          <img src={Heroimg} className="h-full 2xl:w-full" />
        </div>
      </div>
    </div>
  );
}
