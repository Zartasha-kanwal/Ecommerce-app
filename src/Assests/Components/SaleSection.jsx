import React, { useEffect, useState } from "react";
import Gamepad from "../Images/Cart (17).png";
import Wiredkeyboard from "../Images/Cart (18).png";
import Gamingmonitor from "../Images/Cart (16).png";
import Comfortchair from "../Images/Cart With Flat Discount.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SaleSection() {
  const initialTime = (((3 * 24 + 23) * 60 + 19) * 60 + 56) * 1000; // in ms
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = initialTime - elapsed;

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-9 xl:px-[5rem]  px-4">
        <div className="flex gap-2 items-center">
          <div className="px-[6px] py-[14px] bg-[#DB4444] rounded-sm"></div>
          <div className="text-sm font-semibold text-[#DB4444]">Today's</div>
        </div>

        <div className="flex lg:gap-[6rem] gap-x-6 items-center max-sm:flex-wrap ">
          <div className="lg:text-[36px] font-semibold py-2 text-[20px]">
            Flash Sales
          </div>

          <div className="flex  gap-1 lg:gap-2 items-center ">
            <div className="flex flex-col gap-1 ">
              <h4 className="text-sm text-center">Days</h4>
              <div className="flex items-center justify-center font-bold text-xl">
                {days}
              </div>
            </div>
            <div className="flex items-end justify-center h-full text-[#DB4444] font-bold w-0">
              :
            </div>

            <div className="flex flex-col gap-1 ">
              <h4 className="text-sm">Hours</h4>
              <div className="flex items-center justify-center font-bold text-xl">
                {hours}
              </div>
            </div>
            <div className="flex items-end justify-center h-full text-[#DB4444] font-bold w-0">
              :
            </div>

            <div className="flex flex-col gap-1 ">
              <h4 className="text-sm">Minutes</h4>
              <div className="flex items-center justify-center font-bold text-xl">
                {minutes}
              </div>
            </div>
            <div className="flex items-end justify-center text-[#DB4444] font-bold  ">
              :
            </div>

            <div className="flex flex-col gap-1  ">
              <h4 className="text-sm ">Seconds</h4>
              <div className="flex items-center justify-center font-bold text-xl">
                {seconds}
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-3 lg:gap-8 xl:gap-[50px] w-max py-6">
            {/* Invisible spacing element to create initial 5px gap */}
            <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>
            <Link to="/product/1">
              <img src={Gamepad} className="shrink-0 snap-start " />
            </Link>
            <Link to="/product/2">
              <img src={Wiredkeyboard} className="shrink-0 snap-start" />
            </Link>
            <Link to="/product/3">
              <img src={Gamingmonitor} className="shrink-0 snap-start" />
            </Link>

            <Link to="/product/4">
              {" "}
              <img src={Comfortchair} className="shrink-0 snap-start" />
            </Link>
            <Link to="/product/5">
              {" "}
              <img src={Gamingmonitor} className="shrink-0 snap-start" />
            </Link>
            <Link to="/product/6">
              {" "}
              <img src={Comfortchair} className="shrink-0 snap-start" />
            </Link>
            <Link to="/product/7">
              {" "}
              <img src={Gamepad} className="shrink-0 snap-start " />
            </Link>
            <Link to="/product/8">
              <img src={Wiredkeyboard} className="shrink-0 snap-start" />
            </Link>

            {/* Invisible spacing element to create initial 5px gap */}
            <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>
          </div>
        </div>

        <div className="flex items-center justify-center py-5">
          <button
            className="bg-[#DB4444] text-white px-7 py-3 rounded-sm hover:bg-[#f67272] transition duration-300   "
            onClick={() => navigate("/all-products")}
          >
            View all products
          </button>
        </div>
      </div>
    </div>
  );
}
