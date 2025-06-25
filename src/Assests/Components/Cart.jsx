import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty, // qty field from context
    0
  );

  return (
    <div id="cart" className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="lg:px-5 py-8 px-3">
          <div>
            <span className="text-[gray]">Home / </span>
            <span>cart</span>
          </div>

          <div className="lg:px-16">
            <div className="py-14 overflow-x-auto">
              <table className="min-w-full  text-left text-sm border border-gray-200">
                <thead className="bg-gray-100 text-gray-700 uppercase">
                  <tr>
                    <th className="w-10 border-b" /> {/* for the × button */}
                    <th className="px-6 py-3 border-b">Product</th>
                    <th className="px-6 py-3 border-b">Price</th>
                    <th className="px-6 py-3 border-b">Quantity</th>
                    <th className="px-6 py-3 border-b">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {cart.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 border-b">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                          className=" w-6 h-6 rounded-full flex items-center justify-center
                        text-white text-lg bg-[#DB4444] hover:text-[#DB4444] hover:bg-[#f5b7b7]
                           transition"
                        >
                          &times;
                        </button>
                      </td>
                      <td className=" px-2 py-4 border-b flex gap-2 items-center">
                        <img
                          src={item.thumb}
                          alt={item.name}
                          className="h-10 w-11"
                        />
                        <span className="lg:text-sm text-xs">{item.name}</span>
                      </td>
                      <td className="lg:px-6 py-4 border-b lg:text-sm text-xs px-8">
                        ${item.price}
                      </td>
                      {/* Quantity controls 👇 */}
                      <td className="px-6 py-4 border-b  text-black">
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) => updateQty(item.id, e.target.value)}
                          className="w-16 border rounded text-center"
                        />
                      </td>

                      <td className="px-6 py-4 border-b">
                        ${item.price * item.qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-[2px] rounded-sm border-[gray] lg:w-[30%]  w-[80%] mx-auto p-6">
              <h6 className="text-[20px]">Cart Total</h6>

              <div className="py-2 border-b border-black">
                <div className="flex justify-between items-center text-sm">
                  <h6 className="text-start">Subtotal:</h6>
                  <h6>${total}</h6>
                </div>
              </div>

              <div className="py-2 border-b border-black pt-5">
                <div className="flex justify-between items-center text-sm">
                  <h6 className="text-start">Shipping</h6>
                  <h6>Free</h6>
                </div>
              </div>

              <div className="py-2 pt-5">
                <div className="flex justify-between items-center text-sm">
                  <h6 className="text-start">Total:</h6>
                  <h6>${total}</h6>
                </div>
              </div>

              <div className="flex items-center justify-center pt-2">
                <Link to="/checkout">
                  <button className="bg-[#DB4444] text-white lg:px-7 px-4 font-semibold py-2 lg:text-lg text-md rounded-sm hover:bg-[#f67272] transition duration-300">
                    Proceed to checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
