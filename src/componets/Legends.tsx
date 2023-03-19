import { Text, LegendsBarContainer, Bar } from "src/styles/styles";
import { useFetchMusicsQuery } from "src/redux/music.api";
const Legends = () => {
  const { data } = useFetchMusicsQuery({});
  const pop =
    data && data.filter((item: { Genre: string }) => item.Genre === "pop");
  const rock =
    data && data.filter((item: { Genre: string }) => item.Genre === "rock");
  const alternative =
    data &&
    data.filter((item: { Genre: string }) => item.Genre === "alternative");
  const RnB =
    data && data.filter((item: { Genre: string }) => item.Genre === "RnB");
  const hipHop =
    data && data.filter((item: { Genre: string }) => item.Genre === "hipHop");
  const classical =
    data &&
    data.filter((item: { Genre: string }) => item.Genre === "classical");

  var p = pop && pop.length;
  var r = rock && rock.length;
  var al = alternative && alternative.length;
  var rnb = RnB && RnB.length;
  var hi = hipHop && hipHop.length;
  var cl = classical && classical.length;
  const sum = p + r + al + rnb + hi + cl;

  const popperc = (pop && pop.length / sum) * 100;
  const rockperc = (rock && rock.length / sum) * 100;
  const alternativeperc = (alternative && alternative.length / sum) * 100;
  const RnBperc = (RnB && RnB.length / sum) * 100;
  const hipHopperc = (hipHop && hipHop.length / sum) * 100;
  const classicalperc = (classical && classical.length / sum) * 100;
  console.log(
    popperc,
    rockperc,
    alternativeperc,
    RnBperc,
    hipHopperc,
    classicalperc
  );
  console.log("data", sum);

  return (
    <div>
      <Text
        style={{ fontWeight: "200", fontSize: "1.3em", marginLeft: "10px" }}
      >
        Legend
      </Text>
      <div
        style={{
          position: "static",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "0.8em",
          backdropFilter: "blur(25px)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "10px ",
          padding: "10px 10px",
          overflow: "scroll",
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
              Pop
            </Text>
          </Bar>
          <Text style={{ fontWeight: "200", fontSize: "1em", color: "yellow" }}>
             { Math.trunc(popperc) + "%"}
          </Text>
        </LegendsBarContainer>
        <LegendsBarContainer>
          <Bar
            random={"50px"}
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
              Rock
            </Text>
          </Bar>
          <Text
            style={{ fontWeight: "200", fontSize: "1em", color: "whitesmoke" }}
          >
            { Math.trunc(rockperc) + "%"}
          </Text>
        </LegendsBarContainer>
        <LegendsBarContainer>
          <Bar
            random={"50px"}
            color=" #AF2B1E"
            style={{ display: "flex", alignItems: "center",width:"auto" }}
          >
            <Text
              style={{ fontWeight: "200", fontSize: "1em", color: "crimson",width:"auto" }}
            >
              alternative
            </Text>
          </Bar>
          <Text
            style={{ fontWeight: "200", fontSize: "1em", color: "crimson" }}
          >
            { Math.trunc(alternativeperc) + "%"}
          </Text>
        </LegendsBarContainer>
        <LegendsBarContainer>
          <Bar
            random={"50px"}
            color="rgb(34,199,204)"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Text
              style={{ fontWeight: "200", fontSize: "1em", color: "white" }}
            >
              RnB
            </Text>
          </Bar>
          <Text style={{ fontWeight: "200", fontSize: "1em", color: "white" }}>
            { Math.trunc(RnBperc) + "%"}
          </Text>
        </LegendsBarContainer>
        <LegendsBarContainer>
          <Bar
            random={"50px"}
            color="rgb(34,199,204)"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Text
              style={{ fontWeight: "200", fontSize: "1em", color: "white" }}
            >
              hipHop
            </Text>
          </Bar>
          <Text style={{ fontWeight: "200", fontSize: "1em", color: "white" }}>
            { Math.trunc(hipHopperc) + "%"}
          </Text>
        </LegendsBarContainer>
        <LegendsBarContainer>
          <Bar
            random={"50px"}
            color="rgb(34,199,204)"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Text
              style={{ fontWeight: "200", fontSize: "1em", color: "white" }}
            >
              classical
            </Text>
          </Bar>
          <Text style={{ fontWeight: "200", fontSize: "1em", color: "white" }}>
            { Math.trunc(classicalperc) + "%"}
          </Text>
        </LegendsBarContainer>
      </div>
    </div>
  );
};
export default Legends;
