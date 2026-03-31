import React from "react";
import navLogo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar container mx-auto shadow-2xl">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <img className="w-10" src={navLogo} /> Ai Hub
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="bg-zinc-200 hover:bg-red-500 rounded-full p-2 text-center">
          {" "}
          <FaShoppingCart className="text-2xl text-red-600 hover:text-white duration-200 transition-all" />
        </div>
        <a className="btn bg-red-600 hover:bg-red-500 rounded-full text-white">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default NavBar;
