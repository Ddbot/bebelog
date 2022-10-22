import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { NourritureType } from '../models/Event';

export type SettingsType = {
    name: string,
    birthDate: number,
    nourriture: NourritureType,
    objectif: number,
    query: number
};

type SetSettings = Function

const initialSettings: SettingsType = {
    name: 'Bébé',
    birthDate: dayjs().unix()*1000,
    nourriture: 'sein',
    objectif: 30,
    query: dayjs().startOf('D').unix() * 1000
};

const SettingsContext: React.Context<any> = createContext<{ settings: SettingsType; setSettings: SetSettings} | undefined>(undefined);

function SettingsProvider({ children }: { children : React.ReactNode}) {
    const [settings, setSettings]:[settings: SettingsType, setSettings: Dispatch<SetStateAction<SettingsType>>] = useState(initialSettings);
    const value = { settings, setSettings };

    return <SettingsContext.Provider value={ value }>{ children }</SettingsContext.Provider>
};

function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) { 
        throw new Error("useSettings should be used in a SettingsProvider !");        
    }
    return context;
};

export { SettingsProvider, useSettings };