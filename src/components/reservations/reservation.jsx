import React from 'react'
import { useDispatch } from 'react-redux';
import './reservation.css'
import { useSelector } from 'react-redux';
import {deleteReservation} from '../../redux/reservationSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Reservation() {
    const dispatch = useDispatch();
    // get all the reservations made by the user
    const myReservations = useSelector((state) => state.newReservations);

     // find one room
    const cancelReservation = (e) => {
        e.preventDefault()
        const roomId = e.target.roomId.value
        console.log(roomId)
        dispatch(deleteReservation(roomId));

    }
    //  const result = myReservations.find(({id})=> id === Number(roomId))


        let events = []
        if (myReservations.length > 0){
            for(let el in myReservations){
                // convert the date to readable date
                const localStart = new Date(myReservations[el].start).toLocaleString('en-US', {
                    weekday: 'short',   day: 'numeric', 
                    year: 'numeric',    month: 'long', 
                    hour: 'numeric',    minute: 'numeric',
                });
                const localEnd = new Date(myReservations[el].end).toLocaleString('en-US', {
                    weekday: 'short',   day: 'numeric', 
                    year: 'numeric',    month: 'long', 
                    hour: 'numeric',    minute: 'numeric',
                });
                events.push(
                
                    <div class="col s6 m6" key={myReservations[el].id}>
                        <div class="card blue-grey darken-1" style={{width: '20rem'}}>
                            <div class="card-content white-text">
                                <span class="card-title">Event: {myReservations[el].title}</span>
                                <hr></hr>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi earum labore, nostrum aliquam saepe quos. Eveniet sit ab quasi, sint itaque blanditiis suscipit in?</p>
                            </div>
                            <form onSubmit={(e)=>cancelReservation(e)}> 
                                <input type="hidden" name="roomId" value={myReservations[el].id}/>
                                <button type='submit' class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">delete</i></button>
                            </form>
                            <div class="card-action" style={{color: 'white'}}>
                                <p className="start">Start: {localStart}</p>
                                <p className="end">End: {localEnd}</p>
                            </div>
                        </div>
                    </div>
                
                )
            }
        }
    return (
        <>
        this is the reservation page
            <section className="myreservations">
                <div className="container">
                        {myReservations.length > 0 ? 
                    <div class="row" > 
                        {events}
                    </div>
                            
                        : <div class="col s6 m6">
                        <div class="card blue-grey darken-1" style={{width: '18rem'}}>
                          <div class="card-content white-text">
                            <span class="card-title"> </span>
                            <p>No Upcoming Events</p>
                          </div>
                        </div>
                      </div>}
                </div>

        
        

                
            </section>
        </>
    )
}
