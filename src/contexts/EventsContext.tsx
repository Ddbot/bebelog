import { createContext, useContext, useState } from "react";

const EventsContext: any = createContext(undefined);

const EventsProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState([]);
    const value = { data, setData }
    return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
};

const useEvents = () => { 
    const context = useContext(EventsContext);
    if (!context) { 
        throw new Error("Pas de contexte Events!");        
    }
    return context;
};

export { EventsProvider, useEvents };