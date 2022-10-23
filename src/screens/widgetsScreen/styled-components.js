import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

const widgetAnimation = keyframes`
	100% {
		opacity: 1;
		transform: translate(0,0);
	}
`;

const widgetAnimationOdd = keyframes`
	100% {
		opacity: 1;
		transform: translate(0,50%);
	}
`;

const widgetAnimationEven = keyframes`
	100% {
		opacity: 1;
		transform: translate(0,-33%);
	}
`;

export const Widget = styled.button`
	background: transparent;
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	height: 30%;

	opacity: 0;

	animation: 0.125s cubic-bezier(.8, .5, .2, 1.4) 0.18s forwards ${widgetAnimation};

	&:nth-of-type(1) {
		transform-origin: left top;
		transform: translate(-2rem, -2rem);
		animation: 0.25s cubic-bezier(.8, .5, .2, 1.4) 0.1s forwards ${widgetAnimationOdd};
	}
	&:nth-of-type(2) {
		transform-origin: center top;
		transform: translate(0, -2rem);
		animation: 0.25s cubic-bezier(.8, .5, .2, 1.4) 0.12s forwards ${widgetAnimationEven};
	}

	&:nth-of-type(3) {
		transform-origin: right top;
		transform: translate(2rem, -2rem);
		animation: 0.25s cubic-bezier(.8, .5, .2, 1.4) 0.14s forwards ${widgetAnimationOdd};
	}

	&:nth-of-type(4) {
		transform-origin: left bottom;
		transform: translate(-2rem, 2rem);
	}

	&:nth-of-type(5) {
		transform-origin: right bottom;
		transform: translate(2rem, 2rem);
	}

	&:nth-of-type(1),
	&:nth-of-type(3) {
		// transform: translateY(50%);
	}

	&:nth-of-type(2) {
		// transform: translateY(-33%);
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