import React from 'react';
import { MainCardContainer,PlayListContainer,StatsContainer ,Divider,Header,ItemsContainer} from '../styles/styles';
import { PropsWithChildren } from 'react';
import List from './List';
import Stat from './Stat'
interface HeaderProps {
    children?: any;
  }
const Card: React.FC<PropsWithChildren<HeaderProps>>= ({ children }) =>{

    return(<MainCardContainer>
        <List/>
        <Divider/>
        <Stat/>
    </MainCardContainer>)
}
export default Card;