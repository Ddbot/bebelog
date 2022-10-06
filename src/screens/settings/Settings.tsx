import React, { SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, H1, Ul, Li } from './styled-components';
import { NourritureType } from "../../models/Event";
import dayjs, { Dayjs } from 'dayjs';
import Toggle from './Toggle';
import Nourriture from "../../assets/Nourriture";
import Tetee from "../../assets/Tetee";
import Gear from "../../assets/Gear";

const Biberon = styled.div`
    scale:0.7;
    margin-right: .3rem;
`;

const Sein = styled.div`
    scale: 0.8;
`;

type Props = {

};

type SettingsType = {
    name?: string;
    birthDate?: Dayjs,
    nourriture: NourritureType,
    objectif?: number | undefined
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
    const [settings, setSettings]: [SettingsType, SetStateAction<any>] = useState({
        name: 'Bébé',
        birthDate: dayjs(),
        nourriture: 'sein',
        objectif: 30
    });

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;
        setSettings((prev: SettingsType) => { 
            return {
                ...prev,
                [name]: value
            }
        });
    };

    function toggleIsBreastFeeding(confirm:boolean) {
        setSettings((prev: SettingsType) => {
            return {
                ...prev,
                nourriture: confirm ? 'sein' : 'biberon'
            }
        });
    };

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
        <H1>Reglages</H1>
        <Gear />
        <Ul>
            <Li>
                <FeedingToggle>
                    <span><b>Name: </b></span>
                    <Input name="name" id="nameInput" onChange={handleChange} placeholder="coucou" />
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
                <Input type="number" name="objectif" step="5" min={10} max={1000} />
            </Li>
        </Ul>
    </Container>;
};
export default SettingsPage;