import React from "react";
import ModelImg from "../assets/model1.png";
import Eye from "../assets/eye-outline.png";
import DocImg from "../assets/file-img.png";
const ThirdPage = () => {
  return (
    <div className="w-full flex items-center text-white gap-10 justify-center mt-30 ">
      <div className="w-[370px] h-[600px] overflow-hidden rounded-[5rem] blur-sm mx-50">
        <img src={ModelImg} alt="model" />
      </div>
      <div className="flex flex-col justify-start w-1/2 gap-7 px-30">
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
          since the 1500s.
        </p>

        <div className="flex gap-5">
          {/* Eye Small Card */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-2xl font-bold">
              <img
                src={Eye}
                alt="open eye"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(64%) sepia(35%) saturate(1190%) hue-rotate(130deg) brightness(91%) contrast(86%)",
                }}
                className="h-20 w-25"
              />
              <p>Clean Code</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum
              dolor.
            </p>
          </div>

          {/* Eye Small Card */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-2xl font-bold">
              <img
                src={DocImg}
                alt="img-doc"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(64%) sepia(35%) saturate(1190%) hue-rotate(130deg) brightness(91%) contrast(86%)",
                }}
                className="h-20 w-25 "
              />
              <p>Modern Design</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum
              dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
