import React, { useState } from "react";
import axios from "axios";
import RandImage from "./RandImage";
const App = () => {
  // const [alldata, setalldata] = useState([]);
  // const getData = async () => {
  //   let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   // console.log(data.data);
  //   setalldata([...data.data]);
  //   console.log(alldata);
  // };

  return (
    <>
      {/* <button
        className="bg-green-600 px-3 py-2 rounded-xl active:scale-95"
        onClick={getData}
      >
        Data
      </button>
      <div className="h-full w-full bg-black">
        {alldata.map((item) => {
          return (
            <p className="text-white" key={item.id}>
              {item.title}
            </p>
          );
        })}
      </div> */}

      <RandImage />
    </>
  );
};

export default App;
