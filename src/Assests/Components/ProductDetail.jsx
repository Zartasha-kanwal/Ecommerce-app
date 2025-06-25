import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "./Product";
import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CartContext } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success(`${product.name} added to wishlist!`);
  };
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Header />

      <div className="pt-[6rem] pb-[13rem] xl:pt-[6rem] lg:pb-[15rem] lg:pt-[6rem] flex items-center justify-center">
        <div className="p-6 max-w-4xl mx-auto">
          <img
            src={product.image}
            className="w-80 mx-auto"
            alt={product.name}
          />
          <h1 className="text-2xl font-bold mt-4 py-2">{product.name}</h1>
          <p className="text-gray-700 mt-2 py-2">{product.description}</p>

          <div className="flex gap-4 mt-5">
            <button
              onClick={handleAddToCart}
              className="border border-[#DB4444] bg-[#edd8d8] hover:bg-[#DB4444] text-[#DB4444] hover:text-white transition duration-300 lg:px-6 px-4 py-2 rounded"
            >
              Add to Cart
            </button>

            <button
              onClick={handleAddToWishlist}
              className="border border-[#DB4444] bg-[#edd8d8] hover:bg-[#DB4444] text-[#DB4444] hover:text-white transition duration-300 lg:px-6 px-4 py-2 rounded"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
