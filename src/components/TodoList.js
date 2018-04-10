import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    const todoListTasks = props.data.map(work => <Todo id={task.id} name={task.text} remove={props.remove}/>)
    return (
        <ul className={style.TodoList}>{todoListItems}</ul>
    )
}

export default TodoList;
