"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = exports.FormContainer = exports.ErrorDisplay = exports.FormControl = exports.InputLable = exports.InputFields = exports.MenuItems = exports.MenuContainer = exports.CreateButtonContainer = exports.ProfilePic = exports.ItemsContainer = exports.TableData = exports.TableRow = exports.TableHead = exports.Table = exports.Text = exports.Header = exports.Divider = exports.StatsContainer = exports.PlayListContainer = exports.MainCardContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.MainCardContainer = styled_components_1.default.div `
  height: 80%;
  width: 70%;
  border-radius: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(25px);
  background-color: rgba(0, 0, 255, 0.2);
  border-radius: 3em;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background-clip: padding-box;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 25px;
`;
exports.PlayListContainer = styled_components_1.default.div `
  height: 90%;
  width: 65%;
  border-radius: 18px;
  padding: 15px;
  padding-top: 20px;
`;
exports.StatsContainer = styled_components_1.default.div `
  height: 92%;
  width: 40%;
  padding: 10px;
  padding-top: 20px;
  border-radius: 18px;
`;
exports.Divider = styled_components_1.default.span `
  height: 90%;
  width: 5px;
  border-radius: 20px;
  backdrop-filter: blur(25px);
  background-color: rgba(0, 0, 0, 0.2);
`;
exports.Header = styled_components_1.default.p `
  font-family: "Bold";
  font-size: 3em;
  font-weight: 400;
  color: rgba(255, 255, 255);
`;
exports.Text = styled_components_1.default.p `
  font-family: "Medium";
  color: whitesmoke;
`;
exports.Table = styled_components_1.default.table `
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 8px;
  padding: 10px;
`;
exports.TableHead = styled_components_1.default.th `
  font-family: "Regular";
  font-size: 0.8em;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
`;
exports.TableRow = styled_components_1.default.tr `
  border-radius: 10px;
  width: auto;
`;
exports.TableData = styled_components_1.default.td `
  font-family: "Regular";
  text-align: left;
  color: rgb(255, 255, 255);
  width: 200px;
`;
exports.ItemsContainer = styled_components_1.default.div `
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
exports.ProfilePic = styled_components_1.default.div `
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background-color: orange;
  opacity: 0.7;
`;
exports.CreateButtonContainer = styled_components_1.default.div `
  border: 1px solid whitesmoke;
  border-radius: 100px;
  height: 19px;
  widht: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  :hover {
    transition: ease-in-out 0.3s;
    cursor: pointer;
    background: #1777ca;
    border: 1px solid #1777ca;
  }
`;
exports.MenuContainer = styled_components_1.default.div `
  width: 100px;
  height: 100px;
  border-radius: 18px;
  backdrop-filter: blur(25px);
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 265px;
  margin-left: -38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;
exports.MenuItems = styled_components_1.default.button `
  height: 25px;
  width: 80px;
  background: transparent;
  color: whitesmoke;
  font-weight: 500;
  backdrop-filter: blur(55px);
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 5px;

  :hover {
    transition: ease-in-out 0.3s;
    cursor: pointer;
    background: ${(props) => props.color};
    color: white;
  }
`;
exports.InputFields = styled_components_1.default.input `
  height: 20px;
  outline: 0;
  border: none;
  padding: 0px;
  margin: 0px;
  color: whitesmoke;
  border-bottom: 1px solid  rgb(32,197,201,0.8) ;
  background: transparent;
  :active {
    border-bottom: 3px solid white;
    transition:0.5s;
  }
  font-family: Regular;
`;
exports.InputLable = styled_components_1.default.p `
  color: rgba(245, 245, 245);
  font-size: 14.22px;
  line-height: 2px;
  margin-bottom: 10px;
  font-family: Bold;
`;
exports.FormControl = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-top: 20px;
  position: relative;
`;
exports.ErrorDisplay = styled_components_1.default.span `
  padding: 3px;
  font-size: 8px;
  height: 6px;
  color: crimson;
  top: 0;
  position: absolute;
  top: 21px;
  left: 210px;
  margin: 0;
  padding: 0;
  font-family: "Regular";
`;
exports.FormContainer = styled_components_1.default.div `
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 40px;
  padding-top: 20px;
  padding-bottom:20px;
  margin-top: 20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`;
exports.SaveButton = styled_components_1.default.button `
  font-family: "Regular";
  height: 27px;
  width: 94px;
  border-radius:8px;
  border: 1px solid transparent;
  outline:0;
  margin-top: 25px;
  background-color:rgb(110,5,134,0.9);
  font-size:16px;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover:enabled{
    cursor:pointer;
    color:rgb(110,5,134);
    background:whitesmoke;
    transition:0.3s;
  }
  :hover:disabled{
    cursor:arrow;
  }

`;
