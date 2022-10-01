import { EventType } from '../../models/Event';
import {
    Widget,
    ButtonsGroup
} from './styled-components';
import Lavage from '../../assets/Lavage';
import Change from '../../assets/Change';
import Dodo from '../../assets/Dodo';
import Medicament from '../../assets/Medicament';
import Nourriture from '../../assets/Nourriture';

type Props = {
    handleClick: any,
    timerFn: any,
};

const icons: any = {
    lavage: <Lavage />,
    change: < Change />,
    medicament:<Medicament />,
    dodo:<Dodo />,
    nourriture: <Nourriture />
};

const Buttons = ({ handleClick, timerFn }: Props): JSX.Element => { 
    return <ButtonsGroup>
              {
            Object.entries(EventType)
                .filter((button: [string, EventType]) => { 
                    return !['dodo','nourriture','timed'].includes(button[1])
                })
                .map((ev: [string, EventType], i: number): any => { 
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