import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar  from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { addReservation } from '../../redux/reservationSlice';
import {deleteReservation} from '../../redux/reservationSlice'
import { INITIAL_EVENTS} from './event-utils'
import './eventCal.css'



export default function DemoApp(props) {
    const roomId = props.roomId.roomId 

  const [state, setState] = useState({
    weekendsVisible: true,
    currentEvents: []
  })

  const myReservations = useSelector((state) => state.newReservations);


    // use the dispatch to send the data to redux.
    const dispatch = useDispatch();

  const renderSidebar= () => {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <p>
            Select dates and you will be prompted to create a new event
            Drag, drop, and resize events
            Click an event to delete it
          </p>
        </div>
     
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({state.currentEvents.length})</h2>
          <ul>
            {state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }


// Add the event to redux state management
  const handleDateSelect =   (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection
    if (title) {
        const id = new Date().getTime()
     const event =  calendarApi.addEvent({
         id: id,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        groupId: roomId,
        roomId: roomId
      })
      if (event) {
        // add the event to the state
        dispatch(
            addReservation({
                id: id,
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
                roomId: roomId
            })
        );
        localStorage.setItem('events', JSON.stringify(myReservations))
    }
    }


    
  }


//   Remove the event from list of event and update redux state management
  const handleEventClick = (clickInfo) => {

    const confirm = window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`);
    if (confirm) {
        // get the id of the event
        const id = clickInfo.event.id

        // remove from calendar
      clickInfo.event.remove()

    //   remove form redux
    dispatch(deleteReservation(id));
    }
  }

//   store the event to state
  const handleEvents = (events, selectInfo) => {
    setState({
      currentEvents: events
    })

   
    
  }
// render the event content in the calendar
  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  
//   Display the Upcoming events
  const renderSidebarEvent = (event) => {
    const localStartDate = new Date(event.start).toLocaleString('en-US', {
        weekday: 'short',   day: 'numeric', 
        year: 'numeric',    month: 'long', 
        hour: 'numeric',    minute: 'numeric',
    });
    const localEndDate = new Date(event.end).toLocaleString('en-US', {
        weekday: 'short',   day: 'numeric', 
        year: 'numeric',    month: 'long', 
        hour: 'numeric',    minute: 'numeric',
    });
    return (
        <div key={event.id}>
            <p><strong>{event.title}</strong></p>
             <li>
                <b>Start: {localStartDate}</b>
            </li>
            <li>
                <b>End: {localEndDate}</b>
            </li>
        <hr/>
        </div>
    )
  }

//   render() {
    return (
        <> 
          {renderSidebar()}
        <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='timeGridDay'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            // weekends={state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
      </>
    )
//   }


}

