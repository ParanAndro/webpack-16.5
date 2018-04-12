import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
	const todoListTasks = props.data.map(task => <Todo id={task.id} key={task.key} name={task.text} remove={props.remove}/>)
	return (
		<ul className={style.TodoList}>{todoListTasks}</ul>
	)
}

export default TodoList;

