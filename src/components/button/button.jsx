import './button.css'
import React, { Component } from 'react';


const sayHello = () => {
    console.log('olá')
}


const Button = ({label = 'clique aqui'}) => {
    return (
        <button className="btn" onClick={sayHello}>{label}</button>
    );
};

export default Button;
