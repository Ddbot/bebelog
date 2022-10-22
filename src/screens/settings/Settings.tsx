import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
    CancelButton, 
    Container, 
    EditButton, 
    H1, 
    Ul, 
    Li, 
    H1Link,
    Biberon,
    Sein,
    FeedingToggle,
    Input
} from './styled-components';
import dayjs from 'dayjs';
import Toggle from './Toggle';
import Nourriture from "../../assets/Nourriture";
import Tetee from "../../assets/Tetee";
import Gear from "../../assets/Gear";
import { useSettings, SettingsType } from "../../contexts/SettingsContext";
import { supabase } from "../../supabase/client";

type Props = {};

const SettingsPage = (props: Props): JSX.Element => { 
    const { settings, setSettings }: { settings: SettingsType, setSettings: Dispatch<SetStateAction<SettingsType>>} = useSettings();
    const [isEditMode, setIsEditMode] = useState(false);

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;

        console.log(name, value);
        
        name !== 'birthDate' && setSettings((prev: SettingsType) => { 
            return {
                ...prev,
                [name]: value
            }
        });

        name === 'birthDate' && setSettings((prev: SettingsType) => { 
            return {
                ...prev,
                [name]: dayjs(value).unix()*1000
            }
        });
    };

    function handleClick(event:React.MouseEvent<HTMLButtonElement>) {
        setIsEditMode(prev => !prev);
    };

    async function submitSettings() {   
        const { data, error } = await supabase.from('userSettings').upsert({ ...settings }).eq('userId', 30).select()
        if(data)console.log('Data upserted: ', data);
        if (error) console.error('oups ',error);
        
        setIsEditMode(false);
    };

    useEffect(() => { 
        // const initialUserSettings = (!!localStorage.getItem('userSettings') && localStorage.getItem('userSettings') !== null) ? JSON.parse(localStorage.getItem('userSettings')!) : {
        //     name: 'Bébé',
        //     birthDate: dayjs().unix()*1000,
        //     nourriture: 'biberon',
        //     objectif: 30,
        //     query: dayjs().startOf('D').unix() * 1000
        // };
        console.log(new Date(settings.birthDate));
        
    }, []);

    return <Container>
        <H1><H1Link to="/"><button>◀</button></H1Link><span>Reglages</span><Gear /></H1>
        <Ul>
            <Li>
                <FeedingToggle>
                    <span><b>Name: </b></span>
                    { !isEditMode && <i>{settings.name}</i>}
                    {isEditMode && <Input name="name" id="nameInput" type="text" onChange={handleChange} value={settings.name} />}
                </FeedingToggle>
            </Li>
            <Li>
                <FeedingToggle>
                    <span><b>Birthday: </b></span>
                    { !isEditMode && <i>{ dayjs(settings.birthDate).format('DD-MM-YYYY')}</i>}
                    {isEditMode && <Input name="birthDate" id="birthDate" type="date" onChange={handleChange} value={dayjs(settings.birthDate).format('YYYY-MM-DD')} />}
                </FeedingToggle>
            </Li>
            <Li>
                <span><b>Feeding:</b></span>
                { !isEditMode && <i>{ settings.nourriture}</i>}
                {isEditMode && <FeedingToggle className="feeding">
                    <Sein>
                        <Tetee />
                    </Sein>
                    <Toggle name="nourriture" selected={ settings.nourriture} />    
                    <Biberon>
                        <Nourriture color="black" />
                    </Biberon>
                </FeedingToggle>}
            </Li>
            <Li>
                <span><b>Objectif: </b>
                </span>
                { !isEditMode && <span>{ settings.objectif}</span>}
                {isEditMode && <Input type="number" name="objectif" id="objectif" step="10" min={10} max={1000} onChange={handleChange} value={ settings.objectif} />}
            </Li>
            <Li>
                {isEditMode && <CancelButton onClick={handleClick}>Cancel</CancelButton>}
                {isEditMode &&<EditButton type="submit" onClick={submitSettings}>Confirm</EditButton>}
                {!isEditMode &&<EditButton onClick={handleClick}>Edit</EditButton>}
            </Li>
        </Ul>
    </Container>;
};
export default SettingsPage;