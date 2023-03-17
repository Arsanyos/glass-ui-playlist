import React, { PropsWithChildren, useState } from "react";
import { Divider, MainCardContainer } from "../styles/styles";
import List from "./List";
import RightContainer from "./RightContainer";
import Form from "./Form";
import { formValues } from "./Form";
import Stat from "./Stat";
interface HeaderProps {
  children?: any;
}
const Card: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  const [openForm, setOpenform] = useState(false);
  const [tobeUpdated, setToBeUpdated] = useState<formValues>();
  return (
    <MainCardContainer>
      <List
        setToBeUpdated={setToBeUpdated}
        setOpenform={setOpenform}
        openForm={openForm}
      />

      <Divider />
      <RightContainer>
        <div>
          {openForm ? (
            <Form tobeUpdated={tobeUpdated} setOpenform={setOpenform} />
          ) : (
            <Stat />
          )}
        </div>
      </RightContainer>
    </MainCardContainer>
  );
};
export default Card;
