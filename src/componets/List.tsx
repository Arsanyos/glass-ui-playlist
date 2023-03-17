import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import {
  Header,
  ItemsContainer,
  PlayListContainer,
  ProfilePic,
  Text,
  CreateButtonContainer,
} from "../styles/styles";
import MusicTable from "./Table/MusicTable";
import { useTotalMusicQuery } from "src/redux/music.api";
import { formValues } from "./Form";
interface HeaderProps {
  children?: any;
  setOpenform: Dispatch<SetStateAction<boolean>>;
  openForm: boolean;
  setToBeUpdated:Dispatch<SetStateAction<formValues | undefined>>;
}
const Card: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  setOpenform,
  openForm,
  setToBeUpdated
}) => {
    // const { data:TotalMusic } = useTotalMusicQuery({});
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
          <Text style={{ fontSize: "0.8em" }}>madman_lacy . 20</Text>
        </div>
        <CreateButtonContainer
          onClick={() => {
            setOpenform(!openForm);
          }}
        >
          <Text
            style={{
              fontSize: "30px",
              rotate: openForm ? "43deg" : "0deg",
              transition: "0.4s",
            }}
          >
            <p style={{ lineHeight: "0px", background: "red" }}>+</p>
          </Text>
        </CreateButtonContainer>
      </ItemsContainer>
      <MusicTable setToBeUpdated={setToBeUpdated} />
    </PlayListContainer>
  );
};
export default Card;
