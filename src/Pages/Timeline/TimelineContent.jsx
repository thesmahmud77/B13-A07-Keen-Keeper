import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContent";
import { Link } from "react-router";

const TimelineContent = () => {
  const { friendInfo } = useContext(AuthContext);

  if (friendInfo.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-3 bg-gray-50">
        <div className="text-6xl">📭</div>
        <h2 className="text-2xl font-bold text-gray-700">Nothing Here Yet</h2>
        <p className="text-gray-400 text-sm">
          Your timeline is empty. Start by adding some activity.
        </p>

        <Link to={"/"} className="btn-Primary hover:bg-gray-800 transition">
          Get Started
        </Link>
      </div>
    );
  }

  //   const handleRemove = (removeData) => {
  //     // console.log(removeData);
  //     const restFriends = friendInfo.filter(
  //       (removeSingleData) => removeSingleData.id != removeData.id,
  //     );
  //     console.log(restFriends);
  //   };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-Start space-y-5">
      <h1 className="font-bold text-3xl">Timeline</h1>

      <div className="flex flex-col justify-center items-Start gap-3">
        {friendInfo
          .slice()
          .reverse()
          .map((timelineData, index) => (
            <div
              key={index}
              className="bg-amber-50 border-gray-100 border-2 px-5 py-3 rounded-[6px] grid grid-cols-12"
            >
              <div className="col-span-1">
                <img
                  className=" rounded-full  w-20 h-20"
                  src={timelineData.picture}
                  alt=""
                />
              </div>
              <div className="col-span-10  flex items-center justify-between">
                <div>
                  <h1>
                    <span className="font-bold">{timelineData.type}</span> with
                    <span className="font-semibold"> {timelineData.name}</span>
                    <p>{timelineData.date}</p>
                  </h1>
                </div>
                <button
                  onClick={() => handleRemove(timelineData)}
                  className=" text-white font-semibold px-5 py-2 rounded-[5px] bg-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TimelineContent;
