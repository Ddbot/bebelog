import Buttons from './Buttons';
import { FABGears, FABStats, HomeContainer } from './styled-components';
import Gear from '../../assets/Gear';
import Stats from '../../assets/Stats';
import { Outlet } from 'react-router-dom';
import ListIcon from '../../assets/ListIcon';
import EyeIcon from '../../assets/EyeIcon';

type Props = {
    handleClick: any,
    timerFn: any,
};

const Home = ({ handleClick, timerFn }: Props) => {
    return <HomeContainer>
        <Buttons timerFn={timerFn} handleClick={handleClick} />
    {/* <FABStats>
        <Stats />
        <ListIcon />
        <EyeIcon />
    </FABStats>
    <FABGears>
        <Gear />
    </FABGears>
    <Outlet /> */}
</HomeContainer>};
export default Home;        