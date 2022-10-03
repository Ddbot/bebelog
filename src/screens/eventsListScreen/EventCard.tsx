import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { icons } from '../../assets/icons';
import React from 'react';
import { supabase } from '../../supabase/client';
import dayjs from 'dayjs';

const Card = styled.div`
    width: 100%;
    height:calc(100% - 7rem);
`;
const Content = styled.div`
    width: 100%;
    height: 100%;

    display: grid; 
    grid-auto-rows: 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    place-items: stretch;
`;

const Icon = styled.div`
    grid-column: 1 / span 3;
    grid-row: 1 / span 1;
    scale: 4;
    transform-origin: top center;
    margin-top: 24px;
`;

const Values = styled.div`
    grid-column: 1 / span 3;
    grid-row: 2 / span 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: space-evenly;
    justify-content: center;
    & > div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 3rem;
  
    }
    `;

const ButtonContainer = styled.div`
    place-self: end center;
    width: 100%;

    grid-column: 1 / span 3;
    grid-row: 3 / span 1;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;

    padding-bottom: 24px;

    & > button {
        margin: 4px;
        font-size: 1.4rem;
        text-align: center;

        scale: 1.5;
    }
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
    
    async function editEvent(event: React.MouseEvent<Element>) {
        console.log('ON VA DANS UNE PAGE FORM pour changer les infos de lEVENT');        
    };     

    async function confirmChange(event: React.MouseEvent<Element>) {
        console.log('ici on envoie a superbase lupdate');        
    };     

    return !['dodo','nourriture'].includes(value.type) ? <Card>
        <Content>
            <Icon>{icons[value.type]}</Icon>
            <Values><div>{dayjs(value.start).format('HH:mm')}</div></Values>
            <ButtonContainer>
                <button id={value.id} onClick={deleteEvent}>🗑️</button>
                <button id={value.id} onClick={confirmChange}>✔️</button>
                <button id={value.id} onClick={editEvent}>🖊️</button>
            </ButtonContainer>
        </Content>
    </Card> : <Card>
        <Content>
            <Icon>{icons[value.type]}</Icon>
                <Values><div>{(value.end! - value.start) / 1000}</div></Values>
                <ButtonContainer>
                    <button id={value.id} onClick={deleteEvent}>🗑️</button>
                    <button id={value.id} onClick={confirmChange}>✔️</button>
                    <button id={value.id} onClick={editEvent}>🖊️</button>
                </ButtonContainer>
            </Content>
        </Card>
    
};

export default EventCard;