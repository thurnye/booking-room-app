import React from 'react'
import {useContext} from 'react'
import rooms from '../../rooms'

//get all unique values
const getUnique = (items, value) =>{
    return [...new Set(items.map(item => item[value]))]
}

export default function Roomfilter() {

    


    return (
        <section className="filter-container">
            
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <div class="input-field col-md-6">
                        <select>
                        <option value="" disabled selected>Room Type</option>
                        <option value="Basic">Basic</option>
                        <option value="Quick Stand Up">Quick Standup</option>
                        <option value="Multimedia">Multimedia</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                </div>
                {/* end of select type */}

                {/* number of guest  */}
                <div className="form-group">
                    <div class="input-field col-md-6">
                        <select>
                        <option value="" disabled selected>Capacity</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        </select>
                    </div>
                </div>
                {/* end of number of guest  */}
            </form>
            
        </section>
    )
}
