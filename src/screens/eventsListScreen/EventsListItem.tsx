import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Event } from '../../models/Event';
import { icons } from '../../assets/icons';
import dayjs from 'dayjs'

type Props = {
    event: Event
};


const Card = styled(Link)`
    place-self: start stretch;

    width: 100%;
    height: 3rem;

    list-style: none;
    transform: translateX(-1.25rem);

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    margin-bottom:16px; 

    text-decoration: none;
    font-size: 1.1rem;

`;
const Li = styled.li`
    width: 100%;
    height: 100%;

    padding: 0 16px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    background: papayawhip;
`;

const ArrowContainer = styled.span`
    margin: 0 4px;
`;

const EventsListItem = ({ event }: Props) => { 
    return  !['dodo','nourriture'].includes(event.type) ? <Card to={`/events_list/${event.id}`} state={{ value: event}}><Li>
        {icons[event.type]}{ dayjs(event.start).format('HH[:]mm')}
    </Li></Card> : <Card to={`/events_list/${event.id}`} state={{value:event}}><Li>
            {icons[event.type]} <>{dayjs(event.end!).format('HH:mm')} <ArrowContainer>→</ArrowContainer> {dayjs(event.start).format('HH:mm')}</>
    </Li></Card>
};

export default EventsListItem;