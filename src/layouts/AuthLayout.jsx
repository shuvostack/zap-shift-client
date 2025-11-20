import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16">
        <div className="mb-6">
          <Logo />
        </div>
        <Outlet />
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 bg-[#FAFDF0] flex items-center justify-center p-6">
        <img src={authImage} alt="auth" className="w-3/4 md:w-2/3" />
      </div>
    </div>
  );
};

export default AuthLayout;
