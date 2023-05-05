import { configureStore } from '@reduxjs/toolkit';
import allTasksSlice from './allTasksSlice'


const store = configureStore({
	reducer: {
		allTasksState: allTasksSlice
	},
	devTools: true
});

export default store;
