import React from "react";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	onChangeHandle (event) {
		this.setState( {text: event.target.value} );
		};

	onSubmit (event) {
		event.preventDefault();
		this.props.addTodo(this.state.text);
		};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label>New task: </label> 
					<input
					type ="text" 
					onChange={this.onChangeHandle.bind(this)}
					text={this.state.text}/>
					<button type="submit">Add new task</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;