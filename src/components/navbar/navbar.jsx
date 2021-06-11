import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav.css'

export default function navbar() {
    return (
        <>
            <nav className="navbar" style={{backgroundColor: '#262738'}}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">MBooking</span>
                    <div className="home-links">
                        <Link to="/"><FontAwesomeIcon icon={['fas', 'home']}/> </Link> 
                        <Link to="/my-reservation"><FontAwesomeIcon icon={['fas', 'calendar']}/></Link>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
