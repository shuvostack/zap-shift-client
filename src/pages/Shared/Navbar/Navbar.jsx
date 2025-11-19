import React from "react";
import Logo from "../../../components/Logo/Logo";
import { NavLink } from "react-router";
import { LuArrowUpRight } from "react-icons/lu";

const Navbar = () => {
  const links = (
    <nav className="flex">
      <li>
        <NavLink to="services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="services">About Us</NavLink>
      </li>
      <li>
        <NavLink to="services">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="services">Blog</NavLink>
      </li>
      <li>
        <NavLink to="services">Contact</NavLink>
      </li>
    </nav>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn rounded-lg">Sign In</a>
        <a className="btn bg-primary rounded-lg">Sign Up</a>
        <div className="h-10 w-10 flex items-center justify-center text-primary bg-[#1f1f1f] rounded-full">
            <LuArrowUpRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
