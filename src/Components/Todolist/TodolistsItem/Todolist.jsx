import React from "react";
import s from './Todolist.module.css'
import { Task } from "../Task/Task";

export const Todolist = ({ title, tasks }) => {
	console.log(tasks);
	return (
		<div className={s.todolist}>
			<div className={s.container}>
				<h3 className={s.title}>{title}</h3>
				<div className={s.body}>
					<ul className={s.list}>
						{tasks.length ? tasks.map((task) => {
							//debugger
							return <Task key={task.taskNumber}
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