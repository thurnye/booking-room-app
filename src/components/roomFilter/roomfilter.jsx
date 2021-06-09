import React from 'react'
import {useContext} from 'react'

//get all unique values
const getUnique = (items, value) =>{
    return [...new Set(items.map(item => item[value]))]
}
export default function Roomfilter({rooms}) {

    const context = useContext()
    const {
         type, capacity, 
    } = context
    // get unique types
    let types = getUnique(rooms, 'type')


    // add all
    types = ['all',...types]

    //display the types
types = types.map((item,index) =>{
    return ( 
    <option value={item} key={index}>
    {item}
    </option>
    )
})

//for guest
let people = getUnique(rooms,'capacity')
people = people.map((item,index) => {
    return (
        <option key={index} value={item}>
            {item}
        </option>
    )
})





    return (
        <section className="filter-container">
            
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                    name="type" 
                    id="type" 
                    value={type} 
                    className="form-control" 
                    // onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end of select type */}

                {/* number of guest  */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity} 
                    className="form-control" 
                    // onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* end of number of guest  */}
            </form>
            
        </section>
    )
}
