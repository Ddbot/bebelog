import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Event } from '../../models/Event';
import { icons } from '../../assets/icons/icons';
import dayjs from 'dayjs'
import { useEffect } from 'react';

type Props = {
    event: Event
};


export const Card = styled(Link)`
    width: 100%;
    height: 6vh;

    list-style: none;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    margin-bottom:16px; 

    text-decoration: none;
    font-size: 1.1rem;

    &:first-child {
        margin-top: 3rem;
    }

`;
const Li = styled.li` 
    width: 100%;
    height: 100%;

    padding: 0 16px;
    margin: 0 16px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    background: silver;
`;

const ArrowContainer = styled.span`
    margin: 0 4px;
    & > span {
        font-weight: 400;
        font-size: 1.6rem;
    }
`;

const EventsListItem = ({ event }: Props) => { 
    return  !['dodo','nourriture'].includes(String(event.type)) ? <Card to={`/events/${event.id}`} state={{ value: event}}><Li>
        {icons[String(event.type)]}{ dayjs(event.start).format('HH[:]mm')}
    </Li></Card> : <Card to={`/events/${event.id}`} state={{value:event}}><Li>
            {icons[String(event.type)]} <>{dayjs(event.start!).format('HH:mm')} <ArrowContainer><span>→</span></ArrowContainer> {dayjs(event.end).format('HH:mm')}</>
    </Li></Card>
};

export default EventsListItem;