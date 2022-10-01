import React, { Dispatch, SetStateAction, useEffect, useReducer, useRef, useState } from 'react';
import {Action, Event, EventType, TimerType } from './models/Event';
import Buttons from './screens/widgetsScreen/Buttons';
import EventsList from './screens/eventsListScreen/EventsList';

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

  const [eventsList, setEventsList]: [Event[], Dispatch<Action>] = useReducer(reducer, []);
  const [timer, setTimer]: [any, SetStateAction<any>] = useState({});

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const currentTarget: HTMLButtonElement = event.currentTarget;
    const { type }: any = currentTarget.dataset;

    setEventsList({ type });
  };

  function timerFn(event: React.MouseEvent) {    
    const category: string = event.currentTarget.innerHTML;
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

  useEffect(() => { 
    Object.keys(timer).length === 3 && setEventsList({
      type: EventType.TIMED,
      value: {
      type: timer.category,
        start: timer.start,
        end: Date.now()
      }
    });    
  }, [timer]);

  return (
      <div>
        <EventsList list={eventsList} />
        <Buttons timerFn={timerFn} handleClick={handleClick} />
      </div>
    );
  }
export default App;
