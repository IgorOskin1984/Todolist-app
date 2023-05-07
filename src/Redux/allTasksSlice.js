import { createSlice } from '@reduxjs/toolkit';



const initialState = {
	title: "Todo",
	tasks: []
};

const allTasksSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {
		addTaskAC: (state, action) => {
			state.tasks.push(action.payload);
		}
	},
});

export const { addTaskAC, removeTodo } = allTasksSlice.actions;
export default allTasksSlice.reducer;
