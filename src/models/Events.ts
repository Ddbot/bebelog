type EventType = 'lavage' | 'change' | 'nourriture' | 'dodo' | 'medicament';

class Event {         
    start: number;
    end: number;
    type: EventType;
    pending: Boolean;

    constructor(start= Date.now(), end= Date.now(), type: EventType, pending: false) {
        this.start = start;
        this.end = end;
        this.type = type;
        this.pending = pending;
    }
};

export default Event;
