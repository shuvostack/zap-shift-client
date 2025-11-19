import React from "react";
import ErrorImage from "../../assets/error.png";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#eaeced]">
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center py-8 bg-white">
        <img src={ErrorImage} alt="" />
        <button onClick={() => navigate(-1)} className="btn btn-primary text-black rounded-xl shadow-xl">
          Go Home
        </button>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Error;
