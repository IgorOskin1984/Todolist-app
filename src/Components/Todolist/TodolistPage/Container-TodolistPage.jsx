import { connect } from "react-redux";
import { TodolistPage } from "./TodolistPage";

const mapStateToProps = (state) => {
	return {
		todoTitle: state.allTasksState.todoListsTitles.todo,
		inProgressTitle: state.allTasksState.todoListsTitles.inProgress,
		doneTitle: state.allTasksState.todoListsTitles.done,
		tasks: state.allTasksState.tasks
	}
}


const TodolistPageContainer = connect(mapStateToProps, null)(TodolistPage)
export default TodolistPageContainer;