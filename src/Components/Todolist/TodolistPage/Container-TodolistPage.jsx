import { connect } from "react-redux";
import { TodolistPage } from "./TodolistPage";
import { addTaskAC, getTasksThunkCreator } from "../../../Redux/allTasksSlice";

const mapStateToProps = (state) => {
	return {
		boards: state.boards,
		tasks: state.allTasksState.tasks,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (payload) => dispatch(addTaskAC(payload)),
		getTasks: (repoOwner, repoName) => dispatch(getTasksThunkCreator(repoOwner, repoName))
	}
}


const TodolistPageContainer = connect(mapStateToProps, mapDispatchToProps)(TodolistPage)
export default TodolistPageContainer;