import { useSelector } from 'react-redux';
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


// function Events(){
//   const myReservations = useSelector((state) => state.newReservations);
//   console.log(myReservations)
//   // store item in local storage
  
// }
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
]



export function createEventId() {
  return String(eventGuid++)
}