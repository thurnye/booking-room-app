import React from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './details.css'
import Rooms from '../../rooms'
import Form from '../bookingForm/bookingForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Details() {
    // get all rooms
    const data = Rooms


    // get the id of the room through the parameter
    const params = useParams()
    const roomId = params.id


    // console.log(typeof roomId, roomId)
    const result = data.find(({id})=> id === Number(roomId))
    
    
    return (
        <>
            this will be the item details and booking page
            {/* <Link to={{ pathname: `/my-reservation`}} className="btn explore">My Reservation</Link> */}
            <section className="room-details">
                <div className="container">
                    <div className="row info-booking"> 
                        <div className="card col-md-6"style={{maxWidth: "540px", height: "fit-content"}}>
                            <img src={result.imageThumbnail} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div className="single-room-info">
                                    <p>
                                        <span className="checkMark" style={{color: 'green'}}><FontAwesomeIcon icon={['fas', 'check']}/></span> 
                                        <span>  Available </span>
                                    </p>
                                    <p>
                                        <span><FontAwesomeIcon icon={['fas', 'users']}/> </span> 
                                        <span> {result.capacity}   Persons Maximum </span>
                                    </p>

                                        {result.capacity < 5 ? <p><span className="checkMark"><FontAwesomeIcon icon={['fas', 'video-slash']}/> </span> 
                                        <span>  Multimedia </span></p>

                                        : 
                                        <p><span className="checkMark"><FontAwesomeIcon icon={['fas', 'video']}/> </span> 
                                        <span>  Multimedia </span></p>
                                        }


                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <Form/>
                
                    </div>
                </div>
            </section>
            
        </>
    )
}