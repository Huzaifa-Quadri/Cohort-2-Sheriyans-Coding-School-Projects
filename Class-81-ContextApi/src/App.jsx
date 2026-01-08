import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { UserDataContext } from "./Context/UserContext";

const App = () => {
  const { users } = useContext(UserDataContext);
  return (
    <div className="bg-black text-white text-4xl h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col text-center gap-5">
        <h1 className="text-center items-center mb-5">Welcome -</h1>
        {users.map((item) => {
          return (
            <p>
              {item.name} - {item.email}
            </p>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
