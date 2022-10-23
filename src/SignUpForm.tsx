import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from 'styled-components';

import { useSettings, SettingsType } from "./contexts/SettingsContext";
import { supabase } from "./supabase/client";

type FormPropsType = {
    email: string;
    password: string;
};

const Container = styled.div``;

const initialData: FormPropsType = {
    email: '',
    password: ''
}

const SignUpForm = (): JSX.Element => { 
    const [data, setData]:[data: FormPropsType, setData: Dispatch<SetStateAction<FormPropsType>>] = useState<FormPropsType>(initialData);
    const { setSettings }: { setSettings: Dispatch<SetStateAction<SettingsType>>} = useSettings();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;
    
        setData((prev: FormPropsType) => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    async function submitData() {
        const { email, password } = data;

        const { data: { user }, error } = await supabase.auth.signUp({ email, password });
        if (user) { 
            setSettings((prev: SettingsType) => {
                return {
                    ...prev,
                    userId: user.id
                }
             });
        }

        if (error) {
            switch (error.message) {
                case 'User already registered':
                    const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });
                    if (user) { 
                        setSettings((prev: SettingsType) => {
                            return {
                                ...prev,
                                userId: user.id
                            }
                        });
                    }                    
                    break;
                default:
                    break
            };
        };
    }

    return <Container>
        <h1>Sign Up</h1>
        <form>
            <label htmlFor="email">Email
                <input name="email" id="emailInput" type="text" onChange={handleChange} value={data.email} />
            </label>
            <label htmlFor="password">Password
                <input name="password" id="passwordInput" type="text" onChange={handleChange} value={data.password} />
            </label>            
        </form>
        <button type="submit" onClick={submitData}>Submit</button>
    </Container>;
};
export default SignUpForm;