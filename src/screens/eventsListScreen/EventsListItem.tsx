import styled from 'styled-components';

import Lavage from '../../assets/Lavage';
import Change from '../../assets/Change';
import Dodo from '../../assets/Dodo';
import Medicament from '../../assets/Medicament';
import Nourriture from '../../assets/Nourriture';
import { Event } from '../../models/Event';

const icons: any = {
    lavage: <Lavage />,
    change: <Change />,
    medicament:<Medicament />,
    dodo:<Dodo />,
    nourriture: <Nourriture />
};

type Props = {
    event: Event
};

const Li = styled.li`
    width: 100%;
    height: 3rem;
    list-style: none;
    transform: translateX(-1.25rem);
    padding: 0 16px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    margin-bottom:16px;
    background: pink;
`;

const EventsListItem = ({event}: Props) => { 
    return  !['dodo','nourriture'].includes(event.type) ? <Li>
            {icons[event.type]} {event.type}
    </Li> : <Li>
            {icons[event.type]} {event.type}
    </Li>
};

export default EventsListItem;