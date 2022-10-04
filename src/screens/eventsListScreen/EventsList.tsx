import { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Event } from '../../models/Event';
import { supabase } from '../../supabase/client';
import dayjs from 'dayjs';

import EventsListItem from './EventsListItem';

const List = styled.ul`
	max-height: calc(100% - 11rem);
	min-height: calc(100% - 11rem);

    overflow-y: scroll;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    place-items: start;
    align-items: start;
    align-content: start;
`;

const TemporaryDateSearchBox = styled.h2`
    width: 100%;
    height: 4rem;

    font-size: 1.3rem;
    margin: 0;

	display: flex;
	flex-flow: row nowrap;
	align-items: flex-end;
    justify-content: space-between;
    padding: 0 16px;

    & > button {
        padding: 0 16px;
        // width: 100%;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }
`;

const EventsList = (): JSX.Element => { 
    const [list, setList]: [Event[], any] = useState([]);
    const [query, setQuery]: [any, SetStateAction<any>] = useState(dayjs().unix()*1000);
    
    async function fetchEvents() {
        let start = dayjs(query).startOf('D').unix() * 1000;
        let end = dayjs(query).endOf('D').unix() * 1000;
        const { data, error } = await supabase
            .from('events')
            .select()
            .gte('start', start)
            .lte('end', end);
        if (error) console.error(error);
        if (data) setList(data);        
    };

    function handleClick(event:React.MouseEvent<HTMLButtonElement>) {
        const name = event.currentTarget.dataset.name;
        switch (name) {
            case 'minus':
                setQuery((prev: any) => { 
                    return dayjs(prev).subtract(1, 'day').unix() * 1000;
                });
                break;        
            default:
                setQuery((prev: any) => { 
                    return dayjs(prev).add(1, 'day').unix() * 1000;
                });
                break;
        }
        
    }

    useEffect(() => { 
        fetchEvents();
    });

    return <>
        <TemporaryDateSearchBox><button onClick={handleClick} data-name="minus">⬅️</button>{ dayjs(query).format('DD MMM')}<button onClick={handleClick} data-name="plus">➡️</button></TemporaryDateSearchBox>
            <List>
                {list?.length > 0 && (
                list?.map((ev: Event, i: number) => {
                    return <EventsListItem event={ev} key={'eventListItem'+i} />
                })
                )}
            </List>
        </>
};

export default EventsList;