import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Widget = styled.button`
	background: transparent;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
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
`;
export const ButtonsGroup = styled.div`
	align-self: flex-start;
    width: 100%;
    height: 50%;

    display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;

	transition: all .225s;
`;

export const HomeContainer = styled.div`
	width: 100%;
	height: 55vh;
	position: relative;

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	background: white;
	z-index: 2;
`;

const FABStatsContainer = styled.div`
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	position: relative;
	scale: 1;

	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	align-items: center;

	background: white;
	padding-bottom: 8px;
	margin: 0 0.4rem;
`;

const FABGearContainer = styled(FABStatsContainer)`
	z-index: 3;
`;

export const FABStats = ({ children }) => {
	return <FABStatsContainer to="/events/list">{children}</FABStatsContainer>
};

export const FABGears = ({ children }) => {
	return <FABGearContainer><Link to="/settings">{children}</Link></FABGearContainer>;
};