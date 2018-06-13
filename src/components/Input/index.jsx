import React from 'react';
import './input.scss';

export const Input = (props) => {
    const {validate, placeholder} = props;
    return <input id="mainInput" className="input" type="text" onChange={validate} placeholder={placeholder} />;
}
