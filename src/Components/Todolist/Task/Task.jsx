import React, { useRef } from "react";
import s from './Task.module.css'
import { useDrag, useDrop } from "react-dnd";

export const Task = ({ updateTasks, index, task, issueTitle, issueNumber, issueCreationDate, issueOwner, commentsQuantity }) => {

	const ref = useRef(null)

	const [{ }, drag] = useDrag({
		type: 'card',
		item: { index }
	})

	const [{ }, drop] = useDrop({
		accept: 'card',
		hover(item, monitor) {
			const dragIndex = item.index
			const hoverIndex = index
			if (dragIndex === hoverIndex) {
				return
			}
			//const hoverBoundingRect = ref.current.getBoundingClientRect()
			//const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			//const clientOffset = monitor.getClientOffset()
			//const hoverClientY = clientOffset.y - hoverBoundingRect.top
			//if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			//  return
			//}
			//if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			//  return
			//}
			//if (dragIndex === hoverIndex && hoverClientY === hoverMiddleY) {
			//  return
			//}
			updateTasks({ dragIndex, hoverIndex })
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