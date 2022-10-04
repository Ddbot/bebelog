import styled from "styled-components";
export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const H1 = styled.h1`
    margin: 4rem 0;
`;

export const Ul = styled.ul`
	text-align: left;
`;

export const Li = styled.li`
	text-align: left;
    margin-bottom: 16px;
`;

const ToggleContainer = styled.div`
	& > .toggle {
		position: relative;
		display: inline-block;
		width: 100px;
		height: 52px;
		background-color: red;
		border-radius: 30px;
		border: 2px solid gray;
	}

	/* After slide changes */
	& > .toggle:after {
		content: '';
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: gray;
		top: 1px;
		left: 1px;
		transition: all 0.5s;
	}

	/* Toggle text */
	p {
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
	}

	/* Checkbox checked effect */
	& > .checkbox:checked + .toggle::after {
		left: 49px;
	}

	/* Checkbox checked toggle label bg color */
	& > .checkbox:checked + .toggle {
		background-color: green;
	}

	/* Checkbox vanished */
	& > .checkbox {
		display: none;
	}
`;

export const Toggle = () => {
    return (
        <ToggleContainer>
            <input type="checkbox" id="switch" className="checkbox" />
            <label for="switch" className="toggle">
                <p>OFF ON</p>
            </label>
        </ToggleContainer>
    );
};


