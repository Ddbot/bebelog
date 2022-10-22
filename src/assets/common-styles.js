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
`;

export const TopBar = styled.nav`
	align-self: flex-start;
	width: calc(100vw - 20px);
	height: 6vh;

	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;

	font-size: 1.7rem;

	margin: 0;
	background: white;
	color: black;

	z-index: 999;
	& a {
		text-decoration: none;
		color: black;
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
`;
