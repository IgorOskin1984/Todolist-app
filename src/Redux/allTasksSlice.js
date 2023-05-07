import { createSlice } from '@reduxjs/toolkit';



const initialState = {
	todoListsTitles: { todo: "Todo", inProgress: 'In Progress', done: 'Done' },
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
