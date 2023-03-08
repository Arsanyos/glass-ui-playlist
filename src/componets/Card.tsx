import React from 'react';
import { MainCardContainer } from '../styles/styles';
import { PropsWithChildren } from 'react';
interface HeaderProps {
    children?: any;
  }
const Card: React.FC<PropsWithChildren<HeaderProps>>= ({ children }) =>{

    return<MainCardContainer></MainCardContainer>
}
export default Card;