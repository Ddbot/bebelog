import styled from "styled-components";
import { Link } from 'react-router-dom';

const radius = '0.67cm';

export const SVGIcon = styled(Link)`
	width: 3.236ch;
	height: 3.236ch;
`;

export const MobileShell = styled.div`
	aspect-ratio: 1 / 2;
	width: 7.57cm;
	border-radius: ${radius};
	border: 8px solid black;

	display: flex;
	flex-flow: row wrap;
	align-items: space-between;
	justify-content: center;

	text-align: center;
	overflow: hidden;

	position: relative;
	z-index: 2;

	background: white;
`;

export const TopBar = styled.nav`
	align-self: flex-start;
	width: calc(100vw - 20px);
	height: 6vh;

	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;

	font-size: 1.7rem;

	margin: 0 10%;
	background: white;
	color: black;

	z-index: 999;
	& span {
		font-size: 1.4rem;
	}
	& a {
		text-decoration: none;
		color: black;
	}

	& > * {
		transform: translateY(50%);
	}

	& > button {
		display: flex;
		flex-flow: row nowrap;
		padding: 0;

		&[data-name='minus'] {
			justify-content: flex-start;
		}

		&[data-name='plus'] {
			justify-content: flex-end;
		}
	}
`;

export const BottomBar = styled.nav`	
	width: calc(100vw - 1.25rem);	

	background: white;

	display: flex;
	flex-flow: row wrap;
	align-items: flex-end;
	justify-content: flex-end;

	z-index: 2;

	padding: 0 1rem;
	& a,
	& button {
		margin: 0 0.5rem;
	}
`;
