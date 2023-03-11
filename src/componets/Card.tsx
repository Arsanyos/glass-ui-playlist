import React, { PropsWithChildren, useState } from "react";
import { Divider, MainCardContainer } from "../styles/styles";
import List from "./List";
import Stat from "./Stat";
import Form from "./Form";
interface HeaderProps {
  children?: any;
}
const Card: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  const [openForm, setOpenform] = useState(false);

  return (
    <MainCardContainer>
      <List setOpenform={setOpenform} openForm={openForm} />
      <Divider />
      <Stat>
        <div>{openForm ? <Form /> : "Chart"}</div>
      </Stat>
    </MainCardContainer>
  );
};
export default Card;
