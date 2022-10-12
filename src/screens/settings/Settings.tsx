import React, { SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { CancelButton, Container, EditButton, H1, Ul, Li, H1Link } from './styled-components';
import dayjs from 'dayjs';
import Toggle from './Toggle';
import Nourriture from "../../assets/Nourriture";
import Tetee from "../../assets/Tetee";
import Gear from "../../assets/Gear";
import { useSettings, SettingsType } from "../../contexts/SettingsContext";

const Biberon = styled.div`
    scale:0.7;
    margin-right: .3rem;
`;

const Sein = styled.div`
    scale: 0.8;
`;

type Props = {

};

const FeedingToggle = styled.div`
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &.feeding {
        justify-content: flex-end;
    }

    & > span {
        margin-right: 1rem;
    }
`;

const Input = styled.input`
    height: 2rem;
    width: 60%;
    border-top: none;
    border-left: none;
    border-right: none;
    text-align: right;
`;

const SettingsPage = (props: Props): JSX.Element => { 
    const { settings, setSettings } = useSettings();
    const [isEditMode, setIsEditMode] = useState(false);
    const [bufferizedSettings, setBufferizedSettings] : [SettingsType,SetStateAction<any>]= useState({
        name: 'Bébé',
        birthDate: dayjs('10-10-2001'),
        nourriture: 'sein',
        objectif: 30,
        query: dayjs()
    });

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;
        setBufferizedSettings((prev: SettingsType) => { 
            return {
                ...prev,
                [name]: value
            }
        });
    };

    function handleClick(event:React.MouseEvent<HTMLButtonElement>) {
        setIsEditMode(prev => !prev);
    };

    function submitSettings(event: React.MouseEvent) {
        
        setSettings((prev: any) => {
            return {
                ...bufferizedSettings,
                nourriture: prev.nourriture
            }
        });

        setIsEditMode(false);
    };

    return <Container>
        <H1><H1Link to="/"><button>◀</button></H1Link><span>Reglages</span><Gear /></H1>
        <Ul>
            <Li>
                <FeedingToggle>
                    <span><b>Name: </b></span>
                    { !isEditMode && <i>{settings.name}</i>}
                    {isEditMode && <Input name="name" id="nameInput" type="text" onChange={handleChange} value={bufferizedSettings.name} />}
                </FeedingToggle>
            </Li>
            <Li>
                <FeedingToggle>
                    <span><b>Birthday: </b></span>
                    { !isEditMode && <i>{ dayjs(settings.birthDate).format('DD MMMM YYYY')}</i>}
                    {isEditMode && <Input name="birthDate" id="birthDate" type="date" onChange={handleChange} value={dayjs(bufferizedSettings.birthDate).format('YYYY-MM-DD')} />}
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
                        <Nourriture />
                    </Biberon>
                </FeedingToggle>}
            </Li>
            <Li>
                <span><b>Objectif: </b>
                </span>
                { !isEditMode && <span>{ settings.objectif}</span>}
                {isEditMode && <Input type="number" name="objectif" id="objectif" step="10" min={10} max={1000} onChange={handleChange} value={ bufferizedSettings.objectif} />}
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