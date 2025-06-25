import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import { products } from "./Product";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const moveAllToBag = () => {
    if (wishlist.length === 0) {
      toast.info("Your wishlist is empty.");
      return;
    }

    wishlist.forEach((item) => {
      addToCart(item);
      removeFromWishlist(item.id);
    });

    toast.success("All items moved to cart!");
  };

  return (
    <div id="wishlist">
      <Header />

      {/* Wishlist section */}
      <div className="pt-11 px-11">
        <div className="flex justify-between items-center">
          <h6>Wishlist ({wishlist.length})</h6>
          <button
            className="border border-black lg:px-7 px-3 py-2 lg:text-lg text-sm rounded-sm hover:bg-[gray] hover:text-white transition duration-300"
            onClick={moveAllToBag}
          >
            Move All To Bag
          </button>
        </div>

        {/* Wishlist grid */}
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 pt-[4rem] pb-[3rem] lg:px-10 border-b border-[gray]">
          {wishlist.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              Your wishlist is empty.
            </p>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center group border p-4 rounded"
              >
                <img
                  src={item.image} // fallback image
                  alt={item.name}
                />

                {/* ❌ remove button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {/* Just For You section — static */}
        <div className="pb-[4rem] pt-[1rem]">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="px-[6px] py-[14px] bg-[#DB4444] rounded-sm"></div>
              <div className="text-md">Just For You</div>
            </div>
            <Link to="/all-products">
              <button className="border border-black px-7 py-2 rounded-sm hover:bg-[gray] hover:text-white transition duration-300">
                See All
              </button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 py-8 lg:px-10">
            {products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="flex items-center justify-center border  hover:shadow-md"
              >
                <img src={product.image} alt={product.name} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
