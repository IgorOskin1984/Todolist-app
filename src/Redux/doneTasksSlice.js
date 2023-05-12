import { createSlice } from '@reduxjs/toolkit';

const initialState = {

	tasks: []
};

const doneTasksSlice = createSlice({
	name: 'done',
	initialState: initialState,
	reducers: {}
});

export const { addTaskAC, removeTodo } = doneTasksSlice.actions;
export default doneTasksSlice.reducer;
