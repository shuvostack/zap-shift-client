import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import { LuArrowUpRight } from "react-icons/lu";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <NavLink to="send-parcel">Send Parcel</NavLink>
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <a
            onClick={handleLogOut}
            className="btn hover:btn-primary text-black rounded-lg"
          >
            Log Out
          </a>
        ) : (
          <div className="flex gap-2 text-primary ">
            <Link to="/login" className="btn bg-primary rounded-lg">
              Login
            </Link>
            <Link
              to="/login"
              className="bg-[#1f1f1f] text-primary h-10 w-10 flex items-center justify-center rounded-full"
            >
              <LuArrowUpRight size={25} />
            </Link>
          </div>
        )}
        <div className="flex gap-2">
          <Link to="/rider" className="btn btn-primary text-black rounded-lg">
            Be a Rider
          </Link>
          <Link
            to="/rider"
            className="bg-[#1f1f1f] text-primary h-10 w-10 flex items-center justify-center rounded-full"
          >
            <LuArrowUpRight size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
