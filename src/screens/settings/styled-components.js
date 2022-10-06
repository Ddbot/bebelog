import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	// height: 100%;

	padding: 0 1rem;
`;

export const H1 = styled.h1`
    margin: 4rem 0 1.618rem 0;
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
`;