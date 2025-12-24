import React from "react";

const Info = (prop) => {
  return (
    <div className="bg-pink-500 w-1/2 text-center border-3 border-dotted border-green-900 px-5 py-3">
      {prop.name}, {prop.age}
    </div>
  );
};

export default Info;
