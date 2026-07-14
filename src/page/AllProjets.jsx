import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AllProjets() {
  return (
    <div className="bloc-allprojet min-h-[80vh] flex items-center justify-center pt-10 bg-black">
      <Outlet />
    </div>
  );
}

export default AllProjets;
