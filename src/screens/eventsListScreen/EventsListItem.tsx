import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Event, EventType } from '../../models/Event';
import { icons } from '../../assets/icons/icons';
import dayjs from 'dayjs'

const LiAnimation = keyframes`
    100% {
        transform: translateY(0);
        opacity: 1;
    };
`;

type Props = {
    event: Event,
    index: number
};

const colors = (type: EventType): string => {
    const obj: { [key: string]: string } = {
        change: '#8FA9CC',
        dodo: '#9E99CC',
        lavage: '#CC8881',
        medicament: '#BCCC7A',
        nourriture: '#85C9CC',
    };
    return obj[type];
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

    transform: translateY(-50%);
    opacity: 0;

    animation-name: ${LiAnimation};
    animation-duration: .125s;
    animation-fill-mode: forwards;
`;

const ArrowContainer = styled.span`
    margin: 0 4px;
    & > span {
        font-weight: 400;
        font-size: 1.6rem;
    }
`;

const EventsListItem = ({ event,index }: Props) => { 
    return !['dodo', 'nourriture'].includes(String(event.type)) ? <Card to={`/events/${event.id}`} state={{ value: { ...event, from: 'events/list' } }}><Li style={{
        background:  colors(event.type), animationDelay: `${index * 0.1}s` }}>
        {icons[String(event.type)]}{ dayjs(event.start).format('HH[:]mm')}
    </Li></Card> : <Card to={`/events/${event.id}`} state={{ value: { ...event, from: 'events/list' } }}><Li style={{
        background:  colors(event.type),animationDelay: `${index * 0.1}s`}}>
            {icons[String(event.type)]} <>{dayjs(event.start!).format('HH:mm')} <ArrowContainer><span>→</span></ArrowContainer> {dayjs(event.end).format('HH:mm')}</>
    </Li></Card>
};

export default EventsListItem;