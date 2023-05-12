import React, { useRef } from "react";
import s from './Task.module.css'

export const Task = (props) => {


	const dragItem = useRef()

	const onDragStartHandle = (e, params) => {
		console.log(params);
		dragItem.current = params;
	}
	const onDragOverHandle = (e) => {
		e.preventDefault();
	}
	const onDropHandle = (e) => {
		e.preventDefault();
		console.log(dragItem);
	}






	return (
		<li id={props.order} className={s.item}
			draggable={true}
			onDragStart={(e) => onDragStartHandle(e, [props.order, props.task])}
			onDragOver={e => onDragOverHandle(e)}
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