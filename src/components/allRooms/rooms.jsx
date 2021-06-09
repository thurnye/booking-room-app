import React from 'react'
import {Link} from 'react-router-dom'
import './rooms.css'
import Rooms from '../../rooms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function rooms() {
    // console.log(allrooms)
    // console.log(typeof allrooms.default)
    const data = Rooms
    // console.log(Rooms)

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

                <button className="btn btn-primary hide" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <FontAwesomeIcon icon={['fas', 'sliders-h']}/> 
                </button>
                
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">this will be the filter</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">
                        this will be shown in mobile view
                    </div>

                </div>
            
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
