// A slice gives us a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve that data.


import { createSlice } from '@reduxjs/toolkit';

export const reservationSlice = createSlice({
	name: 'reservation',
	initialState: [],
	reducers: {
		addReservation: (state, action) => {
			const newReservation = {
                id:action.payload.id,
                roomId: action.payload.idRoom,
				event: action.payload.event,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
			};
			state.push(newReservation);
		},
		deleteReservation: (state, action) => {
			console.log()
			return state.filter((reservation) => reservation.id !== action.payload.id);
		},

	},
});


export const { addReservation, deleteReservation } = reservationSlice.actions;

export default reservationSlice.reducer;