import React from "react";
import Header from "./Header";
import sideimg from "../Images/Side Image.png";
import googleLogo from "../Images/Svg/Icon-Google.svg";
import Footer from "./Footer";

export default function Login() {
  return (
    <div id="login">
      {/* Header */}
      <Header />

      {/* Signup section */}

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 gap-y-10  pt-10 lg:pb-[5rem] pb-[2rem] ">
        <div className="w-full shadow-all-sides ">
          <img src={sideimg} className="w-full" />
        </div>
        <div className="flex items-center justify-center py-10  ">
          <div className="lg:w-[70%] shadow-[inset_0_0_15px_3px_rgba(0,0,0,0.3)] p-4 ">
            <h1 className="2xl:text-[36px] md:text-[28px] text-[23px]  py-3">
              Log in to Exclusive
            </h1>
            <h7>Enter your details below</h7>
            <div className="py-5 flex flex-col gap-y-8">
              <div className="border-b border-[#b0b0b0] ">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="outline-none"
                />
              </div>

              <div className="border-b border-[#b0b0b0] ">
                <input
                  type="text"
                  placeholder="Password"
                  className="outline-none"
                />
              </div>
            </div>

            <div className="flex  items-center justify-between">
              <div className="flex  items-center justify-center py-5">
                <button className="bg-[#DB4444] text-white px-6 py-3 rounded-sm hover:bg-[#f67272]   ">
                  Log In
                </button>
              </div>

              <h7 className="whitespace-nowrap text-[#f67272]">
                Forget Password?
              </h7>
            </div>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <Footer />
    </div>
  );
}
