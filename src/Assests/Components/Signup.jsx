import React from "react";
import Header from "./Header";
import sideimg from "../Images/Side Image.png";
import googleLogo from "../Images/Svg/Icon-Google.svg";
import Footer from "./Footer";

export default function Signup() {
  return (
    <div>
      <div id="signup">
        {/* Header */}
        <Header />

        {/* Signup section */}

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 gap-y-10  pt-10 lg:pb-[5rem] pb-[2rem] ">
          <div className="w-full shadow-all-sides ">
            <img src={sideimg} className="w-full" />
          </div>
          <div className="flex items-center justify-center py-10  ">
            <div className="lg:w-[70%] shadow-all-sides p-4 ">
              <h1 className="2xl:text-[36px] md:text-[28px] text-[23px]  py-3">
                Create an account
              </h1>
              <h7>Enter your details below</h7>
              <div className="py-5 flex flex-col gap-y-8">
                <div className="border-b border-[#b0b0b0] ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="outline-none"
                  />
                </div>

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

              <div>
                <div className="flex items-center justify-center py-5">
                  <button className="bg-[#DB4444] text-white w-full py-3 rounded-sm hover:bg-[#f67272]   ">
                    Create Account
                  </button>
                </div>

                <div className=" w-full py-3 rounded-sm flex items-center justify-center gap-2 border border-[#b0b0b0] cursor-pointer hover:bg-[#f3c8c8] hover:text-white hover:border-[#f67272] ">
                  <img src={googleLogo} />
                  Sign up with Google
                </div>

                <div className="flex flex-wrap lg:gap-2 pt-6 w-[80%] mx-auto">
                  <h7 className="whitespace-nowrap">Already have account?</h7>
                  <a href="login" className="underline whitespace-nowrap ">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Footer*/}
        <Footer />
      </div>
    </div>
  );
}
