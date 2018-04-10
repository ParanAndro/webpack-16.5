import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    const todoListWorks = props.data.map(work => <Todo id={work.id} name={work.text} remove={props.remove}/>)
    return (
        <ul className={style.TodoList}>{todoListItems}</ul>
    )
}

export default TodoList;
