import Legends from "src/componets/Legends";
import styled from "styled-components";

export const MainCardContainer = styled.div`
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
export const PlayListContainer = styled.div`
  height: 90%;
  width: 65%;
  border-radius: 18px;
  padding: 15px;
  padding-top: 20px;
`;
export const StatsContainer = styled.div`
  height: 92%;
  width: 40%;
  padding: 10px;
  padding-top: 20px;
  border-radius: 18px;
`;
export const Divider = styled.span`
  height: 90%;
  width: 5px;
  border-radius: 20px;
  backdrop-filter: blur(25px);
  background-color: rgba(0, 0, 0, 0.2);
`;
export const Header = styled.p`
  font-family: "Bold";
  font-size: 3em;
  font-weight: 400;
  color: rgba(255, 255, 255);
`;
export const Text = styled.p`
  font-family: "Medium";
  color: whitesmoke;
`;
export const Table = styled.table`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 8px;
  padding: 10px;
`;
export const TableHead = styled.th`
  font-family: "Regular";
  font-size: 0.8em;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
`;
export const TableRow = styled.tr`
  border-radius: 10px;
  width: auto;
  height: auto;
`;
export const TableData = styled.td`
  font-family: "Regular";
  text-align: left;
  color: rgb(255, 255, 255);
  width: 200px;
  padding: 5px;
`;
export const ItemsContainer = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const ProfilePic = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background-color: orange;
  opacity: 0.7;
`;
export const CreateButtonContainer = styled.div`
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
export const MenuContainer = styled.div`
  border-radius: 18px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;
export const MenuItems = styled.button`
  height: 25px;
  width: auto;
  padding: 10px;
  background: transparent;
  color: whitesmoke;
  font-weight: 500;
  border: none;
  border-radius: 5px;

  :hover {
    transition: ease-in-out 0.3s;
    cursor: pointer;
    background: ${(props: { color: string }) => props.color};
    color: white;
  }
`;
export const InputFields = styled.input`
  height: 20px;
  outline: 0;
  border: none;
  padding: 0px;
  margin: 0px;
  color: rgb(32, 197, 201, 0.8);
  border-bottom: 1px solid white;
  background: transparent;
  :active {
    border-bottom: 3px solid white;
    transition: 0.5s;
  }
  font-family: Regular;
`;
export const InputLable = styled.p`
  color: rgba(245, 245, 245);
  font-size: 14.22px;
  line-height: 2px;
  margin-bottom: 10px;
  font-family: Bold;
`;
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-top: 20px;
  position: relative;
`;
export const ErrorDisplay = styled.span`
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
export const FormContainer = styled.div`
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SaveButton = styled.button`
  font-family: "Regular";
  height: 27px;
  width: 94px;
  border-radius: 8px;
  border: 1px solid transparent;
  outline: 0;
  margin-top: 25px;
  background-color: rgb(110, 5, 134, 0.9);
  font-size: 16px;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover:enabled {
    cursor: pointer;
    color: rgb(110, 5, 134);
    background: whitesmoke;
    transition: 0.3s;
  }
  :hover:disabled {
    cursor: arrow;
  }
`;
export const Bar = styled.div`
  height: 10px;
  border-radius: 5px;
  padding: 10px;
  width: ${(props: { random: string; color: string }) => props.random};
  border: 0.1em solid
    ${(props: { random: string; color: string }) => props.color};
`;

export const LegendsBarContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;
export const SelectField = styled.select`
height: 20px;
outline: 0;
border: none;
padding: 0px;
margin: 0px;
color:rgb(32, 197, 201, 0.8);
border-bottom: 1px solid white;
background: transparent;
:active {
  border-bottom: 3px solid white;
  transition: 0.5s;
}
font-family: Regular;
`