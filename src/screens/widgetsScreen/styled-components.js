import styled from "styled-components";
export const Widget = styled.button`
	background: transparent;
	border-radius: 0.41cm;
	width: 30%;
	height: 30%;
	&:nth-of-type(2) {
		margin: 0 8px;
	}
	&:nth-of-type(4),
	&:nth-of-type(5) {
		margin: 0 4px;
	}
`;
export const ButtonsGroup = styled.div`
	align-self: flex-start;
    height: 50%;

    display: flex;
	flex-flow: row wrap;
	justify-content: center;
`;