import React,{useState} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Container, DatePicker, TimePicker } from "react-materialize";
import './bookingForm.css'




export default function BookingForm() {

    const [selectDate, setSelectedDate] = useState({
        event: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: ''

    })

    const handleDateChange = e => {
        console.log(e.target.name)
        setSelectedDate({
            [e.target.name]: e.target.value
        })
    }


    
    return (
        <>
            <div className=" card mb-3 col-md-5" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <form class="row g-3">
                        <div class="row">
                            <form class="col s12">

                                {/* Event Title */}
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="event" name="event" type="text" class="validate"/>
                                        <label for="event">Event Title</label>
                                    </div>
                                </div>

                                {/* Date */}
                                <div class="row date">
                                    <div class="input-field col s12">
                                        <DatePicker  name="startDate" onChange={(e) => handleDateChange(e)}/>
                                        <label for="password">Start Date</label>
                                    </div>

                                    <div class="input-field col s12">
                                        <DatePicker  name="endDate" onChange={(e) => handleDateChange(e)}/>
                                        <label for="email">End Date</label>
                                    </div>
                                </div>

                                {/* Time */}
                                <div class="row time">
                                    <div class="input-field col s12">
                                        <TimePicker  name="startTime" onChange={(e) => handleDateChange(e)}/>
                                        <label for="password">Start Time</label>
                                    </div>

                                    <div class="input-field col s12">
                                        <TimePicker  name="endDate" onChange={(e) => handleDateChange(e)}/>
                                        <label for="email">End Time</label>
                                    </div>
                                </div>
                           
                            </form>
                        </div>

                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">Book Now</h5>
                                <p className="card-text">This will be the Calendar portion</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                            {/* <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div> */}
                    </form>
                </div>
            </div>   
        </>
    )
}
