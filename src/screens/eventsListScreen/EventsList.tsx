import React, { SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { StyledComponent } from 'styled-components';
import { Event } from '../../models/Event';
import { supabase } from '../../supabase/client';
import dayjs from 'dayjs';

import EventsListItem from './EventsListItem';

import RightArrow from '../../assets/RighArrow';
import BackArrow from '../../assets/BackArrow';

const SkeletonListItem = styled.div`
    width: calc(100% - 32px);
    height: 3rem;

    list-style: none;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    margin-bottom:16px; 

    text-decoration: none;
    font-size: 1.1rem;
`;

const AddEventButton = () => { 
    const Container: StyledComponent<any, any> = styled.div`
    position: absolute;
    top: 0;
        width: 100%;
        height: 3rem;

        list-style: none;

        margin-bottom:16px; 

        text-decoration: none;


        padding: 0 16px;
        
        background: green;
        color: whitesmoke;
        font-size: 2.4rem;

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    `;
    return <Container>
        <Link to="/add_event" style={{
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none',
                    color: 'whitesmoke'
                }}>
        <span>+</span></Link></Container>;
};

const List = styled.ul`
position: relative;
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
    place-content: start;
    align-items: start;
    align-content: start;

    padding: 0 0;
    // margin-top: 3rem;
    border: 1px solid red;
`;

const TemporaryDateSearchBox = styled.h2`
    width: 100%;
    height: 4rem;

    font-size: 1.3rem;
    margin: 0;

    position: relative;
    transform: translateY(25%);

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

const EventsList = (): JSX.Element => { 
    const [list, setList]: [Event[], any] = useState([]);
    const [query, setQuery]: [any, SetStateAction<any>] = useState(dayjs().unix()*1000);
    
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
        let start = dayjs(query).startOf('D').unix() * 1000;
        let end = dayjs(query).endOf('D').unix() * 1000;
        
        async function fetchEvents() {
            const { data, error } = await supabase
                .from('events')
                .select()
                .gte('start', start)
                .lte('end', end);
            if (error) console.error(error);
            if (data) {
                setList(data);
                data.length > 0 && localStorage.setItem(String(start), JSON.stringify(data));
            }       
        };        

        if (localStorage.getItem(String(start)) !== null && localStorage.getItem(String(start)) !== '[]') {
            let res = JSON.parse(localStorage.getItem(String(start))||"");
            setList(res);
                        // fetchEvents();

        } else {
            fetchEvents();
        };
    },[query]);

    return <>
        <TemporaryDateSearchBox>
            <button onClick={handleClick} data-name="minus"><BackArrow /></button>
            <span>{dayjs(query).format('dddd DD MMM')}</span>
            { (dayjs(query).add(1,'day').isSame(dayjs()) || dayjs(query).add(1,'day').isBefore(dayjs())) && <button onClick={handleClick} data-name="plus"><RightArrow /></button>}
            { dayjs(query).add(1,'day').isAfter(dayjs()) && <button onClick={handleClick} data-name="plus" disabled></button>}
        </TemporaryDateSearchBox>
        <List>
            <AddEventButton />
            {list?.length >= 1 && (
                list?.map((ev: Event, i: number) => {
                    return <EventsListItem event={ev} key={'eventListItem'+i} />
                })
            )}
            { list?.length >= 1 && list?.length < 6 && Array.from({
                length: 6-list.length
            }, () => ('')).map((v, i) => {
                return <SkeletonListItem key={ 'skeleton'+i} />
            })
            }
            </List>
        </>
};

export default EventsList;