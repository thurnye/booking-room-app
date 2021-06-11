import React from 'react'
import {Link} from 'react-router-dom'
import './rooms.css'
import Rooms from '../../rooms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function rooms() {
    const data = Rooms

   const items = ()=>{
        let roomlist =[];
        for(let el in data){
            roomlist.push(
                <div className="col-md-4" key={data[el].id}>
                    <div className="card h-100">
                        <Link to={{ pathname: `/booking/${data[el].id}`}}> 
                            <img src={data[el].imageThumbnail}  className="card-img-top " alt="..."/>
                        </Link>
                        <div className="room-short-info">
                            <p><span className="checkMark"><FontAwesomeIcon icon={['fas', 'check']}/> </span>Available</p>
                            <p><span><FontAwesomeIcon icon={['fas', 'users']}/> </span> {data[el].capacity}</p>
                        </div>
                    </div>
                </div>
            )
            
        }
        return roomlist;
        
   }

  
    return (
        <>
         
            <section className="rooms">

                
                <div className="container">
                    <div className="row">
                        

                    <article className=" room-items">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                items()
                            }  
                        </div>
                    </article>












                    </div>
                </div>
            
            </section>
        </>
    )
}
