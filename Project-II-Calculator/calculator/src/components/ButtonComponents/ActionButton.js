import React from 'react';
import './Button.css';

const ActionButton = (props) => {
	return (
		<button onClick={props.handler} className={props.buttonStyle}>
			{props.sign}
		</button>
	);
};

export default ActionButton;
