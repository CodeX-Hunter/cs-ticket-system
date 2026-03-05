import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import React from "react";

const Banner = () => {
    return (
        <div className="md:flex md:flex-row flex-col gap-10 space-y-4 md:space-y-0 justify-center mt-10 md:px-0 px-4">
        <div className="md:h-[250px] h-[200px] md:w-[708px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-xl flex flex-col justify-center items-center text-white relative overflow-hidden">
          <img className="absolute left-0" src={vector1} alt="" />
          <img className="absolute right-0" src={vector2} alt="" />
          <h2 className="text-2xl font-medium">In Progress</h2>
          <h1 className="text-5xl mt-3 font-semibold">0</h1>
        </div>
        <div className="md:h-[250px] h-[200px] md:w-[708px] bg-linear-to-bl from-[#54CF68] to-[#00827A] rounded-xl flex flex-col justify-center items-center text-white relative overflow-hidden">
          <img className="absolute left-0" src={vector1} alt="" />
          <img className="absolute right-0" src={vector2} alt="" />
          <h2 className="text-2xl font-medium">Resolved</h2>
          <h1 className="text-5xl mt-3 font-semibold">0</h1>
        </div>
      </div>
    );
};

export default Banner;