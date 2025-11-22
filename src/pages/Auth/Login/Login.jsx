import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user)
        navigate(location?.state || '/')
      })
      .catch((err) => console.log(err.code));
  };

  return (
    <div className="max-w-md w-full mx-auto">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray-500 mt-1">Login to your ZapShift account</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input input-bordered w-full"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}
          {
            errors.password?.type === 'minLength' && (
                <p className="text-red-500">Password must be 6 character or longer</p>
            )
          }
        </div>

        <div className="text-right">
          <a className="link link-hover text-sm">Forgot password?</a>
        </div>

        {/* Login Button */}
        <button className="btn bg-[#A7E23A] text-black font-semibold w-full mt-2">
          Login
        </button>
      </form>

      {/* Register Link */}
      <p className="text-center mt-3 text-sm">
        Don't have an account?{" "}
        <Link to="/register" state={location.state} className="font-semibold link link-hover">Register</Link>
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 text-sm">Or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
