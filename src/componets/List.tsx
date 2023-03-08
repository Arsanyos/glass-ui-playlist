import React, { PropsWithChildren } from "react";
import {
  Header,
  ItemsContainer,
  PlayListContainer,
  ProfilePic,
  Text,
  CreateButtonContainer,
} from "../styles/styles";
import MusicTable from "./Table/MusicTable";
interface HeaderProps {
  children?: any;
}
const Card: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  return (
    <PlayListContainer>
      <Header style={{ marginLeft: "10px" }}>Play List</Header>
      <ItemsContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "20px",
            width: "180px",
          }}
        >
          <ProfilePic />
          <Text style={{ fontSize: "0.8em" }}>madman_lacy . 20 songs</Text>
        </div>
        <CreateButtonContainer>
          <Text style={{ fontSize: "30px" }}>+</Text>
        </CreateButtonContainer>
      </ItemsContainer>
      <MusicTable />
    </PlayListContainer>
  );
};
export default Card;
