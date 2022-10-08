import { Link, useLocation, useNavigate, Outlet} from 'react-router-dom';
import { ButtonsGroup, Widget } from '../widgetsScreen/styled-components';
import { icons } from '../widgetsScreen/Buttons';
import { HomeContainer } from '../widgetsScreen/styled-components';
import { useSettings } from '../../contexts/SettingsContext';
import React from 'react';
import { EventType } from '../../models/Event';
import styled from 'styled-components';
import dayjs from 'dayjs';

type Props = {
};

const CreateEventForm = (props: Props) => {
    const { settings } = useSettings();
    const location = useLocation();
    const navigate = useNavigate();

    function handleClick( event : React.MouseEvent<HTMLButtonElement>) {
        const { query } = location.state;

        navigate('/pick_time', {
            state: {
                value: {
                    start: dayjs(query).startOf('D').unix() * 1000,
                    type: event.currentTarget.dataset.type,
                    isNew: true
                }
        } } );
    };

    const CategorySelection = styled(ButtonsGroup)``;

    return <HomeContainer>
        <CategorySelection>
              {
            Object.entries(EventType)
                .filter((button: [string, EventType]) => { 
                    return 'timed' !== button[1]
                })
                .map((ev: [string, EventType], i: number): any => { 
            return <Widget
                key={'btn' + i}
                data-type={ev[1]}
                onClick={handleClick}
            >{icons[ev[1]]}</Widget>
        })
        }
        </CategorySelection>
</HomeContainer>};
export default CreateEventForm;        