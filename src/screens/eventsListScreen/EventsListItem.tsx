import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Event } from '../../models/Event';
import { icons } from '../../assets/icons';
import dayjs from 'dayjs'
import { useEffect } from 'react';

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

const EventsListItem = ({ event }: Props) => { 
    return  !['dodo','nourriture'].includes(event.type) ? <Card to={`/events_list/${event.id}`} state={{ value: event}}><Li>
        {icons[event.type]}{ dayjs(event.start).format('HH[:]mm')}
    </Li></Card> : <Card to={`/events_list/${event.id}`} state={{value:event}}><Li>
            {icons[event.type]} { (event.end! - event.start)/1000 }
    </Li></Card>
};

export default EventsListItem;