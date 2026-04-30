import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContent";

const TimelineContent = () => {
  const { friendInfo } = useContext(AuthContext);

  if (friendInfo.length === 0) {
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <h1>Timeline is Empty</h1>
      </div>
    );
  }
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <h1 className="font-bold text-3xl">Timeline</h1>

      <div>
        {friendInfo.map((timelineData) => (
          <div>
            <h1>
              {timelineData.type} with {timelineData.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineContent;
