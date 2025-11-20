import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    registerUser(data.email, data.password)
      .then(result => console.log(result.user))
      .catch(error => console.log(error.code));
  };

  return (
    <div className="max-w-md w-full mx-auto">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">Create an Account</h1>
        <p className="text-gray-500 mt-1 font-bold">Register with ZapShift</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered w-full"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
            })}
            className="input input-bordered w-full"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm">Password must be 6 characters or longer</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-sm">
              Password must include uppercase, lowercase, number & special character
            </p>
          )}
        </div>

        {/* Register Button */}
        <button className="btn bg-[#A7E23A] text-black font-semibold w-full mt-2">
          Register
        </button>
      </form>

      {/* Login Link */}
      <p className="text-center mt-3 text-sm">
        Already have an account?{" "}
        <a className="font-semibold link link-hover">Login</a>
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 text-sm">Or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Google Login */}
      <button className="btn w-full bg-gray-100 border border-gray-300 flex items-center gap-2">
        <FcGoogle size={22} />
        Register with Google
      </button>
    </div>
  );
};

export default Register;
