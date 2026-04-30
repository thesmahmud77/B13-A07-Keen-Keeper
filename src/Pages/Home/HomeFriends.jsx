import React from "react";
import useLoaderApps from "../../Hooks/useLoaderApps";
import FriendsCard from "./FriendsCard";

const HomeFriends = () => {
  const { data } = useLoaderApps();
  console.log(data);
  return (
    <div>
      <h1 className="font-bold text-3xl">Your Friends</h1>
      <div className="grid grid-cols-4 gap-10 py-10">
        {data.map((friendcard) => (
          <FriendsCard
            key={friendcard.id}
            friendcard={friendcard}
          ></FriendsCard>
        ))}
      </div>
    </div>
  );
};

export default HomeFriends;
