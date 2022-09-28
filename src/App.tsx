import React, { Dispatch, useEffect, useReducer } from 'react';
import {Action, Event, EventType, ActiveState } from './models/Event';
import Buttons from './screens/widgetsScreen/Buttons';
import EventsList from './screens/eventsListScreen/EventsList';


function App(): JSX.Element {
  function reducer(state: Event[], action: Action): Event[] | [] {
    let obj;
    let newState = state;
    const activeEventIndex: number = state.findIndex((ev: Event) => ev.type === action.type && ev.status === ActiveState.ACTIVE);

    switch (action.type) {
      case EventType.DODO:
      case EventType.NOURRITURE:

        if (activeEventIndex === -1) {
          newState = [...newState, {
            start: Date.now(),
            type: action.type,
            status: ActiveState.ACTIVE
          }];
        };

        if (activeEventIndex >= 0) {           
          newState[activeEventIndex] = {
            ...newState[activeEventIndex],
            end: Date.now(),
            status: ActiveState.FINISHED
          };
        };

        return newState;
      
      default:
        obj = {
          start: Date.now(),
          end: Date.now(),
          type: action.type,
          status: ActiveState.FINISHED
        };
        return [
          ...state,
          obj
        ];
    };
  };

  const [eventsList, setEventsList]: [Event[], Dispatch<Action>] = useReducer(reducer, []);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const currentTarget: HTMLButtonElement = event.currentTarget;
    const { type }: any = currentTarget.dataset;

    setEventsList({ type });
  };

  return (
		<div>
      <EventsList list={ eventsList } />
      <Buttons handleClick={ handleClick } />
		</div>
  );
}

export default App;
