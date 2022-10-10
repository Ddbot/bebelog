import styled from "styled-components";
import { Link } from 'react-router-dom';

import EyeIcon from "../../assets/EyeIcon";
import Stats from "../../assets/Stats";
import ListIcon from "../../assets/ListIcon";

export const Widget = styled.button`
	background: transparent;
	border-radius: 50%;
	width: 30%;
	height: 30%;
	&:nth-of-type(1),
	&:nth-of-type(3) {
		transform: translateY(50%);
	}
	&:nth-of-type(2) {
		transform: translateY(-33%);
	}
	&:nth-of-type(4),
	&:nth-of-type(5) {
		margin: 0 8px;
	}

		// &:not(.visible){
		// 	scale: 1;
		// }

		// &.visible{
		// 	scale: 2;
		// }

`;
export const ButtonsGroup = styled.div`
	align-self: flex-start;
    width: 100%;
    height: 50%;

    display: flex;
	flex-flow: row wrap;
	justify-content: center;

	transition: all .225s;
	z-index: 1;
`;

export const HomeContainer = styled.div`
	width: 100%;
	height: calc(100% - 3rem);
	position: relative;

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	background: white;
`;

const FABStatsContainer = styled.div`
	aspect-ratio: 1 / 1;
	width: 6ch;
	height: 6ch;
	border-radius: 50%;

	position: absolute;
	right: 0.5rem;
	bottom: 0.5rem;

	background: transparent;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-auto-rows: repeat(3,1fr);
	gap: 0px 0px;
	grid-auto-flow: row;
	justify-items: center;

	place-items: start center;
	place-content: end;

	position: absolute;
`;

const FABGearContainer = styled(FABStatsContainer)`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	right: calc(6ch + 0.5rem);
	z-index: 3;
`;

export const FABStats = ({ children }) => {
	return <FABStatsContainer to="/events_list">{children}</FABStatsContainer>
};

export const FABGears = ({ children }) => {
	return <FABGearContainer><Link to="/settings">{children}</Link></FABGearContainer>;
};