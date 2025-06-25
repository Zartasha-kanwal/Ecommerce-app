import React, { useState } from "react";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Checkout() {
  const { cart, clearCart, removeFromCart } = useCart(); // removeFromCart 
  const [payment, setPayment] = useState("bank"); // bank | cod
  const [coupon, setCoupon] = useState("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 0; // free
  const total = subtotal + shipping;

  const applyCoupon = () => {
    if (!coupon) return toast.info("Please enter a coupon code");
    // ✨ Your coupon logic here (example: 10% off on code 'SAVE10')
    if (coupon.toUpperCase() === "SAVE10") {
      toast.success("Coupon applied: 10% off");
      // …apply discount in state if you like
    } else {
      toast.error("Invalid coupon");
    }
  };

  const placeOrder = () => {
    if (!cart.length) return;
    toast.success("Order placed! Thank you 😊");
    clearCart();  
      localStorage.removeItem("cart");
  };

  return (
    <div>
      <Header />

      <div className="pt-11">
        <div className=" px-9 ">
          <span className="text-[gray]">Home /</span>
          <span>Checkout</span>
        </div>
      </div>
      <div className="px-5 py-8 ">
        {/* ❌ Cart empty */}
        {!cart.length && (
          <div className="text-center text-gray-600">
            There was no product in your cart.{" "}
            <Link to="/" className="text-blue-600 underline">
              Continue shopping
            </Link>
          </div>
        )}

        {/* ✅ Cart has items */}
        {cart.length > 0 && (
          <>
            <div className="overflow-x-auto py-8 lg:px-9">
              {/* Items table */}
              <table className="w-full  text-left text-sm border border-gray-200 mb-6">
                <thead className="bg-gray-100 uppercase">
                  <tr>
                    <th className="px-4 py-2 border-b">Product</th>
                    <th className="px-4 py-2 border-b text-right">Qty</th>
                    <th className="px-4 py-2 border-b text-right">Price</th>
                    <th className="px-4 py-2 border-b text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 border-b flex items-center gap-2 relative">
                        <img
                          src={item.thumb}
                          alt={item.name}
                          className="h-10 w-10"
                        />
                        <span className="flex-1 lg:text-sm text-xs">{item.name}</span>

                        {/* Remove button in top-left corner */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                          className="absolute top-0 left-0  w-6 h-6 rounded-full flex items-center justify-center
                        text-white text-lg bg-[#DB4444] hover:text-[#DB4444] hover:bg-[#f5b7b7]
                           transition"
                        >
                          &times;
                        </button>
                      </td>

                      <td className="px-4 py-3 border-b text-right">
                        {item.qty}
                      </td>
                      <td className="px-4 py-3 border-b text-right">
                        ${item.price}
                      </td>
                      <td className="px-4 py-3 border-b text-right">
                        ${item.price * item.qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="max-w-sm mx-auto space-y-2 text-sm shadow-all-sides p-5">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                <span>Total:</span>
                <span className="text-red-600">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment method */}
            <div className="mt-8 max-w-sm mx-auto shadow-all-sides p-5">
              <h2 className="font-medium mb-2">Payment Method</h2>
              <label className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={payment === "bank"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Bank Transfer
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            {/* Coupon */}
            <div className="mt-8 flex items-center flex-wrap gap-3 ">
              <input
                type="text"
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border px-3 py-2  rounded"
              />
              <button
                onClick={applyCoupon}
                className=" px-5 py-2 rounded bg-[#DB4444] text-white hover:bg-[#f67272] transition duration-300"
              >
                Apply
              </button>
            </div>

            {/* Place Order */}
            <div className="mt-8 text-right">
              <button
                onClick={placeOrder}
                className="bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-[#f67272] transition duration-300"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
