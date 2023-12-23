import React from "react";
import Location from "./location";

const SideBar = ({ handleChange, handleClick }) => {
  return <div className="space-y-5">
    <h3 className="text-lg font-bold mb-2">filters</h3>
    <Location />
  </div>;
};

export default SideBar;
