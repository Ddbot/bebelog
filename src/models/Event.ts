// type EventType = 'lavage' | 'change' | 'nourriture' | 'dodo' | 'medicament';

export enum EventType { LAVAGE = 'lavage', CHANGE = 'change', NOURRITURE = 'nourriture', DODO = 'dodo', MEDICAMENT = 'medicament', TIMED = 'timed' };
export enum ActiveState { ACTIVE = 'active', FINISHED = 'finished', PENDING = 'pending' };

export type Action = {
  type: EventType,
  value?: any
};

export type ActiveStateType = {
  type?: EventType | undefined,
  start?: number
};

export type Event = {         
    start: number;
    end?: number;
    type: EventType;
};

export type TimerType = {
  category?: undefined | string,
  start?: undefined | number,
  end?: undefined | number,
}