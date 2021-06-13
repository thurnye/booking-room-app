import React,{useState} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useSelector } from 'react-redux';
// import { INITIAL_EVENTS, createEventId } from './event-utils'
import './eventCal.css'



export default function DemoApp() {

  const [state, setState] = useState({
    weekendsVisible: true,
    currentEvents: []
  })


  const events = []
//   Push the events in the array
  const myReservations = useSelector((state) => state.newReservations);


//   const displayEvent = () => {
//     for(let evt in myReservations){
//         const start = new Date(myReservations[evt].start).toISOString().replace(/T.*$/, '') 
//         const end = new Date(myReservations[evt].end).toISOString().replace(/T.*$/, '') 
  
//         const event = {
//           id: myReservations[evt].id,
//           title: myReservations[evt].title,
//           start: start,
//           end: end
//         }
//         events.push(event)
//     }
//   }
 

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
          <h2>All Events ({state.currentEvents.length})</h2>
          <ul>
            {state.currentEvents.map(renderSidebarEvent)}
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

  const handleDateSelect =   (selectInfo) => {
      console.log(selectInfo)
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Date.now(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
    if(myReservations.length >= 0){
        for(let evt in myReservations){
            // console.log(new Date(myReservations[evt].startDate))
            const start = new Date(myReservations[evt].start).toISOString().replace(/T.*$/, '') 
            const end = new Date(myReservations[evt].end).toISOString().replace(/T.*$/, '')

            if(myReservations[evt].title) {
                calendarApi.addEvent({
                    id: myReservations[evt].id,
                    title: myReservations[evt].title,
                    start: start,
                    end: end,
                    // allDay: selectInfo.allDay
                })
            }
        }
    }
  }

  const handleEventClick = (clickInfo) => {
    //   const confirm = confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)
    // if (confirm) {
    //   clickInfo.event.remove()
    // }
  }

  const handleEvents = (events) => {
   
    //   console.log(events)
    setState({
      currentEvents: events
    })
  }

  const renderEventContent = (eventInfo) => {
    // console.log(eventInfo)
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  
  const renderSidebarEvent = (event) => {

    //   console.log({
    //       title: event.title,
    //       start: event.start,
    //       end: event.end,
    //       id: event.id
    //   })
   
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


//   const displayEvent = () => {
    for(let evt in myReservations){
        const start = new Date(myReservations[evt].start).toISOString().replace(/T.*$/, '') 
        const end = new Date(myReservations[evt].end).toISOString().replace(/T.*$/, '') 
  
        const event = {
          id: myReservations[evt].id,
          title: myReservations[evt].title,
          start: start,
          end: end
        }
        events.push(event)
    }
//   }

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
            initialEvents={events} // alternatively, use the `events` setting to fetch from a feed
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
    )
//   }


}

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }

// function renderSidebarEvent(event) {
//   return (
//     <li key={event.id}>
//       <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
//       <i>{event.title}</i>
//     </li>
//   )
// }