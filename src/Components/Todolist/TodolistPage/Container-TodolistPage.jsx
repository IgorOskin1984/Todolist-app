import { connect } from "react-redux";
import { TodolistPage } from "./TodolistPage";
import { addTaskAC } from "../../../Redux/allTasksSlice";

const mapStateToProps = (state) => {
	//console.log(state);
	return {
		todoTitle: state.allTasksState.todoListsTitles.todo,
		tasks: state.allTasksState.tasks
	}
}

const mapDispatchToProps = (dispatch) => {
	//debugger
	return {
		addTask: (payload) => dispatch(addTaskAC(payload)),
	}
}


const TodolistPageContainer = connect(mapStateToProps, mapDispatchToProps)(TodolistPage)
export default TodolistPageContainer;