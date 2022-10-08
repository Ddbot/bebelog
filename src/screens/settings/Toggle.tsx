import React, { useEffect, useState } from "react";
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

const ToggleContainer = styled.div`
	& > fieldset {
			position: relative;
		display: inline;
		width: 5rem;
		height: 1.5rem;
		border-radius: .8rem;
		border: 0.125rem solid black;
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
`;

type Props = {
	toggleFunction: Function,
	name: string
};

const Toggle = (props: Props): JSX.Element => {
	const [isChecked, setIsChecked] = useState(false);
	function handleClick({ currentTarget }: React.MouseEvent<HTMLInputElement>): void { 
		// setIsChecked(prev => !prev);	
		console.log(currentTarget.value);
		
	};

	// useEffect(() => {
	// 	props.toggleFunction(isChecked ? 'sein' : 'biberon');
	//  },[isChecked,props]);

	return (
		<ToggleContainer>
			<fieldset>
            <Input
				type="radio"
				id="sein"
				className="checkbox"
				onClick={handleClick}
				name={props.name}
				value="sein"
            />
			            <Input
				type="radio"
				id="biberon"
				className="checkbox"
				onClick={handleClick}
				name={props.name}
				value="biberon"
            />
			</fieldset>
		</ToggleContainer>
	);
};

export default Toggle;


