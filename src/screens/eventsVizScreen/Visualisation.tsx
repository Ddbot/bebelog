import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { icons } from '../widgetsScreen/Buttons';
import { useLocation } from 'react-router-dom';
import { Event, EventType } from '../../models/Event';
import {
    SVG,
    Text,
    IconsGroup,
    VizContainer
} from './styles';
import gsap from 'gsap';
import dayjs from 'dayjs';

const hIAA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const categories = ['change', 'nourriture', 'medicament', 'lavage', 'dodo'];

const svgDimensions = {
    width: 1440,
    height: 2320
};  

type Props = {};

function getCoordinates(event: Event) {    
    const { type, start, end } = event;
    
    const startOfDay = dayjs(start).startOf('D').unix() * 1000;
    const endOfDay = dayjs(start).endOf('D').unix() * 1000;
    
    const mapper = gsap.utils.mapRange(startOfDay, endOfDay, 0, svgDimensions.height);
    function getX(type: EventType): number {
        const index = categories.indexOf(type);
        return index;
    };
    const x1 = getX(type), x2 = getX(type), y1 = mapper(start), y2 = mapper(end);
    return { x1, x2, y1, y2 };
}

const Visualisation = (props: Props) => {
    const [data] = useState([]);

    useEffect(() => { 
        console.log('ily a des data ', data);
    }, [data]);

    return <VizContainer className='viz'> 
        <SVG viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}>
        <rect x="0" y="0" width={svgDimensions.width} height={svgDimensions.height} stroke="black" fill="rgba(0,0,0,0)" strokeWidth={4} />
        {/* lines */}
        <g className='hours'>
            {hIAA.map((h,i) => { 
                return <g key={ 'line_hour_' + i }>
                    {h % 3 === 2 && <Text y={h * svgDimensions.height / 24} x={0} dy="3.08%" textLength={'4rem'} lengthAdjust="spacingAndGlyphs">{-h + 23}</Text>}
                    <line y1={h * svgDimensions.height / 24} y2={h * svgDimensions.height / 24} x1={svgDimensions.width} x2={0} strokeDasharray={5} strokeWidth={5} stroke="black" />
                </g>
            })}
        </g>
        <g className='categories'>
            {categories.map((cat, i) => { 
                return <g key={'categorie_icone_' + cat}>
                    <line x1={(i + 1) * svgDimensions.width / 6} x2={(i + 1) * svgDimensions.width / 6} y1={svgDimensions.height} y2={0} strokeWidth={5} stroke="gray" />
                </g>
            }) }
            </g>
            {/* DATA */}
            <g>
                {data.map((d) => { 
                    return <line {...getCoordinates(d)} strokeWidth={ 40 } stroke="red" />
                })}
            </g>
        </SVG>
            <IconsGroup className='icones'>
            {categories.map((cat, i) => { 
                return <li key={'categorie_icone2_' + cat}>
                    { icons[cat]}
                    </li>
            }) }
        </IconsGroup>  
    </VizContainer>
};

export default Visualisation;
