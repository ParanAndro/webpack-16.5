import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import style from './App.css';
import Title from '../src/components/Title';
import TodoList from '../src/components/TodoList';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: [{
				id: 1,
					text: 'clean room'
				}, {
				id: 2,
					text: 'wash the dishes'
				}, {
				id: 3,
					text: 'feed my cat'
				}]
		};
	}
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeTodo(id) {
	const remainder = this.state.data.filter(todo => todo.id !== id);
	this.setState({data: remainder});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				Tutaj pojawią się komponenty naszej aplikacji.
			</div>
		);
	}
}

export default App;

