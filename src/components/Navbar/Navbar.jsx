/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed z-50 bg-black bg-opacity-60">
      <div className=" navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
                <a>Contact us</a>
                <a>Dashboard</a>
                <a>Our Menu</a>
                <a>Our Shop</a>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            BISTRO BOSS
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 gap-3">
            <Link to="/home" className="text-white text-xl font-semibold">
              Home
            </Link>
            <Link to="/contact" className="text-white text-xl font-semibold">
              Contact us
            </Link>
            <Link to="/dashboard" className="text-white text-xl font-semibold">
              Dashboard
            </Link>
            <Link to="/our-menu" className="text-white text-xl font-semibold">
              Our Menu
            </Link>
            <Link to="/our-shop" className="text-white text-xl font-semibold">
              Our Shop
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <Link to="/login">
          <button className="text-white text-xl font-semibold">LogIn</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
