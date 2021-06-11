import React,{useState} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useSelector } from 'react-redux';
import { INITIAL_EVENTS, createEventId } from './event-utils'
import './eventCal.css'



export default function DemoApp() {

  const [state, setState] = useState({
    weekendsVisible: true,
    currentEvents: []
  })
  const myReservations = useSelector((state) => state.newReservations);

  const renderSidebar= () => {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        {/* <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={state.weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div> */}
        <div className='demo-app-sidebar-section'>
          <h2> My Upcoming Events ({state.currentEvents.length})</h2>
          <ul>
            {state.currentEvents.map(el => renderSidebarEvent(el))}
          </ul>
        </div>
      </div>
    )
  }

//   const handleWeekendsToggle = () => {
//     setState({
//       weekendsVisible: !state.weekendsVisible
//     })
//   }


// this function shld be triggered by a book button
  const handleDateSelect =   (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection
    // console.log(selectInfo)
    // loop through the myreservation and render
    // console.log(myReservations[Object.keys(myReservations)[Object.keys(myReservations).length - 1]])
        for(let evt in myReservations){
            console.log(new Date(myReservations[evt].startDate))
            if(title) {
                calendarApi.addEvent({
                    id: createEventId(),

                    start: new Date(myReservations[evt].startDate),
                    end: new Date(myReservations[evt].startDate),
                    // allDay: selectInfo.allDay
                })
            }
        }
    // if(title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   })
    // }
  }

  const handleEventClick = (clickInfo) => {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    // }
  }

  const handleEvents = (events) => {
      
    setState({
      currentEvents: myReservations
    })
  }

  const renderEventContent = (eventInfo) => {
      console.log(eventInfo.timeText)
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  

//   display the upcoming event 
  const renderSidebarEvent = (event) => {
    const localStartDate = new Date(event.startDate).toLocaleString('en-US', {
        weekday: 'short',   day: 'numeric', 
        year: 'numeric',    month: 'long', 
        hour: 'numeric',    minute: 'numeric',
    });
    const localEndDate = new Date(event.endDate).toLocaleString('en-US', {
        weekday: 'short',   day: 'numeric', 
        year: 'numeric',    month: 'long', 
        hour: 'numeric',    minute: 'numeric',
    });
    return (
        <>
        <div key={event.id}>
            <p><strong>{event.event}</strong></p>
             <li>
                <b>Start: {localStartDate}</b>

                <b>End: {localEndDate}</b>

            </li>
        </div>
        <hr/>
        </>
     
    )
  }

//   render() {
    return (
      <div className='demo-app'>
        {renderSidebar()}
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
            
            
          />
        </div>
      </div>
    )
//   }


}
