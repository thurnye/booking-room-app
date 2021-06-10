// A slice gives us a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve that data.


import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'reservation',
	initialState: [
		{
            event: '',
            startDate: '',
            startTime: '',
            endDate: '',
            endTime: ''
    
        }
	],
	reducers: {
		addreservation: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},

	},
});


export const { addreservation } = todoSlice.actions;

export default todoSlice.reducer;