import { useState } from "react";
import "./mainfile.css";

import { UserData } from "./Data";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function MainFile() {
  const [chartType, setChartType] = useState("bar");

  const changeChart = (event) => {
    setChartType(event.target.value);
  };

  // Dynamically select the chart component based on the chartType
  const ChartComponent = () => {
    switch (chartType) {
      case "bar":
        return <BarChart chartData={userData} />;
      case "line":
        return <LineChart chartData={userData} />;
      case "pie":
        return <PieChart chartData={userData} />;
      default:
        return null;
    }
  };

  const userData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <div className="App" style={{width:"100%",margin:"50px"}}>
        <select onChange={changeChart} style={{width:"190px", marginBottom:"60px"}}>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="pie">Pie</option>
        </select>

        <div style={{ width: 700}}>
          <ChartComponent />
        </div>
      </div>
    </>
  );
}

export default MainFile;





