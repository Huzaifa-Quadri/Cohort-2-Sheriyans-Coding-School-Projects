import React from "react";
import Info from "./Info.jsx";
const App = () => {
  return (
    <div className="bg-black h-screen text-white text-4xl flex flex-col gap-7">
      <h1 className="">Hello World</h1>

      <Info name="King" age={23} />
      <Info name="Queen" age={20} />
      <Info name="Prince" age={18} />
    </div>
  );
};

export default App;
