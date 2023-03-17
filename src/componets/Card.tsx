import React, { PropsWithChildren, useState } from "react";
import { Divider, MainCardContainer } from "../styles/styles";
import List from "./List";
import Stat from "./Stat";
import Form from "./Form";
import { formValues } from "./Form";
interface HeaderProps {
  children?: any;
}
const Card: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  const [openForm, setOpenform] = useState(false);
  const [tobeUpdated,setToBeUpdated]=useState<formValues>();
  return (
    <MainCardContainer>
      <List setToBeUpdated={setToBeUpdated} setOpenform={setOpenform} openForm={openForm} />
      <Divider />
      <Stat>
        <div>{openForm ? <Form tobeUpdated={tobeUpdated} setOpenform={setOpenform} /> : "Chart"}</div>
      </Stat>
    </MainCardContainer>
  );
};
export default Card;
