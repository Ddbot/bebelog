import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Event, EventType } from "../models/Event";
import dayjs from "dayjs";

export type DataType = Event[] | [];
type SetDataType = Function;

type DataObject = {
    [key: number]: Event[]
} | {};

const today = dayjs().startOf('D').unix() * 1000;

const initialData: DataObject = {
    [today]: [{
        id: 'firstData',  
        start: 0,
        end: 0,
        type: EventType.DODO
    }
]};

const DataContext: React.Context<any> = createContext<{ data: DataType; setData: SetDataType }| undefined>(undefined);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData]: [DataObject, Dispatch<SetStateAction<DataObject>>] = useState<DataObject>(initialData);
    const value = { data, setData };

    useEffect(() => { 
        if(data) console.log('new data ',data);
        
    }, [data]);

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => { 
    const context = useContext(DataContext);
    if (!context) { 
        throw new Error("Pas de contexte Data!");        
    }
    return context;
};

export { DataProvider, useData };