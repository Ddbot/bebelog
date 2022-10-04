import Buttons from './Buttons';
import { FABGears, FABStats, HomeContainer } from './styled-components';
import Gear from '../../assets/Gear';
import Stats from '../../assets/Stats';
import { Outlet } from 'react-router-dom';

type Props = {
    handleClick: any,
    timerFn: any,
};

const Home = ({ handleClick, timerFn }: Props) => <HomeContainer>
    <Buttons timerFn={timerFn} handleClick={handleClick} />
    <FABStats>
        <Stats />
    </FABStats>
        <FABGears>
        <Gear />
    </FABGears>
    <Outlet />
</HomeContainer>;
export default Home;        