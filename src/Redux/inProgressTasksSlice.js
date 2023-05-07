import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: 'In Progress',
	tasks: []
};

const inProgressTasksSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {}
});

export const { addTaskAC, removeTodo } = inProgressTasksSlice.actions;
export default inProgressTasksSlice.reducer;
