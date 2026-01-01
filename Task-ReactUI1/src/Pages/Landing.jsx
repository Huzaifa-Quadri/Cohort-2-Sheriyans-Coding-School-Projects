import React from "react";
import NavBar from "./NavBar";
import img from "../assets/neon-model-image.png";
const Landing = () => {
  return (
    <div className="w-full flex items-center text-white gap-10 justify-center  mb-40">
      <div className="flex flex-col justify-start w-1/2 gap-7">
        <h3 className="text-xl font-bold text-green-600">CREATIVE DESIGNER</h3>
        <h2 className="text-8xl uppercase text-white">
          We are <span className="text-green-600">creative</span> designers
        </h2>

        <hr className="bg-green-300 w-1/3" />
        <p className="text-xl leading-6 text-white w-[80%] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sint
          incidunt minima dicta. Id dicta, facere, modi, adipisci repellendus
          officia consequuntur fugit corporis delectus nulla enim numquam
          recusandae optio sunt minima quidem eligendi. Odit, nulla.
        </p>
      </div>
      <div
        className="w-[370px] h-[600px] overflow-hidden rounded-[5rem]"
        style={{ boxShadow: "40px 50px 50px 0px #024f4a" }}
      >
        <img
          src={img}
          alt="neon-model-image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Landing;
