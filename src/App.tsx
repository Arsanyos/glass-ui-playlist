import Card from "./componets/Card";
import "../src/styles/global.css";
import background from "../src/img/background.jpg";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        filter:'brightness(80%)',
        height: "100vh",
        width: "100vw",
        lineHeight: "40px",
      }}
    >
      <Card></Card>
    </div>
  );
};

export default App;
