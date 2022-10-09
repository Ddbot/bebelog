import React, { SetStateAction, useEffect, useState } from 'react';
import { Action, EventType, TimerType } from './models/Event';
import { Routes, Route, Link } from 'react-router-dom';
import EventsList from './screens/eventsListScreen/EventsList';
import EventCard from './screens/eventsListScreen/EventCard';
import SettingsPage from './screens/settings/Settings';

import styled from 'styled-components';
import './App.css';
import { supabase } from './supabase/client'; 
import Home from './screens/widgetsScreen/Home';

import { useSettings } from './contexts/SettingsContext';
import dayjs from 'dayjs';
import CreateEventForm from './screens/eventsListScreen/CreateEventForm';
import Visualisation from './screens/eventsVizScreen/Visualisation';


const radius = '0.67cm';

const MobileShell = styled.div`
  aspect-ratio: 1 / 2;
  width: 7.57cm;
  border-radius: ${radius};
  border: 8px solid black;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  text-align: center;
  overflow: hidden;

`;

const TopBar = styled.h1`
align-self: flex-start;
  width: calc(100vw - 20px);
  height: 3rem;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  font-size: 1.7rem;

  margin: 0;
  background: transparent;
  color: black;

  z-index: 2;
`;

function App(): JSX.Element {
  const { settings } = useSettings();

  const [timer, setTimer]: [any, SetStateAction<any>] = useState({});

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const currentTarget: HTMLButtonElement = event.currentTarget;
    const { type }: any = currentTarget.dataset;

    insertEvent({
          type,
          start: Date.now(),
          end: Date.now(),
        });
  };

  function timerFn(event: React.MouseEvent<HTMLButtonElement>): void {    
    const currentTarget: HTMLButtonElement = event.currentTarget;
    const category: any = currentTarget.dataset.type;

    setTimer((prev: TimerType) => { 
      if (!timer.category) { 
        return {
          category,
          start: Date.now()
        }
      };

      if (timer.category === category && Object.keys(timer).length === 2) {
        return {
        ...prev,
          end: Date.now()
        }
      }; 

      if (Object.keys(timer).length === 3) { 
        return {
          category,
          start: Date.now()
        }
      }

      if (timer.category !== category && Object.keys(timer).length === 2) {
        return prev;
      }
    });       
  };
  async function insertEvent(event: any) {

    const { data, error } = await supabase.from('events').insert(event);

    if (error) console.error('Erruer lors de linsertion');
    if (data) console.log('Inséré ', data);
  };

  // repere le nb de parametres dans timer et setEventsList accordingly
  useEffect((): void => { 
    let start = dayjs(timer.start).startOf('D').unix() * 1000;

    if (Object.keys(timer).length === 3) {
        insertEvent({
          type: timer.category,
          start: timer.start,
          end: Date.now()
        });
      
      localStorage.removeItem(String(start));
  };    
  }, [timer]);

  return (
      <MobileShell>
      <TopBar><Link to='/' style={{   background: 'transparent',
width: '100%', textDecoration: 'none', color: 'black', transform: 'translateY(100%)'}}>{settings.name}</Link></TopBar>
      <Routes>
        <Route path='/' element={
          <Home handleClick={handleClick} timerFn={timerFn} />} />
        <Route path='events_list' element={<EventsList />} />
        <Route path="events_list/:id" element={<EventCard isEditMode={ false } />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="add_event" element={<CreateEventForm />} />
        <Route path="pick_time" element={<EventCard isEditMode={true} />} />
        <Route path="events_stats" element={ <Visualisation />} />
      </Routes>
    </MobileShell>
    );
  }
export default App;
