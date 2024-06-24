import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className=" bg-[#191c26]  text-white">
      <nav className="flex justify-between py-6 max-w-7xl mx-auto text-white ">
        <h1 className="text-3xl font-bold">Moha</h1>
        <div className="flex justify-between gap-5">
          <NavLink to={"/App/home"} className="font-medium text-xl ">
            Home
          </NavLink>
          <NavLink to={"/App/about"} className="font-medium text-xl ">
            About
          </NavLink>
          <NavLink to={"/App/scroll"} className="font-medium text-xl ">
            Scrolling
          </NavLink>
          {isLoggedIn ? (
            <button onClick={toggleLogin} className="font-medium text-xl">
              Logout
            </button>
          ) : (
            <NavLink to="/" className="font-medium text-xl">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
