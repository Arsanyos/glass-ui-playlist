import { useState } from "react";
import Chart from "react-apexcharts";
import Legends from "./Legends";
import { Header } from "src/styles/styles";
import {
  useFetchMusicsQuery,
} from "src/redux/music.api";
const Stat = () => {
  const { data } = useFetchMusicsQuery({});

  const pop = data && data.filter((item: { Genre: string; }) => item.Genre === 'pop');
  const rock = data &&  data.filter((item: { Genre: string; }) => item.Genre === 'rock');
  const alternative = data && data.filter((item: { Genre: string; }) => item.Genre === 'alternative');
  const RnB = data && data.filter((item: { Genre: string; }) => item.Genre === 'RnB');
  const hipHop = data && data.filter((item: { Genre: string; }) => item.Genre === 'hipHop');
  const classical = data && data.filter((item: { Genre: string; }) => item.Genre === 'classical');
  console.log("stat", pop && pop.length, rock && rock.length, alternative && alternative.length, RnB && RnB.length, hipHop && hipHop.length, classical && classical.length);
  
  const [state] = useState({
    options: {
      colors: ["#E91E63", "#FF9800", "green", "#FF9800","green", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Pop", "rock", "alternative", "RnB", "hipHop","classical"],
      },
    },
    series: [
      {
        name: "By genre",
        data: [pop && pop.length, rock && rock.length, alternative && alternative.length, RnB && RnB.length, hipHop && hipHop.length, classical && classical.length],
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
