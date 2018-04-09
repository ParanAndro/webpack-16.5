import React from 'react';
import style from './Title.css';

const Title = props => 
	<div className={style.Title}>
		<h1>{props.title}</h1>
		<div>
			<h2>Number of tasks TO DO: {props.number}</h2>
		</div>
	</div>
	

export default Title;

