import React from "react";

const FriendsCard = ({ friendcard }) => {
  //   console. log(friendcard);
  const { picture, name, tags, status } = friendcard;
  const statusColors = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-black",
    "on-track": "bg-green-700 text-white",
  };
  return (
    <div className="flex flex-col items-center justify-center text-center border-2 border-gray-300 px-5 py-5 rounded-[10px]">
      <div>
        <img className="w-30 h-30 rounded-full" src={picture} alt="" />
      </div>
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <button className="bg-[#CBFADB] px-8 py-2 rounded-full">{tags}</button>
      <button
        className={`${statusColors[status?.toLowerCase()]} px-8 py-2 rounded-full mt-2`}
      >
        {status}
      </button>
    </div>
  );
};

export default FriendsCard;
