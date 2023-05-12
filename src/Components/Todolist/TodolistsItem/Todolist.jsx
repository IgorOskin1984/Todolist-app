import React from "react";
import s from './Todolist.module.css'
//import { Task } from "../Task/Task";
import { Reorder } from "framer-motion";

export const Todolist = ({ title, tasks, addTask }) => {

	const handleOnDragEnd = (result) => {
		console.log(result);
	}
	return (
		<div className={s.todolist}>
			<div className={s.container}>
				<h3 className={s.title}>{title}</h3>
				<div className={s.body}>
					<Reorder.Group
						onReorder={addTask}
						values={tasks}
						className={s.list}>
						{tasks.length ? tasks.map((task) => {
							return <Task key={task.taskNumber}
								task={task}
								issueTitle={task.title}
								issueNumber={task.taskNumber}
								issueCreationDate={task.created_at}
								issueOwner={task.user}
								commentsQuantity={task.comments}
							/>
						})
							: <p>No Tasks</p>
						}
					</Reorder.Group>
				</div>
			</div>
		</div>
	)
}

export const Task = (props) => {
	return (
		<Reorder.Item
			value={props.task}
			className={s.item}
		>
			<div className={s.container}>
				<div className={s.itemTitle}>{props.issueTitle}</div>
				<div className={s.itemContent}>
					<p>Task number # {props.issueNumber}</p>
					<p>Task creation date: {props.issueCreationDate}</p>
				</div>
				<div className={s.itemInfo}>
					<p>{props.issueOwner}</p>
					<p>|</p>
					<p>Comments: {props.commentsQuantity}</p>
				</div>
			</div>
		</Reorder.Item>
	)
}
