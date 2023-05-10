import { configureStore } from '@reduxjs/toolkit';
import allTasksSlice from './allTasksSlice'
import inProgressTasksSlice from './inProgressTasksSlice';
import doneTasksSlice from './doneTasksSlice';
import thunkMiddleware from 'redux-thunk'


const store = configureStore({
	reducer: {
		allTasksState: allTasksSlice,
		inProgressState: inProgressTasksSlice,
		doneTasksState: doneTasksSlice
	},
	devTools: true,
	middleware: [thunkMiddleware]
});

export default store;

//console.log(response.data[0].title);
//console.log(response.data[0].number);
//console.log(response.data[0].created_at);
//console.log(response.data[0].user.login);
//console.log(response.data[0].comments);