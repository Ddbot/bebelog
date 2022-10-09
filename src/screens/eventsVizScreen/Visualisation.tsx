import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

const SVG = styled.svg`
    width: 100%;
    height: 100%;
`;

type Props = {

};

const Visualisation = (props: Props) => {
    return <SVG viewBox='0 0 9 16'>
        <rect x="0" y="0" width={9} stroke="red" strokeWidth={2} />
    </SVG>
};

export default Visualisation;
