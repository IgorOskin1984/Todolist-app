import { createSlice } from '@reduxjs/toolkit';

//console.log(response.data[0].title);
//console.log(response.data[0].id);
//console.log(response.data[0].created_at);
//console.log(response.data[0].user.login);
//console.log(response.data[0].comments);

const initialState = {
	todoListsTitles: { todo: "Todo", inProgress: 'In Progress', done: 'Done' },
	tasks: [
		{ title: 'Task title', taskId: 1, created_at: '2023/05/05', user: "ihor", comments: 2 }
	]
};

const allTasksSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {
		//addTodo: (state, action) => {
		//	state.items.push(action.payload);
		//},
		//removeTodo: (state, action) => {
		//	const index = state.items.findIndex(item => item.id === action.payload);
		//	if (index !== -1) {
		//		state.items.splice(index, 1);
		//	}
		//},
	},
});

export const { addTodo, removeTodo } = allTasksSlice.actions;
export default allTasksSlice.reducer;
