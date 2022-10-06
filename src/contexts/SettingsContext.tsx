import React, { createContext, SetStateAction, useContext, useState } from "react";
import dayjs from "dayjs";
import { NourritureType } from '../models/Event';

type Settings = {
    name: string,
    birthDate: dayjs.Dayjs,
    nourriture: NourritureType,
    objectif: number
};

type SetSettings = Function

const initialSettings: Settings = {
        name: 'Bébé',
        birthDate: dayjs(),
        nourriture: 'sein',
        objectif: 30
    }

const SettingsContext: React.Context<any> = createContext<{ settings: Settings; setSettings: SetSettings} | undefined>(undefined);

function SettingsProvider({ children }: { children : React.ReactNode}) {
    const [settings, setSettings]:[Settings, SetStateAction<any>] = useState(initialSettings);
    const value = { settings, setSettings };
    return <SettingsContext.Provider value={ value }>{ children }</SettingsContext.Provider>
};

function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) { 
        throw new Error("useSettings should be used in a SettingsProvider !");        
    }
    return context;
}

export { SettingsProvider, useSettings };