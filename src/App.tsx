import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { Event, TimerType } from './models/Event';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
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
import ListIcon from './assets/icons/ListIcon';
import EyeIcon from './assets/icons/EyeIcon';
import Gear from './assets/icons/Gear';
import Stats from './assets/icons/Stats';
import dayjs from 'dayjs';

import { DataObject, useData } from './contexts/DataContext';

import {
  TopBar,
  BottomBar,
  MobileShell
} from './assets/common-styles';

function App(): JSX.Element {
  const navigate = useNavigate();
  const { settings, setSettings } = useSettings();
  const { setData } = useData();

  const [timer, setTimer]: [any, SetStateAction<any>] = useState({});

  const location = useLocation();
  const pathname = location.pathname;

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const currentTarget: HTMLButtonElement = event.currentTarget;
    const { type }: any = currentTarget.dataset;

    const obj: Event = {
      type,
      start: dayjs().unix()*1000,
      end: dayjs().unix()*1000,
    };

    insertEvent(obj);
    navigate('/events_list', {
      state: {
        value: obj.start
    }})
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
  
  const insertEvent = useCallback(async (event: Event) => {
    const { data, error } = await supabase.from('events').insert(event);
      setData((prev: DataObject) => { 
        const start = String(dayjs(event.start).startOf('D').unix() * 1000);           
        delete prev[start];
        return prev;
      });

    if (error) console.error('Erruer lors de linsertion');
    if (data) console.log('Inséré ', data);
    navigate('/events_list', {
      state: {
        value: dayjs(event.start).startOf('D').unix() * 1000
    }});
  }, [setData,navigate]);


  // repere le nb de parametres dans timer et setEventsList accordingly
  useEffect((): void => { 
    if (Object.keys(timer).length === 3) {
        insertEvent({
          type: timer.category,
          start: timer.start,
          end: Date.now()
        });
  };    
  }, [timer, insertEvent]);
  
  useEffect(() => { 
    async function f() {
      const { data, error } = await supabase.from('userSettings').select({ ...settings });
      if (data) {
        setSettings(data);
      };
      if (error) {
        console.error('blablabla ', error);
      };      
    };
    f();
  }, [settings,setSettings]);

  return (
    <MobileShell>
      <TopBar>
        <Link to='/'>{settings.name}</Link>
      </TopBar>
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
            { pathname !== '/events_stats' && <Stats toggleClass={toggleClass} />}
            { pathname !== '/events_list' && <ListIcon toggleClass={ toggleClass }/>}
            <EyeIcon />
        </FABStats>
      </BottomBar>
    </MobileShell>
    );
  }
export default App;
