import React,{useState} from 'react';
import $ from 'jquery'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
// import { TimePicker } from "react-materialize";
import './bookingForm.css'
import { addReservation } from '../../redux/reservationSlice';
import Calendar from '../eventCalendar/eventCalendar'

export default function BookingForm(roomId) {

    // get the room Id
    const idRoom = roomId.roomId

    // initialize state
    const [reservation, setReservation] = useState({})

    // set state for event clash
    const [collision, setCollision] = useState(false)


    // use the dispatch to send the data to redux.
    const dispatch = useDispatch();
 

    // we want to get the updated state
    const allReservations = useSelector((state) => state.newReservations);
    // console.log(allReservations)

    const handleDateChange = (e) => {
        const key = e.target.name;
        const val = e.target.value;

        const newReservation = {...reservation, id: Date.now(), idRoom: idRoom};
        newReservation[key] = val;
        setReservation(newReservation);
    }
    // handle submit
    const handleSubmit = (e) =>{

        e.preventDefault()

        // console.log(reservation)
        // check to see if we have reservations
        if (allReservations){

            // find/filter that particular room in all the reservation that has the room id
            const singleRoomReservation = allReservations.filter(({roomId})=> roomId === reservation.idRoom)
            // console.log(singleRoomReservation)

            // check if the date and time is already booked. if it is return a message, 
            for(let i=0; i < singleRoomReservation.length; i++){

                
                // we check both dates, but firstly we have to change them to numbers by getting the number of seconds from jan 1 1970
                // let sD = startDate
                //  "  eD = endDate
                //  "  nSD = incomingStartDate 
                //  "  nED = incomingEndDate 
                
                let sD = new Date (singleRoomReservation[i].start).getTime()
                let eD = new Date (singleRoomReservation[i].end).getTime()
                let nSD = new Date (reservation.start).getTime()
                let nED = new Date (reservation.end).getTime()

                // console.log('sD:', sD,'eD:', eD, 'nSD:', nSD,'nED:',  nED)

                // compare the dates range for collision
                if( ( nSD >= sD  && nSD <= eD)   || ( sD >= nSD  && nED <= eD)){
                    // set collision to true
                        return setCollision({clash:true})
                }else{
                    // set collision to false
                    setCollision({clash:false})
                    
                }
            }

        }
        // if no reservation for that room
        if (reservation) {
			dispatch(
				addReservation(reservation)
			);
		}
    }


    
    return (
        <>
            <div className=" card mb-3 col-md-5" style={{maxWidth: "540px"}}>
                <div className="row g-0">

                    { collision.clash ? <div className="colliding-event">Please refer to the event calendar for available time</div> 
                    : ''}
                    <form className="row g-3 col s12" onSubmit={(e)=>handleSubmit(e)}>
                        {/* <div className="row"> */}

                                {/* Event Title */}
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="event" name="title" type="text" className="validate" onChange={(e) => handleDateChange(e)}/>
                                        <label htmlFor="event">Event Title</label>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="row date">
                                    <div className="input-field col s12">
                                        <input type="datetime-local" name="start" id="" className="datepicker"onChange={(e) => handleDateChange(e)}/>
                                         {/* <input type="date" name="startDate" className="datepicker" onChange={(e) => handleDateChange(e)}></input> */}
                                        <label htmlFor="startDate">Start Date and Time</label>
                                    </div>

                                    <div className="input-field col s12">
                                        <input type="datetime-local" name="end" className="datepicker" id="" onChange={(e) => handleDateChange(e)}/>
                                    {/* <input type="date" name="endDate" className="datepicker" onChange={(e) => handleDateChange(e)}></input> */}
                                        <label htmlFor="endDate">End Date and Time</label>
                                    </div>
                                </div>

                                {/* Time
                                <div className="row time">
                                    <div className="input-field col s12">
                                        <TimePicker  name="startTime" onChange={(e) => handleDateChange(e)}/>
                                        <label htmlFor="startTime">Start Time</label>
                                    </div>

                                    <div className="input-field col s12" >
                                        <TimePicker  name="endTime" onChange={(e) => handleDateChange(e)}/>
                                        <label htmlFor="endTime">End Time</label>
                                    </div>
                                </div> */}
                           
                        {/* </div> */}
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Book Now!</button>
                            </div>
                    </form>
                </div>

                This will be the calendar          

            </div>   
                            <Calendar />
        </>
    )
}
$(document).on('ready',function(){
    $('.datepicker').datepicker();
  });