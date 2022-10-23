import Buttons from './Buttons';
import { HomeContainer } from './styled-components';

type Props = {
    handleClick: Function,
    timerFn: Function,
};

const Home = ({ handleClick, timerFn }: Props) => {
    return <HomeContainer>
        <Buttons timerFn={timerFn} handleClick={handleClick} />
    </HomeContainer>};
export default Home;        