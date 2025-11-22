import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative w-12 h-12">
        <div className="absolute w-full h-full border-4 border-primary rounded-full animate-ping"></div>
        <div className="absolute w-full h-full border-4 border-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
