import React from "react";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="btn w-full bg-gray-100 border border-gray-300 flex items-center gap-2"
      >
        <FcGoogle size={22} />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
