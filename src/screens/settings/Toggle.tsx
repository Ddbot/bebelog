import React, { useEffect } from "react";
import styled from "styled-components";
import Tetee from '../../assets/Tetee';
import Nourriture from '../../assets/Nourriture';

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

const IconContainer = styled.p`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    position: relative;
    transform: translateY(-90%);
`;

const ToggleContainer = styled.div`
	&:last-of-type {
		grid-column: 2 / span 1;	
	}

	display: inline-flex;

	/* Checkbox vanished */
	& > input {
		display: none;
	}

	/* Toggle text */

	/* Checkbox checked effect */
	& > .checkbox:checked + .toggle::after {
		left: 1.04rem;
	}

	/* Checkbox checked toggle label bg color */
	& > .checkbox:checked + .toggle {
		// background-color: green;
	}
`;

const Input = styled.input``;

type Props = {
	toggleFunction: Function,
	name: string
};

const Toggle = (props: Props): JSX.Element => {
	function handleChange({ currentTarget }: React.ChangeEvent<HTMLInputElement>): void { 
		props.toggleFunction(props.name);
	};

	useEffect(() => {
		console.log(props.name);
		
	 });

	return (
		<ToggleContainer>
            <Input
				type="checkbox"
				id="switch"
				className="checkbox"
				onChange={handleChange}
				name={props.name}
            />
            <Label htmlFor="switch" className="toggle">
                <IconContainer>
                </IconContainer>
            </Label>
		</ToggleContainer>
	);
};

export default Toggle;


