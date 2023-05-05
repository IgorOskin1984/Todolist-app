import React from "react";
import s from './Todolist.module.css'
import { Task } from "../Task/Task";

export const Todolist = () => {
	return (
		<div className={s.todolist}>
			<div className={s.container}>
				<h3 className={s.title}>Todolist</h3>
				<div className={s.body}>
					<ul className={s.list}>
						<Task />
						<Task />
						<Task />
					</ul>
				</div>
			</div>
		</div>
	)
}