import React from "react";
import NameCard from "./NameCard";
import Links from "./Links";

const NavBar = () => {
  return (
    <div className="z-10 absolute top-0 w-full px-24 py-4 flex justify-between items-center bg-black/20 ">
      {/* NameCard scroll animation not done */}
      <NameCard />
      <Links />
    </div>
  );
};

export default NavBar;
