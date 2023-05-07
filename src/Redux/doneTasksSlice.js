import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: 'Done',
	tasks: []
};

const doneTasksSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {}
});

export const { addTaskAC, removeTodo } = doneTasksSlice.actions;
export default doneTasksSlice.reducer;
