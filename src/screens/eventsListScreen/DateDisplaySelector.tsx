import { SettingsType, useSettings } from '../../contexts/SettingsContext';
import BackArrow from '../../assets/icons/BackArrow';
import RightArrow from '../../assets/icons/RighArrow';

import dayjs from 'dayjs';


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
        <button onClick={handleClick} data-name="minus"><BackArrow /></button>
        <span>{dayjs(query).format('dd DD[/]MM[/]YY')}</span>
            { (dayjs(query).add(1,'day').isSame(dayjs()) || dayjs(query).add(1,'day').isBefore(dayjs())) && <button onClick={handleClick} data-name="plus"><RightArrow /></button>}
    {dayjs(query).add(1, 'day').isAfter(dayjs()) && <button onClick={handleClick} data-name="plus" disabled></button>}
    </>
}
export default DateDisplaySelector;