import React from "react";
import s from './Todolist.module.css'
import { Task } from "../Task/Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Todolist = ({ title, tasks }) => {

	const handleOnDragEnd = (result) => {
		console.log(result);
	}
	return (
		<DragDropContext onDragEnd={handleOnDragEnd} >
			<div className={s.todolist}>
				<div className={s.container}>
					<h3 className={s.title}>{title}</h3>
					<div className={s.body}>
						<Droppable droppableId={title}>
							{(provided) => (
								<ul className={s.list}
									{...provided.droppableProps}
									ref={provided.innerRef}>
									{tasks.length ? tasks.map((task) => {
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
									{provided.placeholder}
								</ul>
							)}
						</Droppable>
					</div>
				</div>
			</div>
		</DragDropContext>
	)
}