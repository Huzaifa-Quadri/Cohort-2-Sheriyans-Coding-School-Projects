import React from "react";
import "./style.css";
import Landing from "./Pages/Landing";
import NavBar from "./Pages/NavBar";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import StatsView from "./Pages/StatsView";
const App = () => {
  return (
    <main>
      <div className="min-h-screen bg-[linear-gradient(to_right,#1d1d1d,#1d1d1d,black)] flex flex-col items-center text-[35rem] text-[#009087] opacity-5 leading-none gap-1 mt-0 relative">
        <p>H</p>
        <p>Y</p>
        <p>K</p>
        <p>R</p>
        <p>O</p>
        <p>X</p>
      </div>
      <div className="absolute top-0 left-0 px-20 flex flex-col gap-20 ">
        <NavBar />
        <Landing />
        <SecondPage />
        <ThirdPage />
        <StatsView />
      </div>
    </main>
  );
};

export default App;
