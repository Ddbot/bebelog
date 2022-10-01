import styled from 'styled-components';
import { Event } from '../../models/Event';

type Props = {
    list: Event[]
}
const List = styled.ul``;

const EventsList = (props : Props): JSX.Element => { 
    return <List>
        <ul>
            {props.list?.length > 0 ? (
                props.list?.map((ev: Event, i:number) => {
                    return !['dodo','nourriture'].includes(ev.type) ? (
                        <li key={'key' + i}>
                            {ev.type} : {ev.start}{' '}
                        </li>
                    ) : (<li key={'key' + i}>{ String(Object.values(ev)) }</li>);
                })
            ) : (
                <li></li>
            )}
        </ul>
    </List>
};

export default EventsList;