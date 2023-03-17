import { useState } from "react";
import Chart from "react-apexcharts";
import Legends from "./Legends";
import { Header } from "src/styles/styles";

const Stat = () => {
  const [state] = useState({
    options: {
      colors: ["#E91E63", "#FF9800","green","#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Pop", "Amharic", "Regaee", "Rock & Roll"],
      },
    },
    series: [
      {
        name: "By genre",
        data: [30, 40, 45, 50],
      },
   
    ],
  });
  return (
    <>
    <Header style={{ marginLeft: "10px",display:"flex",flexDirection:"column",justifyContent:"left" }}>Stats</Header>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="300"
            />
          </div>
        </div>
      </div>
      <Legends />
    </>
  );
};
export default Stat;
