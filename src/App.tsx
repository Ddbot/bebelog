import React, { useState } from 'react';
import Event from './models/Events';
import './App.css';

function App(): JSX.Element {
  const [state, setState] = useState<string|undefined>(undefined);
  const [eventsList, setEventsList] = useState([]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const { currentTarget } = event;
    setState(currentTarget.dataset.type);
    const obj = {
      start: Date.now(),
      end: Date.now(),
      type: currentTarget.dataset.type,
    }
  
    setEventsList((prev): any => {
      return [
        ...prev,
        {
          ...obj
        }
      ];
    });
  }

  return (
    <div>     
      <h1>{state}</h1>      
      <ul>{eventsList.length > 0 ? eventsList?.map(
        (ev: Event, i) => { 
          return <li key={'key' + i}>{ev.type} : {ev.start} </li>
        }
      ) : <li>Nothing</li>}</ul>
      <button data-type="change" onClick={handleClick}>change</button>
      <button data-type="nourriture" onClick={handleClick}>nourriture</button>
      <button data-type="dodo" onClick={handleClick}>dodo</button>
      <button data-type="medicament" onClick={handleClick}>medicament</button>
      <button data-type="lavage" onClick={handleClick}>lavage</button>
    </div>
    );
}

export default App;
