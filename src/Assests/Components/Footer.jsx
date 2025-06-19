import React from "react";
import iconsend from "../Images/Svg/icon-send.svg";
import Qrcode from "../Images/Qr Code.png";
import downloadAppstore from "../Images/download-appstore.png";
import downloadGooglestore from "../Images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import Fb from "../Images/Svg/Icon-Facebook.svg";
import insta from "../Images/Svg/icon-instagram.svg";
import twitter from "../Images/Svg/Icon-Twitter.svg";
import linkedIn from "../Images/Svg/Icon-Linkedin.svg";
export default function Footer() {
  return (
    <div>
      <div className="bg-black py-9 lg:px-16 px-6  2xl:px-[28rem]">
        <div className="flex justify-between max-sm:gap-6 flex-wrap gap-y-9">
          <div className="text-white flex flex-col gap-3 ">
            <h1 className="text-[24px] font-bold">Exclusive</h1>
            <h5 className="text-[20px] ">Subscribe</h5>
            <h7>Get 10% off your first order</h7>
            <div className="bg-black py-1 px-2 border border-white rounded-sm flex justify-between w-[80%] ">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent outline-none w-4/5"
              />
              <img src={iconsend} />
            </div>
          </div>

          <div className="text-white ">
            <ul className="text-[20px]  flex flex-col items-start gap-3">
              Support
              <li className="text-[16px] ">
                111 Bijoy sarani, Dhaka,
                <li className="text-[16px] ">DH 1515, Bangladesh.</li>
              </li>
              <li className="text-[16px] ">exclusive@gmail.com</li>
              <li className="text-[16px] ">+88015-88888-9999</li>
            </ul>
          </div>

          <div className="text-white ">
            <ul className="text-[20px]  flex flex-col  gap-3">
              Account
              <li className="text-[16px] ">My Account</li>
              <li className="text-[16px] ">
                <a href="signup">Login / Register</a>
              </li>
              <li className="text-[16px] ">
                <a href="cart">Cart</a>
              </li>
              <li className="text-[16px] ">
                {" "}
                <a href="wishlist">Wishlist</a>
              </li>
              <li className="text-[16px] ">
                {" "}
                <a href="/#home">Shop</a>
              </li>
            </ul>
          </div>

          <div className="text-white cursor-pointer  ">
            <ul className="text-[20px]  flex flex-col gap-3 ">
              Quick Link
              <li className="text-[16px] ">Privacy Policy</li>
              <li className="text-[16px] ">Terms Of Use</li>
              <li className="text-[16px] ">FAQ</li>
              <li className="text-[16px] ">Contact</li>
            </ul>
          </div>

          <div className="text-white ">
            <h5 className="text-[20px]">Download App</h5>
            <h7 className="text-[12px] pt-3">Save $3 with App New User Only</h7>
            <div className="grid grid-cols-2 pt-2 cursor-pointer ">
              <div className="flex items-center justify-center">
                <img src={Qrcode} />
              </div>
              <div className="grid grid-rows-2 w-full ">
                <img src={downloadAppstore} className=" w-full" />
                <img src={downloadGooglestore} className=" w-full" />
              </div>
            </div>

            <div className="flex pt-4 gap-3 cursor-pointer">
              <img src={Fb} />
              <img src={twitter} />
              <img src={insta} />
              <img src={linkedIn} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#030406] border-t border-[#1b1b1b] py-4">
        <div className="text-[#8d8c8c] text-center md:text-[16px] max-sm:text-sm sm:text-sm">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </div>
  );
}
