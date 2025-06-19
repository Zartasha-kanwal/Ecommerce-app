import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import phoneIcon from "../Images/Svg/icons-phone.svg";
import mailIcon from "../Images/Svg/icons-mail.svg";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="pt-11">
        <div className=" px-9 ">
          <span className="text-[gray]">Home /</span>
          <span>Contact</span>
        </div>
      </div>
      
      {/*Main content */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="shadow-all-sides lg:w-2/6 2xl:w-1/3 w-[80%] mx-auto 2xl:px-8 2xl:py-[5rem] py-[2rem] ">
          <div className="pt-[2rem]  px-4 py-2 ">
            <div className="flex items-center  gap-2 2xl:gap-4">
              <img src={phoneIcon} className="2xl:h-[5rem]" />
              <h6 className="font-semibold 2xl:text-6xl">Call To Us</h6>
            </div>
            <p className="pb-2 pt-4 2xl:pt-11 2xl:text-3xl">
              We are available 24/7, 7 days a week.
            </p>
            <p className="py-2 2xl:text-3xl">Phone: +8801611112222</p>
          </div>

          <div className="border-b-2 border-[#565656] w-[70%] mx-auto py-6"></div>

          <div className="pt-[2rem] 2xl:pt-[4rem]  px-4 py-2 ">
            <div className="flex items-center  gap-2 2xl:gap-4">
              <img src={mailIcon} className="2xl:h-[5rem]" />
              <h6 className="font-semibold 2xl:text-6xl">Write To US</h6>
            </div>
            <p className="pb-2 pt-4 2xl:pt-11 2xl:text-3xl">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="py-2 2xl:text-3xl">Emails: customer@exclusive.com</p>
            <p className="py-2 2xl:text-3xl">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
