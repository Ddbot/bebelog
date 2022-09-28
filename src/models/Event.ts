// type EventType = 'lavage' | 'change' | 'nourriture' | 'dodo' | 'medicament';

export enum EventType { LAVAGE = 'lavage', CHANGE = 'change', NOURRITURE = 'nourriture', DODO = 'dodo', MEDICAMENT = 'medicament' };
export enum ActiveState { ACTIVE = 'active', FINISHED = 'finished' };

export type Action = {
  type: EventType
};

export type Event = {         
    start: number | false;
    end?: number | false;
    type: EventType;
    status?: ActiveState;
};