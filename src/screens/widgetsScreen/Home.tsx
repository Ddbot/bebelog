import { useEffect } from 'react';
import Buttons from './Buttons';
import { HomeContainer } from './styled-components';
import dayjs from 'dayjs';

type Props = {
    handleClick: any,
    timerFn: any,
};

const Home = ({ handleClick, timerFn }: Props) => {
    return <HomeContainer>
        <Buttons timerFn={timerFn} handleClick={handleClick} />
    </HomeContainer>};
export default Home;        