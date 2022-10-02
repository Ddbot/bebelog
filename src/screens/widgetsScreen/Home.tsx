import Buttons from './Buttons';
import { FAB } from './styled-components';
import Gear from '../../assets/Gear';
import { Link } from 'react-router-dom';

type Props = {
    handleClick: any,
    timerFn: any,
};
const Home = ({ handleClick, timerFn }: Props) => <>
    <Buttons timerFn={timerFn} handleClick={handleClick} />
    <Link to='/settings'><FAB onClick={() => { console.log('On va dans la page Stats & Reglages') }}>
        <Gear />
    </FAB></Link>
</>;
export default Home;        