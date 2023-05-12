import { createSlice } from '@reduxjs/toolkit';

const initialState = {

	tasks: []
};

const inProgressTasksSlice = createSlice({
	name: 'inProgress',
	initialState: initialState,
	reducers: {}
});

export const { addTaskAC, removeTodo } = inProgressTasksSlice.actions;
export default inProgressTasksSlice.reducer;
