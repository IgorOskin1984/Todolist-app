import React, { useState } from "react";
import s from './Task.module.css'



export const Task = (props) => {

	const [currentTask, setCurrentTask] = useState(null)

	const onDragStartHandle = (e, task) => {
		//debugger
		const f = () => {
			setCurrentTask(task)
		}
		f()
		console.log(e.target.id);
		console.log(currentTask);
	}

	const onDropHandle = (e) => {
		e.preventDefault();
		debugger
		console.log(e.currentTarget);
	}


	return (
		<li id={props.order} className={s.item}
			draggable={true}
			onDragStart={(e) => onDragStartHandle(e, e.currentTarget)}
			onDrop={(e) => onDropHandle(e)}
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
		</li>
	)
}