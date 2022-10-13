import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { StyledComponent } from 'styled-components';
import { Event } from '../../models/Event';
import { supabase } from '../../supabase/client';
import dayjs from 'dayjs';

import EventsListItem from './EventsListItem';

import RightArrow from '../../assets/RighArrow';
import BackArrow from '../../assets/BackArrow';

import { useData, DataObject } from '../../contexts/DataContext';
import { isTaggedTemplateExpression } from 'typescript';

const Container: StyledComponent<any, any> = styled.div`
    grid-row: 1 / span 1;
    top: 0;
    width: 100%;
    height: 6vh;

    list-style: none;

    margin-bottom:16px; 

    text-decoration: none;


    padding: 0 16px;
    
    background: #03A29E;
    color: whitesmoke;
    font-size: 2.4rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const List = styled.ul`
    position: relative;
	max-height: 37vh;

    overflow-y: scroll;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5,1fr);
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;

    place-items: start;
    place-content: start;
    align-items: start;
    align-content: start;

    padding: 0 0;

    margin-block: 0;
    transition: all 0.225s;

    &.blur {
        filter: blur(10px);
        opacity: 0.3;
    }
`;

const TemporaryDateSearchBox = styled.h2`
    width: 100%;
    height: 10vh;

    font-size: 1.3rem;
    margin: 0;

    position: relative;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    & > button {
        width: 2rem;
        height: 2rem;

        border: none;
        background: transparent;

        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
`;

const EventsList = (props: any): JSX.Element => { 
    const [query, setQuery]: [number, Dispatch<SetStateAction<number>>] = useState(dayjs().unix() * 1000);
    const { data, setData }: {data: DataObject, setData: Dispatch<SetStateAction<DataObject>>} = useData();
    const previousData: DataObject = structuredClone(data);
    
    const AddEventButton = () => { 
        return <Container>
            <Link to="/add_event"
                state={{
                    query
                } }
                style={{
                        width: '100%',
                        height: '100%',
                        textDecoration: 'none',
                        color: 'whitesmoke'
                    }}>
            <span>+</span></Link></Container>;
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
        let start = String(dayjs(query).startOf('D').unix() * 1000);
        let end = String(dayjs(query).endOf('D').unix() * 1000);
        
        async function fetchEvents() {
            const { data, error } = await supabase
                .from('events')
                .select()
                .gte('start', Number(start))
                .lte('start', Number(end));
            if (error) console.error(error);
            if (data) {
                setData((prev: DataObject) => {                    
                    return {
                        ...prev,
                        [start]: [...data]
                    }                    
                });
            }
        };        

            fetchEvents();

    }, [query, setData]);

    return <>
        <TemporaryDateSearchBox>
            <button onClick={handleClick} data-name="minus"><BackArrow /></button>
            <span>{dayjs(query).format('dddd DD MMM')}</span>
            { (dayjs(query).add(1,'day').isSame(dayjs()) || dayjs(query).add(1,'day').isBefore(dayjs())) && <button onClick={handleClick} data-name="plus"><RightArrow /></button>}
            { dayjs(query).add(1,'day').isAfter(dayjs()) && <button onClick={handleClick} data-name="plus" disabled></button>}
        </TemporaryDateSearchBox>
        <List className='listView'>
            <AddEventButton />
            {data[String(dayjs(query).startOf('D').unix()*1000)]?.length >= 1 && (
                data[String(dayjs(query).startOf('D').unix()*1000)]?.map((ev: Event, i: number) => {
                    return <EventsListItem event={ev} key={'eventListItem'+i} />
                })
            )}
        </List>
        </>
};

export default EventsList;