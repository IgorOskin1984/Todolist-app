import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import s from './TodolistPage.module.css'
import { Todolist } from "../TodolistsItem/Todolist";
import axios from "axios";
//import { addTask } from "../../../Redux/allTasksSlice";


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
			//console.log(match);

			axios
				.get(`https://api.github.com/repos/${match[1]}/${match[2]}/issues`)
				.then((response) => {
					response.data.forEach((item) => {
						let task = {}
						task.title = item.title
						task.taskNumber = item.number
						task.created_at = item.created_at
						task.user = item.user.login
						task.comments = item.comments
						props.addTask(task)
					})


					//console.log(response.data[0].title);
					//console.log(response.data[0].number);
					//console.log(response.data[0].created_at);
					//console.log(response.data[0].user.login);
					//console.log(response.data[0].comments);
				})


			setRepoUrl('')
		}
		else {
			setError('invalid url')
		}
	}



	return (
		<div className={s.todolistPage}>
			<div className={s.container}>
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
					<Todolist title={props.todoTitle} tasks={props.tasks} />
					{/*<Todolist title={props.inProgressTitle} />
					<Todolist title={props.doneTitle} />*/}
				</div>


			</div>
		</div>
	)
}