// type EventType = 'lavage' | 'change' | 'nourriture' | 'dodo' | 'medicament';

export enum EventType { LAVAGE = 'lavage', CHANGE = 'change', NOURRITURE = 'nourriture', DODO = 'dodo', MEDICAMENT = 'medicament', TIMED = 'timed' };
export enum ActiveState { ACTIVE = 'active', FINISHED = 'finished', PENDING = 'pending' };

export type Action = {
  type: EventType,
  value?: any
};

export type Event = { 
    id?: string;  
    start: number;
    end: number;
  type: EventType;
  isNew?: boolean;
};

export type TimerType = {
  category?: string,
  start?: number,
  end?: number,
}

export type NourritureType = 'sein' | 'biberon';