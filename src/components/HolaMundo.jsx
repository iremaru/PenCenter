import React from 'react'
import '../assets/styles/App.scss';

const HolaMundo = () => {
    
    const SALUTATION = '¡Hola, Mundo!';
    const isTrue = false;

    return (
        <div className="HolaMundo">
            <h1>{SALUTATION}</h1>
            <h2>Esto es una prueba.</h2>
            {isTrue ? <h4>Es verdad</h4> : <h4>No es verdad</h4> }
            <p>{!isTrue && 'No'} soy verdad</p> 
        </div>
    );
};

export default HolaMundo;
