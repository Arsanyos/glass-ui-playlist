import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
} from "react";
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
import { setTotal } from "src/redux/music.slice";
import { selectMusicTotal } from "src/redux/music.slice";
import { useAppDispatch } from "src/redux/hooks";
import { useAppSelector } from "src/redux/hooks";
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
  const dispatch = useAppDispatch();
  const musicTotal = useAppSelector(selectMusicTotal);
  const { data } = useFetchMusicsQuery({});
  useEffect(() => {
    dispatch(setTotal({ total: data?.length }));
  }, [data]);
  return (
    <PlayListContainer>
      <Header style={{ marginLeft: "10px" }}>Play List</Header>
      <ItemsContainer style={{ marginTop: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            alignItems: "center",
            height: "20px",
            width: "auto",
          }}
        >
          <ProfilePic />
          <Text
            style={{
              fontSize: "0.8em",
              left: "20px",
              position: "relative",
            }}
          >
            madman_lacy{"           ---"}
          </Text>

          <Text
            style={{ fontSize: "1em", marginLeft: "30px", color: "whitesmoke" }}
          >
            {"Total songs"} {musicTotal}{" "}
          </Text>
        </div>

        <CreateButtonContainer
          onClick={() => {
            setOpenform(!openForm);
            setToBeUpdated(undefined);
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
