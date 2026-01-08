import React, { useContext } from "react";
import { ProductDataContext } from "../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const products = useContext(ProductDataContext).products;
  //   console.log("Products on Product Page", products);

  const DetailNavigate = useNavigate();
  const details = () => {
    // console.log("Details")
    DetailNavigate;
  };

  //! Circular Progress Indicator when data is still loading
  if (!products) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
      </div>
    );
  }

  return (
    <div className="bg-slate-700">
      <h1 className="text-center text-white text-5xl font-bold pt-2 pb-7">
        Here are the Products
      </h1>
      <div className="h-full w-full flex flex-wrap gap-5 justify-center items-center">
        {products.map((item, idx) => {
          return (
            <Link key={idx} to={`/product/${item.id}`}>
              <div className="bg-slate-200 h-120 w-70 flex flex-col items-center gap-5 py-5 px-2 rounded cursor-pointer hover:bg-slate-400">
                <img
                  src={item.image}
                  alt="product_image"
                  className="h-60 w-60 p-2"
                />
                <p className="text-center">{item.title}</p>
                <p>${item.price}</p>
                <button className="bg-blue-500 text-white py-2 px-3 rounded cursor-pointer hover:bg-blue-600 active:scale-85 transition-all">
                  Buy Now
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
