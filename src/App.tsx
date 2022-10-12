import React, { SetStateAction, useEffect, useState } from 'react';
import { TimerType } from './models/Event';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import EventsList from './screens/eventsListScreen/EventsList';
import EventCard from './screens/eventsListScreen/EventCard';
import SettingsPage from './screens/settings/Settings';

import styled from 'styled-components';
import './App.css';
import { supabase } from './supabase/client'; 
import Home from './screens/widgetsScreen/Home';

import { useSettings } from './contexts/SettingsContext';
import CreateEventForm from './screens/eventsListScreen/CreateEventForm';
import Visualisation from './screens/eventsVizScreen/Visualisation';
import { FABGears, FABStats } from "./screens/widgetsScreen/styled-components";
import ListIcon from './assets/ListIcon';
import EyeIcon from './assets/EyeIcon';
import Gear from './assets/Gear';
import Stats from './assets/Stats';

import { useData } from './contexts/DataContext';

const radius = '0.67cm';

const MobileShell = styled.div`
  aspect-ratio: 1 / 2;
  width: 7.57cm;
  border-radius: ${radius};
  border: 8px solid black;

  display: flex;
  flex-flow: row wrap;
  align-items: space-between;
  justify-content: center;

  text-align: center;
  overflow: hidden;

  position: relative;
  z-index: 2;

`;

const TopBar = styled.nav`
  align-self: flex-start;
  width: calc(100vw - 20px);
  height: 6vh;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  font-size: 1.7rem;

  margin: 0;
  background: white;
  color: black;

  z-index: 999;
`;

const BottomBar = styled.nav`
    width: calc(100vw - 1.25rem);
  background: white;

    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: flex-end;
    
    z-index: 2;

    padding: 0 1rem;
`;

function App(): JSX.Element {
  const { settings } = useSettings();
  const { setData } = useData();

  const [timer, setTimer]: [any, SetStateAction<any>] = useState({});

  const location = useLocation();
  const pathname = location.pathname;

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const currentTarget: HTMLButtonElement = event.currentTarget;
    const { type }: any = currentTarget.dataset;
    const obj = {
          type,
          start: Date.now(),
          end: Date.now(),
    }

    insertEvent(obj);
    
    setData((prev: Event[]) => { 
      return [
        ...prev,
          obj
      ]
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

  function toggleClass() {
    const boutons_de_menu_dans_Eye_icon = document.querySelectorAll('.menuBtn');
    boutons_de_menu_dans_Eye_icon.forEach(bouton => { bouton.classList.toggle('hidden'); });
    let viz = document.querySelector('.viz');
    let listView = document.querySelector('.listView');
        viz?.classList.toggle('blur');
        listView?.classList.toggle('blur');

  };
  
  async function insertEvent(event: any) {

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
      <BottomBar>
        <FABGears>
            <Gear />
        </FABGears>        
        <FABStats>
          {pathname !== '/events_stats' && <Stats toggleClass={toggleClass} />}
            { pathname !== '/events_list' && <ListIcon toggleClass={ toggleClass }/>}
            <EyeIcon />
        </FABStats>
      </BottomBar>
    </MobileShell>
    );
  }
export default App;
