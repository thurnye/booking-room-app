import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Nav from './components/navbar/navbar'
import Rooms from './components/allRooms/rooms'
import Booking from './components/booking/details'
import Reservation from './components/reservations/reservation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)


function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Router>
        <Switch>
        <Route path="/" exact render={() => (
            <Rooms />
          )}/>
        <Route path="/booking/:id"  render={() => (
            <Booking />
          )}/>
        <Route path="/my-reservation"  render={() => (
            <Reservation />
          )}/>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
