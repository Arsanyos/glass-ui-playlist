import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";
import Legends from "./Legends";
import { Header } from "src/styles/styles";
import {
  useFetchMusicsQuery,
} from "src/redux/music.api";
const Stat = () => {

  // const [pop, setPop] = useState([]);
  // const [rock, setRock] = useState([]);
  // const [alternative, setAlternative] = useState([]);
  // const [RnB, setRnB] = useState([]);
  // const [hipHop, setHiphop] = useState([]);
  // const [classical, setClassical] = useState([]);
  const { data } = useFetchMusicsQuery({});

    // console.log(data);
    
    const pop = data && data.filter((item: { Genre: string; }) => item.Genre === 'pop');
    const rock = data && data.filter((item: { Genre: string; }) => item.Genre === 'rock');
    const alternative = data && data.filter((item: { Genre: string; }) => item.Genre === 'alternative');
    const RnB = data && data.filter((item: { Genre: string; }) => item.Genre === 'RnB');
    const hipHop = data && data.filter((item: { Genre: string; }) => item.Genre === 'hipHop');
    const classical = data && data.filter((item: { Genre: string; }) => item.Genre === 'classical');





  // setPop (data && data.filter((item: { Genre: string; }) => item.Genre === 'pop'));
  // setRock(data &&  data.filter((item: { Genre: string; }) => item.Genre === 'rock'));
  // setAlternative( data && data.filter((item: { Genre: string; }) => item.Genre === 'alternative'));
  // setRnB (data && data.filter((item: { Genre: string; }) => item.Genre === 'RnB'));
  // setHiphop(data && data.filter((item: { Genre: string; }) => item.Genre === 'hipHop'));
  // setClassical(data && data.filter((item: { Genre: string; }) => item.Genre === 'classical'));

  var p = pop && pop.length;
  var r = rock && rock.length;
  var al = alternative && alternative.length;
  var rnb = RnB && RnB.length;
  var hi = hipHop && hipHop.length;
  var cl = classical && classical.length;
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
        // data: [1,3,4,5,6,7]
        data: [p, rock && rock.length, alternative && alternative.length, RnB && RnB.length, hipHop && hipHop.length, classical && classical.length]
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
