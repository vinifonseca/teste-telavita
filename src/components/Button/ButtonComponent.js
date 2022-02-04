import React from 'react';
import './ButtonComponent.css'

const ButtonComponent = ({handleClick, text, disabled = false}) => {
	const buttonClasses = `button-component ${disabled ? 'button-component--disabled' : ''}`

	return (
        <button className={buttonClasses} onClick={handleClick}>{text}</button>
	);
};

export default ButtonComponent;
