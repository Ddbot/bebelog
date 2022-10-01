import { EventType } from '../../models/Event';
import {
    Widget,
    ButtonsGroup
} from './styled-components';

type Props = {
    handleClick: any,
    timerFn: any,
}

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
            >{ev[1]}</Widget>
        })
        }
        <Widget
            key={'btn_dodo'}                
            onClick={timerFn}>dodo</Widget>
        <Widget
                key={'btn_nourriture'}                
                onClick={timerFn}>nourriture</Widget>
    </ButtonsGroup>
};

export default Buttons;