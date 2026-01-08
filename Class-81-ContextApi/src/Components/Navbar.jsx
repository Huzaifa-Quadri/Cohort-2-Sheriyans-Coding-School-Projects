import React, { useContext } from "react";
import { UserDataContext } from "../Context/UserContext";

const Navbar = () => {
  const { me } = useContext(UserDataContext);

  return (
    <>
      <nav>
        <div className="bg-gray-400 text-2xl flex items-center justify-center gap-10 px-10 py-7">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About Us</a>
          <a href="#">Meet</a>
          <a href="#">Bring On</a>
          <a href="#">{me.name}</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
