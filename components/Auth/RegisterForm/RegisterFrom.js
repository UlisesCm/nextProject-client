import React from 'react'

export default function RegisterFrom(props) {
    const {showLoginForm} = props;
    return (
        <div>
            <h1> Estamos en el Registro de Usuario</h1>
            <button onClick={showLoginForm}>Ir al Login</button>
        </div>
    )
}
