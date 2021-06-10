// we initialize our store 
import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservationSlice';


export default configureStore({
	reducer: {
		newReservations: reservationReducer,
	},
});