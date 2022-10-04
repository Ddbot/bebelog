import React, {  SetStateAction, useState } from "react";
import { Container, H1, Ul, Li } from './styled-components';
import { NourritureType } from "../../models/Event";
import dayjs, { Dayjs } from 'dayjs';

type Props = {

};

type SettingsType = {
    name?: string;
    birthDate?: Dayjs,
    nourriture: NourritureType,
    objectif?: number | undefined
};

const SettingsPage = (props: Props) => { 
    const [settings, setSettings]: [SettingsType, SetStateAction<any>] = useState({
        name: 'Bébé',
        birthDate: dayjs(),
        nourriture: 'sein',
        objectif: 30
    });

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        const { currentTarget } = event;
        console.log('Input name => ', currentTarget.name);
        
    };

    return <Container>
        <H1>Reglages</H1>
        <Ul>
            <Li><input name="name" onChange={handleChange} placeholder="coucou" /></Li>
            <Li>Date de naissance</Li>
            <Li>nourriture: sein ou biberon ?</Li>
            <Li>Si biberon = objectifs de nourriture (ml)</Li>
        </Ul>
    </Container>;
};
export default SettingsPage;