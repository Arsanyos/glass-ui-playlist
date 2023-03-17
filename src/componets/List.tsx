import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { useFetchMusicsQuery } from "src/redux/music.api";
import {
  CreateButtonContainer,
  Header,
  ItemsContainer,
  PlayListContainer,
  ProfilePic,
  Text,
} from "../styles/styles";
import { formValues } from "./Form";
import MusicTable from "./Table/MusicTable";
interface HeaderProps {
  children?: any;
  setOpenform: Dispatch<SetStateAction<boolean>>;
  openForm: boolean;
  setToBeUpdated: Dispatch<SetStateAction<formValues | undefined>>;
}
const Card: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  setOpenform,
  openForm,
  setToBeUpdated,
}) => {

  const { data } = useFetchMusicsQuery({});
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
          <Text style={{ fontSize: "0.8em" }}>madman_lacy  -  {  data?.length}</Text>
        </div>
        <CreateButtonContainer
      
          onClick={() => {
            setOpenform(!openForm);
            setToBeUpdated(undefined)
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
      <MusicTable setToBeUpdated={setToBeUpdated} setOpenform={setOpenform} />
    </PlayListContainer>
  );
};
export default Card;
