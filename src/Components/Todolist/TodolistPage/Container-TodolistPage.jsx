import { connect } from "react-redux";
import { TodolistPage } from "./TodolistPage";
import { addAllTaskAC, getTasksThunkCreator, udateTasksAC } from "../../../Redux/boardsSlice";

const mapStateToProps = (state) => {
	return {
		boards: state.boards,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (payload) => dispatch(addAllTaskAC(payload)),
		getTasks: (repoOwner, repoName) => dispatch(getTasksThunkCreator(repoOwner, repoName)),
		updateTasks: (dragIndex, hoverIndex) => dispatch(udateTasksAC(dragIndex, hoverIndex))
	}
}


const TodolistPageContainer = connect(mapStateToProps, mapDispatchToProps)(TodolistPage)
export default TodolistPageContainer;