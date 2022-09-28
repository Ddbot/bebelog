import styled from 'styled-components';
import { EventType } from '../../models/Event';


type Props = {
    handleClick: any
}

const ButtonsGroup = styled.div``;

const Buttons = ({ handleClick }: Props): JSX.Element => { 
    return <ButtonsGroup>
              {
        Object.entries(EventType).map((ev: [string, EventType], i: number): any => { 
          return <button key={ 'btn' + i } data-type={ev[1]} onClick={handleClick}>{ ev[1].toUpperCase() }</button>
        })
      }
    </ButtonsGroup>
};

export default Buttons;