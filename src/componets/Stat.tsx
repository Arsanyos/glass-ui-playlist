import React, { PropsWithChildren } from "react";
import {
    StatsContainer
} from "../styles/styles";
interface HeaderProps {
  children?: any;
}
const Card: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  return <StatsContainer>{children}</StatsContainer>;
};
export default Card;
