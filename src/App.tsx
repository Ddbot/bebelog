import React, { Dispatch, SetStateAction, useEffect, useReducer, useRef, useState } from 'react';
import { Action, Event, EventType, TimerType } from './models/Event';
import { Routes, Route, Link } from 'react-router-dom';
import EventsList from './screens/eventsListScreen/EventsList';
import EventCard from './screens/eventsListScreen/EventCard';

import styled from 'styled-components';
import './App.css';
import Gear from './assets/Gear';
import { Widget } from './screens/widgetsScreen/styled-components';
import { supabase } from './supabase/client'; 
import Home from './screens/widgetsScreen/Home';


const radius = '0.67cm';

const MobileShell = styled.div`
  aspect-ratio: 1 / 2;
  width: 7.57cm;
  border-radius: ${radius};
  border: 8px solid black;

  display: flex;
  flex-flow: row wrap;
  align-items: center;

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
  border-bottom: 2px solid black;
`;

function App(): JSX.Element {
  function reducer(state: any, action: Action): any {

    switch (action.type) {
      case EventType.TIMED:
        return [...state,
        action.value
        ];
      default:
        return [...state, {
          start: Date.now(),
          end: Date.now(),
          type: action.type
        }];
    };
  };

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
  async function insertEvent(event:any) {
    const { data, error } = await supabase.from('events').insert(event);

    if (error) console.error('Erruer lors de linsertion');
    if (data) console.log('Inséré ', data);
  };

  // repere le nb de parametres dans timer et setEventsList accordingly
  useEffect((): void => { 
    if (Object.keys(timer).length === 3) {
        insertEvent({
          type: timer.category,
          start: timer.start,
          end: Date.now()
        });
  };    
  }, [timer]);

  return (
      <MobileShell className='App'>
      <TopBar><Link to='/' style={{width: '100%'}}>Bebelog</Link></TopBar>
      <Routes>
        <Route path='/' element={
          <Home handleClick={handleClick} timerFn={timerFn} />} />
        <Route path='events_list' element={<EventsList />} />
        <Route path="events_list/:id" element={ <EventCard />} />
      </Routes>
      </MobileShell>
    );
  }
export default App;
