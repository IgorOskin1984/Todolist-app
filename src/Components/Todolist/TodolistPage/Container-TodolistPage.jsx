import { connect } from "react-redux";
import { TodolistPage } from "./TodolistPage";
import { addTaskAC, getTasksThunkCreater } from "../../../Redux/allTasksSlice";

const mapStateToProps = (state) => {
	//console.log(state);
	return {
		todoTitle: state.allTasksState.title,
		inProgressTitle: state.inProgressState.title,
		doneTitle: state.doneTasksState.title,
		tasks: state.allTasksState.tasks,
		//getTasks: getTasksThunkCreater
	}
}

const mapDispatchToProps = (dispatch) => {
	//debugger
	return {
		addTask: (payload) => dispatch(addTaskAC(payload)),
		getTasks: (repoOwner, repoName) => dispatch(getTasksThunkCreater(repoOwner, repoName))
	}
}


const TodolistPageContainer = connect(mapStateToProps, mapDispatchToProps)(TodolistPage)
export default TodolistPageContainer;