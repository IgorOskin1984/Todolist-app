import { connect } from "react-redux";
import { TodolistPage } from "./TodolistPage";

const mapStateToProps = (state) => {
	debugger
	return {
		todolist: state.allTasksState
	}
}


const TodolistPageContainer = connect(mapStateToProps, null)(TodolistPage)
export default TodolistPageContainer;