import React from "react";
import ServiceCards from "../Components/ServiceCards";
const SecondPage = () => {
  return (
    <div className="w-full flex items-center text-white gap-10 justify-center ">
      <div className="flex flex-col justify-start w-1/2 gap-7">
        <h3 className="text-xl font-bold text-green-600 uppercase">
          our services
        </h3>
        <h2 className="text-8xl uppercase text-white">
          what we <span className="text-green-600">do</span>?
        </h2>

        <hr className="bg-green-300 w-1/3" />
        <p className="text-xl leading-6 text-white w-[70%] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <button className="p-3 bg-blue-400 uppercase w-fit rounded-lg text-xl">
          view all
        </button>
      </div>
      <ServiceCards />
    </div>
  );
};

export default SecondPage;
