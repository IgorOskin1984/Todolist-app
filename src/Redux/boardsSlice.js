import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{ id: 1, title: "Todo", },
	{ id: 1, title: 'In Progress' },
	{ id: 1, title: 'Done', }
]

const boardSlice = createSlice({
	name: 'board',
	initialState: initialState,
	reducers: null
})

export default boardSlice.reducer
