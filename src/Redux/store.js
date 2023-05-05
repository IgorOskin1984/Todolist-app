import { configureStore } from '@reduxjs/toolkit';
import allTasksSlice from './allTasksSlice'

const store = configureStore({
	reducer: {
		allTasksState: allTasksSlice
	}
});

export default store;
