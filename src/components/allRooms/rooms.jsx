import React,{useState} from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import './rooms.css'
import allRooms from '../../rooms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Filter from '../roomFilter/roomfilter'

export default function Rooms() {
    const data = allRooms
    
    const [filter, setFilter] = useState({})


   const items = ()=>{
        let roomlist =[];
        for(let el in data){
            roomlist.push(
                <div className="col-md-4 all" key={data[el].id}>
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

   const handleFilterChange = (e) => {
    setFilter({ [e.target.name]: e.target.value  });
    // const key = e.target.name;
    // const val = e.target.value;

    // const newFilter = {...filter};
    // newFilter[key] = val;
    // setFilter(newFilter);

   }  
   
    const filteredRooms = data.filter(el => {
       
        if(filter.type){
            $('.all').hide()
            return el.type === filter.type
        }
        if(filter.capacity){
            $('.all').hide()
            return el.capacity === Number(filter.capacity)
        }
    })

// console.log(filteredRooms)
    return (
        <>
        {/* Filter */}
            <section className="filter-container">
            <div className="container">
                <h5>Filter Room By:</h5>
                <form action="">
                    <div className="row" style={{alignItems: "flex-end"}} >
                        <div className="col-md-6">
                            <h6>Type of room</h6>
                            <select className="form-select" aria-label="Default select example" name="type" onChange={(e)=>handleFilterChange(e)}>
                                <option disabled selected>All Rooms</option>
                                <option value="Basic">Basic</option>
                                <option value="Quick Standup Room">Quick Standup Room</option>
                                <option value="Multimedia Room">Multimedia Room</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <h6>Capacity</h6>
                            <select className="form-select" aria-label="Default select example" name="capacity" onChange={(e)=>handleFilterChange(e)}>
                                <option disabled selected>Maximum Capacity</option>
                                <option value="5">5 Persons</option>
                                <option value="10">10 Persons</option>
                                <option value="15">15 Persons</option>
                            </select>
                        </div>
                        
                    </div>

                </form>
            </div>
        </section>

        {/* All Rooms */}
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
            <section className="rooms">
                <div className="container">
                    <div className="row">
                        

                    <article className=" room-items">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                filteredRooms.map(el=> {
                                    return (
                                        <div className="col-md-4 all" key={el.id}>
                                            <div className="card h-100">
                                                <Link to={{ pathname: `/booking/${el.id}`}}> 
                                                    <img src={el.imageThumbnail}  className="card-img-top " alt="..."/>
                                                </Link>
                                                <div className="room-short-info">
                                                    <p><span className="checkMark"><FontAwesomeIcon icon={['fas', 'check']}/> </span>Available</p>
                                                    <p><span><FontAwesomeIcon icon={['fas', 'users']}/> </span> {el.capacity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }  
                        </div>
                    </article>
                    </div>
                </div>
            
            </section>
        </>
    )
}
