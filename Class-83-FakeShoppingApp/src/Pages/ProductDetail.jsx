import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductDataContext } from "../Context/ProductContext";

const ProductDetail = () => {
  const Navigate = useNavigate();
  const products = useContext(ProductDataContext).products;
  //   console.log("Products in Product Detail Page - ", products);
  const { id } = useParams();

  const ourProduct = products.find((elem) => {
    return id == elem.id;
  });
  console.log("Here is our product - ", ourProduct);

  if (!ourProduct) {
    return (
      //   <div className="text-center mt-10 text-xl font-bold">Loading...</div>
      <div className="h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
      </div>
    );
  }

  return (
    <>
      <div className="h-screen w-full bg-green-800 flex flex-col justify-center items-center gap-5 px-20">
        <img
          src={ourProduct.image}
          alt="product_image"
          className="h-100 w-fit"
        />
        <p className="text-5xl font-bold text-yellow-500 text-center">
          {ourProduct.title}
        </p>
        <p className="text-5xl font-bold text-yellow-500 text-center">
          ${ourProduct.price}
        </p>
        <p className="text-white text-2xl text-center">
          {ourProduct.description}
        </p>
        <button className="bg-blue-800 text-white py-2 px-3 rounded m-10 cursor-pointer hover:bg-blue-600 active:scale-85 transition-all">
          Buy Now
        </button>
      </div>
      <button
        className="py-3 px-5 bg-yellow-300 text-black rounded cursor-pointer hover:bg-yellow-600 active:scale-85 transition-all absolute bottom-10 z-20 right-[50%] translate-x-1/2"
        onClick={() => Navigate("/products")}
      >
        Explore More Products
      </button>
    </>
  );
};

export default ProductDetail;
