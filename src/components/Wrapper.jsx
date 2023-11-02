import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="flex items-center bg-gradient-to-b from-deep-purple-400 to-blue-gray-100 py-10 h-96 ">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="font-bold mb-3 text-center text-2xl  text-white">
          ImageFindr
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
