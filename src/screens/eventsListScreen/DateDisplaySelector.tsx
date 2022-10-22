import styled from 'styled-components';
import { SettingsType, useSettings } from '../../contexts/SettingsContext';
import BackArrow from '../../assets/icons/BackArrow';
import RightArrow from '../../assets/icons/RighArrow';

import dayjs from 'dayjs';

const Button = styled.button`
    border: none;
    background: transparent;
`;

const Span = styled.span`
    font-size: 1.4rem;
`;



type Props = {
};

const DateDisplaySelector = (props: Props) => {
    const { settings, setSettings } = useSettings();
    const { query } = settings;

    function handleClick(event:React.MouseEvent<HTMLButtonElement>) {
        const name = event.currentTarget.dataset.name;
        switch (name) {
            case 'minus':
                setSettings((prev: SettingsType) => { 

                    return {
                        ...prev,
                        query: dayjs(prev.query).subtract(1, 'day').unix() * 1000};
                });
                break;        
            default:
                setSettings((prev: SettingsType) => { 

                    return {
                        ...prev,
                        query: dayjs(prev.query).add(1, 'day').unix() * 1000};
                });
                break;
        }
        
    };

    return <>
        <Button onClick={handleClick} data-name="minus"><BackArrow /></Button>
        <Span>{dayjs(query).format('ddd DD[/]MM[/]YY')}</Span>
            { (dayjs(query).add(1,'day').isSame(dayjs()) || dayjs(query).add(1,'day').isBefore(dayjs())) && <Button onClick={handleClick} data-name="plus"><RightArrow /></Button>}
    {dayjs(query).add(1, 'day').isAfter(dayjs()) && <Button onClick={handleClick} data-name="plus" disabled style={{ visibility: 'hidden' }}></Button>}
    </>
}
export default DateDisplaySelector;