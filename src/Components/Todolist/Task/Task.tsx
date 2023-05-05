import React from "react";
import s from './Task.module.css'

export const Task = () => {
	return (
		<li className={s.item}>
			<div className={s.container}>
				<div className={s.itemTitle}>Some issues title</div>
				<div className={s.itemContent}>#315 opened 3 days ago</div>
				<div className={s.itemInfo}>
					<p>Admin</p>
					<p>|</p>
					<p>Comments: 3</p>
				</div>
			</div>
		</li>
	)
}