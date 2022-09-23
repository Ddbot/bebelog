import React, { useReducer, useState } from 'react';
import Event from './models/Events';
import './App.css';

function App(): JSX.Element {
  const [state, setState] = useState(undefined);
  function reducer(state, action) {
    let obj;
    switch (action.type) {
      case 'dodo':
      case 'nourriture':
        const pendingEventIndex = state.findIndex((ev: Event) => ev.type === action.type && ev.pending === true);
        const pending = pendingEventIndex === -1 ? true : false;
        obj = {
          start: !!pending && Date.now(),
          end: pending === false && Date.now(),
          type: action.type,
          pending
        };
        return [
          ...state,
          obj
        ];            
      default:
        obj = {
          start: Date.now(),
          end: Date.now(),
          type: action.type,
          pending: false
        }; 
        return [
          ...state,
          obj
        ]; 
    }
  };

  const [eventsList, setEventsList] = useReducer(reducer, [{
    start: 0,
    end: 0,
    type: 'dodo',
    pending: true
  }]);

  function handleClick(event) {
    const {type} = event.currentTarget.dataset;
    setEventsList({ type });
  }
  return (
		<div>
      <h1>{
        eventsList.at(-1).value || 'pas defini'}
      </h1>
			<ul>
				{eventsList.length > 0 ? (
					eventsList?.map((ev: Event, i) => {
						return (
							<li key={'key' + i}>
								{ev.type} : {ev.start}{' '}
							</li>
						);
					})
				) : (
					<li>Nothing</li>
				)}
			</ul>
			<button data-type="change" onClick={handleClick}>
				change
			</button>
			<button data-type="nourriture" onClick={handleClick}>
				nourriture
			</button>
			<button data-type="dodo" onClick={handleClick}>
				dodo
			</button>
			<button data-type="medicament" onClick={handleClick}>
				medicament
			</button>
			<button data-type="lavage" onClick={handleClick}>
				lavage
			</button>
		</div>
  );
}

export default App;
