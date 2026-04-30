import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import useLoaderApps from "../../Hooks/useLoaderApps";
import { AuthContext } from "../../Provider/AuthContent";

const HomeHero = () => {
  const { data } = useLoaderApps();
  const { friendInfo } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center my-30">
      <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
      <p className="px-90 text-center mt-2">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn-Primary mt-5 flex items-center justify-center">
        <FiPlus className="w-10 h-6" /> Add a Friend
      </button>
      <div className="flex items-center justify-center gap-10 mt-10">
        <div className=" w-70 flex flex-col items-center justify-center border-2 border-gray-200 px-10 py-5 rounded-[5px]">
          <h1 className="text-2xl font-bold">{data.length}</h1>{" "}
          <span>Total Firends</span>
        </div>
        <div className="  w-70 flex flex-col items-center justify-center border-2 border-gray-200 px-10 py-5 rounded-[5px] ">
          <h1 className="text-2xl font-bold">{friendInfo.length}</h1>{" "}
          <span>On Click</span>
        </div>
        <div className=" w-70 flex flex-col items-center justify-center border-2 border-gray-200 px-10 py-5 rounded-[5px] ">
          <h1 className="text-2xl font-bold">6</h1> <span>Need Attention</span>
        </div>
        <div className=" w-70 flex flex-col items-center justify-center border-2 border-gray-200 px-10 py-5 rounded-[5px]">
          <h1 className="text-2xl font-bold">12</h1>{" "}
          <span>Interactions This Month</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
