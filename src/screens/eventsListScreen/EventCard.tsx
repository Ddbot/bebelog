import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
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
    align-items: center;
    justify-content: center;

    & > div:not(.durationDisplay),
    & > input:not(.durationDisplay) {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 3rem;
        padding: 0 1.8rem;
    }

    & > div.durationDisplay,
    & > input.durationDisplay {
        font-size: 1.2rem;
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

const ArrowContainer = styled.span`
    margin: 0 4px;
    & > span {
        font-weight: 900;
        font-size: 1.6rem;
    }
`;

type Times = {
    [key: string]: string
};

type Payload = {
    id?: number,
    start: number,
    end: number
}


const EventCard = () => { 
    const location = useLocation();
    const { value } = location.state;
    const navigate = useNavigate();

    const [isInEditMode, setIsInEditMode] = useState(false);
    const [time, setTime]:[Times, SetStateAction<any>] = useState({
        start: dayjs(value.start).format('HH:mm'),
        end: dayjs(value.end).format('HH:mm')
    });

    const [isReady, setIsReady] = useState(false);

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
        setIsReady(true);
    };     

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.currentTarget;  
        const { type } = event.currentTarget.dataset;

        type === 'oneshot' && setTime((prev: Times) => {
            return {
                ...prev,
                [name]: value,  
                end: value
            }
        });  

        setTime((prev: Times) => {
            return {
                ...prev,
                [name]: value,  
            }
        });          
    };

    useEffect(() => { 
        const clonedObj = Object.assign({}, value);

        async function updateEvent(payload: Payload) {
            const { id, start, end } = payload;     
            console.log('oN UPDATE ', id, start,end);
            
            const { data, error } = await supabase.from('events').update({ start, end }).match({ id });

            if (error) console.error('Erruer lors de linsertion');

            navigate('/events_list');
        };        
        
        Object.keys(time as Object).forEach((key, i) => { 
            let heure: string = time[key];
            const regex: RegExp = /(?<hh>\d{1,2}):(?<mm>\d{1,2})/;
            let result: RegExpExecArray|null = regex.exec(heure);
            const { hh, mm }= result!.groups!;
            clonedObj[key] = dayjs(value[key]).hour(Number(hh)).minute(Number(mm)).unix()*1000;
        });

        isReady && updateEvent(clonedObj);
    }, [isReady,time,value, navigate]);

    return !['dodo','nourriture'].includes(value.type) ? <Card>
        <Content>
            <Icon>{icons[value.type]}</Icon>
            {isInEditMode && <Values><input data-type='oneshot' onChange={handleChange} type="time" name="start" min={0} max={23} value={time['start']} /></Values>}
            { !isInEditMode && <Values><div>{dayjs(value.start).format('HH:mm')}</div></Values>}
            <ButtonContainer>                
                <button id={value.id} onClick={() => { navigate('/events_list')}}>⬅️</button>
                <button id={value.id} onClick={deleteEvent}>🗑️</button>
                { !isInEditMode &&<button id={value.id} onClick={() => { setIsInEditMode(true)}}>🖊️</button>}
                {isInEditMode && <button id={value.id} onClick={confirmChange} disabled={ isReady }>✔️</button>}
            </ButtonContainer>
        </Content>
    </Card> : <Card>
        <Content>
            <Icon>{icons[value.type]}</Icon>
                {isInEditMode && <Values>
                    <input data-type='timed' onChange={handleChange} type="time" name="start" className="durationDisplay" min={0} max={23} value={time['start']} /> <ArrowContainer><span>→</span></ArrowContainer> <input type="time" onChange={ handleChange} className="durationDisplay" name="end" min={0} max={23} value={time['end']} /></Values>}
                { !isInEditMode && <Values><div className="durationDisplay">{dayjs(value.start!).format('HH:mm')} <ArrowContainer><span>→</span></ArrowContainer> {dayjs(value.end).format('HH:mm')}</div></Values>}
                <ButtonContainer>                    
                    <button id={value.id} onClick={() => { navigate('/events_list')}}>⬅️</button>
                    <button id={value.id} onClick={deleteEvent}>🗑️</button>
                    { !isInEditMode &&<button id={value.id} onClick={() => { setIsInEditMode(true)}}>🖊️</button>}
                    { isInEditMode && <button id={value.id} onClick={confirmChange}>✔️</button>}
                </ButtonContainer>
            </Content>
    </Card>
    
};

export default EventCard;