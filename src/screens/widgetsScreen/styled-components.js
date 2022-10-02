import styled from "styled-components";
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
		// margin: 0 8px;
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
`;

export const FAB = styled.button`
	aspect-ratio: 1 / 1;

	width: 30%;

	border-radius: 50%;

	position: absolute;
	right: 0.5rem;
	bottom: 0.5rem;

	background: transparent;
`;