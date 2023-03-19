import { Text, LegendsBarContainer, Bar } from "src/styles/styles";
import {
  useFetchMusicsQuery,
} from "src/redux/music.api";
const Legends = () => {

  const { data } = useFetchMusicsQuery({});
  const pop = data && data.filter((item: { Genre: string; }) => item.Genre === 'pop');
  const rock = data && data.filter((item: { Genre: string; }) => item.Genre === 'rock');
  const alternative = data && data.filter((item: { Genre: string; }) => item.Genre === 'alternative');
  const RnB = data && data.filter((item: { Genre: string; }) => item.Genre === 'R&B');
  const hipHop = data && data.filter((item: { Genre: string; }) => item.Genre === 'hip-hop');
  const classical = data && data.filter((item: { Genre: string; }) => item.Genre === 'classical');

  
  const popperc = (pop && pop.length / data.length)*100;
  const rockperc = (rock && rock.length / data.length) * 100;
  const alternativeperc = (alternative && alternative.length / data.length) * 100;
  const RnBperc = (RnB && RnB.length / data.length) * 100;
  const hipHopperc = (hipHop && hipHop.length / data.length) * 100;
  const classicalperc = (classical && classical.length / data.length) * 100;
  console.log(popperc,rockperc,alternativeperc,RnBperc,hipHopperc,classicalperc);
  console.log(pop && pop.length / data.length);
  
  return (
    <>
      <Text style={{ fontWeight: "200", fontSize: "1.3em",marginLeft:'10px' }}>Legend</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8em",
          backdropFilter: "blur(25px)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "10px ",
          padding: "10px 10px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <LegendsBarContainer>
          <Bar
            random={"100px"}
            color="yellow"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Text
              style={{ fontWeight: "200", fontSize: "1em", color: "yellow" }}
            >
              Hip-hop
            </Text>
          </Bar>
          <Text style={{ fontWeight: "200", fontSize: "1em", color: "yellow" }}>
            30%
          </Text>
        </LegendsBarContainer>
        <LegendsBarContainer>
          <Bar
            random={"80px"}
            color="#9E9764"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontWeight: "200",
                fontSize: "1em",
                color: "whitesmoke",
              }}
            >
              Regaee
            </Text>
          </Bar>
          <Text
            style={{ fontWeight: "200", fontSize: "1em", color: "whitesmoke" }}
          >
            30%
          </Text>
        </LegendsBarContainer>
        <LegendsBarContainer>
          <Bar
            random={"250px"}
            color=" #AF2B1E"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Text
              style={{ fontWeight: "200", fontSize: "1em", color: "crimson" }}
            >
              Amharic
            </Text>
          </Bar>
          <Text
            style={{ fontWeight: "200", fontSize: "1em", color: "crimson" }}
          >
            80%
          </Text>
        </LegendsBarContainer>
        <LegendsBarContainer>
          <Bar
            random={"180px"}
            color="rgb(34,199,204)"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Text
              style={{ fontWeight: "200", fontSize: "1em", color: "white" }}
            >
              Rock & Roll
            </Text>
          </Bar>
          <Text style={{ fontWeight: "200", fontSize: "1em", color: "white" }}>
            80%
          </Text>
        </LegendsBarContainer>
      </div>
    </>
  );
};
export default Legends;
