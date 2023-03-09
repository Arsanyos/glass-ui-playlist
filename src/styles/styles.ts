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
  height: 90%;
  width: 40%;
  background: blue;
  opacity: 0.2;
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
`;
export const TableData = styled.td`
  font-family: "Regular";
  text-align: left;
  color: rgb(255, 255, 255);
  width: 200px;
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
  width: 100px;
  height: 100px;
  border-radius: 18px;
  backdrop-filter: blur(25px);
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 265px;
 margin-left:-38px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap:0.5em;
`;
export const MenuItems = styled.button`
  height: 25px;
  width: 80px;
  background: transparent;
  color: whitesmoke;
  font-weight: 500;
  backdrop-filter: blur(55px);
  background-color: ${(props: { color: string }) => props.color};
border:none;
  border-radius: 5px;

  :hover {
    transition: ease-in-out 0.3s;
    cursor: pointer;
    background: ${(props: { color: string }) => props.color};
    color: white;
  }
`;
