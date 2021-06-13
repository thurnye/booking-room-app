import React from 'react'
import {useContext} from 'react'
import rooms from '../../rooms'
import './filter.css'

// //get all unique values
// const getUnique = (items, value) =>{
//     return [...new Set(items.map(item => item[value]))]
// }

export default function Roomfilter() {

    


    return (
        <section className="filter-container">
            <div className="container">
                <h5>Filter Room By:</h5>
                <form action="">
                    <div className="row" style={{alignItems: "flex-end"}}>
                        <div className="col-md-4">
                            <h6>Type of room</h6>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>All Rooms</option>
                                <option value="Basic">Basic</option>
                                <option value="Quick Standup Room">Quick Standup Room</option>
                                <option value="Multimedia Room">Multimedia Room</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6>Capacity</h6>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Maximum Capacity</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" type="submit">Book Now!</button>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}
