import React from 'react'
import './reservation.css'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Reservation() {
    // get all the reservations made by the user
    const myReservations = useSelector((state) => state.newReservations);

     // find one room
    const cancelReservation = (e) => {
        e.preventDefault()
        const roomId = e.target.value
        console.log(roomId)

    }
    //  const result = myReservations.find(({id})=> id === Number(roomId))


        let events = []
        if (myReservations.length > 0){
            for(let el in myReservations){
                // convert the date to readable date
                const localStartDate = new Date(myReservations[el].startDate).toLocaleString('en-US', {
                    weekday: 'short',   day: 'numeric', 
                    year: 'numeric',    month: 'long', 
                    hour: 'numeric',    minute: 'numeric',
                });
                const localEndDate = new Date(myReservations[el].endDate).toLocaleString('en-US', {
                    weekday: 'short',   day: 'numeric', 
                    year: 'numeric',    month: 'long', 
                    hour: 'numeric',    minute: 'numeric',
                });
                events.push(
            
                    <div class="col s6 m6" key={myReservations[el].id}>
                        <div class="card blue-grey darken-1" style={{width: '20rem'}}>
                            <div class="card-content white-text">
                                <span class="card-title">Event: {myReservations[el].event}</span>
                                <hr></hr>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi earum labore, nostrum aliquam saepe quos. Eveniet sit ab quasi, sint itaque blanditiis suscipit in?</p>
                            </div>
                            <div class="card-action" style={{color: 'white'}}>
                                <p className="start">Start: {localStartDate}</p>
                                <p className="end">End: {localEndDate}</p>
                            </div>
                        </div>
                        <form onSubmit={(e)=>cancelReservation(e)}> 
                            <input type="hidden" name="roomId" value={myReservations[el].id}/>
                            <button type='submit'><FontAwesomeIcon icon={['fas', 'trash']} style={{color: "red"}}/>CANCEL</button>
                        </form>
                </div>
                
                )
            }
        }else{
            events.push(
                <div class="col s6 m6">
                        <div class="card blue-grey darken-1" style={{width: '18rem'}}>
                          <div class="card-content white-text">
                            <span class="card-title"> </span>
                            <p>No Upcoming Events</p>
                          </div>
                        </div>
                </div>
            )
        }
    return (
        <>
        this is the reservation page
            <section className="myreservations">
                <div className="container">
                    <div class="row" > 
                        {/* {myReservations.length > 0 ?  */}
                            <div div class="row row-cols-1 row-cols-md-4 g-4" >
                                {events}
                                
                            </div>
                                
                            
                        {/* : } */}
                    </div>
                </div>

                
        
        

                
            </section>
        </>
    )
}
