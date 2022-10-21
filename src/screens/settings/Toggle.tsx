import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { SettingsType, useSettings } from "../../contexts/SettingsContext";

const ToggleContainer = styled.div`
	& > fieldset {
			position: relative;

			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: center;

			width: 2.4rem;
			height: 1.5rem;
			border-radius: .8rem;
			border: 0.125rem solid black;
			padding: 0;
	}

	&:last-of-type {
		grid-column: 2 / span 1;	
	}

	display: inline-flex;

	/* Checkbox vanished */
	& > input {
		display: none;
	}

	/* Checkbox checked effect */
	& > .checkbox:checked + .toggle::after {
		left: 1.04rem;
	}
`;

const Input = styled.input`
display: inline-flex;
border: 1px solid red;
margin: 0;
`;

type Props = {
	name: string,
	selected?: string
};

const Toggle = (props: Props): JSX.Element => {
	const { settings, setSettings }: {settings: SettingsType, setSettings: Dispatch<SetStateAction<SettingsType>>} = useSettings();
	
	function handleChange(event: React.ChangeEvent<HTMLInputElement>): void { 
		event.persist();
		const { value, name } = event.currentTarget;
		setSettings((prev: SettingsType) => {
			return { 
				...prev,
				[name]: value
			}
		});
	};

	return (
		<ToggleContainer>
			<fieldset>
				<Input
					type="radio"
					id="sein"
					className="checkbox"
					onChange={handleChange}
					name='nourriture'
					value="sein"
					defaultChecked={ settings.nourriture === 'sein'}
				/>
				<Input
					type="radio"
					id="biberon"
					className="checkbox"
					onChange={handleChange}
					name='nourriture'
					value="biberon"
					defaultChecked={ settings.nourriture === 'biberon'}
				/>
			</fieldset>
		</ToggleContainer>
	);
};

export default Toggle;


