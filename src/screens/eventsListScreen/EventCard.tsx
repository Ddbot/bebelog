import { SetStateAction, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { icons } from '../../assets/icons';
import React from 'react';
import { supabase } from '../../supabase/client';
import dayjs from 'dayjs';
import Trash from '../../assets/Trash';
import Pen from '../../assets/Pen';
import BackArrow from '../../assets/BackArrow';
import { EventType } from '../../models/Event';
import { DataObject, useData } from '../../contexts/DataContext';
import { 
    Card,
Content,
Icon,
Values,
ButtonContainer,
ArrowContainer
} from './styled-components';
import useKeyPress from '../../hooks/useKeyPress';

type Times = {
    [key: string]: string
};

type Payload = {
    id?: number,
    start: number,
    end: number,
    type: EventType
};

type Props = {
    isEditMode?: boolean
};

const EventCard = (props: Props) => { 
    const location = useLocation();
    const { value } = location.state;
    const navigate = useNavigate();
    const { setData } = useData();

    const [isInEditMode, setIsInEditMode] = useState(props.isEditMode ||false);
    const [time, setTime]:[Times, SetStateAction<any>] = useState({
        start: dayjs(value.start).format('HH:mm'),
        end: dayjs(value.end).format('HH:mm')
    });

    const [isReady, setIsReady] = useState(false);

    const enterPress = useKeyPress('Enter');
    const escapePress = useKeyPress('Escape');

    async function deleteEvent(event: React.MouseEvent<Element>) {
        const { id } = event.currentTarget;
        const start = dayjs(value.start).startOf('D').unix() * 1000;

        const { data, error } = await supabase.from('events').delete().match({ id });   
        setData((prev: DataObject) => { 
            delete prev[String(start)];
            return prev;
        });
        
        if (error) console.error(error);
        navigate('/events_list', {
            state: {
                value: start
            }
        });
    }; 

    const submitChange = useCallback(async () => {
        setIsReady(true);
    }, [setIsReady]);     

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

            
            const { data, error } = await supabase.from('events').update({ start, end }).match({ id });

            if (error) console.error('Erruer lors de linsertion', data);

            setData((prev: DataObject) => { 
                delete prev[String(dayjs(start).startOf('D').unix()*1000)];
                return prev;
            });            

            navigate('/events_list', {
                state: {
                    value: dayjs(start).startOf('D').unix()*1000
                }
            });
        }; 
        
        async function upsertEvent(payload: Payload) {
            const { type, start, end } = payload;  
            // calculer index dans ctx
            const ctxIndex = String(dayjs(start).startOf('D').unix() * 1000);

            
            const { data, error } = await supabase.from('events').upsert({ type, start, end });

            if (error) console.error('Erruer lors de lupsertion', data);
            setData((prev: DataObject) => { 
                delete prev[ctxIndex];
                return prev;
            });

            navigate('/events_list', {
                state: {
                    value: ctxIndex
                }
            });
        };         
        
        Object.keys(time as Object).forEach((key, i) => { 
            let heure: string = time[key];
            const regex: RegExp = /(?<hh>\d{1,2}):(?<mm>\d{1,2})/;
            let result: RegExpExecArray|null = regex.exec(heure);
            const { hh, mm }= result!.groups!;
            clonedObj[key] = dayjs(value[key]).hour(Number(hh)).minute(Number(mm)).unix()*1000;
        });

        // cree un new Event en upsert
        (dayjs(clonedObj.end).isAfter(clonedObj.start) || dayjs(clonedObj.end).isSame(clonedObj.start)) && isReady && !!value.isNew && upsertEvent(clonedObj);

        (dayjs(clonedObj.end).isAfter(clonedObj.start) || dayjs(clonedObj.end).isSame(clonedObj.start)) && isReady && !value.isNew && updateEvent(clonedObj);
        if (dayjs(clonedObj.end).isBefore(clonedObj.start)) { 
            clonedObj.end = dayjs(clonedObj.end).add(1, 'day').unix()*1000;
            isReady && updateEvent(clonedObj);
        }
    }, [isReady, time, value, navigate, setData]);
    
    // si ds EditMode et keypress Enter alors submit
    useEffect(() => {
        enterPress && isInEditMode && submitChange();
    }, [isInEditMode, enterPress, submitChange]);

        useEffect(() => {
            escapePress && setIsInEditMode(false);
    }, [escapePress, setIsInEditMode]);

    return !['dodo','nourriture'].includes(value.type) ? <Card>
        <Content>
            <Icon>{icons[value.type]}</Icon>
            {isInEditMode && <Values><input data-type='oneshot' onChange={handleChange} type="time" name="start" min={0} max={23} value={time['start']} /></Values>}
            { !isInEditMode && <Values><div>{dayjs(value.start).format('HH:mm')}</div></Values>}
            <ButtonContainer>                
                <button id={value.id} onClick={() => { navigate('/events_list')}}><BackArrow /></button>
                <button id={value.id} onClick={deleteEvent}><Trash /></button>
                { !isInEditMode &&<button id={value.id} onClick={() => { setIsInEditMode(true)}}><Pen /></button>}
                {isInEditMode && <button id={value.id} onClick={submitChange} disabled={ isReady }>✔️</button>}
            </ButtonContainer>
        </Content>
    </Card> : <Card>
        <Content>
            <Icon>{icons[value.type]}</Icon>
                {isInEditMode && <Values>
                    <input data-type='timed' onChange={handleChange} type="time" name="start" className="durationDisplay" min={0} max={23} value={time['start']} /> <ArrowContainer><span>→</span></ArrowContainer> <input type="time" onChange={ handleChange} className="durationDisplay" name="end" min={0} max={23} value={time['end']} /></Values>}
                { !isInEditMode && <Values><div className="durationDisplay">{dayjs(value.start!).format('HH:mm')} <ArrowContainer><span>→</span></ArrowContainer> {dayjs(value.end).format('HH:mm')}</div></Values>}
                <ButtonContainer>                    
                    <button id={value.id} onClick={() => { navigate('/events_list')}}><BackArrow /></button>
                    <button id={value.id} onClick={deleteEvent}><Trash /></button>
                    { !isInEditMode &&<button id={value.id} onClick={() => { setIsInEditMode(true)}}><Pen /></button>}
                    {isInEditMode && <button id={value.id} onClick={submitChange}>✔️</button>}
                </ButtonContainer>
            </Content>
    </Card>
    
};

export default EventCard;