import React, { useRef } from "react";
import s from './Task.module.css'

export const Task = ({ index, task, issueTitle, issueNumber, issueCreationDate, issueOwner, commentsQuantity }) => {

	return (
		<li id={issueNumber} className={s.item}>
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