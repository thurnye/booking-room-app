// A slice gives us a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve that data.


import { createSlice } from '@reduxjs/toolkit';

export const reservationSlice = createSlice({
	name: 'reservation',
	initialState: [
		// {
		// 	id:1623631587654,
		// 	roomId:"2",
		// 	title:"fg",
		// 	start:'2021-06-13T06:00:00-04:00',
		// 	end:"2021-06-13T09:00:00-04:00"
		// }
	],
	reducers: {
		addReservation: (state, action) => {
			const newReservation = {
                id:action.payload.id,
                roomId: action.payload.roomId,
				title: action.payload.title,
                start: action.payload.start,
                end: action.payload.end,
			};
			state.push(newReservation);
		},
		deleteReservation: (state, action) => {
			const id = action.payload
			return {
				...state.filter(el => el.id !== id)
			}

		}

	},
	
});



export const { addReservation, deleteReservation } = reservationSlice.actions;

export default reservationSlice.reducer;