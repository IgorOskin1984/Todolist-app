import React from "react";
import s from './Task.module.css'
import { Draggable } from "react-beautiful-dnd";

export const Task = (props) => {
	return (
		<li className={s.item}
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
