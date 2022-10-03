import Buttons from './Buttons';
import { FAB, HomeContainer } from './styled-components';
import Gear from '../../assets/Gear';
import { Link, Outlet } from 'react-router-dom';

type Props = {
    handleClick: any,
    timerFn: any,
};

const Home = ({ handleClick, timerFn }: Props) => <HomeContainer>
    <Buttons timerFn={timerFn} handleClick={handleClick} />
    <FAB>
        <Gear />
    </FAB>
    <Outlet />
</HomeContainer>;
export default Home;        