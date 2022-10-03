import styled from 'styled-components';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { icons } from '../../assets/icons';
import React from 'react';
import { supabase } from '../../supabase/client';

const Card = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;

    border: 1px solid red;

`;
const Content = styled.div`
    width: 100%;
    height: 3rem;

    padding: 2rem 0.75rem;



    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    background: papayawhip;
`;

const Icon = styled.div`
    scale: 1.2;
    
`;

const EventCard = () => { 
    const location = useLocation();
    const { value } = location.state;
    const navigate = useNavigate();

    async function deleteEvent(event: React.MouseEvent<Element>) {
        const { id } = event.currentTarget;
        const { data, error } = await supabase.from('events').delete().match({ id });        

        if (error) console.error(error);
        navigate('/events_list')
    };    

    return !['dodo','nourriture'].includes(value!.type) ? <Card>
        <Content><Icon>{icons[value!.type]}</Icon><span>{ value!.start}</span><span><button id={value.id} onClick={deleteEvent}>🗑️</button></span>
    </Content></Card> : <Card><Content>
            <span>{icons[value!.type]} { (value!.end! - value!.start)/1000 }</span><span><button id={value.id} onClick={deleteEvent}>🗑️</button></span>
    </Content></Card>
    
};

export default EventCard;