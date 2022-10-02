import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Event } from '../../models/Event';
import { supabase } from '../../supabase/client';

const List = styled.ul``;

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
        <ul>
            {list?.length > 0 && (
                list?.map((ev: any, i:number) =>
                    <li key={'key' + i}>
                        {ev.type} : {ev.start} : {ev.end}
                    </li>)
            )}
        </ul>
    </List>
};

export default EventsList;