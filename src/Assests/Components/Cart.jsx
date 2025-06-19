import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import monitor from "../Images/Monitor-Cart-Small.png";
import gamepad from "../Images/Gamepad-Cart-Small.png";

export default function Cart() {
  return (
    <div id="cart">
      <Header />

      {/* Cart section*/}

      <div className="lg:px-5 py-8">
        <div>
          <span className="text-[gray]">Home / </span>
          <span>cart</span>
        </div>

        <div className="lg:px-16">
          <div className="py-14">
            <table className="min-w-full text-left text-sm border border-gray-200">
              <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                  <th className="px-6 py-3 border-b">Product</th>
                  <th className="px-6 py-3 border-b">Price</th>
                  <th className="px-6 py-3 border-b">Quantity</th>
                  <th className="px-6 py-3 border-b">Subtotal</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b flex gap-2 items-center justify-start">
                    <img src={monitor} />
                    <span>LCD Monitor</span>
                  </td>
                  <td className="px-6 py-4 border-b">$650</td>
                  <td className="px-6 py-4 border-b">
                    <input type="number" value={1} />
                  </td>
                  <td className="px-6 py-4 border-b">$650</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b flex gap-2 items-center justify-start">
                    <img src={gamepad} />
                    <span>H1 Gamepad</span>
                  </td>
                  <td className="px-6 py-4 border-b">$550</td>
                  <td className="px-6 py-4 border-b">
                    <input type="number" value={2} />
                  </td>
                  <td className="px-6 py-4 border-b">$1100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-[2px] rounded-sm border-[gray] w-[30%] mx-auto p-6">
            <h6 className="text-[20px]">Cart Total</h6>
            <div className="py-2 border-b border-black">
              <div className="flex justify-between items-center text-sm">
                <h6 className="text-start">Subtotal:</h6>
                <h6>$1750</h6>
              </div>
            </div>

            <div className="py-2 border-b border-black pt-5">
              <div className="flex justify-between items-center text-sm">
                <h6 className="text-start">Shipping</h6>
                <h6>Free</h6>
              </div>
            </div>

            <div className="py-2  pt-5">
              <div className="flex justify-between items-center text-sm">
                <h6 className="text-start">Total:</h6>
                <h6>$1750</h6>
              </div>
            </div>

            <div className="flex items-center justify-center pt-2">
              <button className="bg-[#DB4444] text-white px-7 py-2 rounded-sm hover:bg-[#f67272] transition duration-300   ">
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
