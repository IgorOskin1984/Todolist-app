import React from "react";
import s from './Todolist.module.css'
import { Task } from "../Task/Task";

export const Todolist = ({ title, tasks }) => {
	return (
		<div className={s.todolist}>
			<div className={s.container}>
				<h3 className={s.title}>{title}</h3>
				<div className={s.body}>
					<ul className={s.list}>
						{tasks.length ? tasks.map((task, index) => {
							return <Task key={task.taskNumber}
								index={index}
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
					</ul>
				</div>
			</div>
		</div>
	)
}