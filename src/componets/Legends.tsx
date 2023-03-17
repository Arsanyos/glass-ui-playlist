import { Bar } from "src/styles/styles";
import { Text } from "src/styles/styles";
const Legends = () => {
  return (
    <>
    <Text style={{fontWeight:'500',fontSize:"1.5em"}}>Legend</Text>
      <Bar random={"300px"} color="rgb(159,6,125)" style={{display:'flex',alignItems:"center"}}>
      <Text style={{fontWeight:'200',fontSize:"1em",color:"white"}}>Pop</Text>
      </Bar>
      <Bar random={"100px"} color="yellow" style={{display:'flex',alignItems:"center"}}>
      <Text style={{fontWeight:'200',fontSize:"1em",color:"white"}}>Hip-hop</Text>
      </Bar>
      <Bar random={"380px"} color="rgb(34,199,204)" style={{display:'flex',alignItems:"center"}}>
      <Text style={{fontWeight:'200',fontSize:"1em",color:"white"}}>Amharic</Text>
      </Bar>
    </>
  );
};
export default Legends;
