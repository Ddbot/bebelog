import { Link } from 'react-router-dom';
import { icons } from '../widgetsScreen/Buttons';
import { Event, EventType } from '../../models/Event';
import { SettingsType, useSettings } from '../../contexts/SettingsContext';
import {
    G,
    Li,
    SVG,
    Text,
    IconsGroup,
    VizContainer
} from './styles';
import gsap from 'gsap';
import dayjs from 'dayjs';
import { useData } from '../../contexts/DataContext';

type ListItemProps = {
    children: React.ReactNode
}

const ListItem = ({ children }: ListItemProps) => { 
    return <Li>{ children }</Li>
};

const colors = (type: EventType): string => {
    const obj: { [key: string]: string } = {
        change: '#8FA9CC',
        dodo: '#9E99CC',
        lavage: '#CC8881',
        medicament: '#BCCC7A',
        nourriture: '#85C9CC',
    };
    return obj[type];
};

const hIAA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const categories: EventType[] = [EventType.CHANGE, EventType.NOURRITURE, EventType.MEDICAMENT, EventType.LAVAGE, EventType.DODO];

const svgDimensions = {
    width: 1440,
    height: 2320
};  

const circleRadius = 60;

type Props = {};

function getCoordinates(event: Event) {    
    const { type, start, end } = event;
    
    const startOfDay = dayjs(start).startOf('D').unix() * 1000;
    const endOfDay = dayjs(start).endOf('D').unix() * 1000;
    
    const mapper = gsap.utils.mapRange(startOfDay, endOfDay, 0, svgDimensions.height);

    function getX(type: EventType): number {
        const index = categories.indexOf(type);
        return (index+1)*(svgDimensions.width/6);

    };

    const x1 = getX(type), x2 = getX(type), y1 = mapper(start), y2 = mapper(end);
    return { x1, x2, y1, y2 };
};

const Visualisation = (props: Props) => {
    const { data } = useData();    
    const { settings }: { settings: SettingsType } = useSettings();
    const { query }: { query: number } = settings;

    return <VizContainer className='viz'> 
        <SVG viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}>
            <rect x="0" y="0" width={svgDimensions.width} height={svgDimensions.height} stroke="black" fill="rgba(0,0,0,0)" strokeWidth={4} />
            {/* lines */}
            <g className='hours'>
                {hIAA.reverse().map((h,i) => { 
                    return <g key={ 'line_hour_' + i }>
                        {h % 3 === 0 && <Text y={h * svgDimensions.height / 24} x={0} dy="1%" textLength={'3rem'} lengthAdjust="spacingAndGlyphs">{(h-24)*-1}</Text>}
                        <line y1={h * svgDimensions.height / 24} y2={h * svgDimensions.height / 24} x1={svgDimensions.width} x2={0} strokeDasharray={(h-24)*-1 === 12 ? 0 : 5} strokeWidth={(h-24)*-1 === 12 ? 10: 5} stroke={(h-24)*-1 === 12 ? "blue":"black"} />
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
                {data[String(query)]?.map((d: Event, i: number) => {
                    const { x1, y1, x2, y2} = getCoordinates(d);
                    return ['dodo', 'nourriture'].includes(d.type) ? <Link to={`/events/${d.id}`} state={{ value: { ...d, from: 'events/stats' } }} onClick={() => { console.log(dayjs(d.start).format('HH:mm'), ' to ', dayjs(d.end).format('HH:mm'), Math.round((d.end - d.start) / 1000 / 60) + ' minutes') }} key={'line_' + i}>
                        <G style={{ animationDelay: `${ i * 0.06}s`}}>
                            <line x1={x1} x2={x2} y1={svgDimensions.height - y1} y2={svgDimensions.height - y2} strokeWidth={40} stroke={colors(d.type)} />
                        </G>
                    </Link> : <Link to={`/events/${d.id}`} state={{ value: { ...d, from: 'events/stats' } }} onClick={() => { console.log(dayjs(d.start).format('HH:mm')) }} key={'circle_' + i}>
                        <G style={{ animationDelay: `${ i * 0.06}s`}}>
                            <circle cx={x1} cy={svgDimensions.height - y1} r={circleRadius} stroke="white" strokeWidth={10} fill={ colors(d.type) } />
                            <line transform={`rotate(45, ${x1}, ${svgDimensions.height - y1})`} x1={x1 - circleRadius} x2={x1 + circleRadius} y1={svgDimensions.height - y1} y2={svgDimensions.height - y1} strokeWidth={10} stroke="white" strokeDasharray={"10 0"} />
                            <line transform={`rotate(45, ${x1}, ${svgDimensions.height - y1})`} x1={x1} x2={x1} y1={svgDimensions.height - y1 - circleRadius} y2={svgDimensions.height - y1 + circleRadius} strokeWidth={10} stroke="white" strokeDasharray={"10 0"} />
                        </G>
                    </Link>;
                })}
            </g>
        </SVG>
        <IconsGroup className='icones'>
        {categories.map((cat: string, i: number) => { 
            return <ListItem key={'categorie_icone2_' + cat}>
                { icons[cat]}
                </ListItem>
        }) }
        </IconsGroup>  
    </VizContainer>
};

export default Visualisation;
