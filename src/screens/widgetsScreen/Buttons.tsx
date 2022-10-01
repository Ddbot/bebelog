import styled from 'styled-components';
import { EventType } from '../../models/Event';


type Props = {
    handleClick: any,
    timerFn: any,
}

const ButtonsGroup = styled.div``;

const Buttons = ({ handleClick, timerFn }: Props): JSX.Element => { 
    return <ButtonsGroup>
              {
            Object.entries(EventType)
                .filter((button: [string, EventType]) => { 
                    return !['dodo','nourriture','timed'].includes(button[1])
                })
                .map((ev: [string, EventType], i: number): any => { 
            return <button
                key={'btn' + i}
                data-type={ev[1]}
                onClick={handleClick}
            >{ev[1]}</button>
        })
        }
        <button
            key={'btn_dodo'}                
            onClick={timerFn}>dodo</button>
        <button
                key={'btn_nourriture'}                
                onClick={timerFn}>nourriture</button>
    </ButtonsGroup>
};

export default Buttons;