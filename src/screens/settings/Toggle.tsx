import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSettings } from "../../contexts/SettingsContext";
const Label = styled.label`
	position: relative;
	display: inline;
	width: 2.5rem;
	height: 1.3rem;
	border-radius: .8rem;
	border: 0.125rem solid black;

	/* After slide changes */
	&:after {
		content: '';
		position: absolute;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 100%;
		background-color: black;
		top: -1px;
		left: -1px;
		scale: 0.9;
		transition: all 0.225s;
	}
`;

const ToggleContainer = styled.div`
	& > fieldset {
			position: relative;

			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: center;

			width: 5rem;
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
	const { setSettings } = useSettings();
	
	function handleChange(event: React.ChangeEvent<HTMLInputElement>): void { 
		console.log('toggle value ', event.currentTarget.value);
		
		setSettings((prev: any) => {
			return { 
				...prev,
				nourriture: event.currentTarget.value
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
					name={props.name}
					value="sein"
					defaultChecked={ props.selected === 'sein'}
				/>
							<Input
					type="radio"
					id="biberon"
					className="checkbox"
					onChange={handleChange}
					name={props.name}
					value="biberon"
					defaultChecked={ props.selected === 'biberon'}
				/>
			</fieldset>
		</ToggleContainer>
	);
};

export default Toggle;


