import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import userIcon from "../assets/assets/user.png";
import userProfile from "../assets/assets/Untitled design.png";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div
          className="relative "
          onMouseEnter={openModal}
          onMouseLeave={closeModal}
        >
            <img
          className={`object-cover rounded-full transition-all duration-300 z-100 ${
            isModalOpen ? "w-44 h-44 object-contain" : "w-12 h-12"
          }`}
          src={userProfile}
          alt="User Profile"
        />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2 items-center">
        <img src={userIcon} alt="" />
        <button className="btn btn-neutral rounded-none px-8 text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
