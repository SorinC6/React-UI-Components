import React from 'react';
import './Button.css';

// numbers: [
//    { id: '1', nr: 1 },
//    { id: '2', nr: 2 },
//    { id: '3', nr: 3 },
// ],

const NumberButton = (props) => {
	return (
      <button onClick={props.handler} className={props.buttonStyle}>{props.number}</button>
	);
};





export default NumberButton;
