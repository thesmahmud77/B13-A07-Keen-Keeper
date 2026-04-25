import React from "react";
import { FiPlus } from "react-icons/fi";

const HomeHero = () => {
  return (
    <div className="flex flex-col items-center justify-center my-30">
      <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
      <p className="px-90 text-center mt-2">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn-Primary mt-5 flex items-center justify-center gap-1">
        <FiPlus className="w-10 h-6" /> Add a Friend
      </button>
    </div>
  );
};

export default HomeHero;
