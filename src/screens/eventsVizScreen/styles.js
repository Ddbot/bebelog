import styled from 'styled-components';

export const SVG = styled.svg`
	height: 88%;
	width: 80%;
	overflow-x: visible;
`;

export const Text = styled.text`
position: relative;
	font-size: 3.75rem;
	fill: black;
	// transform: translate(2.08%, -50%);
`;

export const IconsGroup = styled.ul`
	width: 80%;
	height: 6vh;
	margin: 0 10%;
	padding: 0 0 0.25rem 13.33%;

	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: flex-start;
	list-style: none;

	& > li {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;

		transform: translateX(-60%);
		border: 1px solid black;
		border-radius: 50%;
		& > svg {
			scale: 0.7;
			aspect-ratio: 1/1;
			width: 1.6rem;
		}
	}

	& > li:nth-of-type(2) {
		& > svg {
			scale: 0.6;
			aspect-ratio: 1/1;
			width: 1.6rem;
		}
	}
`;

export const VizContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	align-items: center;
	background: white;
	&.blur {
		filter: blur(10px);
	}
`;
