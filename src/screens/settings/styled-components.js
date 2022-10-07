import styled from "styled-components";
import { Link } from "react-router-dom";

export const H1Link = styled(Link)`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

export const Container = styled.div`
	width: 100%;

	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	padding: 0 1rem;
`;

export const H1 = styled.h1`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;

	transform: translateY(-75%);

	& button {
		width: 2.4rem;
		height: 2.4rem;
		align-self: center;
	}

	& > span {
		text-align: center;
		align-self: center;
	}
`;

export const Ul = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-auto-rows: 1fr;
	gap: 0px 0px;
	grid-auto-flow: row;

	justify-items: start;
	list-style: none;
	place-items: stretch start;
	place-content: stretch start;


	padding-inline-start: 0;

`;

export const Li = styled.li`
	grid-column: 1 / span 2;

	width: 100%;
	height: 6.18vh;
	margin-bottom: 1rem;

	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;


	& > label {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		width: 100%;

		& > span {
			border: 1px solid green;
		}
	}

	&:last-child {
		&> input {
			width: 8ch;
		}		
	}
`;