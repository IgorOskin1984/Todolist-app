import { createSlice } from '@reduxjs/toolkit';
import { getTasksAPI } from '../API/api';



const initialState = {
	title: "Todo",
	tasks: []
};

const allTasksSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {
		addTaskAC: (state, action) => {
			state.tasks.push(action.payload);
		}
	},
});



export const getTasksThunkCreater = (repoOwner, repoName) => async (dispatch) => {
	const resp = await getTasksAPI(repoOwner, repoName);
	resp.forEach((item) => {
		let task = {}
		task.title = item.title
		task.taskNumber = item.number
		task.created_at = item.created_at
		task.user = item.user.login
		task.comments = item.comments
		dispatch(addTaskAC(task))
	})
}

//console.log(resp);
//axios
//	.get(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`)
//	.then((response) => {
//		response.data.forEach((item) => {
//			let task = {}
//			task.title = item.title
//			task.taskNumber = item.number
//			task.created_at = item.created_at
//			task.user = item.user.login
//			task.comments = item.comments
//			addTask(task)
//		})
//	})

//}

export const { addTaskAC, removeTodo } = allTasksSlice.actions;
export default allTasksSlice.reducer;
