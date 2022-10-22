import styled from 'styled-components';

export const Card = styled.div`
	width: 100%;
	height: calc(100% - 7rem);
`;
export const Content = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-auto-rows: 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	place-items: stretch;
`;

export const Icon = styled.div`
	grid-column: 2 / span 1;
	grid-row: 1 / span 1;
	transform-origin: top center;

	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: flex-end;
	pointer-events: none;
	width: 100%;

	& > svg {
		width: 100%;
	}
`;

export const Values = styled.div`
	grid-column: 1 / span 3;
	grid-row: 2 / span 1;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;

	& > div:not(.durationDisplay),
	& > input:not(.durationDisplay) {
		border: none;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		font-size: 3rem;
		padding: 0 1.8rem;
	}

	& > div.durationDisplay,
	& > input.durationDisplay {
		border: none;
		font-size: 1.2rem;
	}
`;

export const ButtonContainer = styled.div`
	place-self: end center;
	width: 100%;

	grid-column: 1 / span 3;
	grid-row: 3 / span 1;

	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;

	padding-bottom: 24px;

	& > button {
		margin: 4px;
		font-size: 1.4rem;
		text-align: center;

		scale: 1.2;
		border-radius: 0.14cm;

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;

		width: 2.4rem;
		height: 2.4rem;

		border-width: 2px;
		background: transparent;
	}
`;

export const ArrowContainer = styled.span`
	margin: 0 4px;
	& > span {
		font-weight: 900;
		font-size: 1.6rem;
	}
`;
