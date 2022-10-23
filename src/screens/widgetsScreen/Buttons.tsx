import { EventType } from '../../models/Event';
import {
    Widget,
    ButtonsGroup
} from './styled-components';
import Lavage from '../../assets/icons/Lavage';
import Change from '../../assets/icons/Change';
import Dodo from '../../assets/icons/Dodo';
import Medicament from '../../assets/icons/Medicament';
import Nourriture from '../../assets/icons/Nourriture';


type Props = {
    handleClick: any,
    timerFn: any,
};

export const icons: any = {
    lavage: <Lavage />,
    change: < Change />,
    medicament:<Medicament />,
    dodo:<Dodo />,
    nourriture: <Nourriture />
};

export const iconsColors: string[] = ['#CC8881', '#8FA9CC', '#BCCC7A', '#9E99CC', '#85C9CC'];

const Buttons = ({ handleClick, timerFn }: Props): JSX.Element => { 
    return <ButtonsGroup className='categoriesBtns'>
              {
            Object.entries(EventType)
                .filter((button: [string, EventType]) => { 
                    return !['dodo','nourriture','timed'].includes(button[1])
                })
                .map((ev: [string, EventType], i: number): JSX.Element => { 
            return <Widget
                key={'btn' + i}
                data-type={ev[1]}
                onClick={handleClick}
            >{icons[ev[1]]}</Widget>
        })
        }
        <Widget
            key={'btn_dodo'}                
            data-type='dodo'
            onClick={timerFn}>{icons['dodo']}</Widget>
        <Widget
            key={'btn_nourriture'}                
            data-type='nourriture'
            onClick={timerFn}>{ icons['nourriture']}</Widget>
    </ButtonsGroup>
};

export default Buttons;