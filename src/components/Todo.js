import React from 'react';
import style from './Todo.css';

const Todo = props => 
	<li id={props.id}>
		<button onClick={() => props.remove(props.id)}>X</button>
		{props.name}
	</li>;

export default Todo;