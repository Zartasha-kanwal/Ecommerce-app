import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { products } from "./Product";
import { Link } from "react-router-dom";

export default function Allproducts() {
  return (
    <div>
      <Header />

      <div className="pt-11">
        <div className=" px-9 ">
          <span className="text-[gray]">Home /</span>
          <span>All-Products</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[80%] mx-auto pb-[6rem] pt-[3rem] gap-3 ">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className=" p-4  transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full  object-contain"
            />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
