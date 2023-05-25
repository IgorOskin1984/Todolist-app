import React, { useState } from "react";
import s from './TodolistPage.module.css'
import { Todolist } from "../TodolistsItem/Todolist";
import axios from "axios";

export const TodolistPage = (props) => {

	const [repoUrl, setRepoUrl] = useState('')
	const [error, setError] = useState('')
	const [repoOwner, setRepoOwner] = useState('')
	const [repoName, setRepoName] = useState('')

	const linkToRepoOwner = `https://github.com/${repoOwner}`;
	const linkToRepoName = `https://github.com/${repoOwner}/${repoName}`

	const onChangeHandler = (e) => {
		setError('')
		setRepoUrl(e.currentTarget.value)

	}
	const onKeyUpHandler = (e) => {
		if (e.key === 'Enter') {
			onClickHandler()
		}

	}
	const onClickHandler = () => {
		if (repoUrl.trim() === '') {
			setError('empty field')
			return
		}
		const match = repoUrl.trim().match(/github.com\/([^\/]+)\/([^\/]+)/i);
		if (match) {
			setRepoOwner(match[1]);
			setRepoName(match[2]);

			props.getTasks(match[1], match[2])

			setRepoUrl('')
		}
		else {
			setError('invalid url')
		}
	}

	return (
		<div className={s.todolistPage}>
			<div className={s.container}>
				<div>
					<h4>https://github.com/facebook/react</h4>
				</div>

				<div className={s.tlHeader}>
					<div className={s.upHeader}>
						<input className={error ? s.input + " " + s.inputError : s.input}
							type="text"
							placeholder="Enter repo URL"
							value={repoUrl}
							onChange={onChangeHandler}
							onKeyUp={onKeyUpHandler}
						/>
						<button onClick={onClickHandler} className={s.button}>Load issues</button>
					</div>
					{error && <p className={s.error}>{error}</p>}
					{repoOwner && <div className={s.downHeader}>
						<div className={s.navigation}>
							<a className={s.link} href={linkToRepoOwner} target="_blank">{repoOwner.replace(/\b\w/g, (l) => l.toUpperCase())}</a>
							<span>-</span>
							<a className={s.link} href={linkToRepoName} target="_blank">{repoName.replace(/\b\w/g, (l) => l.toUpperCase())}</a>
						</div>
						<div className={s.stars}>
							<span className={s.text}>194 K stars</span>
						</div>
					</div>}
				</div>

				<div className={s.tlBody}>
					{props.boards.map((board) => {
						return (
							<Todolist key={board.id}
								id={board.id}
								title={board.title}
								tasks={board.tasks}
								updateTasks={props.updateTasks}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}