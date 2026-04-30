import React, { useContext } from "react";
import { Legend, Pie, PieChart } from "recharts";
import { AuthContext } from "../../Provider/AuthContent";

const StateContent = () => {
  const { friendInfo } = useContext(AuthContext);
  console.log(friendInfo);

  const typeCounts = {};
  friendInfo.forEach((item) => {
    typeCounts[item.type] = (typeCounts[item.type] || 0) + 1;
  });

  const colorMap = { Call: "#0088FE", Text: "#00C49F", Video: "#FFBB28" };
  const data = Object.keys(typeCounts).map((type) => ({
    name: type,
    value: typeCounts[type],
    fill: colorMap[type] || "#8884d8",
  }));

  //   const data = [
  //     { name: "Group A", value: 400, fill: "#0088FE" },
  //     { name: "Group B", value: 300, fill: "#00C49F" },
  //     { name: "Group C", value: 300, fill: "#FFBB28" },
  //   ];
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend></Legend>
      </PieChart>
    </div>
  );
};

export default StateContent;
