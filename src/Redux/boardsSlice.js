import { createSlice } from '@reduxjs/toolkit';
import { getTasksAPI } from './../API/api'

const initialState = [
	{ id: 1, title: "Todo", tasks: [] },
	{ id: 2, title: 'In Progress', tasks: [] },
	{ id: 3, title: 'Done', tasks: [] }
]

const boardSlice = createSlice({
	name: 'board',
	initialState: initialState,
	reducers: {
		addAllTaskAC: (state, action) => {
			state[0].tasks.push(action.payload);
		}
	},
})

export const getTasksThunkCreator = (repoOwner, repoName) => async (dispatch) => {
	const resp = await getTasksAPI(repoOwner, repoName);
	resp.forEach((item) => {
		let task = {}
		task.title = item.title
		task.taskNumber = item.number
		task.created_at = item.created_at
		task.user = item.user.login
		task.comments = item.comments
		dispatch(addAllTaskAC(task))
	})
}

export const { addAllTaskAC } = boardSlice.actions;
export default boardSlice.reducer
