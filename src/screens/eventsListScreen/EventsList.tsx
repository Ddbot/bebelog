import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Event } from '../../models/Event';
import { supabase } from '../../supabase/client';

import EventsListItem from './EventsListItem';

const List = styled.ul`
    max-height: calc(15.14cm - 3rem);
    overflow-y: scroll;
    width: 100%;

    align-self: flex-start;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    place-items: center;
    // place-content: start space-evenly;
`;

const EventsList = (): JSX.Element => { 
    const [list, setList]: [Event[], any] = useState([]);
    
    async function fetchEvents() {
        const { data, error } = await supabase.from('events').select();        
        if (error) console.error(error);
        if (data) setList(data);        
    };

    useEffect(() => { 
        fetchEvents();
    }, []);

    return <List>
            {list?.length > 0 && (
            list?.map((ev: Event, i: number) => {
                return <EventsListItem event={ev} key={'eventListItem'+i} />
            })
            )}
    </List>
};

export default EventsList;