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
				title: action.payload.title,
                start: action.payload.start,
                end: action.payload.end,
			};
			state.push(newReservation);
		},
		deleteReservation: (state, action) => {
			// console.log(state)
			console.log(action)
			// state.filter((state) => {
			// 	console.log(state)
			// 	console.log(state.id !== '1623594903642')
			// })
			// console.log(state.find((state) => state.id !== action.payload.id))
		}

	},
});


export const { addReservation, deleteReservation } = reservationSlice.actions;

export default reservationSlice.reducer;