import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import aboutImg from "../Images/Side Image (1).png";
import activeSeller from "../Images/About-activeSellers.png";
import monthlySale from "../Images/About-monthlySale.png";
import activeCustomer from "../Images/About-activeCustomers.png";
import annualsale from "../Images/About-anualSale.png";
import aboutDirector from "../Images/About-director.png";
import aboutDesigner from "../Images/About-designer.png";
import aboutChairman from "../Images/About-chairman.png";
import dots from '../Images/Dots.png';
import fastDelivery from '../Images/Frame 701.png';
import customerservice from '../Images/Frame 702.png';
import moneyBackgauranttee from '../Images/Frame 704.png';

export default function About() {
  return (
    <div>
      <Header />

      <div className="pt-11">
        <div className=" px-9 ">
          <span className="text-[gray]">Home /</span>
          <span>About</span>
        </div>

        {/* About area*/}

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-9 pt-11 pb-[4rem] ">
          <div className="flex items-center justify-center  lg:px-9 px-4">
            <div>
              <h5 className="lg:text-[54px] 2xl:text-[75px] text-[20px] font-semibold">
                Our Story
              </h5>
              <p className="py-4 2xl:text-[32px]">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p className="2xl:text-[32px]">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>

          <div className="w-full">
            <img src={aboutImg} className="w-full" />
          </div>
        </div>

        {/* Card area*/}
        <div className="flex  lg:items-center lg:justify-center pt-8 pb-5  relative overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-5 lg:gap-[18px] 2xl:gap-[60px] w-max py-6">
            {/* Invisible spacing element to create initial 5px gap */}
            <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>

            <div className="shrink-0 snap-start flex gap-2 items-center justify-center  shadow-all-sides hover:bg-[#DB4444] group transition duration-300 ">
              <div className=" flex-col items-center justify-center   lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-11  cursor-pointer group ">
                <div className="flex justify-center items-center">
                  <img src={activeSeller} className=" 2xl:h-[100px] " />
                </div>
                <div className="group-hover:text-white group transition duration-300 pt-3">
                  <h5 className="text-xl font-bold text-center">10.5k </h5>
                  <p className="text-sm">Sallers active our site</p>
                </div>
              </div>
            </div>

            <div className="shrink-0 snap-start flex gap-2 items-center justify-center  shadow-all-sides hover:bg-[#DB4444] group transition duration-300 ">
              <div className=" flex-col items-center justify-center   lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-11  cursor-pointer group ">
                <div className="flex justify-center items-center">
                  <img src={monthlySale} className=" 2xl:h-[100px] " />
                </div>
                <div className="group-hover:text-white group transition duration-300 pt-3">
                  <h5 className="text-xl font-bold text-center">33k </h5>
                  <p className="text-sm">Monthly Produduct Sale</p>
                </div>
              </div>
            </div>

            <div className="shrink-0 snap-start flex gap-2 items-center justify-center  shadow-all-sides hover:bg-[#DB4444] group transition duration-300 ">
              <div className=" flex-col items-center justify-center   lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-11  cursor-pointer group ">
                <div className="flex justify-center items-center">
                  <img src={activeCustomer} className=" 2xl:h-[100px] " />
                </div>
                <div className="group-hover:text-white group transition duration-300 pt-3">
                  <h5 className="text-xl font-bold text-center">45.5k </h5>
                  <p className="text-sm">Customer active in our site</p>
                </div>
              </div>
            </div>
            <div className="shrink-0 snap-start flex gap-2 items-center justify-center  shadow-all-sides hover:bg-[#DB4444] group transition duration-300 ">
              <div className=" flex-col items-center justify-center   lg:py-5 lg:px-11 2xl:py-9 2xl:px-24 py-5  px-11  cursor-pointer group ">
                <div className="flex justify-center items-center">
                  <img src={annualsale} className=" 2xl:h-[100px] " />
                </div>
                <div className="group-hover:text-white group transition duration-300 pt-3">
                  <h5 className="text-xl font-bold text-center">25k </h5>
                  <p className="text-sm">Anual gross sale in our site</p>
                </div>
              </div>
            </div>

            {/* Invisible spacing element to create initial 5px gap */}
            <div className="pointer-events-none snap-start shrink-0 w-[5px]"></div>
          </div>
        </div>

        {/* Director/manager area*/}
        <div className="pt-[4rem] pb-[5rem] 2xl:pb-[7rem]">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 px-8 lg:px-[7rem] 2xl:px-[30rem] ">
            <div className="flex items-center justify-center">
              <img src={aboutChairman} />
            </div>

            <div className="flex items-center justify-center">
              <img src={aboutDirector} />
            </div>

            <div className="flex items-center justify-center">
              <img src={aboutDesigner} />
            </div>
          </div>
          <div className=" pt-[2rem] mx-auto w-[20%] flex items-center justify-center ">
            <img src={dots}/>
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

      <Footer />
    </div>
  );
}
