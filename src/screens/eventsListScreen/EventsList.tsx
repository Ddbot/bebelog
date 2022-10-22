import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { StyledComponent } from 'styled-components';
import { Event } from '../../models/Event';
import { supabase } from '../../supabase/client';
import dayjs from 'dayjs';
import { SettingsType, useSettings } from '../../contexts/SettingsContext';

import EventsListItem from './EventsListItem';


import { useData, DataObject } from '../../contexts/DataContext';
import DateDisplaySelector from './DateDisplaySelector';

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
    const { settings, setSettings }:{ settings: SettingsType, setSettings: Dispatch<SetStateAction<SettingsType>>} = useSettings();
    const { query } = settings;


    const { data, setData }: { data: DataObject, setData: Dispatch<SetStateAction<DataObject>> } = useData();
    let start = String(dayjs(query).startOf('D').unix() * 1000);
    let end = String(dayjs(query).endOf('D').unix() * 1000);

    
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

    let fetchOrGetFromContext = useCallback((start: string, end: string) => {
        // on clone les data du contexte
        const d = structuredClone(data);

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
        
        // seulment si l'entree n'existe pas dans le contexte, on la fetch sinon depuis le ctx
        !d[start] && fetchEvents();
    },[setData,data]);

    useEffect(() => {    
        // return () => {
            fetchOrGetFromContext(start, end);
        // }
    }, [fetchOrGetFromContext,start,end]);

    return <>
        <TemporaryDateSearchBox>
            <DateDisplaySelector />
        </TemporaryDateSearchBox>
        <List className='listView'>
            <AddEventButton />
            {data[String(dayjs(query).startOf('D').unix()*1000)]?.length >= 1 && (
                data[String(dayjs(query).startOf('D').unix()*1000)]?.sort((a,b) => { 
                    if(a.start > b.start){
                        return 1
                    };
                    if(a.start <= b.start){
                        return -1
                    };
                    return 0
                }).map((ev: Event, i: number) => {
                    return <EventsListItem event={ev} key={'eventListItem'+i} />
                })
            )}
        </List>
    </>
};

export default EventsList;