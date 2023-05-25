import React, { useRef } from "react";
import s from './Task.module.css'
import { useDrag, useDrop } from "react-dnd";

export const Task = ({ index, task, issueTitle, issueNumber, issueCreationDate, issueOwner, commentsQuantity }) => {

	const ref = useRef(null)

	const [{ }, drag] = useDrag({
		type: 'card',
		item: { index }
	})

	const [{ }, drop] = useDrop({
		accept: 'card',
		hover(item, monitor) {
			console.log(item.index, index);
		},
		drop(item, monitor) {
		}
	})

	drag(drop(ref))
	return (
		<li id={issueNumber} className={s.item} ref={ref}>
			<div className={s.container}>
				<div className={s.itemTitle}>{issueTitle}</div>
				<div className={s.itemContent}>
					<p>Task number # {issueNumber}</p>
					<p>Task creation date: {issueCreationDate}</p>
				</div>
				<div className={s.itemInfo}>
					<p>{issueOwner}</p>
					<p>|</p>
					<p>Comments: {commentsQuantity}</p>
				</div>
			</div>
		</li>
	)
}