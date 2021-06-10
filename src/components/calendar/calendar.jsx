import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';

function Calendar() {

    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            schedule: { type: 'week' }
        };
    }, []);

    const responsive = React.useMemo(() => {
        return {
            xsmall: {
                view: {
                    schedule: { type: 'day' }
                }
            },
            custom: { // Custom breakpoint
                breakpoint: 900,
                view: {
                    schedule: { type: 'week' }
                }
            }
        };
    }, []);

    return (
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={true}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
            responsive={responsive}
       />
    ); 
}

export default Calendar;
