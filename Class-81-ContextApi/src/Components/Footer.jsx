import React, { useContext } from "react";
import { UserDataContext } from "../Context/UserContext";

const Footer = () => {
  const { me } = useContext(UserDataContext);
  return (
    <div className="px-10 py-5 text-green-900 text-2xl bg-blue-300">
      <p>
        All rights reserved by {me.name} & Age {me.age}
      </p>
    </div>
  );
};

export default Footer;
