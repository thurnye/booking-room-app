import React,{useState} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { TimePicker } from "react-materialize";
import './bookingForm.css'
import $ from 'jquery'


export default function BookingForm() {
    
    // initialize state
    const [reservation, setReservation] = useState({
        id: Date.now(),
        event: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: ''

    })

 

    const handleDateChange = (e) => {
        const key = e.target.name;
        const val = e.target.value;

        const newReservation = {...reservation};
        newReservation[key] = val;
        setReservation(newReservation);
    }


    // handle submit
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(reservation)


    }

   

    
    return (
        <>
            <div className=" card mb-3 col-md-5" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <form className="row g-3 col s12" onSubmit={(e)=>handleSubmit(e)}>
                        {/* <div className="row"> */}

                                {/* Event Title */}
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="event" name="event" type="text" className="validate" onChange={(e) => handleDateChange(e)}/>
                                        <label htmlFor="event">Event Title</label>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="row date">
                                    <div className="input-field col s12">
                                         <input type="date" name="startDate" className="datepicker" onChange={(e) => handleDateChange(e)}></input>
                                        <label htmlFor="startDate">Start Date</label>
                                    </div>

                                    <div className="input-field col s12">
                                    <input type="date" name="endDate" className="datepicker" onChange={(e) => handleDateChange(e)}></input>
                                        <label htmlFor="endDate">End Date</label>
                                    </div>
                                </div>

                                {/* Time */}
                                <div className="row time">
                                    <div className="input-field col s12">
                                        <TimePicker  name="startTime" onChange={(e) => handleDateChange(e)}/>
                                        <label htmlFor="startTime">Start Time</label>
                                    </div>

                                    <div className="input-field col s12" >
                                        <TimePicker  name="endTime" onChange={(e) => handleDateChange(e)}/>
                                        <label htmlFor="endTime">End Time</label>
                                    </div>
                                </div>
                           
                        {/* </div> */}
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                    </form>
                </div>
            </div>   
        </>
    )
}
$(document).on('ready',function(){
    $('.datepicker').datepicker();
  });