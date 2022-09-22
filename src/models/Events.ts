type EventType = 'lavage' | 'change' | 'nourriture' | 'dodo' | 'medicament';

class Event {         
    start: number;
    end: number;
    type: EventType;

    constructor(start= Date.now(), end= Date.now(), type: EventType) {
        this.start = start;
        this.end = end;
        this.type = type
    }
};

export default Event;
