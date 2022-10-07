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
`;


const SettingsPage = (props: Props): JSX.Element => { 
    const { settings, setSettings } = useSettings();
    const [isEditMode, setIsEditMode] = useState(false);

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;
        setSettings((prev: SettingsType) => { 
            return {
                ...prev,
                [name]: value
            }
        });
    };

    function handleClick(event:React.MouseEvent<HTMLButtonElement>) {
        setIsEditMode(prev => !prev);
    }

    function toggleFunction(name:string, payload: any) {
        switch (name) {
            case 'nourriture':
                setSettings((prev: SettingsType) => {
                    return {
                        ...prev,
                        nourriture: prev['nourriture'] === 'sein' ? 'biberon' : 'sein'
                    }
                });            
                break;
        
            default:
                console.log(name);
            break;
        }
    }

    useEffect(() => { console.log(settings);
    },[settings])

    return <Container>
        <H1><H1Link to="/"><button>◀</button></H1Link><span>Reglages</span><Gear /></H1>
        <Ul>
            <Li>
                <FeedingToggle>
                    <span><b>Name: </b></span>
                    <Input name="name" id="nameInput" onChange={handleChange} defaultValue={settings.name} />
                </FeedingToggle>
            </Li>
            <Li>
                <FeedingToggle>
                    <span><b>Birthday: </b></span>
                    <Input name="birthDate" id="birthDateInput" type="date" onChange={handleChange} placeholder={dayjs().toString()} />
                </FeedingToggle>
            </Li>
            <Li>
                <span><b>Feeding:</b></span>
                <FeedingToggle className="feeding">
                    <Sein>
                        <Tetee />
                    </Sein>
                    <Toggle name="nourriture" toggleFunction={toggleFunction} />    
                    <Biberon>
                        <Nourriture />
                    </Biberon>
                </FeedingToggle>
            </Li>
            <Li>
                <span><b>Objectif: </b></span>
                <Input type="number" name="objectif" step="10" min={10} max={1000} onChange={handleChange} />
            </Li>
            <Li>
                {isEditMode && <CancelButton>Cancel</CancelButton>}
                <EditButton onClick={handleClick}>Edit</EditButton>
            </Li>
        </Ul>
    </Container>;
};
export default SettingsPage;