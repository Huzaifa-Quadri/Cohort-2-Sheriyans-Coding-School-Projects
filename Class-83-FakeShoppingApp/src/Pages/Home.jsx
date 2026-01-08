import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-full bg-gray-600 flex flex-col justify-center items-center gap-5 relative">
        <h1 className="text-5xl font-bold text-yellow-500 text-center">
          Welcome to our Fake Shopping App
        </h1>
        <p className="text-green-300 text-center text-3xl">
          Click the Button bellow to start Shopping
        </p>
        <button
          className="bg-blue-800 text-white py-2 px-3 rounded m-10 cursor-pointer hover:bg-blue-600 active:scale-85 transition-all"
          onClick={() => Navigate("/products")}
        >
          Explore Products
        </button>
      </div>
    </>
  );
};

export default Home;
